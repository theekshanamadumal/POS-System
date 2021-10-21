import PropTypes from "prop-types";
import {
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import "./orderList.css";
import React from "react";
import moment from "moment";
import URL from "../../config";

const OrderList = (props) => {
  const d=props.orders;
  return (
    <TableRow hover key={d.id}>
      <TableCell>{d.id}</TableCell>
      <TableCell>{d.shopName}</TableCell>
      <TableCell>{d.totalAmount}</TableCell>
      <TableCell>
        {moment(d.orderedDate).format("DD/MM/YYYY")}
      </TableCell>
      <TableCell>
        <div className="actions">
          <Link to={URL.orderComp + d.id}>
            <button className="editButt">View</button>
          </Link>
        </div>
      </TableCell>
    </TableRow>
  );
};

OrderList.propTypes = {
  orders: PropTypes.array.isRequired,
};
export default OrderList;
