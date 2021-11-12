import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router";
import URL from "../../../config";
import "./viewRoute.css";
import { Link } from "react-router-dom";
import authHeader from "../../../services/authHeader";

export default withRouter(
  class ViewRoute extends Component {
    constructor(props) {
      super(props);
      console.dir(props);
      this.onChangeOrigin = this.onChangeOrigin.bind(this);
      this.onChangeOriginLocation = this.onChangeOriginLocation.bind(this);
      this.onChangeDestination = this.onChangeDestination.bind(this);
      this.onChangeDestinationLocation =
        this.onChangeDestinationLocation.bind(this);
      this.onChangeCities = this.onChangeCities.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.loadShops = this.loadShops.bind(this);

      this.state = {
        route: [],
        dataId: "",
        origin: "",
        originLocation: "",
        destination: "",
        destinationLocation: "",
        cities: [],
        routesDetails: [],
        shops: [],
        countShops: 0,
      };
    }
    loadShops() {
      console.log("route details", this.state.routesDetails);
      const li = this.state.routesDetails.filter((e) => e._id === this.dataId);
      console.log("li", li);
    }

    componentDidMount() {
      this.dataId = this.props.match.params.id;

      console.log("dataId: ", this.dataId);
      axios
        .all([
          axios.get(URL.main + URL.salesRouteComp + this.dataId, {
            headers: authHeader(),
          }),
          axios.get(URL.main + URL.shops + "/groupByRoute", {
            headers: authHeader(),
          }),
        ])
        .then(
          axios.spread((...responses) => {
            this.setState({
              route: responses[0].data,
              origin: responses[0].data.origin,
              originLocation: String(responses[0].data.originLocation),
              destination: responses[0].data.destination,
              destinationLocation: String(
                responses[0].data.destinationLocation
              ),
              cities: responses[0].data.cities,
            });
            const li = responses[1].data.filter((c) => c._id === this.dataId);
            if (li.length > 0) {
              this.setState({
                routesDetails: responses[1].data.filter(
                  (c) => c._id === this.dataId
                ),
              });
              this.setState({ shops: li[0].shopsName });
              this.setState({ countShops: li[0].count });
            }
          })
        )
        .catch((error) => {
          console.log(error);
          alert(error, (window.location = URL.routes));
        });
      this.loadShops();
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
      if (window.confirm("Confirm to Update?")) {
        const route = {
          origin: this.state.origin,
          originLocation: this.state.originLocation,
          destination: this.state.destination,
          destinationLocation: this.state.destinationLocation,
          cities: this.state.cities,
        };
  
        console.log("before post", route);
  
        axios
          .post(URL.main + URL.updateSaleRoute + this.dataId, route, {
            headers: authHeader(),
          })
          .then((res) => {
            console.log(res.data);
            alert(res.data, (window.location = URL.routes));
          })
          .catch((error) => {
            console.log(error);
            alert("Error Occured. Please Try again later", (window.location = URL.routes));
          });
      }
    }

    render() {
      return (
        <div className="viewRoute">
          <div className="spacing">
            <div className="containerSale">
              <h1 className="heading">Routes</h1>

              {/* <Link to={URL.lastSales}>
                <button className="addUser">View Last Month Sales</button>
              </Link> */}
              {/*<Link to={URL.addRoute}>
                <button className="addUser">Add New Route</button>
              </Link>*/}
            </div>
            {console.log("rou de", this.state.routesDetails)}
            <div className="Container">
              <div className="detailsContainer">
                <div className="detailMain">
                  <img
                    className="imRoute"
                    src="https://previews.123rf.com/images/amin268/amin2681705/amin268170500437/77625875-distance-line-icon-navigation-and-route-map-pointer-vector-graphics-a-linear-pattern-on-a-black-back.jpg"
                    alt=""
                  ></img>
                  <div className="idName">
                    <h2 className="name">
                      Route: {String(this.dataId).substr(19)}
                    </h2>
                  </div>
                </div>
                <div className="detailSubRot">
                  <p className="detail">
                    Origin :{" "}
                    <span className="value"> {this.state.route.origin}</span>
                  </p>
                  <p className="detail">
                    Origin Location GPS :
                    <span className="value">
                      {" "}
                      {this.state.route.originLocation}
                    </span>
                  </p>
                  <p className="detail">
                    Destination :
                    <span className="value">
                      {" "}
                      {this.state.route.destination}
                    </span>
                  </p>
                  <p className="detail">
                    Destination Location GPS :
                    <span className="value">
                      {this.state.route.destinationLocation}
                    </span>
                  </p>
                  {/*                   
                  <p className="detail">
                    Last Visited : <span className="value"> 09/09/2021</span>
                  </p>
                  <p className="detail">
                    Status : <span className="value"> Assigned</span>
                  </p>
                  */}
                  <p className="detail">
                    No of Shops :{" "}
                    <span className="value"> {this.state.countShops}</span>
                  </p>
                  <p className="detail"> Shops : </p>
                  <ol className="instructionsRot">
                    {this.state.shops.map((x) => (
                      <li className="contactRot">
                        <span className="value"> {x}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
              <div className="editContainer">
                <h1 className="editRoute">Edit</h1>
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
                        <label>Origin Location</label>
                        <br></br>
                        <input
                          value={this.state.originLocation}
                          onChange={this.onChangeOriginLocation}
                          type="text"
                          required
                        ></input>
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
                          type="text"
                          value={this.state.destinationLocation}
                          onChange={this.onChangeDestinationLocation}
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
                      </div>

                      <button
                        type="submit"
                        className="btn btn-lg btn-primary editRoute"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
);
