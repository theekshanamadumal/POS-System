import PropTypes from 'prop-types';
import {Paper,Table,TableBody,TableCell,TableHead,TableRow} from '@material-ui/core';
import "../list.css";
import React from 'react';
import { Container } from "@material-ui/core";
import TableContainer from "@material-ui/core/TableContainer";
import "./salespersonPerform.css";
import { Button } from 'reactstrap';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const SalespersonPerform = ({ salespersonPerform, ...rest }) => {

    const dataBar = [
        {
          name: 'Mobile',
          sales: 420000,
        },
        {
          name: 'Desktop',
          sales: 200000,
        },
        {
          name: 'Earphone',
          sales: 84000,
        },
        {
          name: 'Tablet',
          sales: 177800,
        },
        {
          name: 'Laptop',
          sales: 381000,
        },
        {
          name: 'USB pen',
          sales: 23900,
        },
        {
          name: 'Others',
          sales: 34900,
        },
      ];
    
    return (
      <div className="tablePerson">
      <h1 style={{textAlign:"center"}}>Sales By Salespersons</h1>
      <br></br>
        <Container maxWidth="lg" >
            <Paper>
                <TableContainer>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">
                                Name
                                </TableCell>
                                <TableCell align="center">
                                ID
                                </TableCell>
                                <TableCell align="right">
                                Sales
                                </TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                        {salespersonPerform
                            .map((item) => {
                            return (
                                <TableRow key={item.name}>
                                <TableCell align="center">{item.name}</TableCell>
                                <TableCell align="center">{item.id}</TableCell>
                                <TableCell align="right">
                                    {" "}
                                    {(item.income ).toFixed(2)}{" "}
                                </TableCell>
                                </TableRow>
                            );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Container>
        <br></br>
        <br></br>
        <a href="http://localhost:3000/management/analytics#salesperson/page.pdf" download rel="noopener noreferrer" target="_blank">
            <Button>Download</Button>
        </a>

        
        </div>
  );
};

SalespersonPerform.propTypes = {
    salespersonPerform: PropTypes.array.isRequired
};
export default SalespersonPerform;


