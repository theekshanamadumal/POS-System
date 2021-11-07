import React from "react";
import "./Home.css";
import {} from "@material-ui/icons";
import FeaturedInfo from "../../../components/featuredInfo/featuredInfo";
import Chart from "../../../components/chart/chart";

import { userData } from "../../../dummyData";
import WidgetSm from "../../../components/widgetSm/widgetSm";
import WidgetLg from "../../../components/widgetLg/widgetLg";

export default function ItAdminHome() {
  return (
    <div className="home">
      <FeaturedInfo />
      {/* <Chart
        title="User Analytics"
        data={userData}
        dataKey="Active User"
        grid
      /> */}
      <div className="homeWIdgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
