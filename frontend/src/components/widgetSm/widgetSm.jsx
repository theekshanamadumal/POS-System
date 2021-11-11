import { Visibility } from "@material-ui/icons";
import { React, useState, useEffect } from "react";
import axios from "axios";
import authHeader from "../../services/authHeader";
import { Link } from "react-router-dom";
import URL from "../../config";
import "./widgetSm.css";
//import signupHistory from "../../services/admin/signupHistory";

export default function WidgetSm() {
  const [signups, setsignups] = useState();

  useEffect(() => {
    axios
      .get(URL.main + URL.signupHistory, { headers: authHeader() })
      .then((response) => {
        console.log("-------------------signups analytics", response.data);
        setsignups(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert(error.message, (window.location = "./"));
      });
  }, []);

  if (signups) {
    return (
      <div className="widgetSm">
        <span className="widgetSmTitle">
          <Link to={URL.user}>
            <h3 className="widgetLgTitle">Recent User SignUps </h3>
          </Link>
          <ul className="widgetSmList">
            {signups
              .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
              .slice(0, 5)
              .map((val) => {
                console.log("------signup value----", val);
                const date = new Date(val.createdAt);

                return (
                  <li className="widgetSmListItem">
                    <div className="widgetSmUser">
                      <span className="widgetSmUserName">
                        {val.firstName + " " + val.lastName}
                      </span>
                      <span className="widgetSmUserTitle">
                        ID: {val.idNumber}
                      </span>
                      <span className="widgetSmUserTitle">
                        Roles :
                        {val.roles.map((role) => {
                          return role.name + " ";
                        })}
                      </span>
                    </div>
                    <div className="widgetSmUser">
                      <span className="widgetSmUserTitle">
                        Date : {date.toLocaleDateString()}
                      </span>
                      <span className="widgetSmUserTitle">
                        Time : {date.toLocaleTimeString()}
                      </span>
                    </div>

                    <Link to={URL.user + val._id} className="linkAnaly">
                      <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        View User
                      </button>
                    </Link>
                  </li>
                );
              })}
          </ul>
        </span>
      </div>
    );
  } else {
    return (
      <div className="widgetSm">
        <span className="widgetSmTitle">
          <Link to={URL.adminAnalytics}>
            <h3 className="widgetLgTitle">Recent User SignUps </h3>
          </Link>
          <ul className="widgetSmList">
            <li className="widgetSmListItem">
              <div className="widgetSmUser">
                <span className="widgetSmUserName">No recent signups</span>
              </div>
            </li>
          </ul>
        </span>
      </div>
    );
  }
}
