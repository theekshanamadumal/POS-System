import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import {
  LineStyle,
  Timeline,
  //TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  /*MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,*/
} from "@material-ui/icons";

export default function ItAdminSidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link to="/itAdmin" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link to="/itAdmin/management" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Management
              </li>
            </Link>
            <Link to="/itAdmin/addManager" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Add Manager
              </li>
            </Link>
            <Link to="/itAdmin/editManager" className="link">
              <li className="sidebarListItem">
                <AttachMoney className="sidebarIcon" />
                Edit Manager
              </li>
            </Link>
          </ul>
        </div>

        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link to="/itAdmin" className="link">
              <li className="sidebarListItem">
                <BarChart className="sidebarIcon" />
                Reports
              </li>
            </Link>
            <Link to="/itAdmin" className="link">
              <li className="sidebarListItem">
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
