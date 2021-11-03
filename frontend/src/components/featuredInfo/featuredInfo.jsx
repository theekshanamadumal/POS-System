import { React, useState, useEffect } from "react";
import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { Storefront, PeopleAlt } from "@material-ui/icons";
import URL from "../../config";
import axios from "axios";

export default function FeaturedInfo() {
  const [salespersonCount, setSalespersonCount] = useState(0);
  const [managersCount, setManagersCount] = useState(0);

  useEffect(() => {
    axios
      .all([
        axios.get(URL.main + URL.salesperson + "/count"),
        axios.get(URL.main + URL.managerCount),
        
      ])
      .then(
        axios.spread((...responses) => {
          setSalespersonCount(responses[0].data);
          setManagersCount(responses[1].data);
          
        })
      )
      .catch((error) => {
        console.log(error);
        alert(error, (window.location = URL.management));
      });
  }, []);
  return (
    <div className="featured">
      {/*<div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredMoneyRate">
            -11.4
            <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last Month</span>
      </div>*/}
      <div className="featuredItem d-flex">
        <div className="featuredUs">
              <Link to={URL.user} className="linkTo">
                <PeopleAlt fontSize="large" className="Icon" />
                <div className="descript">Total<br></br> Managers{" "}</div>
                <div className="count">{managersCount}</div>
              </Link>
            </div>

            <div className="featuredUs">
              <Link to={URL.user} className="linkTo">
                <Storefront fontSize="large" className="Icon" />
                <div className="descript">
                  Total Salespersons
                </div>
                <div className="count">{salespersonCount}</div>
              </Link>
            </div>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,415</span>
          <span className="featuredMoneyRate">
            2.4
            <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last Month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,215</span>
          <span className="featuredMoneyRate">
            -11.4
            <ArrowUpward className="featuredIcon positive" />
          </span>
        </div>
        <span className="featuredSub">Compared to last Month</span>
      </div>
    </div>
  );
}
