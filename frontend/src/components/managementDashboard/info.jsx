import "./info.css";
import React from 'react';
import {Storefront,PeopleAlt} from '@material-ui/icons';
import SalesPieChart from "./salesPieChart";
import BestPerform from "./bestPerform";
import { bestPerform } from "..//../dataCollection";
import { Link } from "react-router-dom";
import URL from "../../config";

export default function Info() {
    return (
        <div className="container featured">
        <div className="row">

            <div className="col-sm-3.8 featuredItem1">
                <SalesPieChart />
            </div>
            <div className="col-sm-3.8 featuredItem2">
                
                <div className="up">
                    <BestPerform bestPerform={bestPerform} />
                </div>
            </div>
            
            
            <div className="col-sm-3.8 featuredItem3">
                <div className="up">
                    <span className="featuredTitle">No of users</span>
                    <hr className="line"></hr>
                    <div className="featuredUser">
                        <div className="featuredUs">
                            <Link to={URL.salesperson} className="linkTo">
                                <PeopleAlt fontSize="large" className="Icon" />
                                <div className="descript">Total Salespersons</div>
                                <div className="count">23</div>
                            </Link>
                        </div>
                        
                        <div className="featuredUs">
                            <Link to={URL.shops} className="linkTo">
                                <Storefront fontSize="large" className="Icon" />
                                <div className="descript">Total<br></br> Shops </div>
                                <div className="count">180</div>
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
                    </Link>
                </div>
            </div>

            </div>
            
            
        </div>
    )
}
