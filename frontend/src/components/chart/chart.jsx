import React, { useState ,useEffect} from "react";
import "./chart.css";
import {
  XAxis,
  YAxis,
  Area,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
} from "recharts";
import { Link } from "react-router-dom";
import URL from "../../config";
import salesAnalytics from "../../services/analytics/sale";

export default function Chart() {
  const [salesLast,setSalesLast]=useState([]);
  useEffect(() => {
    setSalesLast(salesAnalytics.perDay())
    
  }, [])
  return (
    <div className="chart" style={{ cursor: "pointer" }}>
      <Link to={URL.sales} className="linkAnaly">
        <span className="chartTitle">Sales Analysis</span>
        <br></br> <div>{console.log("daily sales.....",salesAnalytics.perDay())}</div>
        <br></br>
        <ResponsiveContainer width="100%" aspect={3 / 1}>
          <AreaChart data={salesLast} margin={{ bottom: 59 }}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="2 2" />
            <Tooltip contentStyle={{ backgroundColor: "moccasin" }} />

            <Area
              type="monotone"
              dataKey="sales"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <XAxis dataKey="date" stroke="royalblue" />
            <YAxis stroke="royalblue" />
          </AreaChart>
        </ResponsiveContainer>
      </Link>
    </div>
  );
}
