import React from "react";
import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function chart({ title, data, dataKey, grid }) {
  return (
    <div className="chart">
      <span className="chartTitle">{title}</span>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey={dataKey} stroke="#5550bd" />
          <Line type="monotone" dataKey="income" stroke="#5550bd" />
          <Tooltip /> {/*to show the values when hover*/}
          <CartesianGrid stroke="rgb(138, 136, 136)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
