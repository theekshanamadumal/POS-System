import React from "react";
import { Link } from "react-router-dom";

import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  Assessment,
  ShoppingCart,
  Storefront,
  PeopleAlt,
  LocalOffer,
  LocationOn,
} from "@material-ui/icons";

export default function ManagementSidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/management" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>

            <Link to="/management/analytics" className="link">
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Analytics
              </li>
            </Link>

            <Link to="/management/sales" className="link">
              <li className="sidebarListItem">
                <TrendingUp className="sidebarIcon" />
                Sales
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/management/salesperson" className="link">
              <li className="sidebarListItem">
                <PeopleAlt className="sidebarIcon" />
                Salesperson
              </li>
            </Link>

            <Link to="/management/products" className="link">
              <li className="sidebarListItem">
                <LocalOffer className="sidebarIcon" />
                Products
              </li>
            </Link>

            <Link to="/management/orders" className="link">
              <li className="sidebarListItem">
                <ShoppingCart className="sidebarIcon" />
                Orders
              </li>
            </Link>

            <Link to="/management/shops" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Shops
              </li>
            </Link>

            <Link to="/management/routes" className="link">
              <li className="sidebarListItem">
                <LocationOn className="sidebarIcon" />
                Routes
              </li>
            </Link>

            <Link to="/management/reports" className="link">
              <li className="sidebarListItem">
                <Assessment className="sidebarIcon" />
                Reports
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
