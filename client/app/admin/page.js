import Sidebar from "@/components/Sidebar";
import { LineChartComponent, BarChartComponent } from "@/components/Charts";
import { RecentPosts } from "@/components/RecentPosts";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

        <div className="flex space-x-6 mb-6 border-b border-gray-200 pb-2">
          {["Overview", "Activity", "Comments", "Trending", "Reports"].map(
            (tab, i) => (
              <button
                key={i}
                className={`text-sm font-semibold pb-2 ${
                  i === 0
                    ? "border-b-2 border-black text-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {tab}
              </button>
            )
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 shadow">
            <p className="text-sm text-gray-500">New Users</p>
            <h2 className="text-2xl font-semibold">+23%</h2>
            <p className="text-sm text-green-500">6 months +23%</p>
            <LineChartComponent />
          </div>
          <div className="bg-white rounded-xl p-4 shadow">
            <p className="text-sm text-gray-500">Active Users</p>
            <h2 className="text-2xl font-semibold">1,200</h2>
            <p className="text-sm text-gray-500">6 months 1,200</p>
            <BarChartComponent />
          </div>
        </div>

        <RecentPosts />
      </div>
    </div>
  );
}
