import { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {Avatar,Box,Card,Table,TableBody,TableCell,TableHead,TableRow,Typography} from '@material-ui/core';
import { Link } from 'react-router-dom';
import {Delete} from '@material-ui/icons';
import "../list.css";

const SalesPersonList = ({ salesPerson, ...rest }) => {
  const limit=10;

  const [data,setData]=useState(salesPerson);

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
                  <h5>ID Number</h5>
                </TableCell>
                <TableCell className="tbHeader">
                  <h5>Name</h5>                </TableCell>
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
                  <h5>Registration date</h5>
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
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Avatar
                        src={d.avatar}
                        sx={{ mr: 2 }}
                      >
                        
                        
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {`   ${d.firstName} ${d.lastName}`}
                      </Typography>
                    </Box>
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
                    {moment(d.joinedDate).format('DD/MM/YYYY')}
                  </TableCell>
                  
                  <TableCell>
                    <div className="actions">
                        <Link to={"/management/salesPerson/"+d.id}>
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

SalesPersonList.propTypes = {
  customers: PropTypes.array.isRequired
};

export default SalesPersonList;
