import {React,useState,useEffect} from 'react';
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
import "./list.css";
import moment from "moment";
import URL from "../config";
import { useLocation } from "react-router-dom";

export default function ListComponent(props) {
  const location = useLocation();
  const { pathname } = location;
  const userType = pathname.split("/")[1];
  const d = props.rowComp;
  const [userRoles,setUserRoles]=useState("");

  const rolesAll=(rolesList)=>{
    rolesList.map(val=>{
      if (val==="6153648ac5809858d4b761f2"){
        setUserRoles(userRoles+" Manager ")
      }if (val==="6153648ac5809858d4b761f3"){
        setUserRoles(userRoles+" Salesperson ")
      }if (val==="6153648ac5809858d4b761f4"){
        setUserRoles(userRoles+" Admin ")
      }
    })
    //return userRoles;
  }
  const userRolesField=()=>{
    if (userType==="itAdmin"){
      return (
        <TableCell color="textPrimary" variant="body1">
          {props.rolesTotal}
        </TableCell>
      )
    }
  }

  const actionButtons=()=>{
    if (props.urlName!=="salesperson"){
      return (
        <div className="actions">
          <Link to={"/"+userType + "/" + props.urlName + "/" + d._id}>
            <button className="editButt">View / Edit</button>
          </Link>
          <Delete
            className="deleteButt"
            onClick={() => props.handleDelete(d._id)}
          />
        </div>
      )
    }else{
      return (
        <div className="actions">
          <Link to={"/"+userType + "/" + props.urlName + "/" + d._id}>
            <button className="editButt">View</button>
          </Link>
        </div>
      )
    }
  }
  return (
    <TableRow hover key={props.key}>
      {props.columnName.map((e) => {
        if (e === "_id") {
          return <TableCell>{d._id.substr(19)}</TableCell>;
        }
        if (e === "stock") {
          return <TableCell>{d.stock<50?<strong className="text-danger">{d.stock}</strong>:<strong className="text-success">{d.stock}</strong>}</TableCell>;
        }
        if (e==="unitPrice"){
          return <TableCell align="center"> {d.unitPrice.toFixed(2)}{" "}</TableCell>;
        } else if (e === "sName") {
          return (
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
          );
        } else if (e === "noOfShops") {
          return (
            <TableCell className="text-center">{props.count }</TableCell>
          );
        } else if (e === "email") {
          return (
            <TableCell color="textPrimary" variant="body1">
              {d.email}
            </TableCell>
          );
        } 
        
        else if (e === "joinedDate") {
          return (
            <TableCell>{moment(d.joinedDate).format("DD/MM/YYYY")}</TableCell>
          );
        } else if (e === "route") {
          return (
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
          );
        } 
        else {
          return <TableCell>{d[e]}</TableCell>;
        }
      })}
      {userRolesField()}
      
      <TableCell>
        {actionButtons()}
      </TableCell>
    </TableRow>
  );
}
