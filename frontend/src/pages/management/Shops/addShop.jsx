import "./addShop.css";
import React, { Component } from "react";
import axios from "axios";
import AddRouteComponent from "../Routes/addRouteComponent";
import Map from "../../../components/Map";

class AddShop extends Component {
  constructor(props) {
    super(props);

    this.onChangeShopName = this.onChangeShopName.bind(this);
    this.onChangeOwner = this.onChangeOwner.bind(this);
    this.onChangePhoneNo = this.onChangePhoneNo.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeRoute = this.onChangeRoute.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.loadRoutes = this.loadRoutes.bind(this);

    this.state = {
      routeList: [],

      shopName: "",
      owner: "",
      phoneNo: "",
      email: "",
      city: "",
      location: [],
      route: "",
    };
  }

  loadRoutes() {
    axios
      .get("http://localhost:3001/management/salesRoutes")
      .then((response) => {
        this.setState({
          routeList: response.data,
        });
        console.log("routes:");
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert(error, (window.location = "/management/shops/addShop"));
      });
  }

  componentDidMount() {
    this.loadRoutes();
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
  onChangeLocation(e) {
    this.setState({ location: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const shop = {
      shopName: this.state.shopName,
      owner: this.state.owner,
      phoneNo: this.state.phoneNo,
      email: this.state.email,
      city: this.state.city,
      location: this.state.location,
      route: this.state.route,
    };

    console.log(shop);

    axios
      .post("http://localhost:3001/management/addShop", shop)
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
      <div className="addShop">
        <h1 className="title">New shop Page</h1>
        <div className="Container">
          <div className="detailsContainer">
            <h2 className="title">Add new route</h2>
            <div className="container">
              <AddRouteComponent location="/management/shops/addShop" />
            </div>
          </div>
          <div className="editContainer ">
            <h1 className="editTitle">Add new shop</h1>
            <br />
            <br />
            <form action="" className="form container" onSubmit={this.onSubmit}>
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

                  <label>Location </label>

                  <input
                    value={this.state.location}
                    onChange={this.onChangeLocation}
                    type="text"
                    required
                  ></input>

                  <br />
                  <label>Route</label>
                  <select
                    value={this.state.route}
                    onChange={this.onChangeRoute}
                    className="select"
                  >
                    <option value="">select a route</option>
                    {this.state.routeList.map((c) => (
                      <option value={c._id}>
                        {"ID: " +
                          String(c._id).substr(19) +
                          " From " +
                          c.origin +
                          " To " +
                          c.destination}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="righ">
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

export default AddShop;
