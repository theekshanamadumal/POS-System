import { useState } from "react";
import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
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

const ManagementList = ({ management, ...rest }) => {
  //const [data,setData]=useState(Management);
  const [data, setData] = useState(management);

  /*const handleDelete=(idNumber)=>{
    setData(data.filter((item)=>item.idNumber !== idNumber))
  };*/
  const handleDelete = (id) => {
    //setData(data.filter((item) => item.id !== id));
    axios
      .delete("http://localhost:3001/itAdmin/management/" + id)
      .then((response) => {
        console.log(response.data);
      });

    setData(data.filter((el) => el._id !== id));
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
                  <h5>Registration date</h5>
                </TableCell>
                <TableCell className="tbHeader">
                  <h5>Action</h5>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="tbBody">
              {management.map((d) => (
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
                      <Link to={"/itAdmin/editManager/" + d._id}>
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

ManagementList.propTypes = {
  management: PropTypes.array.isRequired,
};

export default ManagementList;
