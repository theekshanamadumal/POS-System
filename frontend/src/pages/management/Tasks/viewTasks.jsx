import "./viewTasks.css";
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
import Percentage from "../../../components/taskComp/percentage";
import SellerLocation from "../../../pages/management/sellerLocation/sellerLocations";
import axios from "axios";
import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import URL from "../../../config";

export default function ViewTasks() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const id = splitLocation[3];
  const [ID, setID] = useState("");
  const [tasks, setTasks] = useState([]);
  const [seller, setSeller] = useState([]);
  const [dailyShops, setDailyShops] = useState([]);
  const [dailyInventory, setDailyInventory] = useState([]);

  const loadSalesPerson = (idNum) => {
    axios
      .get(URL.main + URL.salesperson + "/" + idNum)
      .then((response) => {
        setSeller(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert(error, (window.location = URL.salesperson));
      });
  };
  useEffect(() => {
    axios
      .get(URL.main + URL.dailyTasks + "/" + id)
      .then((response) => {
        setTasks(response.data);
        setDailyInventory(response.data.dailyInventory);
        setDailyShops(response.data.dailyShops);
        console.log("response.....",response.data);
        loadSalesPerson(response.data.sellerId);
      })
      .catch((error) => {
        console.log(error);
        alert(error, (window.location = URL.management));
      });
  }, []);
  return (
    <div className="viewTasks">
      <Percentage 
        target={tasks.dailySalesTarget}
        achieved={tasks.dailySalesProgression}
        id={seller.idNumber}
        name={seller.firstName + " " + seller.lastName}
        route={String(tasks.dailyRoute).substr(19)}
      />
      <div className="detContain">
        <div className="achieved">
          <h1>Daily Inventory</h1>
          <Card>
            <PerfectScrollbar>
              <Box>
                <Table>
                  <TableHead sx={{ innerHeight: 100 }}>
                    <TableRow>
                      <TableCell align="center" className="tbHeader">
                        <h5>Product Name</h5>
                      </TableCell>
                      <TableCell align="right" className="tbHeader">
                        <h5>Quantity</h5>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody className="tbBody">
                    {dailyInventory.map((d) => (
                      <TableRow hover key={d.productId}>
                        <TableCell align="center">{d.itemName}</TableCell>
                        <TableCell align="right">{d.quantity}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </PerfectScrollbar>
          </Card>
        </div>

        <div className="remain">
          <h1>Shops Details</h1>
          <Card>
            <PerfectScrollbar>
              <Box>
                <Table>
                  <TableHead sx={{ innerHeight: 100 }}>
                    <TableRow>
                      <TableCell align="center" className="tbHeader">
                        <h5>Shop Name</h5>
                      </TableCell>
                      <TableCell align="center" className="tbHeader">
                        <h5>Status</h5>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody className="tbBody">
                    {dailyShops.map((e) => (
                      <TableRow hover key={e.shopId}>
                        <TableCell align="center">{e.shopName}</TableCell>
                        <TableCell align="center">
                          {e.isCovered===true?<strong className="text-success">Covered</strong>:<strong className="text-danger">Not Covered</strong>}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </PerfectScrollbar>
          </Card>
        </div>
      </div>

      {console.log("---------aaaaa----------", seller._id)}
      <SellerLocation sellerID={"61671c22346f6b3724faef50"} />
    </div>
  );
}
