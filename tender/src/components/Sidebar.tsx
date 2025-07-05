

'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Building2, FilePlus2, ClipboardList, Menu } from 'lucide-react';

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      {/* Top Navbar Menu Button */}
      <div className="fixed top-4 left-4 z-50 lg:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="text-white bg-blue-700 p-2 rounded-md shadow"
        >
          <Menu />
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-blue-800 text-white shadow-lg z-40 transform transition-transform duration-300
          ${open ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
      >
        <div className="text-2xl font-bold p-6 border-b border-blue-600">TenderApp</div>
        <nav className="flex flex-col gap-4 p-6">
          <Link
            href="/dashboard/CreateCom"
            className="flex items-center gap-3 hover:bg-blue-700 p-2 rounded"
          >
            <Building2 size={20} /> <span>Create Company</span>
          </Link>
          <Link
            href="/dashboard/Tender"
            className="flex items-center gap-3 hover:bg-blue-700 p-2 rounded"
          >
            <FilePlus2 size={20} /> <span>Create Tender</span>
          </Link>
          <Link
            href="/dashboard/TenderList"
            className="flex items-center gap-3 hover:bg-blue-700 p-2 rounded"
          >
            <ClipboardList size={20} /> <span>Tender List</span>
          </Link>

           <Link
            href="/dashboard/AppForm"
            className="flex items-center gap-3 hover:bg-blue-700 p-2 rounded"
          >
            <ClipboardList size={20} /> <span>Appliction from</span>
          </Link>

           <Link
            href="/dashboard/AppList"
            className="flex items-center gap-3 hover:bg-blue-700 p-2 rounded"
          >
            <ClipboardList size={20} /> <span>Application List</span>
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
