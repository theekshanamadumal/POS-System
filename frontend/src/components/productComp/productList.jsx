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

const ProductList = (props) => {
  const d=props.products;
  
  return (
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
            onClick={() => props.handleDelete(d._id)}
          />
        </div>
      </TableCell>
    </TableRow>
  );
};

ProductList.propTypes = {
  Products: PropTypes.array.isRequired,
};
export default ProductList;
