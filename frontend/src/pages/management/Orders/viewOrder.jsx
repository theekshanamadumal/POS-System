import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router";
import URL from "../../../config";
import "./viewOrder.css";

import InvoiceDetails from "../../../components/Invoice/invoiceDetails";
import InvoiceList from "../../../components/Invoice/invoiceList";

//import { invoiceRows } from "../../../dataCollection";

export default withRouter(
  class viewOrder extends Component {
    constructor(props) {
      super(props);
      this.state = {
        invoiceData: [],
        //sellerData: "",
        invoiceID: "",
        //shopName: "",
        //transactions: "",
      };
      this.loadInvoices = this.loadInvoices.bind(this);
    }

    loadInvoices() {
      axios
        .get(URL.invoice + "/" + this.state.invoiceID)
        .then((response) => {
          const st=JSON.stringify(response.data);
          const jsObj=JSON.parse(st);
          this.setState({
            
            invoiceData: (jsObj),
            //sellerData: response.data.sellerId,
            //shopName: response.data.shopId.shopName,
            //transactions: JSON.parse(localStorage.getItem('transactions')),
            
          });
          console.log("***********")
          console.log(this.state.invoiceData)
          console.log((this.state.invoiceData).transactions[0].id.itemName)
          
        })
        .catch((error) => {
          console.log(error);
          alert(error, (window.location = URL.management));
        });
    }

    componentDidMount() {
      console.log(this.props.match.params.id);
      this.state.invoiceID = this.props.match.params.id;
      this.loadInvoices();
    }

    render() {
      return (
        <div className="viewOrder">
          <div className="detailCont">
          {console.log((this.state.invoiceData))}
          {console.log("type",typeof this.state.invoiceData)}
          
          
            {/*<InvoiceDetails
              className="contain"
              invoiceData={this.state.invoiceData}
              //sellerData={this.state.sellerData}
              //shopName={this.state.shopName}
            />
            <InvoiceList
              className="invTab"
              invoices={this.state.invoiceData}
              //transactions={this.state.transactions}
            />*/}
          </div>
        </div>
      );
    }
  }
);
