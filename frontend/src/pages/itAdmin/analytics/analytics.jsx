import axios from "axios";
import { React, useState, useEffect } from "react";
import logHistory from "../../../services/admin/logHistory";
import {
  Box,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Search as SearchIcon } from "react-feather";
import { Link } from "react-router-dom";
import "../../toolbar.css";
import ListComponent from "../../../components/listComponent";
import URL from "../../../config";
//import moment from "moment";

export default function AdminAnalytics(props) {
  const columnName = ["IDNumber", "Name", "Date", "Time", "Action"];
  const [word, setWord] = useState("");

  const [signins, setsignins] = useState([]);

  useEffect(() => {
    setsignins(logHistory.recent());
  }, []);

  const [disabled, seTableCellisabled] = useState(true);
  const [searchBy, setSearchBy] = useState("");

  const handleChange = (event) => {
    setSearchBy(event.target.value);
    seTableCellisabled(false);
  };

  return (
    <div className="background">
      <div className="spacing">
        <div className="containerSale">
          <h1 className="heading">User Analytics : logins</h1>
        </div>

        <Box className="search" sx={{ mt: 1 }}>
          <Card>
            <CardContent className="row">
              <Box sx={{ minWidth: 500 }} className="col">
                <FormControl
                  fullWidth
                  variant="outlined"
                  style={{ backgroundColor: "  rgb(209, 209, 224)" }}
                >
                  <InputLabel id="demo-simple-select-label">
                    Search By:
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={searchBy}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value="idNumber">ID Number</MenuItem>
                    <MenuItem value="name">Name</MenuItem>
                    <MenuItem value="email">Date</MenuItem>
                    <MenuItem value="phoneNumber">Time</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box className="col" sx={{ maxWidth: 500 }}>
                <TextField
                  style={{ backgroundColor: " rgb(209, 209, 224)" }}
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SvgIcon fontSize="small" color="action">
                          <SearchIcon />
                        </SvgIcon>
                      </InputAdornment>
                    ),
                  }}
                  placeholder="Search user"
                  variant="outlined"
                  disabled={disabled ? "disabled" : ""}
                  onChange={(e) => {
                    setWord(e.target.value);
                  }}
                />
              </Box>
            </CardContent>
          </Card>
        </Box>

        <Card className="card">
          <PerfectScrollbar>
            <Box sx={{ minWidth: 1050 }}>
              <Table>
                <TableHead sx={{ innerHeight: 100 }}>
                  <TableRow>
                    <TableCell className="tbHeader">
                      <h5>ID Number</h5>
                    </TableCell>
                    <TableCell className="tbHeader">
                      <h5>Name</h5>{" "}
                    </TableCell>
                    <TableCell className="tbHeader">
                      <h5>Date</h5>
                    </TableCell>
                    <TableCell className="tbHeader">
                      <h5>Time</h5>
                    </TableCell>
                    <TableCell className="tbHeader">
                      <h5>Action</h5>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody className="tbBody">
                  {signins
                    .filter((val) => {
                      const date = new Date(val.dateTime);
                      const user = val.userID;

                      if (word === "") {
                        return val;
                      } else {
                        if (searchBy === "name") {
                          if (
                            (user.firstName + user.lastName)
                              .toLowerCase()
                              .trim()
                              .includes(word.toLowerCase().trim())
                          ) {
                            return user.firstName + user.lastName;
                          }
                        } else if (searchBy === "Time") {
                          if (date.toLocaleTimeString().includes(word)) {
                            return val;
                          }
                        } else if (searchBy === "Date") {
                          if (date.toLocaleDateString().includes(word)) {
                            return val;
                          }
                        } else {
                          if (
                            val[searchBy]
                              .toLowerCase()
                              .trim()
                              .includes(word.toLowerCase().trim())
                          ) {
                            return val;
                          }
                        }
                      }
                    })
                    .map((val) => {
                      const date = new Date(val.dateTime);
                      const user = val.userID;
                      return (
                        <TableRow className="">
                          <TableCell className="">{user.idNumber}</TableCell>

                          <TableCell className="">
                            <div className="">
                              {user.firstName + " " + user.lastName}
                            </div>
                            {/* <div className="widgetLgTr">{user.idNumber}</div> */}
                          </TableCell>
                          <TableCell className="">
                            {date.toLocaleDateString()}
                          </TableCell>
                          <TableCell className="">
                            {date.toLocaleTimeString()}
                          </TableCell>
                          <TableCell className="">
                            <Link to={URL.user + "/" + user._id} className="">
                              <button className="editButt">View User</button>
                            </Link>
                            {/* <Button type="Approved" /> */}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </Box>
          </PerfectScrollbar>
        </Card>
      </div>
    </div>
  );
}
