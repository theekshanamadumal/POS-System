import React, { Component } from "react";
import axios from "axios";
import URL from "../../../config";
import authHeader from "../../../services/authHeader";

class AddProductCategory extends Component {
  constructor(props) {
    super(props);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.state = { category: "" };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeCategory(e) {
    this.setState({
      category: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    if (window.confirm("Confirm to Add Product Category?")) {
      const Category = {
        category: this.state.category,
      };
  
      console.log(Category);
  
      axios
        .post(URL.main+URL.addProductCategory, Category,{ headers: authHeader() })
        .then((res) => {
          console.log(res.data);
          alert(res.data, (window.location = URL.products));
        })
        .catch((error) => {
          console.log(error);
          alert("An error Occured. Please Try again later", (window.location = URL.products));
        });
    }
  }

  render() {
    return (
      <div  style={{ flex: 8 }}>
        <h1 className="p-3">Add New Product Category</h1>
        <div className="container">
          <form onSubmit={this.onSubmit}>
            <div class="form-outline mb-4">
              <div class="form-group">
                <label for="exampleInputEmail1">Category Name</label>
                <input
                  required
                  type="text"
                  class="form-control"
                  placeholder="Enter category "
                  value={this.state.category}
                  onChange={this.onChangeCategory}
                />
              </div>
              <button type="submit" class=" btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        
      </div>
    );
  }
}

export default AddProductCategory;
