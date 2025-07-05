


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
