import React from 'react';
import {
    Box,
    Card,
    CardContent,
    TextField,
    InputAdornment,
    SvgIcon
  } from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import { Link } from 'react-router-dom';
import "../toolbar.css";

export default function RouteToolBar() {
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
                    <CardContent>
                    <Box  
                    sx={{ maxWidth: 500 }}>
                        <TextField
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
                        placeholder="Search route"
                        variant="outlined"
                        />
                    </Box>
                    </CardContent>
                </Card>
            </Box>
            
        </div>
    )
}
