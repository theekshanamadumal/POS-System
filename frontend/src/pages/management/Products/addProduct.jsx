import React, { Component } from "react";
//import axios from "axios";

import "./addProduct.css";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <form>
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
                      id="form3Example1cg"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" for="form3Example1cg">
                      Name
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3cg"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" for="form3Example3cg">
                      description
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
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
