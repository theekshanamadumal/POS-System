import axios from "axios";
import {React,useState,useEffect} from 'react';
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
import PerfectScrollbar from "react-perfect-scrollbar";
import { Search as SearchIcon } from 'react-feather';
import { Link } from 'react-router-dom';
import "../../toolbar.css";
import ListComponent from "../../../components/listComponent";
import URL from "../../../config";
import moment from "moment";

export default function SalesPerson(props) {
  const [salespersons, setSalespersons]=useState([]);
  const columnName=["idNumber","sName","email","phoneNumber","city","joinedDate"];

  const [word, setWord] = useState("");

    const handleDelete = (id) => {
        //setData(data.filter((item) => item.id !== id));
        axios
          .delete(URL.main+URL.salesperson+"/"+ id)
          .then((response) => {
            console.log(response.data);
            alert(response.data, (window.location = URL.salesperson));
          })
          .catch((error) => {
            console.log(error);
            alert(error, (window.location = URL.management));
          });
    
        //setData(data.filter((el) => el._id !== id));
    };
    const [disabled, setDisabled] = useState(true);
    const [searchBy, setSearchBy] = useState('');

    const handleChange = (event) => {
        setSearchBy(event.target.value);
        setDisabled(false)
    };
    useEffect(() => {
      axios
        .get(URL.main+URL.salesperson)
        .then((response) => {
          setSalespersons(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

  return (
    <div className="background">
        <div className="spacing">
            <div className="containerSale">
                <h1 className="heading">Salespersons</h1>
            </div>
                
            
            <Box className="search" sx={{ mt: 1 }}>
                <Card>
                    <CardContent className="row">
                        <Box sx={{ minWidth: 500 }} className="col">
                            <FormControl fullWidth variant="outlined" style={{backgroundColor:"  rgb(209, 209, 224)"}}>
                                <InputLabel id="demo-simple-select-label">Search By:</InputLabel>
                                <Select 
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={searchBy}
                                    label="Age"
                                    onChange={handleChange}
                                >
                                    <MenuItem value="idNumber">ID Number</MenuItem>
                                    <MenuItem value="name">Name</MenuItem>
                                    <MenuItem value="email">Email</MenuItem>
                                    <MenuItem value="phoneNumber">Phone</MenuItem>
                                    <MenuItem value="city">City</MenuItem>
                                    <MenuItem value="joinedDate">Joined Date</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box   className="col" 
                        sx={{ maxWidth: 500 }}>
                            <TextField style={{backgroundColor:" rgb(209, 209, 224)"}}
                            fullWidth
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <SvgIcon
                                    fontSize="small"
                                    color="action"
                                    >
                                    <SearchIcon />
                                    </SvgIcon>
                                </InputAdornment>
                                )
                            }}
                            placeholder="Search SalesPerson"
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
                    <Box sx={{ minWidth: 1050 }} >
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
                                <h5>Email</h5>
                                </TableCell>
                                <TableCell className="tbHeader">
                                <h5>Phone</h5>
                                </TableCell>
                                <TableCell className="tbHeader">
                                <h5>City</h5>
                                </TableCell>
                                <TableCell className="tbHeader">
                                <h5>Joined Date</h5>
                                </TableCell>
                                <TableCell className="tbHeader">
                                <h5>Action</h5>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className="tbBody">
                            {salespersons.filter((val)=>{
                                if (word===""){
                                    return val
                                }else{
                                    if (searchBy==="name"){
                                        if ((val.firstName+val.lastName).toLowerCase().trim().includes(word.toLowerCase().trim())){
                                            return val
                                        }
                                    }
                                    else if (searchBy==="phoneNumber"){
                                        if ((val.phoneNumber.toString()).includes(word)){
                                            return val
                                        }
                                    }
                                    else if (searchBy==="joinedDate"){
                                        if (moment(val.joinedDate).format("DD/MM/YYYY").toLowerCase().trim().includes(word.toLowerCase().trim())){
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
                                    <ListComponent columnName={columnName} urlName="salesperson" rowComp={val} key={val.idNumber} handleDelete={handleDelete}/>
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

