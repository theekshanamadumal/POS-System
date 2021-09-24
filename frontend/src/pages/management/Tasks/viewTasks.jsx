import React, { Component } from 'react';
import "./viewTasks.css";
import { remain,achieved } from '../../../dataCollection';
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

export default class ViewTasks extends Component {
    render() {
        return (
            <div className="viewTasks">
                <div className="detContain">
                <div className="achieved">
                <h1>Achieved Tasks</h1>
                    <Card >
                            <PerfectScrollbar>
                                <Box >
                                <Table>
                                    <TableHead sx={{ innerHeight: 100 }}>
                                    <TableRow>
                                        <TableCell align="center" className="tbHeader">
                                        <h5>Route No</h5>
                                        </TableCell>
                                        <TableCell align="center" className="tbHeader">
                                        <h5>Total inventory</h5>
                                        </TableCell>
                                        <TableCell align="right" className="tbHeader">
                                        <h5>Sales</h5>{" "}
                                        </TableCell>
                                    </TableRow>
                                    </TableHead>
                                    <TableBody className="tbBody">
                                    {achieved.map((d) => (
                                        <TableRow hover key={d.id}>
                                        <TableCell align="center">{d.id}</TableCell>
                                        <TableCell align="center">{d.inventory}</TableCell>
                                        <TableCell align="right">
                                        {" "}{d.income.toFixed(2)}{" "}</TableCell>
                                        </TableRow>
                                    ))}
                                    </TableBody>
                                </Table>
                                </Box>
                            </PerfectScrollbar>
                            </Card>
                            </div>
                  

                        <div className="remain">
                        <h1>Remaining Tasks</h1>
                        <Card >
                            <PerfectScrollbar>
                                <Box >
                                <Table>
                                    <TableHead sx={{ innerHeight: 100 }}>
                                    <TableRow>
                                        <TableCell align="center" className="tbHeader">
                                        <h5>Route No</h5>
                                        </TableCell>
                                        <TableCell align="center" className="tbHeader">
                                        <h5>Allocated inventory</h5>
                                        </TableCell>
                                    </TableRow>
                                    </TableHead>
                                    <TableBody className="tbBody">
                                    {remain.map((d) => (
                                        <TableRow hover key={d.id}>
                                        <TableCell align="center">{d.id}</TableCell>
                                        <TableCell align="center">{d.inventory}</TableCell>
                                        </TableRow>
                                    ))}
                                    </TableBody>
                                </Table>
                                </Box>
                            </PerfectScrollbar>
                </Card>
                </div>
                   
                </div>
                
            </div>
        )
    }
}
