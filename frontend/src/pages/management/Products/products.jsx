import React, { Component } from "react";
import axios from "axios";
import "./products.css";
//import { productRows } from "../../../dataCollection";
import ProductList from "../../../components/productComp/productList";
import ProductToolBar from "../../../components/productComp/productToolbar";
import { Box } from "@material-ui/core";

export default class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3001/management/products")
      .then((response) => {
        this.setState({ products: response.data });
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert(error, (window.location = "/management"));
      });
  }

  render() {
    return (
      <div className="product">
        <ProductToolBar className="contain" products={this.state.products}  />
      </div>
    );
  }
}
