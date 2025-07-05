
// export default function DashboardHome() {
//   return (
//     <div>
//       <h1 className="text-3xl font-bold">Welcome to Tender Dashboard</h1>
//       <p className="mt-2 text-gray-600">Use the sidebar to navigate to features.</p>
//     </div>
//   );
// }

export default function DashboardHome() {
  return (
    <div className="p-6 animate-fade-in">
      <h1 className="text-3xl font-bold text-blue-800 transition-all duration-500">
        Welcome to Tender Dashboard
      </h1>
      <p className="mt-2 text-gray-600 text-lg animate-slide-in">
        Use the sidebar to navigate to features.
      </p>
    </div>
  );
}
