import "./shops.css";
import {React,useState,useEffect} from 'react';
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
    Select,InputLabel,FormControl
  } from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import { Link } from 'react-router-dom';
import PerfectScrollbar from "react-perfect-scrollbar";
import "../../toolbar.css";
import axios from "axios";
import ListComponent from "../../../components/listComponent";
import URL from "../../../config";

export default function Shops() {
  const [shops, setShops]=useState([]);
  const [routeList, setRouteList]=useState([]);
  const columnName=["_id","shopName","phoneNo","city","route"];

  const handleDelete = (id) => {
    console.log("data send to back");
    console.log(id);
    if (window.confirm("Confirm to Delete?")) {
        axios
            .delete(URL.main+URL.shopComp + id,{ headers: authHeader() })
            .then((response) => {
                console.log(response.data);
                alert(response.data, (window.location = URL.shops));
            })
            .catch((error) => {
                console.log(error);
                alert(error, (window.location = URL.management));
            });
    }
};
const [disabled, setDisabled] = useState(true);
const [searchBy, setSearchBy] = useState('');

const handleChange = (event) => {
    setSearchBy(event.target.value);
    setDisabled(false)
};
const [word, setWord] = useState("");

  const loadRoutes=() =>{
    axios
      .get(URL.main+URL.salesRoutes,{ headers: authHeader() })
      .then((response) => {
        setRouteList(
          response.data,
        );
        console.log("routes:");
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert(error, (window.location =URL.management));
      });
  }

  useEffect(() => {
    axios
      .get(URL.main+URL.shops,{ headers: authHeader() })
      .then((response) => {
        setShops(response.data);
        console.log("shops recieved", shops);
      })
      .catch((error) => {
        console.log(error);
        alert(error, (window.location =URL.management));
      });

    loadRoutes();
  }, []);

  
  return (
    <div className="background">
      <div className="spacing">
            <div className="containerSale">
                <h1 className="heading">Shops</h1>
                <Link to={URL.addShops}>
                    <button className="addUser">Add New shop</button>
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
                                    onChange={handleChange}
                                >
                                    <MenuItem value="_id">Shop ID</MenuItem>
                                    <MenuItem value="shopName">Shop Name</MenuItem>
                                    <MenuItem value="phoneNo">Phone Number</MenuItem>
                                    <MenuItem value="city">City</MenuItem>
                                    <MenuItem value="route">Route</MenuItem>
                                    
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
                                placeholder="Search Shop"
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
                    <Box sx={{ minWidth: 500 }}>
                        <Table>
                            <TableHead sx={{ innerHeight: 100 }}>
                                <TableRow>
                                    <TableCell className="tbHeader">
                                    <h5>ID</h5>
                                    </TableCell>
                                    <TableCell className="tbHeader">
                                    <h5>Shop Name</h5>
                                    </TableCell>
                                    <TableCell className="tbHeader">
                                    <h5>Phone No</h5>
                                    </TableCell>
                                    <TableCell className="tbHeader">
                                    <h5>City</h5>
                                    </TableCell>
                                    <TableCell className="tbHeader">
                                    <h5>Route</h5>
                                    </TableCell>
                                    <TableCell className="tbHeader">
                                    <h5>Action</h5>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody className="tbBody">
                                {shops.filter((val)=>{
                                    if (word===""){
                                        return val
                                    }else{
                                        if (searchBy==="_id"){
                                            if ((val[searchBy].substr(19)).toLowerCase().trim().includes(word.toLowerCase().trim())){
                                                return val
                                            }
                                        } 
                                        else if (searchBy==="phoneNo"){     
                                            if ((val.phoneNo.toString()).includes(word)){
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
                                        <ListComponent columnName={columnName} urlName="shops" rowComp={val} routes={routeList}  key={val._id} handleDelete={handleDelete}/>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </Box>
                </PerfectScrollbar>
            </Card>
            
        </div>
    </div>
  )
}

