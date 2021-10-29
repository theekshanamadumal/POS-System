import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import AuthService from "../../services/authService";

export default function Topbar(props) {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">{props.name}</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            {localStorage.getItem("user").id}
          </div>
          {/* <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div> */}
          <img
            src={process.env.PUBLIC_URL + "/images/user2.jpg"}
            alt="user"
            className="topAvatar"
          />

          <div className="topbarIconContainer" onClick={AuthService.logout}>
            <a href="" target="" rel="noopener noreferrer">
              logout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
