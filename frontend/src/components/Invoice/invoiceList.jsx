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

const InvoiceList = ({ invoices, ...rest }) => {
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
              {invoices.transactions
                //.filter((item) => item.id.unitPrice > 0)
                // .sort((a, b) => (a.name > b.productName ? 1 : -1))
                .map((item, index) => {
                  return (
                    <TableRow key={item.id._id}>
                      <TableCell align="center">{index + 1}</TableCell>
                      <TableCell align="center">{item.id.itemName}</TableCell>
                      <TableCell align="right">
                        {" "}
                        {item.id.unitPrice.toFixed(2)}{" "}
                      </TableCell>
                      <TableCell align="right">{item.quantity} </TableCell>
                      <TableCell align="right">
                        {(item.id.unitPrice * item.quantity).toFixed(2)}{" "}
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
                  {invoices.total}
                  {/*invoices
                    .map((item) => item.unitPrice)
                    .reduce((acc, value) => acc + value)
                  .toFixed(2)*/}{" "}
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
