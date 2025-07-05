


// 'use client';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// export const TenderList = () => {
//   const [tenders, setTenders] = useState<any[]>([]);
//   const [page, setPage] = useState(1);
//   const [pages, setPages] = useState(1);

//   useEffect(() => {
//     const fetchTenders = async () => {
//       const res = await axios.get(`http://localhost:8005/api/tenders?page=${page}`);
//       setTenders(res.data.tenders);
//       setPages(res.data.pages);
//     };
//     fetchTenders();
//   }, [page]);

//   return (
//     <div className="p-6 bg-white rounded-lg shadow-md max-w-4xl mx-auto">
//       <h2 className="text-2xl font-bold text-blue-800 mb-6">Tenders</h2>

//       <ul className="space-y-4">
//         {tenders.map(t => (
//           <li key={t._id} className="border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition">
//             <h3 className="text-lg font-semibold text-blue-700 mb-1">{t.title}</h3>
//             <p className="text-gray-700 mb-2">{t.description}</p>
//             <div className="text-sm text-gray-600 space-y-1">
//               <p><span className="font-medium">Budget:</span> ₹{t.budget}</p>
//               <p><span className="font-medium">Deadline:</span> {new Date(t.deadline).toLocaleDateString()}</p>
//             </div>
//           </li>
//         ))}
//       </ul>

//       {/* Pagination */}
//       <div className="mt-8 flex items-center justify-center gap-4">
//         <button
//           onClick={() => setPage(p => Math.max(p - 1, 1))}
//           disabled={page === 1}
//           className={`px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition ${
//             page === 1 ? 'opacity-50 cursor-not-allowed' : ''
//           }`}
//         >
//           Prev
//         </button>

//         <span className="text-gray-700 font-medium">
//           Page {page} of {pages}
//         </span>

//         <button
//           onClick={() => setPage(p => Math.min(p + 1, pages))}
//           disabled={page === pages}
//           className={`px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition ${
//             page === pages ? 'opacity-50 cursor-not-allowed' : ''
//           }`}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };



// 'use client';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// export const TenderList = () => {
//   const [tenders, setTenders] = useState<any[]>([]);
//   const [page, setPage] = useState(1);
//   const [pages, setPages] = useState(1);

//   useEffect(() => {
//     const fetchTenders = async () => {
//       const res = await axios.get(`http://localhost:8005/api/tenders?page=${page}`);
//       setTenders(res.data.tenders);
//       setPages(res.data.pages);
//     };
//     fetchTenders();
//   }, [page]);

//   // ✅ Return badge class based on tender status
//   const getStatusBadge = (status: string) => {
//     switch (status) {
//       case 'open':
//         return 'bg-green-100 text-green-700';
//       case 'in-progress':
//         return 'bg-yellow-100 text-yellow-700';
//       case 'closed':
//         return 'bg-red-100 text-red-700';
//       default:
//         return 'bg-gray-100 text-gray-700';
//     }
//   };

//   return (
//     <div className="p-6 bg-white rounded-lg shadow-md max-w-4xl mx-auto">
//       <h2 className="text-2xl font-bold text-blue-800 mb-6">Tenders</h2>

//       <ul className="space-y-4">
//         {tenders.map(t => (
//           <li key={t._id} className="border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition">
//             <div className="flex items-center justify-between">
//               <h3 className="text-lg font-semibold text-blue-700">{t.title}</h3>
//               <span
//                 className={`text-xs px-3 py-1 rounded-full font-medium ${getStatusBadge(t.status)}`}
//               >
//                 {t.status?.replace('-', ' ').toUpperCase()}
//               </span>
//             </div>

//             <p className="text-gray-700 mt-1">{t.description}</p>

//             <div className="text-sm text-gray-600 mt-3 space-y-1">
//               <p><span className="font-medium">Budget:</span> ₹{t.budget}</p>
//               <p><span className="font-medium">Deadline:</span> {new Date(t.deadline).toLocaleDateString()}</p>
//             </div>
//           </li>
//         ))}
//       </ul>

//       {/* Pagination */}
//       <div className="mt-8 flex items-center justify-center gap-4">
//         <button
//           onClick={() => setPage(p => Math.max(p - 1, 1))}
//           disabled={page === 1}
//           className={`px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition ${
//             page === 1 ? 'opacity-50 cursor-not-allowed' : ''
//           }`}
//         >
//           Prev
//         </button>

//         <span className="text-gray-700 font-medium">
//           Page {page} of {pages}
//         </span>

//         <button
//           onClick={() => setPage(p => Math.min(p + 1, pages))}
//           disabled={page === pages}
//           className={`px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition ${
//             page === pages ? 'opacity-50 cursor-not-allowed' : ''
//           }`}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };


// 'use client';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// export const TenderList = () => {
//   const [tenders, setTenders] = useState<any[]>([]);
//   const [page, setPage] = useState(1);
//   const [pages, setPages] = useState(1);
//   const [statusFilter, setStatusFilter] = useState('all');

