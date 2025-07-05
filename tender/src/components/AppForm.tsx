

'use client';
import React, { useState } from 'react';
import axios from 'axios';

interface Props {
  tenderId: string;
  companyId: string;
}

export const ApplicationForm: React.FC<Props> = ({ tenderId, companyId }) => {
  const [proposal, setProposal] = useState('');
  const [bidAmount, setBidAmount] = useState(0);

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:8005/api/applications', {
        tenderId,
        companyId,
        proposal,
        bidAmount,
      });

      
      alert('Proposal submitted');
      setProposal('');
      setBidAmount(0);
    } catch (err) {
      alert('Error submitting proposal');
    }
  };

  return (
    <div className="p-4 bg-white shadow rounded max-w-md">
      <h2 className="text-xl font-bold mb-3">Submit Proposal</h2>
      <textarea
        className="w-full p-2 border rounded mb-2"
        rows={4}
        placeholder="Your proposal..."
        value={proposal}
        onChange={(e) => setProposal(e.target.value)}
      />
      <input
        type="number"
        className="w-full p-2 border rounded mb-3"
        placeholder="Bid Amount"
        value={bidAmount}
        onChange={(e) => setBidAmount(Number(e.target.value))}
      />
      <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit
      </button>
    </div>
  );
};

