import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
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
            <Link to="/itAdmin/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/itAdmin/addUser" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Add User
              </li>
            </Link>
            <Link to="/itAdmin/editUser" className="link">
              <li className="sidebarListItem">
                <AttachMoney className="sidebarIcon" />
                Edit User
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
