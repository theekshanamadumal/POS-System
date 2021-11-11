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
import axios from 'axios';
import URL from "../../config";
import sellerAnalytics from "../../services/analytics/seller";
import authHeader from '../../services/authHeader';

const BestPerform = () => {
  const [sellerPerform,setSellerPerform]=useState([]);
  useEffect(() => {
    axios.get(URL.main + URL.salesPersonAnalyticsDuration+"/"+"Day-7",{ headers: authHeader() })  
        .then((response)=>{
              console.log('-------------------salesperson, analytics',response.data);
              const nameList=sellerAnalytics.getName(response.data)
              setSellerPerform(nameList);
        })
        .catch((error) => {
          console.log(error);
          alert(error, (window.location = URL.management));
        })
  }, [])
  return (
    <div style={{ cursor: "pointer" , textDecoration:"none"}} className="tableCont">
      <Link to={URL.analyticsSalesperson} className="linkAnaly">
        <h3 style={{ textAlign: "center" }}>Best Performing Salespersons</h3>
        <br></br>
        <Container maxWidth="lg">
          <Paper>
            <TableContainer>
              <Table  aria-label="sticky table">
                <TableHead style={{backgroundColor:"rgb(170, 170, 170)"}}>
                  <TableRow>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">ID</TableCell>
                    <TableCell align="right">Sales</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {sellerPerform.map((item) => {
                    return (
                      <TableRow key={item[0]}>
                        <TableCell align="center">
                          {item.name}
                        </TableCell>
                        <TableCell align="center">{item.id}</TableCell>
                        <TableCell align="right">
                          {" "}
                          {item.sales.toFixed(2)}{" "}
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
