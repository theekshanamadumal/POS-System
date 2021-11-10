import "./tasks.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import axios from "axios";
import { React, useState, useEffect } from "react";
import moment from "moment";
import authHeader from "../../../services/authHeader";
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
import { Search as SearchIcon } from "react-feather";
import { tasks } from "../../../dataCollection";
import TaskListComponent from "../../../components/taskComp/taskList";
import URL from "../../../config";
import { Link } from "react-router-dom";

export default function Tasks() {
  const [disabled, setDisabled] = useState(true);
  const [searchBy, setSearchBy] = useState("");
  const [dailyTasks, setDailyTasks] = useState([]);

  const handleChange = (event) => {
    setSearchBy(event.target.value);
    setDisabled(false);
  };
  const [word, setWord] = useState("");

  useEffect(() => {
    axios
      .get(URL.main + URL.dailyTasks,{ headers: authHeader() })
      .then((response) => {
        setDailyTasks(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert(error, (window.location = URL.management));
      });
  }, []);

  return (
    <div className="tasks">
      <div className="spacing">
        <div className="containerSale">
          <h1 className="heading">Daily Tasks</h1>
          <Link
            to={URL.tasks+ "/assignTasks"}
          >
            <button className="addUser">Assign Tasks</button>
          </Link>
        </div>

        {dailyTasks.length>0?
          <div>
            <Box className="search" sx={{ mt: 1 }}>
              <Card>
                <CardContent className="row">
                  <Box sx={{ maxWidth: 500 }} className="col">
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
                        <MenuItem value="_id">Seller ID</MenuItem>
                        <MenuItem value="name">Seller Name</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <Box sx={{ maxWidth: 500 }} className="col">
                    <TextField
                      fullWidth
                      style={{ backgroundColor: "  rgb(209, 209, 224)" }}
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
                      placeholder="Search Salesperson"
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
                        <TableCell align="center" className="tbHeader">
                          <h5>Seller ID</h5>
                        </TableCell>
                        <TableCell align="center" className="tbHeader">
                          <h5>Seller Name</h5>
                        </TableCell>

                        <TableCell align="right" className="tbHeader">
                          <h5>Sales Target</h5>
                        </TableCell>
                        <TableCell align="right" className="tbHeader">
                          <h5>Progression</h5>
                        </TableCell>
                        <TableCell align="right" className="tbHeader">
                          <h5>Route ID</h5>{" "}
                        </TableCell>

                        <TableCell align="center" className="tbHeader">
                          <h5>Actions</h5>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody className="tbBody">
                      {dailyTasks
                        //.filter(dt=>moment(dt.createdAt).format("DD/MM/YYYY")==="07/11/2021")
                        
                        .filter((val) => {
                          if (word === "") {
                            return val;
                          } else {
                            if (searchBy === "name") {
                              if (
                                (val.firstName + val.lastName)
                                  .toLowerCase()
                                  .trim()
                                  .includes(word.toLowerCase().trim())
                              ) {
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
                          return (
                            console.log(val),
                            (<TaskListComponent tasks={val} key={val._id} />)
                          );
                        })}
                    </TableBody>
                  </Table>
                </Box>
              </PerfectScrollbar>
            </Card>
          </div>
        :<div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{height: "70vh"}}
        >
          <img 
            className="align-center mb-3" 
            style={{height:"150px", width:"150px"}}
            src="/images/empty_list.png">
          </img>
          <p type="button" className="h2 text-secondary">No Tasks Assigned Yet</p>
        </div>
        }
       
      </div>
    </div>
  );
}