//   useEffect(() => {
//     const fetchTenders = async () => {
//       const res = await axios.get(`http://localhost:8005/api/tenders?page=${page}&status=${statusFilter}`);
//       setTenders(res.data.tenders);
//       setPages(res.data.pages);
//     };
//     fetchTenders();
//   }, [page, statusFilter]);

//   const getStatusBadge = (status: string) => {
//     switch (status) {
//       case 'open':
//         return 'bg-green-100 text-green-700';
//       case 'in-progress':
//         return 'bg-yellow-100 text-yellow-700';
//       case 'closed':
//         return 'bg-red-100 text-red-700';
//       default:
//         return 'bg-gray-100 text-gray-700';
//     }
//   };

//   return (
//     <div className="p-6 bg-white rounded-lg shadow-md max-w-4xl mx-auto">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-2xl font-bold text-blue-800">Tenders</h2>

//         {/* Filter Dropdown */}
//         <select
//           className="border rounded px-3 py-2 text-sm"
//           value={statusFilter}
//           onChange={(e) => {
//             setStatusFilter(e.target.value);
//             setPage(1); // reset page on filter
//           }}
//         >
//           <option value="all">All Statuses</option>
//           <option value="open">Open</option>
//           <option value="in-progress">In Progress</option>
//           <option value="closed">Closed</option>
//         </select>
//       </div>

//       <ul className="space-y-4">
//         {tenders.map(t => (
//           <li key={t._id} className="border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition">
//             <div className="flex items-center justify-between">
//               <h3 className="text-lg font-semibold text-blue-700">{t.title}</h3>
//               <span className={`text-xs px-3 py-1 rounded-full font-medium ${getStatusBadge(t.status)}`}>
//                 {t.status?.replace('-', ' ').toUpperCase()}
//               </span>
//             </div>
//             <p className="text-gray-700 mt-1">{t.description}</p>
//             <div className="text-sm text-gray-600 mt-3 space-y-1">
//               <p><span className="font-medium">Budget:</span> ₹{t.budget}</p>
//               <p><span className="font-medium">Deadline:</span> {new Date(t.deadline).toLocaleDateString()}</p>
//             </div>
//           </li>
//         ))}
//       </ul>

//       {/* Pagination */}
//       <div className="mt-8 flex items-center justify-center gap-4">
//         <button
//           onClick={() => setPage(p => Math.max(p - 1, 1))}
//           disabled={page === 1}
//           className={`px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition ${
//             page === 1 ? 'opacity-50 cursor-not-allowed' : ''
//           }`}
//         >
//           Prev
//         </button>

//         <span className="text-gray-700 font-medium">Page {page} of {pages}</span>

//         <button
//           onClick={() => setPage(p => Math.min(p + 1, pages))}
//           disabled={page === pages}
//           className={`px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition ${
//             page === pages ? 'opacity-50 cursor-not-allowed' : ''
//           }`}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };



'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const TenderList = () => {
  const [tenders, setTenders] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [statusFilter, setStatusFilter] = useState('all');

  // Fetch tenders from backend
  useEffect(() => {
    const fetchTenders = async () => {
      const res = await axios.get(`http://localhost:8005/api/tenders?page=${page}`);
      setTenders(res.data.tenders);
      setPages(res.data.pages);
    };
    fetchTenders();
  }, [page]);

  // Compute status from deadline
  const getComputedStatus = (deadlineStr: string) => {
    const deadline = new Date(deadlineStr);
    const today = new Date();
    return deadline < today ? 'closed' : 'open';
  };

  // Tailwind color badge class
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

  // Apply frontend filtering
  const filteredTenders = tenders.filter((tender) => {
    const status = getComputedStatus(tender.deadline);
    return statusFilter === 'all' || statusFilter === status;
  });

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-blue-800">Tenders</h2>

        {/* Filter Dropdown */}
        <select
          className="border rounded px-3 py-2 text-sm"
          value={statusFilter}
          onChange={(e) => {
            setStatusFilter(e.target.value);
            setPage(1);
          }}
        >
          <option value="all">All Statuses</option>
          <option value="open">Open</option>
          <option value="closed">Closed</option>
        </select>
      </div>

      {/* Tender Cards */}
      <ul className="space-y-4">
        {filteredTenders.map((t) => {
          const computedStatus = getComputedStatus(t.deadline);
          return (
            <li key={t._id} className="border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-blue-700">{t.title}</h3>
                <span className={`text-xs px-3 py-1 rounded-full font-medium ${getStatusBadge(computedStatus)}`}>
                  {computedStatus.toUpperCase()}
                </span>
              </div>
              <p className="text-gray-700 mt-1">{t.description}</p>
              <div className="text-sm text-gray-600 mt-3 space-y-1">
                <p><span className="font-medium">Budget:</span> ₹{t.budget}</p>
                <p><span className="font-medium">Deadline:</span> {new Date(t.deadline).toLocaleDateString()}</p>
              </div>
            </li>
          );
        })}
      </ul>

      {/* Pagination */}
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
