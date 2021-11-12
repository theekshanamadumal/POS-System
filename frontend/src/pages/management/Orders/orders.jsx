import "./order.css";
//import { orderRows } from "../../../dataCollection";
import { React, useState, useEffect } from "react";
import moment from "moment";
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
import URL from "../../../config";
import axios from "axios";
import authHeader from "../../../services/authHeader";
import PerfectScrollbar from "react-perfect-scrollbar";
import OrderListComponent from "../../../components/orderComp/orderList";

export default function Orders() {
  const [disabled, setDisabled] = useState(true);
  const [searchBy, setSearchBy] = useState("");

  const [paymentsData, setPaymentsData] = useState([]);

  const handleChange = (event) => {
    setSearchBy(event.target.value);
    setDisabled(false);
  };
  const [word, setWord] = useState("");

  const loadInvoices = () => {
    console.log("finded..........");
    axios
      .get(URL.invoice, { headers: authHeader() })
      .then((response) => {
        setPaymentsData(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert("An error Occured. Please Try again later", (window.location = URL.management));
      });
  };

  useEffect(() => {
    loadInvoices();
  }, []);

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
                    <MenuItem value="_id">Order ID</MenuItem>
                    <MenuItem value="shopName">Shop Name</MenuItem>
                    <MenuItem value="dateTime">Issued Date</MenuItem>
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
                      <h5>Payment Type</h5>
                    </TableCell>
                    <TableCell className="tbHeader">
                      <h5>Action</h5>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody className="tbBody">
                  {paymentsData
                    .sort((a, b) => (a.dateTime < b.dateTime ? 1 : -1))
                    .filter((val) => {
                      if (word === "") {
                        return val;
                      } else {
                        if (searchBy === "shopName") {
                          if (
                            val.shopId.shopName
                              .toLowerCase()
                              .trim()
                              .includes(word.toLowerCase().trim())
                          ) {
                            return val;
                          }
                        } else if (searchBy === "_id") {
                          if (
                            val[searchBy]
                              .substr(19)
                              .toLowerCase()
                              .trim()
                              .includes(word.toLowerCase().trim())
                          ) {
                            return val;
                          }
                        } else {
                          console.log(val);
                          console.log(word);
                          console.log(
                            moment(val.dateTime).format("DD/MM/YYYY")
                          );
                          if (
                            moment(val.dateTime)
                              .format("DD/MM/YYYY")
                              .toLowerCase()
                              .trim()
                              .includes(word.toLowerCase().trim())
                          ) {
                            return val;
                          }
                        }
                      }
                    })
                    .map((val) => {
                      return (
                        console.log("invoices------------:"),
                        console.log(paymentsData),
                        console.log("id.........*********"),
                        console.log(val),
                        (<OrderListComponent orders={val} key={val._id} />)
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
