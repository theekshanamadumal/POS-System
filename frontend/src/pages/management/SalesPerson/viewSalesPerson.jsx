import React, { Component } from "react";
import axios from "axios";
import "./viewSalesPerson.css";
import URL from "../../../config";
import authHeader from "../../../services/authHeader";

import {
  // Publish,
  Email,
  PhoneAndroid,
  LocationCity,
  Home,
} from "@material-ui/icons";
import { withRouter } from "react-router";

export default withRouter(
  class ViewManager extends Component {
    constructor(props) {
      super(props);

      console.dir(props);

      this.state = {
        manager: [],
      };
    }

    componentDidMount() {
      this.dataId = this.props.match.params.id;

      axios
        .get(URL.main + URL.salesperson + "/" + this.dataId, {
          headers: authHeader(),
        })
        .then((response) => {
          this.setState({
            manager: response.data,
          });
        })
        .catch((error) => {
          console.log(error);
          alert(error, (window.location = URL.salesperson));
        });
    }

    render() {
      return (
        <div className="viewSalesPerson">
          <div className="task">
            <h1 className="mainHead">Salesperson</h1>
          </div>

          <div className="d-flex">
            <div className="col-md-3"></div>
            <div
              className="col-md-5 detailsContainerSale"
              style={{ width: "400px" }}
            >
              <div className="detailMain">
                <img
                  className="imNewSale"
                  src="https://media.istockphoto.com/photos/handsome-smiling-business-man-in-blue-shirt-standing-with-crossed-picture-id1098036052"
                  alt=""
                ></img>
                <div className="idName">
                  <h2 className="name">
                    {this.state.manager.firstName +
                      " " +
                      this.state.manager.lastName}
                  </h2>
                </div>
              </div>
              <div className="detailSub">
                <p className="detail">Account Details:</p>
                <ul className="instructions">
                  <li className="contact">
                    ID Number :
                    <span className="value">{this.state.manager.idNumber}</span>
                  </li>
                  <li className="contact">
                    Joined Date :
                    <span className="value">
                      {String(this.state.manager.joinedDate).substr(0, 10)}
                    </span>
                  </li>
                  {/*<li className="contact">
                      password :
                      <span className="value">{this.state.manager.password}</span>
                    </li>*/}
                </ul>

                <p className="detail">Contact Details:</p>
                <ul className="instructions">
                  <li className="contact">
                    <Email />{" "}
                    <span className="value"> {this.state.manager.email}</span>
                  </li>
                  <li className="contact">
                    <PhoneAndroid />
                    <span className="value">
                      {this.state.manager.phoneNumber}
                    </span>
                  </li>
                  <li className="contact">
                    <LocationCity />{" "}
                    <span className="value">{this.state.manager.city} </span>
                  </li>
                  <li className="contact">
                    <Home />{" "}
                    <span className="value">{this.state.manager.address}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
);
