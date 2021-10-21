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
import URL from "../../config";

const TaskList = (props) => {
  const d=props.tasks;
  
  return (
    <TableRow hover key={d._id}>
      <TableCell align="center">{d._id}</TableCell>
      <TableCell align="center">
        {d.firstName + " " + d.lastName}
      </TableCell>
      <TableCell align="right">{d.remainingTasks}</TableCell>
      <TableCell align="right"> {d.acheivements}</TableCell>
      <TableCell align="right">
        {" "}
        {d.sales.toFixed(2)}{" "}
      </TableCell>
      <TableCell align="center">
        <div className="actionTasks">
          <Link to={URL.tasks+"/" + d.id + "/viewTasks"}>
            <button className="actionsTasks">View</button>
          </Link>
          <Link
            to={URL.tasks+"/"+ d.id + "/assignTasks"}
          >
            <button className="actionsTasks">Assign</button>
          </Link>
        </div>
      </TableCell>
    </TableRow>
  );
};

TaskList.propTypes = {
  Tasks: PropTypes.array.isRequired,
};
export default TaskList;
