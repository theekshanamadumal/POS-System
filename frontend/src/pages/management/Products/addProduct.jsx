import React, { Component } from "react";
import axios from "axios";
import "./addProduct.css";
import AddProductCategory from "./addProductCategory";
import URL from "../../../config";
import authHeader from "../../../services/authHeader";
import ReactTooltip from 'react-tooltip';

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
      .get(URL.main+URL.productCategory,{ headers: authHeader() })
      .then((response) => {
        this.setState({
          categoryList: response.data,
        });
        console.log("categories:");
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert("An error Occured. Please Try again later", (window.location = URL.products ));
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
    if (window.confirm("Confirm to Add Product?")) {
      const product = {
        itemName: this.state.itemName,
        category: this.state.category,
        unitPrice: this.state.unitPrice,
        stock: this.state.stock,
        description: this.state.description,
      };
  
      console.log(product);
  
      axios
        .post(URL.main+URL.addProduct , product,{ headers: authHeader() })
        .then((res) => {
          console.log(res.data);
          alert(res.data, (window.location = URL.products ));
        })
        .catch((error) => {
          console.log(error);
          alert(error, (window.location = URL.products ));
        });
    }
    
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
                    data-tip data-for='currtooltip'
                    value={this.state.unitPrice}
                    onChange={this.onChangeUnitPrice}
                    type="number"
                    required
                  ></input>
                  <ReactTooltip id='currtooltip' backgroundColor="rgba(156, 52, 52, 0.986)" effect='solid'>
                    <span>Must be in LKR</span>
                  </ReactTooltip>
                  <br></br>
                  <label>Stock Amount</label>
                  <input
                    data-tip data-for='stocktooltip'
                    value={this.state.stock}
                    onChange={this.onChangeStock}
                    type="number"
                    required
                  ></input>
                  <ReactTooltip id='stocktooltip' backgroundColor="rgba(156, 52, 52, 0.986)" effect='solid'>
                    <span>Must be greater than or equals to zero.</span>
                  </ReactTooltip>
                  <br></br>
                  <label>Specifications</label>
                  <textarea
                    data-tip data-for='desctooltip'
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                    rows="4"
                  ></textarea>
                  <ReactTooltip id='desctooltip' backgroundColor="rgba(156, 52, 52, 0.986)" effect='solid'>
                    <span>Enter All descriptions about this product<br></br>eg:- color , brand , warranty etc.</span>
                  </ReactTooltip>
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
