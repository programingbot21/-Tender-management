'use client'
import React from 'react';
import Link from 'next/link';
import { Building2, FilePlus2, ClipboardList } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="h-screen w-64 bg-blue-800 text-white flex flex-col fixed top-0 left-0 shadow-lg">
      <div className="text-2xl font-bold p-6 border-b border-blue-600">TenderApp</div>
      <nav className="flex flex-col gap-4 p-6">
        <Link href="/dashboard/CreateCom" className="flex items-center gap-3 hover:bg-blue-700 p-2 rounded">
          <Building2 size={20} /> Create Company
        </Link>
        <Link href="/dashboard/Tender" className="flex items-center gap-3 hover:bg-blue-700 p-2 rounded">
          <FilePlus2 size={20} /> Create Tender
        </Link>
        <Link href="/dashboard/TenderList" className="flex items-center gap-3 hover:bg-blue-700 p-2 rounded">
          <ClipboardList size={20} /> Tender List
        </Link>
      
      </nav>
    </aside>
  );
};

export default Sidebar;
