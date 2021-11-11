import "./addShop.css";
import React, { Component } from "react";
import axios from "axios";
import AddRouteComponent from "../Routes/addRouteComponent";
import URL from "../../../config";
import authHeader from "../../../services/authHeader";
import ReactTooltip from 'react-tooltip';

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
      location: "",
      route: "",
    };
  }

  loadRoutes() {
    axios
      .get(URL.main+URL.salesRoutes,{ headers: authHeader() })
      .then((response) => {
        this.setState({
          routeList: response.data,
        });
        console.log("routes:");
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert(error, (window.location = URL.addShops));
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
    console.log("route",e.target.value)
    this.setState({ route: e.target.value });
  }
  onChangeLocation(e) {
    this.setState({ location: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    if (window.confirm("Confirm to Add Shop?")) {
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
        .post(URL.main+ URL.addShops , shop,{ headers: authHeader() })
        .then((res) => {
          console.log(res.data);
          alert(res.data, (window.location = URL.shops));
        })
        .catch((error) => {
          console.log(error);
          alert(error, (window.location = URL.shops));
        });
    }
  }

  render() {
    return (
      <div data-testid="newShop" className="addShop">
        <h1 className="title">New shop Page</h1>
        <div className="Container">
          <div className="detailsContainer">
            <h2 className="title">Add new route</h2>
            <div className="container">
              <AddRouteComponent location={URL.addShops} />
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
                    data-tip data-for='phonetooltip'
                    value={this.state.phoneNo}
                    onChange={this.onChangePhoneNo}
                    type="number"
                    required
                  ></input>
                  <ReactTooltip id='phonetooltip' backgroundColor="rgba(156, 52, 52, 0.986)" effect='solid'>
                    <span>Must contain 10 digits</span>
                  </ReactTooltip>
                  <br />
                  <label>Email </label>
                  <input
                    data-tip data-for='emailtooltip'
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    type="email"
                  ></input>
                  <ReactTooltip id='emailtooltip' backgroundColor="rgba(156, 52, 52, 0.986)" effect='solid' >
                    <span>Eg:- someone@example.com</span>
                  </ReactTooltip>
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
                    data-tip data-for='locationtooltip'
                    value={this.state.location}
                    onChange={this.onChangeLocation}
                    type="text"
                    required
                  ></input>
                  <ReactTooltip id='locationtooltip' backgroundColor="rgba(156, 52, 52, 0.986)" effect='solid'>
                  <ul>
                    <li>Enter GPS coordinate of the Shop's Location</li>
                    <li>Use  ","  to seperate coordinates</li>
                    <li>eg:- 6.9271, 79.8612</li>
                  </ul>
                </ReactTooltip>

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
