import "./routes.css";
import {React,useState,useEffect} from 'react';
import URL from "../../../config";
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
import "../../toolbar.css";
import axios from "axios";
import PerfectScrollbar from "react-perfect-scrollbar";
import ListComponent from "../../../components/listComponent";
import authHeader from "../../../services/authHeader";

export default function Route() {
  const [shops, setShops]=useState([]);
  const [routeList, setRouteList]=useState([]);
  const columnName=["_id","origin","destination","noOfShops"];
  const [routesDetails, setRoutesDetails]=useState([]);
  
  const handleDelete = (id) => {
    console.log("data send to back");
    console.log(id);
    axios
      .delete(URL.main+URL.salesRouteComp + id,{ headers: authHeader() })
      .then((response) => {
        console.log(response.data);
        alert(response.data, (window.location = URL.routes));
      })
      .catch((error) => {
        console.log(error);
        alert(error, (window.location = URL.management ));
      });
  };
  const countShops=(id)=>{
      const li=routesDetails.filter(e=>e._id===id);
      if (li.length>0){
          return li[0].count
      }
      else{
        return 0
      }  
  }
  const [word, setWord] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [searchBy, setSearchBy] = useState('');

  const handleChange = (event) => {
      setSearchBy(event.target.value);
      setDisabled(false)
  };

  useEffect(() => {
    axios.all(
        [
            axios.get(URL.main+URL.salesRoutes,{ headers: authHeader() }),
            axios.get(URL.main + URL.shops+"/groupByRoute",{ headers: authHeader() })
        ])
        .then(axios.spread((...responses) => {
            setRouteList(responses[0].data );
            setRoutesDetails(responses[1].data );
            console.log("routes recieved", responses[0].data );
            console.log("routes count",responses[1].data );
        }))
        .catch((error) => {
          console.log(error);
          alert(error, (window.location = URL.routes));
        });
    //loadRoutes();
  }, []);

  return (
    <div className="background">
      <div className="spacing">
            <div className="containerSale">
                <h1 className="heading">Routes</h1>
                <Link to={URL.addRoute}>
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
                            placeholder="Search Route"
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
                            {routeList.filter((val)=>{
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
                                const c=countShops(val._id);
                                return(
                                //countShops(val._id),
                                    <ListComponent urlName="routes" rowComp={val} key={val._id} columnName={columnName} handleDelete={handleDelete} count={c}/>
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

