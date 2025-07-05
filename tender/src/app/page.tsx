





// 'use client';

// import { motion } from 'framer-motion';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import Searchbar from '@/components/Searchbar';

// interface Company {
//   _id: string;
//   name: string;
//   industry: string;
//   description?: string;
//   logoUrl?: string;
// }

// export default function HomePage() {
//   const [companies, setCompanies] = useState<Company[]>([]);
//   const [filteredCompanies, setFilteredCompanies] = useState<Company[]>([]);
// const handleSearch = (query: string) => {
//   const filtered = companies.filter(c =>
//     c.name.toLowerCase().includes(query.toLowerCase()) ||
//     c.industry.toLowerCase().includes(query.toLowerCase())
//   );
//   setFilteredCompanies(filtered);
// };
//   useEffect(() => {
//     const fetchCompanies = async () => {
//       const res = await axios.get('http://localhost:8005/api/company');
//       setCompanies(res.data);
//     };

//     fetchCompanies();
//   }, []);

//   return (
//     <div>
//       <Searchbar onSearch={(query) => console.log('Searching for:', query)} />

//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200"
//     >
        
//       <div className="flex flex-col items-center justify-center min-h-[70vh]">
//         <motion.div
//           initial={{ scale: 0.9 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 0.6 }}
//           className="bg-white p-10 rounded-2xl shadow-2xl max-w-3xl w-full text-center"
//         >
//           <motion.h1
//             initial={{ y: -30, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="text-4xl md:text-5xl font-bold text-blue-600 mb-4"
//           >
//             Welcome to TenderApp 🚀
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//             className="text-gray-700 text-lg mb-6"
//           >
//             A smarter way for companies to post, manage, and apply to tenders.
//           </motion.p>

//           <motion.ul
//             className="text-left space-y-3 text-gray-800"
//             initial="hidden"
//             animate="visible"
//             variants={{
//               hidden: { opacity: 0 },
//               visible: {
//                 opacity: 1,
//                 transition: { staggerChildren: 0.15 },
//               },
//             }}
//           >
//             {[
//               '✅ Register your company profile (with logo)',
//               '✅ Create and publish tenders',
//               '✅ Apply to others’ tenders',
//               '✅ Search companies by name/industry',
//               '✅ View detailed profiles',
//             ].map((item, index) => (
//               <motion.li
//                 key={index}
//                 variants={{ hidden: { x: -20, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
//                 className="text-lg"
//               >
//                 {item}
//               </motion.li>
//             ))}
//           </motion.ul>

//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1 }}
//             className="mt-8 flex gap-4 justify-center"
//           >
//             <a
//               href="/dashboard"
//               className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
//             >
//               Company Registered
//             </a>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Show companies */}
//       <div className="max-w-6xl mx-auto mt-10 px-6 mb-0.5  ">
     
//         <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Featured Companies</h2>
//         {companies.length === 0 ? (
//           <p className="text-center text-gray-600">No companies found.</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {companies.map((c) => (
//               <motion.div
//                 key={c._id}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.1 }}
//                 className="bg-white rounded-xl p-4 shadow hover:shadow-md transition"
//               >
//                 {c.logoUrl && (
//                   <img
//                     src={c.logoUrl}
//                     alt={c.name}
//                     className="w-20 h-20 mx-auto mb-3 object-contain"
//                   />
//                 )}
//                 <h3 className="text-center font-bold text-lg text-blue-600">{c.name}</h3>
//                 <p className="text-center text-gray-600 text-sm">{c.industry}</p>
//                 {c.description && (
//                   <p className="mt-2 text-sm text-gray-700 text-justify">{c.description}</p>
//                 )}
//               </motion.div>
//             ))}
//           </div>
//         )}
//       </div>


//     </motion.div>
//     </div>
//   );
// }



'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Searchbar from '@/components/Searchbar';

interface Company {
  _id: string;
  name: string;
  industry: string;
  description?: string;
  logoUrl?: string;
}

export default function HomePage() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [filteredCompanies, setFilteredCompanies] = useState<Company[] | null>(null);

  useEffect(() => {
    const fetchCompanies = async () => {
      const res = await axios.get('http://localhost:8005/api/company');
      setCompanies(res.data);
    };

    fetchCompanies();
  }, []);

  const handleSearch = (query: string) => {
    const result = companies.filter(c =>
      c.name.toLowerCase().includes(query.toLowerCase()) ||
      c.industry.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCompanies(result);
  };

  const displayedCompanies = filteredCompanies ?? companies;

  return (
    <div>
      <Searchbar onSearch={handleSearch} />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200"
      >
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <motion.div className="bg-white p-10 rounded-2xl shadow-2xl max-w-3xl w-full text-center">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to TenderApp 🚀</h1>
            <p className="text-gray-700 text-lg mb-6">
              A smarter way for companies to post, manage, and apply to tenders.
            </p>
          </motion.div>
        </div>

        {/* Company Cards */}
        <div className="max-w-6xl mx-auto mt-6 px-6">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Featured Companies</h2>

          {displayedCompanies.length === 0 ? (
            <p className="text-center text-gray-600">No companies found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {displayedCompanies.map((c) => (
                <motion.div
                  key={c._id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-white rounded-xl p-4 shadow hover:shadow-md transition"
                >
                  {c.logoUrl && (
                    <img
                      src={c.logoUrl}
                      alt={c.name}
                      className="w-20 h-20 mx-auto mb-3 object-contain"
                    />
                  )}
                  <h3 className="text-center font-bold text-lg text-blue-600">{c.name}</h3>
                  <p className="text-center text-gray-600 text-sm">{c.industry}</p>
                  {c.description && (
                    <p className="mt-2 text-sm text-gray-700 text-justify">{c.description}</p>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
