import React, { Component } from "react";
import axios from "axios";
import URL from "../../../config";
import "./viewOrder.css";

import InvoiceDetails from "../../../components/Invoice/invoiceDetails";
import InvoiceList from "../../../components/Invoice/invoiceList";

//import { invoiceRows } from "../../../dataCollection";

class viewOrder extends Component {
  constructor(props) {
    super(props);
    this.state = { invoiceData: "", invoiceID: "616da296d9f30137446e8548" };
  }

  loadInvoices() {
    axios
      .get(URL.invoice + "/" + this.state.invoiceID)
      .then((response) => {
        this.setState({
          invoiceData: response.data,
        });

        console.log("-------invoice------------:");
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert(error, (window.location = URL.management));
      });
  }

  componentDidMount() {
    this.loadInvoices();
  }

  render() {
    return (
      <div className="viewOrder">
        <div className="detailCont">
          <InvoiceDetails
            className="contain"
            invoiceData={this.state.invoiceData}
          />
          {/* <InvoiceList className="invTab" invoices={this.state.invoiceData} /> */}
        </div>
      </div>
    );
  }
}

export default viewOrder;
