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

const InvoiceList = ({ invoices, transactions,total, ...rest }) => {
  return (
    <Container maxWidth="md" className="tableCont pt-2 pb-5">
      <Paper>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead >
              <TableRow> 
                <TableCell style={{backgroundColor:"#b4b3b3"}} align="center"></TableCell>
                <TableCell style={{backgroundColor:"#b4b3b3"}} align="center">Product Name</TableCell>
                <TableCell style={{backgroundColor:"#b4b3b3"}} align="right">Unit Price</TableCell>
                <TableCell style={{backgroundColor:"#b4b3b3"}} align="right">Quantity</TableCell>
                <TableCell style={{backgroundColor:"#b4b3b3"}} align="right">Sub Total</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {transactions
                .filter((im) => im.id.unitPrice > 0)
                .sort((a, b) => (a.id.itemName > b.id.itemName ? 1 : -1))
                .map((e,index)=>(
                <TableRow hover key={e.id._id}>
                  <TableCell align="center">{index + 1}</TableCell>
                  <TableCell align="center">{e.id.itemName}</TableCell>
                  <TableCell align="right">{e.id.unitPrice.toFixed(2)}{" "}</TableCell>
                  <TableCell align="right">{e.quantity} </TableCell>
                  <TableCell align="right">{(e.id.unitPrice * e.quantity).toFixed(2)}{" "} </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell align="right">
                  <strong>Total Amount in LKR</strong>
                </TableCell>
                <TableCell align="right"><strong>{total}</strong></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
};

export default InvoiceList;
