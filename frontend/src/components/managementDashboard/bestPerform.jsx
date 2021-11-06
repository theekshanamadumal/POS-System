import PropTypes from "prop-types";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import "../list.css";
import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import TableContainer from "@material-ui/core/TableContainer";
import { Link } from "react-router-dom";
import URL from "../../config";
import sellerAnalytics from "../../services/analytics/seller";

const BestPerform = () => {
  const [performSeller,setPerformSeller]=useState([])
  useEffect(() => {
    setPerformSeller(sellerAnalytics.perDay().sorted);
  }, [])
  return (
    <div style={{ cursor: "pointer" , textDecoration:"none"}} className="tableCont">
      <Link to={URL.analyticsSalesperson} className="linkAnaly">
        <h3 style={{ textAlign: "center" }}>Best Performing Salespersons</h3>
        <div>{console.log("best perform..", sellerAnalytics.perDay())}</div>

        <br></br>
        <Container maxWidth="lg">
          <Paper>
            <TableContainer>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">ID</TableCell>
                    <TableCell align="right">Sales</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {performSeller.map((item) => {
                    return (
                      <TableRow key={item[0]}>
                        <TableCell align="center">
                          {item[1].name}
                        </TableCell>
                        <TableCell align="center">{item[0]}</TableCell>
                        <TableCell align="right">
                          {" "}
                          {item[1].sale.toFixed(2)}{" "}
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
      </Link>
    </div>
  );
};

BestPerform.propTypes = {
  BestPerform: PropTypes.array.isRequired,
};
export default BestPerform;
