import "./info.css";
import React from "react";
import { Storefront, PeopleAlt } from "@material-ui/icons";
export default function Info() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Product Details</span>
        <hr className="line"></hr>
        <div className="featuredContainer">
          <span className="featuredDetail">Total item categories</span>
          <span className="featuredAmount">33</span>
        </div>
        <div className="featuredContainer">
          <span className="featuredDetail">Total items in stock</span>
          <span className="featuredAmount">416</span>
        </div>
        <div className="featuredContainer">
          <span className="LowDetail">Low stock items</span>
          <span className="LowAmount">11</span>
        </div>
        <div className="featuredContainer">
          <span className="OutDetail">Out of stock items</span>
          <span className="OutAmount">2</span>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Order Details</span>
        <hr className="line"></hr>
        <div className="featuredContainer">
          <span className="featuredDetail">Total Orders</span>
          <span className="featuredAmount">33</span>
        </div>
        <div className="featuredContainer">
          <span className="featuredDetail">Shipped orders</span>
          <span className="featuredAmount">416</span>
        </div>
        <div className="featuredContainer">
          <span className="LowDetail">Orders to be shipped</span>
          <span className="LowAmount">11</span>
        </div>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">No of users</span>
        <hr className="line"></hr>
        <div className="featuredUser">
          <div className="featuredUs">
            <PeopleAlt fontSize="large" className="Icon" />
            <div className="descript">Total Salespersons</div>
            <div className="count">23</div>
          </div>
          <div className="featuredUs">
            <Storefront fontSize="large" className="Icon" />
            <div className="descript">
              Total<br></br> Shops{" "}
            </div>
            <div className="count">180</div>
          </div>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredContainer">
          <span className="featuredMoney">$29.4</span>
          <span className="featuredRate">11.8</span>
        </div>
        <div className="description">Compared with last month</div>
      </div>
    </div>
  );
}
