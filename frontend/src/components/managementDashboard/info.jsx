import "./info.css";
import { React, useState, useEffect } from "react";
import { Storefront, PeopleAlt } from "@material-ui/icons";
import SalesPieChart from "./salesPieChart";
import BestPerform from "./bestPerform";
//import { bestPerform } from "..//../dataCollection";
import { Link } from "react-router-dom";
import URL from "../../config";
import axios from "axios";
import authHeader from "../../services/authHeader";

export default function Info() {
  const [salespersonCount, setSalespersonCount] = useState(0);
  const [shopCount, setShopCount] = useState(0);
  const [totalStock, setTotalStock] = useState(0);
  const [categoryCount, setCategoryCount] = useState(0);
  const [lowProductsCount, setLowProductsCount] = useState(0);
  const [outProductsCount, setOutProductsCount] = useState(0);
  useEffect(() => {
    axios
      .all([
        axios.get(URL.main + URL.salesperson + "/count", {
          headers: authHeader(),
        }),
        axios.get(URL.main + URL.shops + "/count", { headers: authHeader() }),
        axios.get(URL.main + URL.products, { headers: authHeader() }),
        axios.get(URL.main + URL.productCategory + "/count", {
          headers: authHeader(),
        }),
        axios.get(URL.main + URL.products + "/total", {
          headers: authHeader(),
        }),
      ])
      .then(
        axios.spread((...responses) => {
          setSalespersonCount(responses[0].data);
          setShopCount(responses[1].data);
          setLowProductsCount(
            responses[2].data.filter((e) => e.stock < 50).length
          );
          setOutProductsCount(
            responses[2].data.filter((e) => e.stock === 0).length
          );
          setCategoryCount(responses[3].data);
          setTotalStock(responses[4].data);
        })
      )
      .catch((error) => {
        console.log(error);
        alert(error, (window.location = URL.management));
      });
  }, []);
  return (
    <div className="featured">
      <div className="featuredItem1">
        <SalesPieChart />
      </div>
      <div className="featuredItem2">
        <div className="up">
          <BestPerform />
        </div>
      </div>

      <div className="featuredItem3">
        <div className="up">
          <span className="featuredTitle">No of users</span>
          <hr className="line"></hr>
          <div className="featuredUser">
            <div className="featuredUs">
              <Link to={URL.salesperson} className="linkTo">
                <PeopleAlt fontSize="large" className="Icon" />
                <div className="descript">Total Salespersons</div>
                <div className="count">{salespersonCount}</div>
              </Link>
            </div>

            <div className="featuredUs">
              <Link to={URL.shops} className="linkTo">
                <Storefront fontSize="large" className="Icon" />
                <div className="descript">
                  Total<br></br> Shops{" "}
                </div>
                <div className="count">{shopCount}</div>
              </Link>
            </div>
          </div>
        </div>
        <div className="down">
          <Link to={URL.products} className="linkTo">
            <span className="featuredTitle">Product Details</span>
            <hr className="line"></hr>
            <div className="featuredContainer">
              <span className="featuredDetail">Total item categories</span>
              <span className="featuredAmount">{categoryCount}</span>
            </div>
            <div className="featuredContainer">
              <span className="featuredDetail">Total items in stock</span>
              <span className="featuredAmount">{totalStock}</span>
            </div>
            <div className="featuredContainer">
              <span className="LowDetail">Low stock items</span>
              <span className="LowAmount">{lowProductsCount}</span>
            </div>
            <div className="featuredContainer">
              <span className="OutDetail">Out of stock items</span>
              <span className="OutAmount">{outProductsCount}</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
