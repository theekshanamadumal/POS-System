import React from "react";
import "./invoiceDetails.css";

export default function invoiceDetails({ invoiceData }) {
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
            Shop :<span className="value"> {"invoiceData.shopId._id"}</span>
          </p>
          <p className="detailInv">
            {" "}
            Issued Date : <span className="value"> 09/04/2021</span>
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
