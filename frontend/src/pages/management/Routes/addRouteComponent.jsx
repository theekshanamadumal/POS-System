import React, { Component } from "react";
import axios from "axios";
import URL from "../../../config";
import authHeader from "../../../services/authHeader";
import ReactTooltip from 'react-tooltip';

export default class AddRouteComponent extends Component {
  constructor(props) {
    super(props);

    this.onChangeOrigin = this.onChangeOrigin.bind(this);
    this.onChangeOriginLocation = this.onChangeOriginLocation.bind(this);
    this.onChangeDestination = this.onChangeDestination.bind(this);
    this.onChangeDestinationLocation =
      this.onChangeDestinationLocation.bind(this);
    this.onChangeCities = this.onChangeCities.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      origin: "",
      originLocation: "",
      destination: "",
      destinationLocation: "",
      cities: [],
    };
  }

  onChangeOrigin(e) {
    this.setState({ origin: e.target.value });
  }
  onChangeOriginLocation(e) {
    this.setState({ originLocation: e.target.value });
  }
  onChangeDestination(e) {
    this.setState({ destination: e.target.value });
  }
  onChangeDestinationLocation(e) {
    this.setState({ destinationLocation: e.target.value });
  }
  onChangeCities(e) {
    this.setState({ cities: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    if (window.confirm("Confirm to Add Route?")) {
      const route = {
        origin: this.state.origin,
        originLocation: this.state.originLocation,
        destination: this.state.destination,
        destinationLocation: this.state.destinationLocation,
        cities: this.state.cities,
      };
  
      console.log("before post", route);
  
      axios
        .post(URL.main + URL.addSalesRoute, route,{ headers: authHeader() })
        .then((res) => {
          console.log(res.data);
          alert(res.data, (window.location = this.props.location));
        })
        .catch((error) => {
          console.log(error);
          alert("An error Occured. Please Try again later", (window.location = this.props.location));
        });
    }
  }

  render() {
    return (
      <div className="container ">
        <form action="" className="form" onSubmit={this.onSubmit}>
          <div className="form-outline mb-4">
            <div className="form-group">
              <div className="editRoutes">
                <label>Origin</label>
                <br></br>
                <input
                  value={this.state.origin}
                  onChange={this.onChangeOrigin}
                  type="text"
                  required
                ></input>
                <label>Origin Location</label>
                <br></br>
                <input
                  data-tip data-for='destooltip'
                  value={this.state.originLocation}
                  onChange={this.onChangeOriginLocation}
                  type="text"
                  required
                ></input>
                <ReactTooltip id='destooltip' type='error' effect='solid'>
                  <ul>
                    <li>Enter GPS coordinate of destination</li>
                    <li>Use "," to seperate coordinates</li>
                    <li>eg:- 6.9271, 79.8612</li>
                  </ul>
                </ReactTooltip>
                <br></br>
                <br></br>
                <label>Destination </label>
                <br></br>
                <input
                  type="text"
                  value={this.state.destination}
                  onChange={this.onChangeDestination}
                  type="text"
                  required
                ></input>
                <label>Destination Location </label>
                <br></br>
                <input
                  data-tip data-for='origintooltip'
                  type="text"
                  value={this.state.destinationLocation}
                  onChange={this.onChangeDestinationLocation}
                  type="text"
                  required
                ></input>
                <ReactTooltip id='origintooltip' type='error' effect='solid'>
                  <ul>
                    <li>Enter GPS coordinate of Origin</li>
                    <li>Use  ","  to seperate coordinates</li>
                    <li>eg:- 6.9271, 79.8612</li>
                  </ul>
                </ReactTooltip>
                <br></br>
                <label>Cities </label>
                <br></br>
                <input
                  data-tip data-for='citytooltip'
                  value={this.state.cities}
                  onChange={this.onChangeCities}
                  type="text"
                ></input>
                <ReactTooltip id='citytooltip' type='error' effect='solid'>
                  <ul>
                    <li>Enter Cities between Origin and Destination</li>
                    <li>Use  ","  to seperate coordinates</li>
                  </ul>
                </ReactTooltip>
                <button type="submit" className="btn btn-primary editRoute">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
