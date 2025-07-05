

'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const TenderList = () => {
  const [tenders, setTenders] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [statusFilter, setStatusFilter] = useState('all'); // default = 'all'

  // Fetch tenders from backend on page change
  useEffect(() => {
    const fetchTenders = async () => {
      try {
        const res = await axios.get(`http://localhost:8005/api/tenders?page=${page}`);
        setTenders(res.data.tenders);
        setPages(res.data.pages);
      } catch (error) {
        console.error('Error fetching tenders:', error);
      }
    };
    fetchTenders();
  }, [page]); // only depends on page (not statusFilter)

  // Compute status from deadline
  const getComputedStatus = (deadlineStr: string) => {
    const deadline = new Date(deadlineStr);
    const today = new Date();
    return deadline < today ? 'closed' : 'open';
  };

  // Badge color style based on status
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'open':
        return 'bg-green-100 text-green-700';
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-700';
      case 'closed':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  // Apply frontend filter
  const filteredTenders = tenders.filter((tender) => {
    const status = getComputedStatus(tender.deadline);
    return statusFilter === 'all' || statusFilter === status;
  });

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-blue-800">Tenders</h2>

        {/* Status Filter */}
        <select
          className="border rounded px-3 py-2 text-sm"
          value={statusFilter}
          onChange={(e) => {
            setStatusFilter(e.target.value);
            setPage(1); // reset to first page when filter changes
          }}
        >
          <option value="all">All</option>
          <option value="open">Open</option>
          <option value="closed">Closed</option>
        </select>
      </div>

      {/* Tender List */}
      <ul className="space-y-4">
        {filteredTenders.map((tender) => {
          const status = getComputedStatus(tender.deadline);
          return (
            <li key={tender._id} className="border p-4 rounded-lg shadow hover:shadow-md transition">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-blue-700">{tender.title}</h3>
                <span className={`text-xs px-3 py-1 rounded-full font-medium ${getStatusBadge(status)}`}>
                  {status.toUpperCase()}
                </span>
              </div>
              <p className="text-gray-700 mt-1">{tender.description}</p>
              <div className="text-sm text-gray-600 mt-3 space-y-1">
                <p><span className="font-medium">Budget:</span> ₹{tender.budget}</p>
                <p><span className="font-medium">Deadline:</span> {new Date(tender.deadline).toLocaleDateString()}</p>
              </div>
            </li>
          );
        })}
      </ul>

      {/* Pagination Controls */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
          className={`px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition ${
            page === 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Prev
        </button>

        <span className="text-gray-700 font-medium">Page {page} of {pages}</span>

        <button
          onClick={() => setPage((p) => Math.min(p + 1, pages))}
          disabled={page === pages}
          className={`px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition ${
            page === pages ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};
