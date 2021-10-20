import React, { Component } from "react";
//import axios from "axios";

import "./analytics.css";
import SalespersonPerform from "../../../components/analyticsComp/salespersonPerform";
import { personPerform } from "../../../dataCollection";
import Category from "../../../components/analyticsComp/category";
import SalesAnalytics from "../../../components/analyticsComp/salesAnalytics";
import { chartData } from "../../../dataCollection";
import AllSellersLocations from "../../../pages/management/sellerLocation/allSellersLocations";

class Analytics extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="analytics">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#sales">
              Sales Analytics
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#salesperson">
              Salesperson Analytics
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#category">
              category Analytics
            </a>
          </li>
        </ul>
        <br></br>
        <AllSellersLocations />
        <br></br>
        <a name="sales"></a>
        <SalesAnalytics data={chartData} dataKey="month" grid />
        <br></br>
        <a name="salesperson"></a>
        <SalespersonPerform salespersonPerform={personPerform} />
        <br></br>
        <a name="category"></a>
        <Category />
      </div>
    );
  }
}

export default Analytics;
