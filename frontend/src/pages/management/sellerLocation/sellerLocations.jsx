import MapGL from "./MapGL";
import React, { Component } from "react";
import axios from "axios";
import URL from "../../../config";

class SellerLocation extends Component {
  constructor(props) {
    super(props);
    this.state = { sellersData: [] };
  }

  loadSellerLocations() {
    axios
      .get(URL.sellerLocation + "/" + this.props.sellerID)
      .then((response) => {
        this.state.sellersData[0] = response.data;
        // console.log("seller locations:");
        // console.log(response.data);
        {
          this.state.sellersData.map((sellerData) =>
            console.log("sellerData", sellerData)
          );
        }
      })
      .catch((error) => {
        console.log(error);
        alert(error, (window.location = URL.management));
      });
  }

  componentDidMount() {
    this.loadSellerLocations();
  }

  render() {
    return (
      <div>
        {" "}
        <MapGL sellersData={this.state.sellersData} />{" "}
      </div>
    );
  }
}

export default SellerLocation;
