import React, { Component } from "react";
import axios from "axios";
import URL from "../../../config";
import authHeader from "../../../services/authHeader";
import "./viewProducts.css";
import { withRouter } from "react-router";

export default withRouter(
  class viewProducts extends Component {
    constructor(props) {
      super(props);
      console.dir(props);
      this.onChangeItemName = this.onChangeItemName.bind(this);
      this.onChangeCategory = this.onChangeCategory.bind(this);
      this.onChangeUnitPrice = this.onChangeUnitPrice.bind(this);
      this.onChangeStock = this.onChangeStock.bind(this);
      this.onChangeDescription = this.onChangeDescription.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.loadCategories = this.loadCategories.bind(this);

      this.state = {
        product: [],
        categoryList: [],
        dataId: "",
        idNumber: "",
        itemName: "",
        category: "",
        unitPrice: "",
        stock: "",
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
          alert(error, (window.location =URL.products));
        });
    }
    componentDidMount() {
      this.dataId = this.props.match.params.id;

      console.log("dataId: ", this.dataId);
      axios
        .get(URL.main+URL.productComp+this.dataId,{ headers: authHeader() })
        .then((response) => {
          this.setState({
            product: response.data,
            idNumber: response.data._id,
            itemName: response.data.itemName,
            category: response.data.category,
            unitPrice: response.data.unitPrice,
            stock: response.data.stock,
            description: response.data.description,
          });
          console.log("response.data");
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
          alert(error, (window.location =URL.products));
        });

      this.loadCategories();
    }

    onChangeItemName(e) {
      this.setState({
        itemName: e.target.value,
      });
    }
    onChangeCategory(e) {
      this.setState({
        category: e.target.value,
      });
    }
    onChangeUnitPrice(e) {
      this.setState({
        unitPrice: e.target.value,
      });
    }
    onChangeStock(e) {
      this.setState({
        stock: e.target.value,
      });
    }
    onChangeDescription(e) {
      this.setState({
        description: e.target.value,
      });
    }

    onSubmit(e) {
      e.preventDefault();
      if (window.confirm("Confirm to Update?")) {
        const product = {
          itemName: this.state.itemName,
          category: this.state.category,
          unitPrice: this.state.unitPrice,
          stock: this.state.stock,
          description: this.state.description,
        };
  
        console.log(product);
  
        axios
          .post(
            URL.main+URL.updateProduct+ this.dataId,
            product,
            { headers: authHeader() }
          )
          .then((res) => {
            console.log(res.data);
            alert(res.data, (window.location = URL.products));
          })
          .catch((error) => {
            console.log(error);
            alert(error, (window.location = URL.products));
          });
      }
    }

    render() {
      return (
        <div className="viewSalesPerson">
          <div className="task">
            <h1 className="mainHead">Product Item</h1>
          </div>
          <div className="Container">
            <div className="detailsContainerSale">
              <div className="detailMain">
                <div className="idName">
                  <h2 className="name">{this.state.product.itemName}</h2>
                </div>
              </div>
              <div className="detailSub">
                <ul className="instructions">
                  <li className="contact">
                    ID Number :
                    <span className="value">
                      {String(this.state.product._id).substr(19)}
                    </span>
                  </li>
                  <li className="contact">
                    Category :
                    <span className="value">{this.state.product.category}</span>
                  </li>
                  <li className="contact">
                    Unit Price : Rs
                    <span className="value">
                      {this.state.product.unitPrice}
                    </span>
                  </li>
                  <li className="contact">
                    Stock Amount :
                    <span className="value">{this.state.product.stock}</span>
                  </li>
                  <li className="">
                    <div> Description :</div> <br />
                    <div>
                      <textarea
                        cols="35"
                        rows="6"
                        value={this.state.description}
                      ></textarea>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="editContainer">
              <h1 className="subTitle">Edit</h1>
              <br></br>
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
                        Update
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
);
