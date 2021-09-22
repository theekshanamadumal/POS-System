import "./home.css";
import React from "react";
import Info from "../../../components/managementDashboard/info";
import Chart from "..//..//..//components/chart/chart";
import { chartData } from "../../../dataCollection";

export default function Home() {
  return (
    <div className="home">
      <Info />
      <Chart
        data={chartData}
        title="Total Profit Analysis"
        dataKey="month"
        grid
      />
    </div>
  );
}
