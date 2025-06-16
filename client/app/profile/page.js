"use client";

import Image from "next/image";

export default function ProfilePage() {
  const activities = [
    {
      type: "Offer",
      date: "2d",
      location: "San Francisco",
      image: "/item1.jpg",
    },
    {
      type: "Request",
      date: "2d",
      location: "San Francisco",
      image: "/item2.jpg",
    },
    {
      type: "Offer",
      date: "2d",
      location: "San Francisco",
      image: "/item3.jpg",
    },
    {
      type: "Request",
      date: "3d",
      location: "San Francisco",
      image: "/item4.jpg",
    },
    {
      type: "Offer",
      date: "4d",
      location: "San Francisco",
      image: "/item5.jpg",
    },
    {
      type: "Request",
      date: "4d",
      location: "San Francisco",
      image: "/item6.jpg",
    },
    {
      type: "Offer",
      date: "5d",
      location: "San Francisco",
      image: "/item7.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="text-xl font-semibold">🖐 Helping Hand</div>
        <div className="space-x-4 hidden md:flex">
          {["Home", "Groups", "Events", "Meet", "Discover"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-gray-700 hover:underline"
            >
              {link}
            </a>
          ))}
          <button className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Create
          </button>
          <button className="bg-gray-100 px-4 py-1 rounded-full text-sm font-medium">
            Log in
          </button>
        </div>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col items-center text-center">
        <Image
          src="/avatar.jpg" // replace with your profile picture path
          alt="Profile"
          width={100}
          height={100}
          className="rounded-full"
        />
        <h2 className="text-xl font-semibold mt-4">Jane Smith</h2>
        <p className="text-gray-500 text-sm">San Francisco</p>

        <div className="flex gap-2 mt-4">
          <button className="bg-gray-100 px-4 py-1 rounded-full text-sm">
            Edit profile
          </button>
          <button className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Settings
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mt-10 border-b border-gray-200">
        {["Activity", "Groups", "Events", "Posts"].map((tab, i) => (
          <button
            key={tab}
            className={`px-6 py-2 text-sm font-semibold ${
              i === 0
                ? "text-black border-b-2 border-black"
                : "text-gray-400 hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Activity List */}
      <div className="mt-6 max-w-md mx-auto space-y-4">
        {activities.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src={item.image}
                alt={item.type}
                width={50}
                height={50}
                className="rounded-md object-cover"
              />
              <div className="flex flex-col">
                <span className="font-medium">{item.type}</span>
                <span className="text-sm text-gray-400">
                  {item.date} · {item.location}
                </span>
              </div>
            </div>
            <span className="text-xl text-gray-400">⋯</span>
          </div>
        ))}
      </div>
    </div>
  );
}
