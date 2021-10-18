import PropTypes from "prop-types";
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


const ShopList = (props) => {
  console.log("data send to list", props.shops);
  const d=props.shops;
  return (
    <TableRow hover key={d._id}>
      <TableCell>{d._id.substr(19)}</TableCell>
      <TableCell>{d.shopName}</TableCell>
      <TableCell>{d.phoneNo}</TableCell>
      <TableCell>{d.city}</TableCell>
      <TableCell>
          {props.routes.map((r) =>
          d.route === r._id
              ? "ID: " +
              String(r._id).substr(19) +
              " From " +
              r.origin +
              " To " +
              r.destination
              : null
          )}
      </TableCell>
      <TableCell>
          <div className="actions">
          <Link to={"/management/shops/" + d._id}>
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

ShopList.propTypes = {
  shops: PropTypes.array.isRequired,
};
export default ShopList;
