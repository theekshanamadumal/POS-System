import { useState } from "react";
import PropTypes from "prop-types";
import moment from "moment";
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
import { Delete } from "@material-ui/icons";
import "../list.css";
import React from "react";


const RouteList = (props) => {
  const d=props.routes;
  return (
    <TableRow hover key={d._id}>
      <TableCell>{d._id.substr(19)}</TableCell>
      <TableCell>{d.origin}</TableCell>
      <TableCell>{d.destination}</TableCell>
      <TableCell>{d.noOfShops || 0}</TableCell>
      {/* <TableCell>
          {moment(d.lastVisited).format('DD/MM/YYYY')}
      </TableCell> */}
      <TableCell>
          <div className="actions">
          <Link to={"/management/routes/" + d._id}>
              <button className="editButt">View / Edit</button>
          </Link>
          <Delete
              className="deleteButt"
              onClick={() => props.handleDelete(d._id)}
          />
          </div>
      </TableCell>
    </TableRow>
  );
};

RouteList.propTypes = {
  routes: PropTypes.array.isRequired,
};
export default RouteList;
