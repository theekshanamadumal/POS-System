import React, { Component } from "react";
import "./tasks.css";
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
import { tasks } from "../../../dataCollection";

export default class Tasks extends Component {
  /* constructor(props) {
        super(props);
    }
    componentDidMount() {
    axios
        .get("http://localhost:3001/management/tasks")
        .then((response) => {
        this.setState({ tasks: response.data });
        console.log(response.data);
        })
        .catch((error) => {
        console.log(error);
        });
    }*/

  render() {
    return (
      <div className="tasks">
        <Card className="card">
          <PerfectScrollbar>
            <Box sx={{ minWidth: 1050 }}>
              <Table>
                <TableHead sx={{ innerHeight: 100 }}>
                  <TableRow>
                    <TableCell align="center" className="tbHeader">
                      <h5>Salesperson ID</h5>
                    </TableCell>
                    <TableCell align="center" className="tbHeader">
                      <h5>Salesperson Name</h5>
                    </TableCell>

                    <TableCell align="right" className="tbHeader">
                      <h5>Sales Target</h5>
                    </TableCell>
                    <TableCell align="right" className="tbHeader">
                      <h5>Progression</h5>
                    </TableCell>
                    <TableCell align="right" className="tbHeader">
                      <h5>Remaining </h5>{" "}
                    </TableCell>

                    <TableCell align="center" className="tbHeader">
                      <h5>Actions</h5>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody className="tbBody">
                  {tasks.map((d) => (
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
                          <Link to={"/management/tasks/" + d.id + "/viewTasks"}>
                            <button className="actionsTasks">View</button>
                          </Link>
                          <Link
                            to={"/management/tasks/" + d.id + "/assignTasks"}
                          >
                            <button className="actionsTasks">Assign</button>
                          </Link>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </PerfectScrollbar>
        </Card>
      </div>
    );
  }
}
