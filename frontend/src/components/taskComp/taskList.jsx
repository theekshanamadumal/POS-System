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
import "../list.css";
import URL from "../../config";

const TaskList = (props) => {
  const d=props.tasks;

  
  return (
    <TableRow hover key={d._id}>
      <TableCell align="center">{d.sellerId.idNumber}</TableCell>
      <TableCell align="center">
        { d.sellerId.firstName+" "+ d.sellerId.lastName}
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
      <TableCell>
        <div className="text-center">
          <Link to={URL.tasks+"/" + d._id + "/viewTasks"}>
            <button className="actionsTasks">View Tasks</button>
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
