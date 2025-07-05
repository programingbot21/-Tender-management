'use client';
import React, { useState } from 'react';
import axios from 'axios';
interface Tender {
  title: string;
  description: string;
  deadline: string;
  budget: number;
  companyId: string;
}
const TenForm = () => {

    const [form, setForm] = useState<Tender>({
    title: '',
    description: '',
    deadline: '',
    budget: 0,
    companyId: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await axios.post('http://localhost:8005/api/tenders', form);
    alert('Tender Created');
  };

    return (
        <div>
           <div className="p-4 bg-white shadow rounded-md max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Create Tender</h2>
      <input className="input" name="title" value={form.title} onChange={handleChange} placeholder="Title" />
      <textarea className="input mt-2" name="description" value={form.description} onChange={handleChange} placeholder="Description" />
      <input className="input mt-2" name="deadline" type="date" value={form.deadline} onChange={handleChange} />
      <input className="input mt-2" name="budget" type="number" value={form.budget} onChange={handleChange} placeholder="Budget" />
      <input className="input mt-2" name="companyId" value={form.companyId} onChange={handleChange} placeholder="Company ID" />
      <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 mt-4 rounded">Submit</button>
    </div> 
        </div>
    );
}

export default TenForm;
