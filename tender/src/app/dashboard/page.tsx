// // // import CompanyPage from "../company/page";

// // // export default function Dashboard() {
// // //   return <div>
// // //    <CompanyPage/>
// // // </div>

// // // }

// // 'use client';
// // import React, { useState } from 'react';
// // import { TenderForm } from '@/components/TenderForm';
// // // import { TenderList } from '@/components/TenderList';
// // // import CompanyForm from '@/components/CompanyForm';
// // import { Menu, X } from 'lucide-react';
// // import CompanyPage from '../company/page';
// // // import { TenderList } from '@/components/TenderList';
// // import TenForm from '@/components/TenForm';

// // const Dashboard = () => {
// //   const [sidebarOpen, setSidebarOpen] = useState(true);

// //   return (
// //     <div className="flex h-screen overflow-hidden">
// //       {/* Sidebar */}
// //       <div className={`transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-0'} bg-blue-700 text-white h-full fixed z-20`}>
// //         {sidebarOpen && (
// //           <aside className="flex flex-col h-full shadow-lg">
// //             <div className="text-2xl font-bold p-6 border-b border-blue-500 flex justify-between items-center">
// //               TenderApp
// //               <button onClick={() => setSidebarOpen(false)} className="text-white hover:text-gray-300">
// //                 <X size={24} />
// //               </button>
// //             </div>
// //             <nav className="flex flex-col p-4 space-y-4">
// //               <a href="#company" className="hover:bg-blue-600 p-2 rounded">Create Company</a>
// //               <a href="#tender" className="hover:bg-blue-600 p-2 rounded">Create Tender</a>
// //               <a href="#list" className="hover:bg-blue-600 p-2 rounded">Tender List</a>
// //             </nav>
// //           </aside>
// //         )}
// //       </div>

// //       {/* Main Content */}
// //       <div className={`flex-1 ml-0 ${sidebarOpen ? 'md:ml-64' : 'ml-0'} transition-all duration-300 bg-gray-100`}>
// //         {/* Top Navbar */}
// //         <header className="bg-white shadow p-4 flex justify-between items-center sticky top-0 z-10">
// //           <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-blue-700 hover:text-blue-500">
// //             <Menu size={28} />
// //           </button>
// //           <h1 className="text-xl font-bold text-blue-700">Dashboard</h1>
// //         </header>

// //         {/* Page Sections */}
// //         <main className="p-6 space-y-12">
// //           {/* Company Section */}
// //           <section id="company" className="bg-white p-6 rounded-xl shadow-md">
// //             <h2 className="text-xl font-semibold mb-4">Create Company</h2>
// //            <CompanyPage/>
// //           </section>

// //           {/* Tender Form */}
// //           <section id="tender" className="bg-white p-6 rounded-xl shadow-md">
// //             <h2 className="text-xl font-semibold mb-4">Create Tender</h2>
// //           <TenForm/>
// //           </section>

// //           {/* Tender List */}
// //           {/* <section id="list" className="bg-white p-6 rounded-xl shadow-md">
// //             <h2 className="text-xl font-semibold mb-4">Tender List</h2>
// //             <TenderList/>
// //           </section> */}
// //         </main>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Dashboard;

// 'use client';

// import React, { useState } from 'react';
// import { Menu, X, Building2, ClipboardList, FilePlus2 } from 'lucide-react';
// import CompanyPage from '../company/page';
// import TenForm from '@/components/TenForm';
// // import CompanyForm from '@/components/CompanyForm';
// // import { TenderForm } from '@/components/TenderForm';
// // import { TenderList } from '@/components/TenderList';

// const Dashboard = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(true);

//   return (
//     <div className="flex h-screen bg-gradient-to-br from-slate-100 to-blue-50">
//       {/* Sidebar */}
//       <div className={`fixed top-0 left-0 h-full z-30 bg-white/90 backdrop-blur-lg border-r border-gray-200 shadow-md transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-16'}`}>
//         <div className="flex items-center justify-between px-4 py-5">
//           <h2 className={`text-xl font-bold text-blue-700 transition-all ${sidebarOpen ? 'block' : 'hidden'}`}>TenderPro</h2>
//           <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-blue-600">
//             {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//         <nav className="mt-6 flex flex-col gap-2 px-4">
//           <a href="#company" className="flex items-center gap-3 p-2 rounded-md text-gray-700 hover:bg-blue-100 transition">
//             <Building2 size={20} />
//             {sidebarOpen && <span>Create Company</span>}
//           </a>
//           <a href="#tender" className="flex items-center gap-3 p-2 rounded-md text-gray-700 hover:bg-blue-100 transition">
//             <FilePlus2 size={20} />
//             {sidebarOpen && <span>Create Tender</span>}
//           </a>
//           <a href="#list" className="flex items-center gap-3 p-2 rounded-md text-gray-700 hover:bg-blue-100 transition">
//             <ClipboardList size={20} />
//             {sidebarOpen && <span>Tender List</span>}
//           </a>
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-16'} p-6`}>
//         <header className="mb-8 flex justify-between items-center">
//           <h1 className="text-3xl font-bold text-blue-800">Dashboard</h1>
//         </header>

//         {/* Content Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           <section id="company" className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
//             <h2 className="text-xl font-semibold mb-4">🧩 Create Company</h2>
//             <CompanyPage/>
//           </section>

//           <section id="tender" className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
//             <h2 className="text-xl font-semibold mb-4">📝 Create Tender</h2>
//             <TenForm/>
//           </section>
//         </div>

//         {/* <div className="mt-10" id="list">
//           <section className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
//             <h2 className="text-xl font-semibold mb-4">📋 Tender List</h2>
//             <TenderList />
//           </section>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// src/app/dashboard/page.tsx
export default function DashboardHome() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Welcome to Tender Dashboard</h1>
      <p className="mt-2 text-gray-600">Use the sidebar to navigate to features.</p>
    </div>
  );
}

