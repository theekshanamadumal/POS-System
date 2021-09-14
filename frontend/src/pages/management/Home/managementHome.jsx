import "./home.css";
import React from "react";
import Info from "../../../components/InformationHome/info";
import Chart from "../../../components/chart/chart";
import { userData } from "../../../dummyData";

export default function managementHome() {
  return (
    <div className="home">
      <Info />
      <Chart
        title="Total Profit Analysis"
        data={userData}
        dataKey="month"
        grid
      />
    </div>
  );
}
