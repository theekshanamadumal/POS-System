import PropTypes from "prop-types";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import "./orderList.css";
import React from "react";
import moment from "moment";

const OrderList = ({ orders, ...rest }) => {

  return (
    <Card {...rest} className="card">
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
              {orders.map((d) => (
                <TableRow hover key={d.id}>
                  <TableCell>{d.id}</TableCell>
                  <TableCell>{d.shopName}</TableCell>
                  <TableCell>{d.totalAmount}</TableCell>
                  <TableCell>
                    {moment(d.orderedDate).format("DD/MM/YYYY")}
                  </TableCell>
                  <TableCell>
                    <div className="actions">
                      <Link to={"/management/order/" + d.id}>
                        <button className="editButt">View</button>
                      </Link>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
    </Card>
  );
};

OrderList.propTypes = {
  orders: PropTypes.array.isRequired,
};
export default OrderList;
