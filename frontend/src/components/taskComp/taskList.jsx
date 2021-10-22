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
      <TableCell align="center">{d.sellerId.idNumber}</TableCell>
      <TableCell align="center">
        { d.sellerId.firstName}
      </TableCell>
      <TableCell align="right">
        {" "}
        {d.dailySalesTarget.toFixed(2)}{" "}
      </TableCell>
      <TableCell align="right">
        {" "}
        {d.dailySalesProgression.toFixed(2)}{" "}
      </TableCell>
      <TableCell align="center"> {d.dailyRoute.substr(19)}</TableCell>
      <TableCell align="right">
        <div className="actionTasks">
          <Link to={URL.tasks+"/" + d._id + "/viewTasks"}>
            <button className="actionsTasks">View</button>
          </Link>
          <Link
            to={URL.tasks+"/"+ d._id + "/assignTasks"}
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
