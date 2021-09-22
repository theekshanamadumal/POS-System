import PropTypes from 'prop-types';
import {Paper,Table,TableBody,TableCell,TableHead,TableRow} from '@material-ui/core';
import "../list.css";
import React from 'react';
import { Container } from "@material-ui/core";
import TableContainer from "@material-ui/core/TableContainer";


const BestPerform = ({ bestPerform, ...rest }) => {
    
    return (
      <div className="tableCont">
      <h3 style={{textAlign:"center"}}>Best Performing Salespersons</h3>
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
                  Income
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {bestPerform
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
    </div>
  );
};

BestPerform.propTypes = {
    BestPerform: PropTypes.array.isRequired
};
export default BestPerform;


