import { useState } from "react";
import PropTypes from "prop-types";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Avatar,
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

const ProductList = ({ products, ...rest }) => {
  const [limit, setLimit] = useState(10);

  const [data, setData] = useState(products);

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
                  <h5>ID</h5>
                </TableCell>
                <TableCell className="tbHeader">
                  <h5>Name</h5>{" "}
                </TableCell>
                <TableCell className="tbHeader">
                  <h5>Image</h5>
                </TableCell>
                <TableCell className="tbHeader">
                  <h5>Stock</h5>
                </TableCell>
                <TableCell className="tbHeader">
                  <h5>UnitPrice</h5>{" "}
                </TableCell>
                <TableCell className="tbHeader">
                  <h5>Active</h5>
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
                  <TableCell>{d.productName}</TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <Avatar src={d.avatar} sx={{ mr: 2 }}></Avatar>
                    </Box>
                  </TableCell>
                  <TableCell>{d.amount}</TableCell>
                  <TableCell>{d.unitPrice}</TableCell>
                  <TableCell>{d.active}</TableCell>
                  <TableCell>
                    <div className="actions">
                      <Link to={"/management/products/" + d.id}>
                        <button className="editButt"><span className="editButtspan" >View / Edit</span></button>
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

ProductList.propTypes = {
  Products: PropTypes.array.isRequired,
};
export default ProductList;
