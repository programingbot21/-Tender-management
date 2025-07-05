


'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Company {
  _id?: string;
  name: string;
  industry: string;
  description?: string;
  logoUrl?: string;
}

export default function CompanyPage() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [formData, setFormData] = useState<Company>({
    name: '',
    industry: '',
    description: '',
    logoUrl: '',
  });
  const [editingId, setEditingId] = useState<string | null>(null);

  const fetchCompanies = async () => {
    const res = await axios.get('http://localhost:8005/api/company');
    setCompanies(res.data);
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  const handleSubmit = async () => {
    if (editingId) {
      await axios.put(`http://localhost:8005/api/company/${editingId}`, formData);
      setEditingId(null);
    } else {
      await axios.post('http://localhost:8005/api/company', formData);
    }

    setFormData({ name: '', industry: '', description: '', logoUrl: '' });
    fetchCompanies();
  };

  const handleDelete = async (id: string) => {
    await axios.delete(`http://localhost:8005/api/company/${id}`);
    fetchCompanies();
  };

  const handleEdit = (company: Company) => {
    setFormData({
      name: company.name,
      industry: company.industry,
      description: company.description || '',
      logoUrl: company.logoUrl || '',
    });
    setEditingId(company._id || null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-blue-700">
          {editingId ? 'Update Company' : 'Register Company'}
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Company Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            placeholder="Industry"
            value={formData.industry}
            onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            placeholder="Description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
          />

          <input
            type="text"
            placeholder="Logo URL"
            value={formData.logoUrl}
            onChange={(e) => setFormData({ ...formData, logoUrl: e.target.value })}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={handleSubmit}
            className={`w-full ${editingId ? 'bg-yellow-600 hover:bg-yellow-700' : 'bg-blue-600 hover:bg-blue-700'
              } text-white font-semibold py-2 px-4 rounded transition duration-200`}
          >
            {editingId ? 'Update' : 'Submit'}
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-10">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Registered Companies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((c) => (
            <div key={c._id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200 relative">
              {c.logoUrl && (
                <img
                  src={c.logoUrl}
                  alt="Logo"
                  className="w-20 h-20 object-contain mx-auto mb-4"
                />
              )}
              <h3 className="text-lg font-bold text-center text-blue-600">{c.name}</h3>
              <p className="text-sm text-center text-gray-600">{c.industry}</p>
              <p className="text-sm text-gray-700 mt-2 text-justify">{c.description}</p>

              <div className="flex justify-center gap-4 mt-4">
                <button
                  onClick={() => handleEdit(c)}
                  className="text-yellow-600 hover:text-yellow-800 font-medium"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(c._id!)}
                  className="text-red-600 hover:text-red-800 font-medium"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
