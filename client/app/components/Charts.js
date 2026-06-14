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
  Tooltip,
} from "recharts";

const PRIMARY = "#9290c3";

export function LineChartComponent({ data = [] }) {
  return (
    <ResponsiveContainer width="100%" height={150}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(146,144,195,0.15)" />
        <XAxis dataKey="date" stroke="#9ca3af" fontSize={11} />
        <YAxis hide />
        <Tooltip
          contentStyle={{
            backgroundColor: "#070f2b",
            border: "1px solid #9290c3",
          }}
          labelStyle={{ color: PRIMARY }}
        />
        <Line
          type="monotone"
          dataKey="count"
          stroke={PRIMARY}
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export function BarChartComponent({ data = [] }) {
  return (
    <ResponsiveContainer width="100%" height={150}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(146,144,195,0.15)" />
        <XAxis dataKey="date" stroke="#9ca3af" fontSize={11} />
        <YAxis hide />
        <Tooltip
          contentStyle={{
            backgroundColor: "#070f2b",
            border: "1px solid #9290c3",
          }}
          labelStyle={{ color: PRIMARY }}
        />
        <Bar
          dataKey="count"
          fill={PRIMARY}
          barSize={20}
          radius={[6, 6, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
