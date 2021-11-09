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
    <TableRow hover key={d._id}>
      <TableCell>{d._id.substr(19)}</TableCell>
      <TableCell>{d.shopId.shopName}</TableCell>
      <TableCell>{d.total.toFixed(2)}{" "}</TableCell>
      <TableCell>
        {moment(d.dateTime).format("DD/MM/YYYY")}
      </TableCell>
      <TableCell align="justify">{d.isOnline?"Online":"Cash"}</TableCell>
      <TableCell>
        <div className="actions">
          <Link to={URL.orderComp + d._id}>
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




