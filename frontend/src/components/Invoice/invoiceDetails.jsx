import React from "react";
import moment from "moment";

import "./invoiceDetails.css";
import { parseJSON } from "date-fns/esm";

export default function invoiceDetails({ invoiceData}) {
  const jsonInvoice=JSON.parse(invoiceData);
  return (
    <div className="invoiceDetails">
      <h1 className="invoicehead">Invoice</h1>
      <div className="invoiceContainer">
        <div className="leftCont">
        {console.log("&&&&&&****")};
        {console.log((invoiceData))}
        {console.log(typeof invoiceData)}
        {console.log(jsonInvoice)}
        
          {/*<p className="detailInv">
            {" "}
            Invoice ID :
            <span className="value">{String(JSON.parse(invoiceData)._id).substr(19)}</span>
          </p>
          <p className="detailInv">
            {" "}
            Shop :<span className="value"> {JSON.parse(invoiceData).shopId.shopName}</span>
          </p>
          <p className="detailInv">
            Seller :
            <span className="value">
              {JSON.parse(invoiceData).sellerId.firstName + " " + JSON.parse(invoiceData).sellerId.firstName.lastName}
            </span>
          </p>
          <p className="detailInv">
            Issued Date :
            <span className="value">
              {moment(invoiceData.sellerId).format("DD/MM/YYYY")}
            </span>
          </p>*/}
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
