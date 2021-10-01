import React from "react";
import "./chart.css";
import {
  XAxis,
  YAxis,
  Area,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart
} from "recharts";
import { Link } from "react-router-dom";

export default function chart({ title, data, dataKey, grid }) {
  return (
    <div className="chart" style={{cursor:"pointer"} }>
      <Link to="management/analytics#sales" className="linkAnaly">
        <span className="chartTitle">{title}</span>
        <br></br><br></br>
        <ResponsiveContainer width="100%" aspect={3 / 1}>
          <AreaChart data= {data} margin={{bottom:59}}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="2 2"/>
            <Tooltip contentStyle={{backgroundColor:"moccasin"}}/>
            
            <Area type="monotone" dataKey="income" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            <XAxis dataKey={dataKey} stroke="royalblue" />
            <YAxis stroke="royalblue" />
          </AreaChart>
        </ResponsiveContainer>
      </Link>
    </div>
  );
}
