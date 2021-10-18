import React from "react";
import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  TableCell,
  TableRow,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { Delete } from "@material-ui/icons";
import "../list.css";
import moment from "moment";

export default function SalesPersonList(props) {
  
  //const [data,setData]=useState(salese);
  //const [data, setData] = useState(salese);

  /*const handleDelete=(idNumber)=>{
    setData(data.filter((item)=>item.idNumber !== idNumber))
  };*/
  


  return (
    
    <TableRow hover key={props.e.idNumber}>
        <TableCell>{props.e.idNumber}</TableCell>
        <TableCell>
            <Box
            sx={{
                alignItems: "center",
                display: "flex",
            }}
            >
            <Avatar src={props.e.avatar} sx={{ mr: 2 }}></Avatar>
            <Typography color="textPrimary" variant="body1">
                {`   ${props.e.firstName} ${props.e.lastName}`}
            </Typography>
            </Box>
        </TableCell>

        <TableCell color="textPrimary" variant="body1">
            {props.e.email}
        </TableCell>
        <TableCell>{props.e.phoneNumber}</TableCell>
        <TableCell>{props.e.city}</TableCell>
        <TableCell>
            {moment(props.e.joinedDate).format("DD/MM/YYYY")}
        </TableCell>
        <TableCell>
            <div className="actions">
            <Link to={"/management/salesPerson/" + props.e._id}>
                <button className="editButt">View / Edit</button>
            </Link>
            <Delete
                className="deleteButt"
                onClick={() => props.handleDelete(props.e._id)}
            />
            </div>
        </TableCell>
        </TableRow>
);
};

SalesPersonList.propTypes = {
  customers: PropTypes.array.isRequired,
};
