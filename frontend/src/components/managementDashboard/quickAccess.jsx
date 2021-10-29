import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import URL from "../../config";

export default class QuickAccess extends Component {
    render() {
        return (
            <div className="row">
                <Link className="col-md-2 mx-3 mx-4" to={URL.addSalesperson}>
                    <button className="addUser" style={{marginRight:"10px"}}>Add New SalesPerson</button>
                </Link>
                <Link className="col-md-2 mx-3" to={URL.addProductCategory}>
                    <button className=" addUser" style={{marginRight:"10px"}}>Add New Product Category</button>
                </Link>
                <Link className="col-md-2 mx-3" to={URL.addProduct}>
                    <button className="addUser" style={{marginRight:"10px"}}>Add New Product</button>
                </Link>
                <Link className="col-md-2 mx-3" to={URL.addShops}>
                    <button className="addUser" style={{marginRight:"10px"}}>Add New shop</button>
                </Link>
                <Link className="col-md-2 mx-3" to={URL.addRoute}>
                    <button className="addUser">Add New Route</button>
                </Link>
            </div>
        )
    }
}
