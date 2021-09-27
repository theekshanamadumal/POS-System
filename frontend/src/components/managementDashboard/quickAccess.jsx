import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class QuickAccess extends Component {
    render() {
        return (
            <div>
                <Link to="/management/addSalesPerson">
                    <button className="addUser" style={{marginRight:"10px"}}>Add New SalesPerson</button>
                </Link>
                <Link to="/management/addProductCategory">
                    <button className=" addUser" style={{marginRight:"10px"}}>Add New Product Category</button>
                </Link>
                <Link to="/management/addProduct">
                    <button className="addUser" style={{marginRight:"10px"}}>Add New Product</button>
                </Link>
                <Link to="/management/shops/addshop">
                    <button className="addUser" style={{marginRight:"10px"}}>Add New shop</button>
                </Link>
                <Link to="/management/routes/addroute">
                    <button className="addUser">Add New Route</button>
                </Link>
            </div>
        )
    }
}
