import React, { Component } from "react";
import axios from "axios";

export default class AddRouteComponent extends Component {
  constructor(props) {
    super(props);

    this.onChangeOrigin = this.onChangeOrigin.bind(this);
    this.onChangeDestination = this.onChangeDestination.bind(this);
    this.onChangeCities = this.onChangeCities.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      origin: "",
      destination: "",
      cities: [],
    };
  }

  onChangeOrigin(e) {
    this.setState({ origin: e.target.value });
  }
  onChangeDestination(e) {
    this.setState({ destination: e.target.value });
  }
  onChangeCities(e) {
    this.setState({ cities: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const route = {
      origin: this.state.origin,
      destination: this.state.destination,
      cities: this.state.cities,
    };

    console.log("before post", route);

    axios
      .post("http://localhost:3001/management/addSalesRoute", route)
      .then((res) => {
        console.log(res.data);
        alert(res.data, (window.location = this.props.location));
      })
      .catch((error) => {
        console.log(error);
        alert(error, (window.location = this.props.location));
      });
  }

  render() {
    return (
      <div className="container ">
        <form action="" className="form" onSubmit={this.onSubmit}>
          <div class="form-outline mb-4">
            <div class="form-group">
              <div className="editRoutes">
                <label>Origin</label>
                <br></br>
                <input
                  value={this.state.origin}
                  onChange={this.onChangeOrigin}
                  type="text"
                  required
                ></input>
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
                <br></br>
                <label>Cities </label>
                <br></br>
                <input
                  value={this.state.cities}
                  onChange={this.onChangeCities}
                  type="text"
                ></input>
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
