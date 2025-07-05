import Sidebar from "@/components/Sidebar";

const DashboardHome = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 p-10">
        <h1 className="text-3xl font-bold text-blue-800">Welcome to Tender Dashboard</h1>
        <p className="mt-4 text-gray-600">Use the sidebar to navigate to different sections.</p>
      </main>
    </div>
  );
};

export default DashboardHome;
