

'use client';

import Link from 'next/link';

const Nvabar = () => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow">
     
      <div className="flex justify-between items-center max-w-6xl mx-auto">
      
        <Link href="/" className="text-xl font-bold">
          TenderApp
        </Link>
        <div className="space-x-4">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/login" className="hover:underline">Login</Link>
        
          <Link href="/dashboard" className="hover:underline">Dashboard</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nvabar;



