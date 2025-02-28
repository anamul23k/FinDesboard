import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Dot,
} from "recharts";

const data = [
  { day: "Mon", value: 200 },
  { day: "Tue", value: 250 },
  { day: "Wed", value: 230 },
  { day: "Thu", value: 280 },
  { day: "Fri", value: 295 },
  { day: "Sat", value: 350 },
  { day: "Sun", value: 400 },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-purple-700 text-white text-sm px-3 py-1 rounded-lg shadow-md">
        ${payload[0].value}
      </div>
    );
  }
  return null;
};

const CustomDot = (props: any) => {
  const { cx, cy, index } = props;
  if (index === 4) {
    return (
      <g>
        <circle cx={cx} cy={cy} r={8} fill="#a855f7" />
        <circle cx={cx} cy={cy} r={6} fill="white" />
      </g>
    );
  }
  return <Dot {...props} />;
};

const LineChartComponent: React.FC = () => {
  return (
    <div className=" rounded-lg">
      <ResponsiveContainer width="100%" height={256}>
        <LineChart data={data}>
          <XAxis
            tickLine={false}
            axisLine={false}
            dataKey="day"
            stroke="#aaa"
            fontSize={12}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            stroke="#aaa"
            fontSize={12}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#bbb"
            strokeWidth={2}
            dot={<CustomDot />}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;
