import React from "react";
import { Link } from "react-router-dom";
import URL from "../../config";
import "./sidebar.css";
import {
  LineStyle,
  Timeline,
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
            <Link to={URL.management} className="link">
              <li
                className={
                  splitLocation.length === 2
                    ? "active sidebarListItem"
                    : "sidebarListItem"
                }
              >
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>

            <Link to={URL.analytics} className="link">
              <li
                className={
                  splitLocation[2] === "analytics"
                    ? "active sidebarListItem"
                    : "sidebarListItem"
                }
              >
                <Timeline className="sidebarIcon" />
                Analytics
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link to={URL.salesperson} className="link">
              <li
                className={
                  splitLocation[2] === "salesperson"
                    ? "active sidebarListItem"
                    : "sidebarListItem"
                }
              >
                <PeopleAlt className="sidebarIcon" />
                Salesperson
              </li>
            </Link>

            <Link to={URL.products} className="link">
              <li
                className={
                  splitLocation[2] === "products"
                    ? "active sidebarListItem"
                    : "sidebarListItem"
                }
              >
                <LocalOffer className="sidebarIcon" />
                Products
              </li>
            </Link>

            <Link to={URL.orders} className="link">
              <li
                className={
                  splitLocation[2] === "orders"
                    ? "active sidebarListItem"
                    : "sidebarListItem"
                }
              >
                <ShoppingCart className="sidebarIcon" />
                Orders
              </li>
            </Link>

            <Link to={URL.shops} className="link">
              <li
                className={
                  splitLocation[2] === "shops"
                    ? "active sidebarListItem"
                    : "sidebarListItem"
                }
              >
                <Storefront className="sidebarIcon" />
                Shops
              </li>
            </Link>

            <Link to={URL.routes} className="link">
              <li
                className={
                  splitLocation[2] === "routes"
                    ? "active sidebarListItem"
                    : "sidebarListItem"
                }
              >
                <LocationOn className="sidebarIcon" />
                Routes
              </li>
            </Link>

            <Link to={URL.tasks} className="link">
              <li
                className={
                  splitLocation[2] === "tasks"
                    ? "active sidebarListItem"
                    : "sidebarListItem"
                }
              >
                <LocalOffer className="sidebarIcon" />
                Daily Tasks
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
