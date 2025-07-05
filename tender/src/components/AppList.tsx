import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Props {
  tenderId: string;
}

interface Application {
  _id: string;
  proposal: string;
  bidAmount: number;
  submittedAt: string;
  companyId: {
    _id: string;
    name: string;
  };
}

export const ApplicationList: React.FC<Props> = ({ tenderId }) => {
  const [apps, setApps] = useState<Application[]>([]);

  useEffect(() => {
    const fetchApps = async () => {
      const res = await axios.get(`http://localhost:8005/api/applications/tender/${tenderId}`);
      setApps(res.data);
    };
    fetchApps();
  }, [tenderId]);

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-4">Submitted Proposals</h3>
      {apps.length === 0 ? (
        <p>No proposals submitted yet.</p>
      ) : (
        <ul className="space-y-4">
          {apps.map((app) => (
            <li key={app._id} className="border p-4 rounded shadow-sm">
              <p className="font-semibold">{app.companyId.name}</p>
              <p>{app.proposal}</p>
              <p className="text-sm text-gray-600">Bid: ₹{app.bidAmount}</p>
              <p className="text-sm text-gray-500">Submitted: {new Date(app.submittedAt).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
