import React, { Component } from "react";
import axios from "axios";

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

    const Category = {
      category: this.state.category,
    };

    console.log(Category);

    axios
      .post("http://localhost:3001/management/addProductCategory", Category)
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
      <div style={{ flex: 8 }}>
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
    );
  }
}

export default AddProductCategory;
