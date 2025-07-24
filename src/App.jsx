import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 p-6 relative overflow-hidden">
      {/* Decorative gradient blobs in all four corners */}
      <div
        className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px]
 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse z-0"
      ></div>
      <div
        className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px]
 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse z-0"
      ></div>
      <div
        className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px]
 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse z-0"
      ></div>
      <div
        className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px]
 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-pulse z-0"
      ></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-blue-700 drop-shadow-sm py-3 ">
          InventoryPilot
        </h1>
        <p className="text-m text-right text-blue-700 drop-shadow-sm italic pr-79">
          -- Simplify. Track. Grow.
        </p>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
