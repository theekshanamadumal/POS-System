import React, { Component } from "react";

class AddProductCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Category Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter category "
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default AddProductCategory;
