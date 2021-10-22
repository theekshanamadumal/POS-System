/*import React, { Component } from "react";
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
*/
//////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
//your one
////////////////////////////////////////////////////////////////////
import "./order.css";
import { orderRows } from "../../../dataCollection";
import { React, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import { Search as SearchIcon } from "react-feather";
import "../../toolbar.css";
import axios from "axios";
import PerfectScrollbar from "react-perfect-scrollbar";
import OrderListComponent from "../../../components/orderComp/orderList";

export default function Orders() {
  const [disabled, setDisabled] = useState(true);
  const [searchBy, setSearchBy] = useState("");

  const handleChange = (event) => {
    setSearchBy(event.target.value);
    setDisabled(false);
  };
  const [word, setWord] = useState("");
  return (
    <div className="background">
      <div className="spacing">
        <div className="containerSale">
          <h1 className="heading">Orders</h1>
        </div>
        <Box className="search" sx={{ mt: 1 }}>
          <Card>
            <CardContent className="row">
              <Box sx={{ maxWidth: 500 }} className="col">
                <FormControl
                  fullWidth
                  variant="outlined"
                  style={{ backgroundColor: "  rgb(209, 209, 224)" }}
                >
                  <InputLabel id="demo-simple-select-label">
                    Search By:
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={searchBy}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value="id">Order ID</MenuItem>
                    <MenuItem value="shopName">Shop Name</MenuItem>
                    <MenuItem value="orderedDate">Issued Date</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ maxWidth: 500 }} className="col">
                <TextField
                  fullWidth
                  style={{ backgroundColor: "  rgb(209, 209, 224)" }}
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SvgIcon fontSize="small" color="action">
                          <SearchIcon />
                        </SvgIcon>
                      </InputAdornment>
                    ),
                  }}
                  placeholder="Search Product"
                  variant="outlined"
                  disabled={disabled ? "disabled" : ""}
                  onChange={(e) => {
                    setWord(e.target.value);
                  }}
                />
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Card className="card">
          <PerfectScrollbar>
            <Box sx={{ minWidth: 1050 }}>
              <Table>
                <TableHead sx={{ innerHeight: 100 }}>
                  <TableRow>
                    <TableCell className="tbHeader">
                      <h5>ID</h5>
                    </TableCell>
                    <TableCell className="tbHeader">
                      <h5>Shop Name</h5>{" "}
                    </TableCell>
                    <TableCell className="tbHeader">
                      <h5>Total Amount</h5>
                    </TableCell>
                    <TableCell className="tbHeader">
                      <h5>Issued Date</h5>
                    </TableCell>
                    <TableCell className="tbHeader">
                      <h5>Action</h5>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody className="tbBody">
                  {orderRows
                    .filter((val) => {
                      if (word === "") {
                        return val;
                      } else {
                        console.log(val);
                        console.log(searchBy);
                        if (
                          val[searchBy]
                            .toLowerCase()
                            .trim()
                            .includes(word.toLowerCase().trim())
                        ) {
                          return val;
                        }
                      }
                    })
                    .map((val) => {
                      return (
                        console.log(val.id),
                        (<OrderListComponent orders={val} key={val.id} />)
                      );
                    })}
                </TableBody>
              </Table>
            </Box>
          </PerfectScrollbar>
        </Card>
      </div>
    </div>
  );
}
