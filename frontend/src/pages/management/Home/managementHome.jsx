import "./home.css";
import React from "react";
import Info from "../../../components/managementDashboard/info";
import Chart from "..//..//..//components/chart/chart";
//import { chartData } from "../../../dataCollection";
import QuickAccess from "../../../components/managementDashboard/quickAccess";
import AllSellersLocations from "../../../pages/management/sellerLocation/allSellersLocations";

export default function Home() {
  return (
    <div className="home">
      <QuickAccess />
      <Info />
      <Chart />
      <AllSellersLocations style={{ width: "80vw" }} />
    </div>
  );
}
