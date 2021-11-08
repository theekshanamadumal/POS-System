import React, { Component } from "react";
import axios from "axios";
import "./addProduct.css";
import AddProductCategory from "./addProductCategory";
import URL from "../../../config";
class AddProduct extends Component {
  constructor(props) {
    super(props);

    this.onChangeItemName = this.onChangeItemName.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeUnitPrice = this.onChangeUnitPrice.bind(this);
    this.onChangeStock = this.onChangeStock.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.loadCategories = this.loadCategories.bind(this);

    this.state = {
      categoryList: [],
      itemName: "",
      category: "",
      unitPrice: "",
      stock: "0",
      description: "",
    };
  }

  loadCategories() {
    axios
      .get(URL.main+URL.productCategory)
      .then((response) => {
        this.setState({
          categoryList: response.data,
        });
        console.log("categories:");
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert(error, (window.location = URL.products ));
      });
  }

  componentDidMount() {
    this.loadCategories();
  }

  onChangeItemName(e) {
    this.setState({ itemName: e.target.value });
  }
  onChangeCategory(e) {
    this.setState({ category: e.target.value });
  }
  onChangeUnitPrice(e) {
    this.setState({ unitPrice: e.target.value });
  }
  onChangeStock(e) {
    this.setState({ stock: e.target.value });
  }
  onChangeDescription(e) {
    this.setState({ description: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const product = {
      itemName: this.state.itemName,
      category: this.state.category,
      unitPrice: this.state.unitPrice,
      stock: this.state.stock,
      description: this.state.description,
    };

    console.log(product);

    axios
      .post(URL.main+URL.addProduct , product)
      .then((res) => {
        console.log(res.data);
        alert(res.data, (window.location = URL.products ));
      })
      .catch((error) => {
        console.log(error);
        alert(error, (window.location = URL.products ));
      });
  }

  render() {
    return (
      <div className="viewProduct">
        <h1 className="title">New Product Page</h1>
        <div className="Container">
          <div className="detailsContainer">
            

            <div className="container">
              <AddProductCategory location={URL.addProduct}  />
            </div>
          </div>
          <div className="editContainer">
            <h1 className="editTitle">Add new Product</h1>
            <br />
            <br />
            <form action="" className="form" onSubmit={this.onSubmit}>
              <div className="editItems">
                <div className="leftItemContainer">
                  <label>Product Name</label>
                  <input
                    value={this.state.itemName}
                    onChange={this.onChangeItemName}
                    type="text"
                    required
                  ></input>
                  <br />
                  <label>Catergory</label>
                  <select
                    value={this.state.category}
                    onChange={this.onChangeCategory}
                    required
                    name="cars"
                    id="cars"
                    className="select"
                  >
                    {this.state.categoryList.map((c) => (
                      <option>{c.category}</option>
                    ))}
                  </select>
                  <br></br>
                  <label>Unit Price </label>
                  <input
                    value={this.state.unitPrice}
                    onChange={this.onChangeUnitPrice}
                    type="number"
                    required
                  ></input>
                  <br></br>
                  <label>Stock Amount</label>
                  <input
                    value={this.state.stock}
                    onChange={this.onChangeStock}
                    type="number"
                    required
                  ></input>
                  <br></br>
                  <label>Specifications</label>
                  <textarea
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                    rows="4"
                  ></textarea>
                  <br></br>
                </div>

                <div className="rightItemContainer">
                  <div className="upload">
                    <button type="submit" className="update">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddProduct;
