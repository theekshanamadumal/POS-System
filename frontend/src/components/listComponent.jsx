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
import "./list.css";
import moment from "moment";
import URL from "../config";

export default function listComponent(props) {
  const d = props.rowComp;
  return (
    <TableRow hover key={props.key}>
      {props.columnName.map((e) => {
        if (e === "_id") {
          return <TableCell>{d._id.substr(19)}</TableCell>;
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
            <TableCell className="text-center">{d.noOfShops || 0}</TableCell>
          );
        } else if (e === "email") {
          return (
            <TableCell color="textPrimary" variant="body1">
              {d.email}
            </TableCell>
          );
        } else if (e === "joinedDate") {
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
        } else {
          return <TableCell>{d[e]}</TableCell>;
        }
      })}
      <TableCell>
        <div className="actions">
          <Link to={URL.management + "/" + props.urlName + "/" + d._id}>
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
}
