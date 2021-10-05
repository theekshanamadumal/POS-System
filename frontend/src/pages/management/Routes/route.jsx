import React, { Component } from "react";
import axios from "axios";
import "./routes.css";
import RouteList from "../../../components/routeComp/routeList";
import RouteToolBar from "../../../components/routeComp/routeToolbar";
import { Box } from "@material-ui/core";

export default class Routes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shops: [],
      routeList: [],
    };
  }
  loadRoutes() {
    axios
      .get("http://localhost:3001/management/salesRoutes")
      .then((response) => {
        this.setState({ routeList: response.data });
        console.log("routes recieved", this.state.routeList);
      })
      .catch((error) => {
        console.log(error);
        alert(error, (window.location = "/management"));
      });
  }
  componentDidMount() {
    this.loadRoutes();
  }

  render() {
    return (
      <div className="product">
        <RouteToolBar className="contain" />
        <Box sx={{ pt: 3 }} className="contain">
          <RouteList routes={this.state.routeList} shops={this.state.shops} />
        </Box>
      </div>
    );
  }
}
