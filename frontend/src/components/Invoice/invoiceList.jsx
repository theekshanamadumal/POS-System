import PropTypes from "prop-types";
import {
  Paper,
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

const InvoiceList = ({ invoices, transactions, ...rest }) => {
  console.log("transactions", transactions[0].id.itemName);

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
              {}
              {/*{transactions
                //.filter((item) => item.id.unitPrice > 0)
                // .sort((a, b) => (a.name > b.productName ? 1 : -1))
                .map((item, index) => {
                  return (
                    <TableRow key={item.id}>
                      <TableCell align="center">{index + 1}</TableCell>
                      <TableCell align="center">{item.id}</TableCell>
                      <TableCell align="right">
                        {" "}
                        {item.quantity.toFixed(2)}{" "}
                      </TableCell>
                      <TableCell align="right">{item.quantity} </TableCell>
                      <TableCell align="right">
                        {(item.quantity * item.quantity).toFixed(2)}{" "}
                      </TableCell>
                    </TableRow>
                  );
                })}*/}

              <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell align="right">
                  <strong>Total Amount in LKR</strong>
                </TableCell>
                <TableCell align="right">{invoices.total}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
};

export default InvoiceList;
