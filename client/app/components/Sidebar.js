"use client";

const PRIMARY = "#9290c3";

export default function Sidebar({ active, onSelect, items }) {
  return (
    <div
      className="w-64 p-4 hidden lg:block"
      style={{ backgroundColor: "#0a1640" }}
    >
      <h2 className="text-xl font-bold mb-6 px-3" style={{ color: PRIMARY }}>
        Locora Admin
      </h2>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item.name}
            onClick={() => onSelect(item.name)}
            className="flex items-center px-3 py-2 rounded-xl cursor-pointer text-sm font-medium transition-colors"
            style={{
              backgroundColor:
                active === item.name ? "rgba(146,144,195,0.18)" : "transparent",
              color: active === item.name ? PRIMARY : "#d1d5db",
            }}
          >
            <span className="mr-3 text-lg">{item.icon}</span>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
