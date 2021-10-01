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
import axios from "axios";

const ProductList = ({ products, ...rest }) => {

  const handleDelete = (id) => {
    console.log("data send to back");
    console.log(id);
    axios
      .delete("http://localhost:3001/management/product/" + id)
      .then((response) => {
        console.log(response.data);
        alert(response.data, (window.location = "/management/products"));
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
                  <h5>Item ID</h5>
                </TableCell>
                <TableCell className="tbHeader">
                  <h5>Item Name</h5>{" "}
                </TableCell>
                <TableCell className="tbHeader">
                  <h5>Category</h5>
                </TableCell>
                <TableCell className="tbHeader">
                  <h5>Unit Price</h5>
                </TableCell>
                <TableCell className="tbHeader">
                  <h5>Stock</h5>{" "}
                </TableCell>
                <TableCell className="tbHeader">
                  <h5>Action</h5>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="tbBody">
              {products.map((d) => (
                <TableRow hover key={d._id}>
                  <TableCell>{d._id.substr(19)}</TableCell>
                  <TableCell>{d.itemName}</TableCell>
                  <TableCell>{d.category}</TableCell>
                  <TableCell>{d.unitPrice}</TableCell>
                  <TableCell>{d.stock}</TableCell>
                  <TableCell>
                    <div className="actions">
                      <Link to={"/management/products/" + d._id}>
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

ProductList.propTypes = {
  Products: PropTypes.array.isRequired,
};
export default ProductList;
