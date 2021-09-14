import React, { Component } from "react";
import { Link } from "react-router-dom";

//import axios from "axios";

import "./products.css";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        Products page <br />
        <Link to="addProduct" className="link">
          <button
            type="submit"
            className="btn btn-info btn-lg"
            data-mdb-ripple-color="dark"
          >
            Add Item
          </button>
        </Link>
      </div>
    );
  }
}

export default Products;
