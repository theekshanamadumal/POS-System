import {React,useState} from 'react';
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
    Select,InputLabel,FormControl
  } from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import { Link } from 'react-router-dom';
import "../toolbar.css";
import axios from "axios";
import PerfectScrollbar from "react-perfect-scrollbar";
import RouteListComponent from "./routeList";

export default function RouteToolBar(props) {
    const handleDelete = (id) => {
        console.log("data send to back");
        console.log(id);
        axios
          .delete("http://localhost:3001/management/salesRoute/" + id)
          .then((response) => {
            console.log(response.data);
            alert(response.data, (window.location = "/management/routes"));
          })
          .catch((error) => {
            console.log(error);
            alert(error, (window.location = "/management"));
          });
      };
    const [disabled, setDisabled] = useState(true);
    const [searchBy, setSearchBy] = useState('');

    const handleChange = (event) => {
        setSearchBy(event.target.value);
        setDisabled(false)
    };
    const [word, setWord] = useState("");
    return (
        <div className="spacing">
            <div className="containerSale">
                <h1 className="heading">Routes</h1>
                <Link to="/management/routes/addroute">
                    <button className="addUser">Add New Route</button>
                </Link>
            </div>
                
            
            <Box className="search" sx={{ mt: 1 }}>
                <Card>
                    <CardContent className="row">
                        <Box sx={{ maxWidth: 500 }} className="col">
                            <FormControl fullWidth variant="outlined" style={{backgroundColor:"  rgb(209, 209, 224)"}}>
                                <InputLabel id="demo-simple-select-label">Search By:</InputLabel>
                                <Select 
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={searchBy}
                                    label="Age"
                                    onChange={handleChange}
                                >
                                    <MenuItem value="_id">Route ID</MenuItem>
                                    <MenuItem value="origin">Origin</MenuItem>
                                    <MenuItem value="destination">Destination</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box sx={{ maxWidth: 500 }} className="col">
                        <TextField fullWidth style={{backgroundColor:"  rgb(209, 209, 224)"}}
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
                            placeholder="Search Product"
                            variant="outlined"
                            disabled = {disabled? "disabled" : ""}
                            onChange={(e)=>{setWord(e.target.value)}}
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
                            <h5>Route ID</h5>
                            </TableCell>
                            <TableCell className="tbHeader">
                            <h5>Origin</h5>
                            </TableCell>
                            <TableCell className="tbHeader">
                            <h5>Destination</h5>
                            </TableCell>
                            <TableCell className="tbHeader">
                            <h5>No of Shops</h5>
                            </TableCell>
                            {/* <TableCell className="tbHeader">
                            <h5>Last Visited</h5>
                            </TableCell> */}
                            <TableCell className="tbHeader">
                            <h5>Action</h5>
                            </TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody className="tbBody">
                            {props.routes.filter((val)=>{
                                if (word===""){
                                    return val
                                }else{
                                    if (searchBy==="_id"){
                                        if ((val[searchBy].substr(19)).toLowerCase().trim().includes(word.toLowerCase().trim())){
                                            return val
                                        }
                                    } 
                                    else{
                                        if ((val[searchBy]).toLowerCase().trim().includes(word.toLowerCase().trim())){
                                            return val
                                        }
                                    }
                                    
                                }
                            }).map((val)=>{
                                return(
                                console.log(val),
                                    <RouteListComponent routes={val} key={val._id} handleDelete={handleDelete}/>
                                )
                            })}
                        </TableBody>
                    </Table>
                    </Box>
                </PerfectScrollbar>
            </Card>
            
        </div>
    )
}
