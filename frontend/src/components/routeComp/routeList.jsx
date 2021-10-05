import { useState } from "react";
import PropTypes from "prop-types";
import PerfectScrollbar from "react-perfect-scrollbar";
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
import axios from "axios";

const RouteList = ({ routes, ...rest }) => {
  const handleDelete = (id) => {
    console.log("data send to back");
    console.log(id);
    axios
      .delete("http://localhost:3001/management/salesRoute/" + id)
      .then((response) => {
        console.log(response.data);
        alert(response.data, (window.location = "/management/routes"));
      })
      .catch((error) => {
        console.log(error);
        alert(error, (window.location = "/management"));
      });
  };

  return (
    <Card {...rest} className="card">
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead sx={{ innerHeight: 100 }}>
              <TableRow>
                <TableCell className="tbHeader">
                  <h5>Route ID</h5>
                </TableCell>
                <TableCell className="tbHeader">
                  <h5>Origin</h5>
                </TableCell>
                <TableCell className="tbHeader">
                  <h5>Destination</h5>
                </TableCell>
                <TableCell className="tbHeader">
                  <h5>No of Shops</h5>
                </TableCell>
                {/* <TableCell className="tbHeader">
                  <h5>Last Visited</h5>
                </TableCell> */}
                <TableCell className="tbHeader">
                  <h5>Action</h5>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="tbBody">
              {routes.map((d) => (
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
                        onClick={() => handleDelete(d._id)}
                      />
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

RouteList.propTypes = {
  routes: PropTypes.array.isRequired,
};
export default RouteList;
