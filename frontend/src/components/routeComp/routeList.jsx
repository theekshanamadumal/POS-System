import { useState } from "react";
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
import { Delete } from "@material-ui/icons";
import "../list.css";
import React from "react";

const RouteList = ({ routes, ...rest }) => {
  const [limit, setLimit] = useState(10);

  const [data, setData] = useState(routes);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
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
                <TableCell className="tbHeader">
                  <h5>Action</h5>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="tbBody">
              {data.slice(0, limit).map((d) => (
                <TableRow hover key={d.id}>
                  <TableCell>{d.id}</TableCell>
                  <TableCell>{d.origin}</TableCell>
                  <TableCell>{d.destination}</TableCell>
                  <TableCell>{d.noOfShops}</TableCell>
                  <TableCell>
                    <div className="actions">
                      <Link to={"/management/routes/" + d.id}>
                        <button className="editButt">View / Edit</button>
                      </Link>
                      <Delete
                        className="deleteButt"
                        onClick={() => handleDelete(d.id)}
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
