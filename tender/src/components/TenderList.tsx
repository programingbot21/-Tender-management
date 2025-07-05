"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const TenderList = () => {
  const [tenders, setTenders] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    const fetchTenders = async () => {
      const res = await axios.get(`http://localhost:8005/api/tenders?page=${page}`);
      setTenders(res.data.tenders);
      setPages(res.data.pages);
    };
    fetchTenders();
  }, [page]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Tenders</h2>
      <ul className="space-y-3">
        {tenders.map(t => (
          <li key={t._id} className="border p-3 rounded shadow">
            <h3 className="font-semibold">{t.title}</h3>
            <p>{t.description}</p>
            <p><strong>Budget:</strong> ₹{t.budget}</p>
            <p><strong>Deadline:</strong> {new Date(t.deadline).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex gap-2">
        <button onClick={() => setPage(p => Math.max(p - 1, 1))} disabled={page === 1}>Prev</button>
        <span>Page {page} of {pages}</span>
        <button onClick={() => setPage(p => Math.min(p + 1, pages))} disabled={page === pages}>Next</button>
      </div>
    </div>
  );
};
