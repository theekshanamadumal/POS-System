import React, { Component } from "react";
import axios from "axios";
import PublishIcon from "@material-ui/icons/Publish";
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
      <div className="newProduct">
        <h1 className="title">Add a New Product</h1>
        <form onSubmit={this.onSubmit} className="newProductForm">
          <div className="newProductItems">
            <div className="leftItemContainer">
              <div className="form-outline mb-4">
                <label className="form-label" for="form3Example1cg">
                  Name
                </label>
                <input
                  type="text"
                  required
                  id="form3Example1cg"
                  className="form-control form-control-lg"
                  value={this.state.itemName}
                  onChange={this.onChangeItemName}
                />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" for="form3Example3cg">
                  category
                </label>
                <select
                  required
                  value={this.state.description}
                  onChange={this.onChangeDescription}
                  type="text"
                  id="form3Example3cg"
                  className="form-control form-control-lg"
                >
                  <option value="volvo">Phone</option>
                  <option value="saab">Charger</option>
                  <option value="mercedes">Earphone</option>
                  <option value="audi">HeadPhone</option>
                </select>
              </div>
              <div className="form-row">
                <div className="form-outline mb-4  col">
                  <label className="form-label" for="form3Example4cg">
                    unit price
                  </label>
                  <input
                    value={this.state.stock}
                    onChange={this.onChangeStock}
                    type="number"
                    id="form3Example4cg"
                    className="form-control form-control-lg"
                  />
                </div>

                <div className="form-outline mb-4  col">
                  <label className="form-label" for="form3Example4cg">
                    stock amount
                  </label>
                  <input
                    value={this.state.stock}
                    onChange={this.onChangeStock}
                    type="number"
                    id="form3Example4cg"
                    className="form-control form-control-lg"
                  />
                </div>
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" for="form3Example3cg">
                  description
                </label>
                <input
                  type="textArea"
                  required
                  id="form3Example1cg"
                  className="form-control form-control-lg"
                  value={this.state.itemName}
                  onChange={this.onChangeItemName}
                />
              </div>
            </div>
            <div className="rightItemContainer">
              <div>
                <div className="image">
                  <img
                    src="https://images.unsplash.com/photo-1550684376-efcbd6e3f031?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
                    alt=""
                  ></img>
                  <br></br>
                  <label htmlFor="file" className="upload">
                    <PublishIcon />
                    Upload Image
                  </label>
                  <br></br>
                  <input
                    placeholder="img"
                    type="file"
                    id="file"
                    style={{ display: "none" }}
                  ></input>
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
        </form>
      </div>
    );
  }
}

export default AddProduct;

// import "./addProduct.css";
// import React from 'react';
// import PublishIcon from '@material-ui/icons/Publish';

// export default function NewProduct() {
//     return (
//         <div className="newProduct">
//             <h1 className="title">Add a New Product</h1>
//             <form className="newProductForm">
//                 <div className="newProductItems">
//                     <div className="leftItemContainer">
//                         <div className="leftItems">
//                             <label>Product Name</label><br></br>
//                             <input placeholder="huwavie nova 2i" type="text"></input>
//                         </div>
//                         <div className="leftItems">
//                             <label>Catergory</label><br></br>
//                             <select name="cars" id="cars" className="select">
//                                 <option value="volvo">Phone</option>
//                                 <option value="saab">Charger</option>
//                                 <option value="mercedes">Earphone</option>
//                                 <option value="audi">HeadPhone</option>
//                             </select>
//                         </div>
//                         <div className="leftItems">
//                             <label>Unit Price </label><br></br>
//                             <input placeholder="30000" type="number"></input>
//                         </div>
//                     </div>

//                     <div className="rightItemContainer">
//                         <div>
//                             <div className="image">
//                                 <img src="https://images.unsplash.com/photo-1550684376-efcbd6e3f031?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80" alt=""></img>
//                                 <br></br><label htmlFor="file" className="upload"><PublishIcon />Upload Image</label><br></br>
//                                 <input placeholder="img" type="file" id="file" style={{display:"none"} }></input>
//                             </div>
//                             <button>Add Product</button>
//                         </div>
//                     </div>
//                 </div>

//             </form>
//         </div>
//     )
// }
