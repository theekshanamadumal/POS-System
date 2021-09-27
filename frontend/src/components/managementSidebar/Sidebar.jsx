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
import { useLocation } from "react-router-dom";

export default function ManagementSidebar() {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className={(splitLocation).length=== 2 ? "active sidebarListItem" : "sidebarListItem"}>
              <Link to="/management" className="link">
                <LineStyle className="sidebarIcon" />
                Home
              </Link>
            </li>

            <li className={splitLocation[2] === "analytics" ? "active sidebarListItem" : "sidebarListItem"}>
              <Link to="/management/analytics" className="link">
                <Timeline className="sidebarIcon" />
                Analytics
              </Link>
            </li> 
          </ul>
        </div>
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <li className={splitLocation[2] === "salesperson" ? "active sidebarListItem" : "sidebarListItem"}>
              <Link to="/management/salesperson" className="link">
                <PeopleAlt className="sidebarIcon" />
                Salesperson
              </Link>
            </li>

            <li className={splitLocation[2] === "products" ? "active sidebarListItem" : "sidebarListItem"}>
              <Link to="/management/products" className="link">
                <LocalOffer className="sidebarIcon" />
                Products
              </Link>
            </li>

            <li className={splitLocation[2] === "orders" ? "active sidebarListItem" : "sidebarListItem"}>
              <Link to="/management/orders" className="link">
                <ShoppingCart className="sidebarIcon" />
                Orders
              </Link>
            </li>

            <li className={splitLocation[2] === "shops" ? "active sidebarListItem" : "sidebarListItem"}>
              <Link to="/management/shops" className="link">
                <Storefront className="sidebarIcon" />
                Shops
              </Link>
            </li>

            <li className={splitLocation[2] === "routes" ? "active sidebarListItem" : "sidebarListItem"}>
              <Link to="/management/routes" className="link">
                <LocationOn className="sidebarIcon" />
                Routes
              </Link>
            </li>

            <li className={splitLocation[2] === "tasks" ? "active sidebarListItem" : "sidebarListItem"}>
              <Link to="/management/tasks" className="link">
                <LocalOffer className="sidebarIcon" />
                Tasks
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
}
