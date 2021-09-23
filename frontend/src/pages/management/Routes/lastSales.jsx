import {Paper,Table,TableBody,TableCell,TableHead,TableRow} from '@material-ui/core';
import React from 'react';
import { Container } from "@material-ui/core";
import TableContainer from "@material-ui/core/TableContainer";
import { salesRoute} from "../../../dataCollection";

const LastSales = ({ ...rest }) => {
    
    return (
      <div style={{flex:"8"}} className="tableCont">
      <h3 style={{textAlign:"center"}}>Last Month Sales - Route-100</h3>
      <br></br>
    <Container maxWidth="lg" >
      <Paper>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="center">
                  Item Name
                </TableCell>
                <TableCell align="center">
                  Image
                </TableCell>
                <TableCell align="right">
                  No of items Sold
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {salesRoute
                .map((item) => {
                  return (
                    <TableRow key={item.productName}>
                      <TableCell align="center">{item.avatar}</TableCell>
                      <TableCell align="center">{item.count}</TableCell>
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


export default LastSales;


