import React from "react";
import moment from "moment";

import "./invoiceDetails.css";
import { parseJSON } from "date-fns/esm";

export default function invoiceDetails({ invoiceData, sellerData, shopName }) {
  return (
    <div className="invoiceDetails">
      <h1 className="invoicehead">Invoice</h1>
      <div className="invoiceContainer">
        <div className="leftCont">
          <p className="detailInv">
            {" "}
            Invoice ID :
            <span className="value">{String(invoiceData._id).substr(19)}</span>
          </p>
          <p className="detailInv">
            {" "}
            Shop :<span className="value"> {shopName}</span>
          </p>
          <p className="detailInv">
            Seller :
            <span className="value">
              {sellerData.firstName + " " + sellerData.lastName}
            </span>
          </p>
          <p className="detailInv">
            Issued Date :
            <span className="value">
              {moment(invoiceData.sellerId).format("DD/MM/YYYY")}
            </span>
          </p>
        </div>
        <div className="rightCont">
          <img
            className="invImg"
            src="https://www.logolynx.com/images/logolynx/a8/a801ffe909f4b0e9f88d9bbb5447ac12.png"
            alt=""
          ></img>
        </div>
      </div>
    </div>
  );
}
