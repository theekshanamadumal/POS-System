import { Visibility } from "@material-ui/icons";
import React from "react";
import "./widgetSm.css";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">
        <ul className="widgetSmList">
          <li className="widgetSmListItem">
            <img
              className="widgetSmImg"
              src={process.env.PUBLIC_URL + "/images/user2.jpg"}
              alt=""
            />
            <div className="widgetSmUser">
              <span className="widgetSmUserName">Anna Keller</span>
              <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
          <li className="widgetSmListItem">
            <img
              className="widgetSmImg"
              src={process.env.PUBLIC_URL + "/images/user2.jpg"}
              alt=""
            />
            <div className="widgetSmUser">
              <span className="widgetSmUserName">Anna Keller</span>
              <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
          <li className="widgetSmListItem">
            <img
              className="widgetSmImg"
              src={process.env.PUBLIC_URL + "/images/user2.jpg"}
              alt=""
            />
            <div className="widgetSmUser">
              <span className="widgetSmUserName">Anna Keller</span>
              <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
          <li className="widgetSmListItem">
            <img
              className="widgetSmImg"
              src={process.env.PUBLIC_URL + "/images/user2.jpg"}
              alt=""
            />
            <div className="widgetSmUser">
              <span className="widgetSmUserName">Anna Keller</span>
              <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
          <li className="widgetSmListItem">
            <img
              className="widgetSmImg"
              src={process.env.PUBLIC_URL + "/images/user2.jpg"}
              alt=""
            />
            <div className="widgetSmUser">
              <span className="widgetSmUserName">Anna Keller</span>
              <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        </ul>
      </span>
    </div>
  );
}
