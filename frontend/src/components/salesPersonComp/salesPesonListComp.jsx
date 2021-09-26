import { useState } from "react";
import React from "react";
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
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { Delete } from "@material-ui/icons";
import "../list.css";
import axios from "axios";
import moment from "moment";

const SalesPersonList = ({ salesPerson, ...rest }) => {
  const limit = 10;

  //const [data,setData]=useState(salesPerson);
  //const [data, setData] = useState(salesPerson);

  /*const handleDelete=(idNumber)=>{
    setData(data.filter((item)=>item.idNumber !== idNumber))
  };*/
  const handleDelete = (id) => {
    //setData(data.filter((item) => item.id !== id));
    axios
      .delete("http://localhost:3001/management/salesperson/" + id)
      .then((response) => {
        console.log(response.data);
        alert(response.data, (window.location = "/management/salesperson"));
      })
      .catch((error) => {
        console.log(error);
        alert(error, (window.location = "/management"));
      });

    //setData(data.filter((el) => el._id !== id));
  };

  return (
    <Card {...rest} className="card">
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead sx={{ innerHeight: 100 }}>
              <TableRow>
                <TableCell className="tbHeader">
                  <h5>ID Number</h5>
                </TableCell>
                <TableCell className="tbHeader">
                  <h5>Name</h5>{" "}
                </TableCell>
                <TableCell className="tbHeader">
                  <h5>Email</h5>
                </TableCell>
                <TableCell className="tbHeader">
                  <h5>Phone</h5>
                </TableCell>
                <TableCell className="tbHeader">
                  <h5>City</h5>
                </TableCell>
                <TableCell className="tbHeader">
                  <h5>Joined Date</h5>
                </TableCell>
                <TableCell className="tbHeader">
                  <h5>Action</h5>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="tbBody">
              {salesPerson.map((d) => (
                <TableRow hover key={d.idNumber}>
                  <TableCell>{d.idNumber}</TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <Avatar src={d.avatar} sx={{ mr: 2 }}></Avatar>
                      <Typography color="textPrimary" variant="body1">
                        {`   ${d.firstName} ${d.lastName}`}
                      </Typography>
                    </Box>
                  </TableCell>

                  <TableCell color="textPrimary" variant="body1">
                    {d.email}
                  </TableCell>
                  <TableCell>{d.phoneNumber}</TableCell>
                  <TableCell>{d.city}</TableCell>
                  <TableCell>
                    {moment(d.joinedDate).format("DD/MM/YYYY")}
                  </TableCell>
                  <TableCell>
                    <div className="actions">
                      <Link to={"/management/salesPerson/" + d._id}>
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

SalesPersonList.propTypes = {
  customers: PropTypes.array.isRequired,
};

export default SalesPersonList;
