import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import URL from "../../config";
import logHistory from "../../services/admin/logHistory";
import "./widgetLg.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetLg() {
  const [signins, setsignins] = useState([]);
  useEffect(() => {
    setsignins(logHistory.recent());
  }, []);

  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest SignIns </h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">User</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Time</th>
          {/* <th className="widgetLgTh">Roles</th> */}
        </tr>

        {signins.map((val) => {
          console.log("------signin value----", val);
          const date = new Date(val.dateTime);
          const user = val.userID;

          return (
            <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <span className="widgetLgName">
                  {user.firstName + " " + user.lastName}
                </span>
              </td>
              <td className="widgetLgDate">{date.toLocaleDateString()}</td>
              <td className="widgetLgAmount">{date.toLocaleTimeString()}</td>
              <td className="widgetLgStatus">
                <Link to={URL.user + "/" + user._id} className="linkAnaly">
                  <button className="widgetSmButton Approved">View User</button>
                </Link>
                {/* <Button type="Approved" /> */}
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
