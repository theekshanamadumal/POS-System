import React, { Component } from "react";
import "./addRoute.css";
import axios from "axios";
import AddRouteComponent from "../Routes/addRouteComponent";

export default class AddRoute extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="viewRoute">
        <div className="spacing">
          <div className="containerSale">
            <h1 className="heading">New Route</h1>
          </div>

          <div className="Container addRoute ">
            <div className="">
              <div className="container ">
                <div className="detailsContainer">
                  <h1 className="editRoute">Enter Route Details</h1>
                  <AddRouteComponent location="/management/routes" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
