"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 500 },
  { name: "Apr", value: 250 },
  { name: "May", value: 600 },
  { name: "Jun", value: 700 },
];

export function LineChartComponent() {
  return (
    <ResponsiveContainer width="100%" height={150}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis hide />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#2E3A59"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export function BarChartComponent() {
  return (
    <ResponsiveContainer width="100%" height={150}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis hide />
        <Bar
          dataKey="value"
          fill="#E5E7EB"
          barSize={30}
          radius={[6, 6, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
