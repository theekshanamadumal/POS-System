import React, { Component } from "react";
import axios from "axios";
import URL from "../../../config";
import "./order.css";

//import { orderRows } from "../../../dataCollection";

import { Box } from "@material-ui/core";
import OrderList from "../../../components/orderComp/orderList";
import OrderToolBar from "../../../components/orderComp/orderToolbar";

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = { PaymentsData: [] };
  }

  loadInvoices() {
    axios
      .get(URL.invoice)
      .then((response) => {
        this.setState({
          PaymentsData: response.data,
        });
        console.log("invoices------------:");
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
      <div className="order">
        <OrderToolBar className="contain" />
        <Box sx={{ pt: 3 }} className="contain">
          <OrderList orders={this.state.PaymentsData} />
        </Box>
      </div>
    );
  }
}

export default Order;
