import axios from "axios";
import "./products.css";
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
import { Search as SearchIcon } from "react-feather";
import { Link } from "react-router-dom";
import "../../toolbar.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import ListComponent from "../../../components/listComponent";
import URL from "../../../config";

export default function Products() {
  const columnName=["_id","itemName","category","unitPrice","stock"];
  const [products, setProducts]=useState([]);
  const handleDelete = (id) => {
    console.log("data send to back");
    console.log(id);
    axios
      .delete(URL.main+URL.productComp+ id)
      .then((response) => {
        console.log(response.data);
        alert(response.data, (window.location = URL.products ));
      })
      .catch((error) => {
        console.log(error);
        alert(error, (window.location = URL.management));
      });
  };
  const [disabled, setDisabled] = useState(true);
  const [searchBy, setSearchBy] = useState('');

  const handleChange = (event) => {
      setSearchBy(event.target.value);
      setDisabled(false)
  };
  const [word, setWord] = useState("");

  useEffect(() => {
    axios
      .get(URL.main+URL.products)
      .then((response) => {
        setProducts( response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert(error, (window.location = URL.management));
      });
  }, []);

  return (
    <div className="background">
      <div className="spacing">
        <div className="containerSale">
          <h1 className="heading">Products</h1>
          <Link to={URL.addProduct}>
            <button className="addUser mx-5">Add New Product</button>
          </Link>
          <Link to={URL.addProductCategory}>
            <button className=" addUser mx-2">Add New Product Category</button>
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
                          <MenuItem value="_id">Item ID</MenuItem>
                          <MenuItem value="itemName">Item Name</MenuItem>
                          <MenuItem value="category">Category</MenuItem>
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
          <Box sx={{ minWidth: 500 }}>
            <Table>
              <TableHead sx={{ innerHeight: 100 }}>
                <TableRow>
                  <TableCell className="tbHeader">
                    <h5>Item ID</h5>
                  </TableCell>
                  <TableCell className="tbHeader">
                    <h5>Item Name</h5>{" "}
                  </TableCell>
                  <TableCell className="tbHeader">
                    <h5>Category</h5>
                  </TableCell>
                  <TableCell className="tbHeader">
                    <h5>Unit Price</h5>
                  </TableCell>
                  <TableCell className="tbHeader">
                    <h5>Stock</h5>{" "}
                  </TableCell>
                  <TableCell className="tbHeader">
                    <h5>Action</h5>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody className="tbBody">
                {products.filter((val)=>{
                  if (word===""){
                      return val
                  }else{
                        if ((val[searchBy]).toLowerCase().trim().includes(word.toLowerCase().trim())){
                            return val
                        }
                      
                  }
              }).map((val)=>{
                  return(
                    console.log(val),
                      <ListComponent urlName="products" columnName={columnName} rowComp={val} key={val._id} handleDelete={handleDelete}/>
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
