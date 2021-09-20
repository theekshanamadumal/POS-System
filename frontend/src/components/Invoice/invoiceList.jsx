import { useState } from "react";
import PropTypes from "prop-types";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Avatar,
  Paper,
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import "../list.css";
import React from "react";
import { Container } from "@material-ui/core";
import TableContainer from "@material-ui/core/TableContainer";

const InvoiceList = ({ invoices, ...rest }) => {
  const [limit, setLimit] = useState(10);

  const [data, setData] = useState(invoices);

  const [total, setTotal] = useState();

  const reducer = (acc, value) => acc + value;

  return (
    <Container maxWidth="md" className="tableCont">
      <Paper>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="center">No</TableCell>
                <TableCell align="center">Product Name</TableCell>
                <TableCell align="right">Unit Price</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Sub Total</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {invoices
                .slice(0, limit)
                .filter((item) => item.unitPrice > 0)
                .sort((a, b) => (a.name > b.productName ? 1 : -1))
                .map((item, index) => {
                  return (
                    <TableRow key={item.productName}>
                      <TableCell align="center">{index + 1}</TableCell>
                      <TableCell align="center">{item.productName}</TableCell>
                      <TableCell align="right">
                        {" "}
                        {item.unitPrice.toFixed(2)}{" "}
                      </TableCell>
                      <TableCell align="right">{item.quantity} </TableCell>
                      <TableCell align="right">
                        {(item.unitPrice * item.quantity).toFixed(2)}{" "}
                      </TableCell>
                    </TableRow>
                  );
                })}
              <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell align="right">
                  <strong>Total Amount in LKR</strong>
                </TableCell>
                <TableCell align="right">
                  {invoices
                    .map((item) => item.unitPrice)
                    .reduce((acc, value) => acc + value)
                    .toFixed(2)}{" "}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
};

InvoiceList.propTypes = {
  Products: PropTypes.array.isRequired,
};
export default InvoiceList;
