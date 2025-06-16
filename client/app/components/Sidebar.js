export default function Sidebar() {
  const items = [
    { name: "Dashboard", icon: "🏠" },
    { name: "Posts", icon: "📝" },
    { name: "Users", icon: "👥" },
    { name: "Analytics", icon: "📊" },
    { name: "Moderation", icon: "🛡️" },
    { name: "Settings", icon: "⚙️" },
    { name: "Help", icon: "❓" },
  ];

  return (
    <div className="w-64 bg-white shadow-md p-4 rounded-r-xl">
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item.name}
            className="flex items-center px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer text-sm"
          >
            <span className="mr-3 text-lg">{item.icon}</span>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
