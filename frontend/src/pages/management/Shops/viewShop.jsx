import React, { Component } from "react";
import "./viewShop.css";
import { withRouter } from "react-router";
import axios from "axios";

import { Email, PhoneAndroid, LocationCity, Home } from "@material-ui/icons";

export default withRouter(
  class ViewShop extends Component {
    constructor(props) {
      super(props);

      this.onChangeShopName = this.onChangeShopName.bind(this);
      this.onChangeOwner = this.onChangeOwner.bind(this);
      this.onChangePhoneNo = this.onChangePhoneNo.bind(this);
      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onChangeCity = this.onChangeCity.bind(this);
      this.onChangeRoute = this.onChangeRoute.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.loadRoutes = this.loadRoutes.bind(this);

      this.state = {
        routeList: [],
        shop: [],
        dataId: "",
        idNumber: "",
        shopName: "",
        owner: "",
        phoneNo: "",
        email: "",
        city: "",
        route: [],
      };
    }

    loadRoutes() {
      axios
        .get("http://localhost:3001/management/routes")
        .then((response) => {
          this.setState({
            routeList: response.data,
          });
          console.log("categories:");
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
          alert(error, (window.location = "/management/products"));
        });
    }

    componentDidMount() {
      this.dataId = this.props.match.params.id;
      console.log("dataId: ", this.dataId);
      axios
        .get("http://localhost:3001/management/shop/" + this.dataId)
        .then((response) => {
          this.setState({
            shop: response.data,
            idNumber: response.data._id,
            shopName: response.data.shopName,
            owner: response.data.owner,
            phoneNo: response.data.phoneNo,
            email: response.data.email,
            city: response.data.city,
            route: response.data.route,
          });
          console.log("response.data");
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
          alert(error, (window.location = "/management/shops"));
        });
      //this.loadCategories();
    }

    onChangeShopName(e) {
      this.setState({ shopName: e.target.value });
    }
    onChangeOwner(e) {
      this.setState({ owner: e.target.value });
    }
    onChangePhoneNo(e) {
      this.setState({ phoneNo: e.target.value });
    }
    onChangeEmail(e) {
      this.setState({ email: e.target.value });
    }
    onChangeCity(e) {
      this.setState({ city: e.target.value });
    }
    onChangeRoute(e) {
      this.setState({ route: e.target.value });
    }

    onSubmit(e) {
      e.preventDefault();
      const shop = {
        shopName: this.state.shopName,
        owner: this.state.owner,
        phoneNo: this.state.phoneNo,
        email: this.state.email,
        city: this.state.city,
        route: this.state.route,
      };

      console.log(shop);

      axios
        .post(
          "http://localhost:3001/management/updateShop/" + this.dataId,
          shop
        )
        .then((res) => {
          console.log(res.data);
          alert(res.data, (window.location = "/management/shops"));
        })
        .catch((error) => {
          console.log(error);
          alert(error, (window.location = "/management/shops"));
        });
    }

    render() {
      return (
        <div className="viewShop">
          <div className="headingView">
            <h1>Edit Shop Details</h1>
          </div>
          <div className="Container">
            <div className="detailsContainer">
              <div className="detailMain">
                ....
                <div className="idName">
                  <h2 className="name"> {this.state.shop.shopName} </h2>
                </div>
              </div>
              <div className="detailSub">
                <p className="detail">Shop Details:</p>
                <ul className="instructions">
                  <li className="contact">
                    {" "}
                    <Email />{" "}
                    <span className="value">
                      ID: {String(this.state.shop._id).substr(19)}
                    </span>
                  </li>
                  <li className="contact">
                    <Home />{" "}
                    <span className="value">
                      Owner:{this.state.shop.owner}{" "}
                    </span>
                  </li>{" "}
                  <li className="contact">
                    <PhoneAndroid />
                    <span className="value">
                      Phone: {this.state.shop.phoneNo}{" "}
                    </span>
                  </li>
                  <li className="contact">
                    {" "}
                    <Email />{" "}
                    <span className="value">
                      {" "}
                      Email: {this.state.shop.email}
                    </span>
                  </li>
                  <li className="contact">
                    <LocationCity />{" "}
                    <span className="value">City: {this.state.shop.city}</span>
                  </li>
                </ul>
                <br></br>
                <p className="detail">Route Details:</p>

                <ul className="instructions">
                  <li className="contact">
                    {" "}
                    Route ID :{" "}
                    <span className="value">
                      {" "}
                      {String(this.state.shop.route).substr(19)}
                    </span>
                  </li>
                  <li className="contact">
                    Begin :
                    <span className="value">{this.state.shop.route}</span>
                  </li>
                  <li className="contact">
                    Destination :
                    <span className="value">{this.state.shop.route}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="editContainer">
              <h1 className="editTitle">Add new shop</h1>
              <br />
              <br />
              <form action="" className="form" onSubmit={this.onSubmit}>
                <div className="editItems">
                  <div className="leftItemContainer">
                    <label>shop Name</label>
                    <input
                      value={this.state.shopName}
                      onChange={this.onChangeShopName}
                      type="text"
                      required
                    ></input>
                    <br />
                    <label>Owner </label>
                    <input
                      value={this.state.owner}
                      onChange={this.onChangeOwner}
                      type="text"
                    ></input>
                    <br></br>
                    <label>Phone Number</label>
                    <input
                      value={this.state.phoneNo}
                      onChange={this.onChangePhoneNo}
                      type="number"
                      required
                    ></input>
                    <br />
                    <label>Email </label>
                    <input
                      value={this.state.email}
                      onChange={this.onChangeEmail}
                      type="email"
                    ></input>
                    <br />
                    <label>City </label>
                    <input
                      value={this.state.city}
                      onChange={this.onChangeCity}
                      type="text"
                      required
                    ></input>
                    <br />
                    <label>Route</label>
                    <select
                      value={this.state.route}
                      onChange={this.onChangeroute}
                      className="select"
                    >
                      {this.state.routeList.map((c) => (
                        <option>{c.route}</option>
                      ))}
                    </select>
                  </div>

                  <div className="rightItemContainer">
                    <div className="upload">
                      <button type="submit" className="update">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    }
  }
);
