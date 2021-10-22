import React, { Component } from "react";
import "./addRoute.css";
import AddRouteComponent from "../Routes/addRouteComponent";
import URL from "../../../config";

export default class AddRoute extends Component {
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
                  <AddRouteComponent location={URL.routes}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
