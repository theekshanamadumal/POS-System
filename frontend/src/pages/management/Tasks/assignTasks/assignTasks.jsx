import React, { Component } from "react";
import "./assignTasks.css";
import axios from "axios";

import AddDailyTarget from "./addRouteComponent";

export default class AssignTasks extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="viewRoute">
        <div className="spacing">
          <div className="containerSale">
            <h1 className="heading">Assign Daily Tasks</h1>
          </div>

          <div className="Container addRoute ">
            <div className="">
              <div className="container ">
                <div className="detailsContainer">
                  <h5 className="title">User ID : </h5>
                  <h5 className="title">UserName :</h5>
                  <AddDailyTarget sellerId={"971650834v"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
