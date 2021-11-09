import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import URL from "../../config";
import logHistory from "../../services/admin/logHistory";
import "./widgetLg.css";
//import { Visibility } from "@material-ui/icons";

export default class WidgetLg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signins: null,
    };

    const Button = ({ type }) => {
      return <button className={"widgetLgButton " + type}>{type}</button>;
    };
  }

  componentDidMount() {
    axios
      .get(URL.main + URL.signinHistory)
      .then((response) => {
        console.log("-------------------signins analytics", response.data);
        this.setState({
          signins: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        alert(error, (window.location = URL.itAdmin));
      });

    //const data = logHistory.recent();
  }

  render() {
    if (this.state.signins) {
      return (
        <div className="widgetLg">
          <Link to={URL.adminAnalytics}>
            <h3 className="widgetLgTitle">Latest SignIns</h3>
          </Link>
          <table className="widgetLgTable">
            <tr className="widgetLgTr">
              <th className="widgetLgTh">User</th>
              <th className="widgetLgTh">Date </th>
              <th className="widgetLgTh">Time</th>
              {/* <th className="widgetLgTh">Roles</th> */}
            </tr>

            {logHistory.recent(this.state.signins).map((val) => {
              console.log("------signin value----", val);
              const date = new Date(val.dateTime);
              const user = val.userID;

              return (
                <tr className="widgetLgTr">
                  <td className="widgetLgUser">
                    <div className="widgetLgName">
                      {user.firstName + " " + user.lastName}
                    </div>
                    {/* <div className="widgetLgTr">{user.idNumber}</div> */}
                  </td>
                  <td className="widgetLgDate">{date.toLocaleDateString()}</td>
                  <td className="widgetLgAmount">
                    {date.toLocaleTimeString()}
                  </td>
                  <td className="widgetLgStatus">
                    <Link to={URL.user + "/" + user._id} className="linkAnaly">
                      <button className="widgetSmButton Approved">
                        View User
                      </button>
                    </Link>
                    {/* <Button type="Approved" /> */}
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      );
    } else {
      return (
        <div className="widgetSm">
          <span className="widgetSmTitle">
            <Link to={URL.adminAnalytics}>
              <h3 className="widgetLgTitle">Recent User SignIns </h3>
            </Link>
            <ul className="widgetSmList">
              <li className="widgetSmListItem">
                <div className="widgetSmUser">
                  <span className="widgetSmUserName">No recent signIns</span>
                </div>
              </li>
            </ul>
          </span>
        </div>
      );
    }
  }
}
