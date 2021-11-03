import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import {
  LineStyle,
  Timeline,
  PermIdentity,
  WorkOutline,
} from "@material-ui/icons";
import { useLocation } from "react-router-dom";
import URL from "../../config";

export default function ItAdminSidebar() {
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
            <Link to={URL.itAdmin} className="link">
              <li className={(splitLocation).length=== 2 ? "active sidebarListItem" : "sidebarListItem"}>
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link to={URL.user} className="link">
              <li className={splitLocation[2] === "user" ? "active sidebarListItem" : "sidebarListItem"}>
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>

            <Link to={URL.addUser} className="link">
              <li className={splitLocation[2] === "addUser" ? "active sidebarListItem" : "sidebarListItem"}>
                <WorkOutline className="sidebarIcon" />
                Add User
              </li>
            </Link>
          </ul>
        </div>

        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link to={URL.itAdmin} className="link">
              <li className={splitLocation[2] === "analytics" ? "active sidebarListItem" : "sidebarListItem"}>
                <Timeline className="sidebarIcon" />
                Analytics
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
