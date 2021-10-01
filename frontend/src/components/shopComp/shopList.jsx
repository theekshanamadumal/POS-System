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

const ShopList = ({ shops, routes, ...rest }) => {
  console.log("data send to list", shops);

  const handleDelete = (id) => {
    console.log("data send to back");
    console.log(id);
    axios
      .delete("http://localhost:3001/management/shop/" + id)
      .then((response) => {
        console.log(response.data);
        alert(response.data, (window.location = "/management/shops"));
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
                  <h5>ID</h5>
                </TableCell>
                <TableCell className="tbHeader">
                  <h5>Shop Name</h5>
                </TableCell>
                <TableCell className="tbHeader">
                  <h5>Phone No</h5>
                </TableCell>
                <TableCell className="tbHeader">
                  <h5>City</h5>
                </TableCell>
                <TableCell className="tbHeader">
                  <h5>Route</h5>
                </TableCell>
                <TableCell className="tbHeader">
                  <h5>Action</h5>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="tbBody">
              {shops.map((d) => (
                <TableRow hover key={d._id}>
                  <TableCell>{d._id.substr(19)}</TableCell>
                  <TableCell>{d.shopName}</TableCell>
                  <TableCell>{d.phoneNo}</TableCell>
                  <TableCell>{d.city}</TableCell>
                  <TableCell>
                    {routes.map((r) =>
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

ShopList.propTypes = {
  shops: PropTypes.array.isRequired,
};
export default ShopList;
