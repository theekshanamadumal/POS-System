import React, { Component } from "react";
import axios from "axios";

import "./addProduct.css";

class AddProduct extends Component {
  constructor(props) {
    super(props);

    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeItemName = this.onChangeItemName.bind(this);
    this.onChangeStock = this.onChangeStock.bind(this);
    this.onChangeActive = this.onChangeActive.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      itemName: "",
      description: " ",
      stock: "0",
      active: "no",
    };
  }

  onChangeItemName(e) {
    this.setState({ itemName: e.target.value });
  }
  onChangeDescription(e) {
    this.setState({ description: e.target.value });
  }
  onChangeStock(e) {
    this.setState({ stock: e.target.value });
  }
  onChangeActive(e) {
    this.setState({ active: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const product = {
      itemName: this.state.itemName,
      description: this.state.description,
      stock: this.state.stock,
      active: this.state.active,
    };

    console.log(product);

    axios
      .post("http://localhost:3001/management/addProduct", product)
      .then((res) => console.log(res.data));

    window.location = "/management/products";
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-8">
                <div>
                  <h2 className="text-uppercase text-center mb-5">
                    Create a product
                  </h2>

                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      required
                      id="form3Example1cg"
                      className="form-control form-control-lg"
                      value={this.state.itemName}
                      onChange={this.onChangeItemName}
                    />
                    <label className="form-label" for="form3Example1cg">
                      Name
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      required
                      value={this.state.description}
                      onChange={this.onChangeDescription}
                      type="text"
                      id="form3Example3cg"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" for="form3Example3cg">
                      description
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      value={this.state.stock}
                      onChange={this.onChangeStock}
                      type="number"
                      id="form3Example4cg"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" for="form3Example4cg">
                      stock
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <select
                      required
                      value={this.state.active}
                      onChange={this.onChangeActive}
                      id="form3Example4cdg"
                      className="form-control form-control-lg"
                    >
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                    <label className="form-label" for="form3Example4cdg">
                      active
                    </label>
                  </div>

                  <div className="d-flex justify-content-center">
                    <button
                      type="submit"
                      className="btn btn-info btn-lg"
                      data-mdb-ripple-color="dark"
                    >
                      Add Item
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default AddProduct;
