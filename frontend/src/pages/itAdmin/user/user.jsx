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
import "./user.css"
import ListComponent from "../../../components/listComponent";
import URL from "../../../config";
import moment from "moment";

export default function User(props) {
  const [users, setUsers]=useState([]);
  const columnName=["idNumber","sName","email","phoneNumber","city","userRole"];

  const [word, setWord] = useState("");

    const handleDelete = (id) => {
        //setData(data.filter((item) => item.id !== id));
        axios
          .delete(URL.main+URL.user+"/"+ id)
          .then((response) => {
            console.log(response.data);
            alert(response.data, (window.location = URL.user));
          })
          .catch((error) => {
            console.log(error);
            alert(error, (window.location = URL.user));
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
        .get(URL.main+URL.user)
        .then((response) => {
          setUsers(response.data);
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
                <h1 className="heading">Users</h1>
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
                                    <MenuItem value="userRole">User Role</MenuItem>
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
                            placeholder="Search user"
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
                                <h5>User Role</h5>
                                </TableCell>
                                <TableCell className="tbHeader">
                                <h5>Action</h5>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className="tbBody">
                            {users.filter((val)=>{
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
                                    <ListComponent columnName={columnName} urlName="user" rowComp={val} key={val.idNumber} handleDelete={handleDelete}/>
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



