import Sidebar from "@/components/Sidebar";
import { LineChartComponent, BarChartComponent } from "@/components/Charts";
import { RecentPosts } from "@/components/RecentPosts";
const tabs = ["Overview", "Users", "Posts", "Reports"];

export default function Dashboard() {
  return (
    <div
      className="flex min-h-screen bg-gradient-to-br from-slate-900 to-slate-800"
      style={{ backgroundColor: "#070f2b" }}
    >
      <Sidebar />

      <div className="flex-1 p-8 lg:p-12">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-3" style={{ color: "#9290c3" }}>
            Admin Dashboard
          </h1>
          <p className="text-lg text-gray-400">
            Monitor your community&apos;s activity and growth
          </p>
        </div>

        {/* Tabs Navigation */}
        <div
          className="flex flex-wrap gap-2 mb-12 pb-6 border-b"
          style={{ borderColor: "#9290c3" }}
        >
          {tabs.map((tab, i) => (
            <button key={i}>{tab}</button>
          ))}
        </div>

        {/* Stats Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* New Users Card */}
          <div
            className="rounded-3xl p-8 shadow-2xl backdrop-blur-sm border transform transition-all duration-300 hover:scale-105 hover:shadow-3xl"
            style={{
              backgroundColor: "rgba(146, 144, 195, 0.1)",
              borderColor: "#9290c3",
            }}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">
                  New Users
                </p>
                <h2 className="text-6xl font-bold" style={{ color: "#9290c3" }}>
                  +23%
                </h2>
              </div>
              <div
                className="rounded-full p-5 shadow-lg"
                style={{ backgroundColor: "#9290c3" }}
              >
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <svg
                className="w-5 h-5 text-emerald-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
              <p className="text-sm font-semibold text-emerald-400">
                6 months +23%
              </p>
            </div>

            <div
              className="mt-6 p-4 rounded-2xl"
              style={{ backgroundColor: "rgba(7, 15, 43, 0.5)" }}
            >
              <LineChartComponent />
            </div>
          </div>

          {/* Active Users Card */}
          <div
            className="rounded-3xl p-8 shadow-2xl backdrop-blur-sm border transform transition-all duration-300 hover:scale-105 hover:shadow-3xl"
            style={{
              backgroundColor: "rgba(146, 144, 195, 0.1)",
              borderColor: "#9290c3",
            }}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">
                  Active Users
                </p>
                <h2 className="text-6xl font-bold" style={{ color: "#9290c3" }}>
                  1,200
                </h2>
              </div>
              <div
                className="rounded-full p-5 shadow-lg"
                style={{ backgroundColor: "#9290c3" }}
              >
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-sm font-semibold text-gray-400">
                6 months average
              </p>
            </div>

            <div
              className="mt-6 p-4 rounded-2xl"
              style={{ backgroundColor: "rgba(7, 15, 43, 0.5)" }}
            >
              <BarChartComponent />
            </div>
          </div>
        </div>

        {/* Recent Posts Section */}
        <div
          className="rounded-3xl p-8 shadow-2xl backdrop-blur-sm border"
          style={{
            backgroundColor: "rgba(146, 144, 195, 0.1)",
            borderColor: "#9290c3",
          }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div
              className="rounded-full p-3"
              style={{ backgroundColor: "#9290c3" }}
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold" style={{ color: "#9290c3" }}>
              Recent Activity
            </h2>
          </div>
          <RecentPosts />
        </div>
      </div>
    </div>
  );
}
