import { useState } from 'react';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {Avatar,Box,Card,Table,TableBody,TableCell,TableHead,TableRow} from '@material-ui/core';
import { Link } from 'react-router-dom';
import {Delete} from '@material-ui/icons';
import "../list.css";
import React from 'react'


const ShopList = ({ shops, ...rest }) => {
    const [limit, setLimit] = useState(10);

    const [data,setData]=useState(shops);

    const handleDelete=(id)=>{
        setData(data.filter((item)=>item.id !== id))
    };

  return (
    <Card {...rest} className="card">
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead sx={{ innerHeight:100 }}>
              <TableRow>
                <TableCell className="tbHeader">
                  <h5>ID</h5>
                </TableCell>
                <TableCell className="tbHeader">
                  <h5>Name</h5>                
                </TableCell>
                <TableCell  className="tbHeader">
                  <h5>Email</h5>
                </TableCell>
                <TableCell  className="tbHeader">
                  <h5>Phone</h5>
                </TableCell>
                <TableCell  className="tbHeader">
                  <h5>City</h5>                
                </TableCell>
                <TableCell className="tbHeader">
                  <h5>Route</h5>
                </TableCell>
                <TableCell className="tbHeader" >
                    <h5>Action</h5>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="tbBody">
              {data.slice(0, limit).map((d) => (
                <TableRow
                  hover
                  key={d.id}
                  
                >
                  
                  <TableCell>
                    {d.id}
                  </TableCell>
                  <TableCell>
                    {d.shopName}
                  </TableCell>
                  <TableCell>
                    {d.email}
                  </TableCell>
                  <TableCell>
                    {d.phoneNo}
                  </TableCell>
                  <TableCell>
                    {d.city}
                  </TableCell>
                  <TableCell>
                    {d.route}
                  </TableCell>                  
                  <TableCell>
                    <div className="actions">
                        <Link to={"/management/shops/"+d.id}>
                            <button className="editButt">View / Edit</button>
                        </Link>
                        <Delete className="deleteButt" onClick={()=>handleDelete(d.id)} />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      
    </Card>
  );
};

ShopList.propTypes = {
  shops: PropTypes.array.isRequired
};
export default ShopList;


