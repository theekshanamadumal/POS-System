import "./info.css";
import React from 'react';
import {Storefront,PeopleAlt} from '@material-ui/icons';
import SalesPieChart from "./salesPieChart";
import BestPerform from "./bestPerform";
import { bestPerform } from "..//../dataCollection";

export default function Info() {
    return (
        <div className="featured">

            <div className="featuredItem1">
                <SalesPieChart />
            </div>
            <div className="featuredItem2">
                
                <div className="up">
                    <BestPerform bestPerform={bestPerform} />
                </div>
            </div>
            
            
            <div className="featuredItem3">
                <div className="up">
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
                            <div className="descript">Total<br></br> Shops </div>
                            <div className="count">180</div>
                        </div>
                    </div>
                </div>
                <div className="down">
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
            </div>


            
            
        </div>
    )
}
