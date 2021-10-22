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
    this.state = { invoiceData: [], invoiceID: "" ,shopName:"",transactions:[]};
    this.loadInvoices=this.loadInvoices.bind(this);
  }
  
  loadInvoices() {
    axios
      .get(URL.invoice + "/" + this.state.invoiceID)
      .then((response) => {
        this.setState({
          invoiceData: response.data,
        });
        this.setState({
          shopName:response.data.shopId.shopName
        })
        this.setState({
          transactions:response.data.transactions
        })
        console.log(this.state.transactions)
        console.log("-------invoice------------:");
        
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
        {console.log("&&&&&&&&&&")}
        {console.log(this.state.invoiceData)}
        {console.log(this.state.invoiceData.shopId)}
        {console.log(this.state.invoiceData.transactions)}
        {console.log(Object.values(this.state.invoiceData)[5] )}
        {console.log(typeof Object.values(this.state.invoiceData)[5])}
        {console.log(typeof this.state.transactions)}
        {console.log(Object.values(this.state.transactions)[0])}
          <InvoiceDetails
            className="contain"
            invoiceData={this.state.invoiceData}
            shopName={this.state.shopName}
          />
          <InvoiceList className="invTab" invoices={this.state.invoiceData} transactions={this.state.transactions} />
          
        </div>
      </div>
    );
  }
}
)
