import React, { Component } from "react";
import axios from "axios";
import "./shops.css";

import ShopToolBar from "../../../components/shopComp/shopToolbar";
import ShopList from "../../../components/shopComp/shopList";
import { Box } from "@material-ui/core";

export default class Shops extends Component {
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
        this.setState({
          routeList: response.data,
        });
        console.log("routes:");
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert(error, (window.location = "/management"));
      });
  }
  componentDidMount() {
    axios
      .get("http://localhost:3001/management/shops")
      .then((response) => {
        this.setState({ shops: response.data });
        console.log("shops recieved", this.state.shops);
      })
      .catch((error) => {
        console.log(error);
        alert(error, (window.location = "/management"));
      });

    this.loadRoutes();
  }

  render() {
    return (
      <div className="product">
        <ShopToolBar className="contain" />
        <Box sx={{ pt: 3 }} className="contain">
          <ShopList shops={this.state.shops} routes={this.state.routeList} />
        </Box>
      </div>
    );
  }
}
