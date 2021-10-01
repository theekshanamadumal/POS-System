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
import "../toolbar.css";

export default function managementBar() {
    return (
        <div className="spacing">
            <div className="containerSale">
                <h1 className="heading">Management List</h1>
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
                        placeholder="Search Manager"
                        variant="outlined"
                        />
                    </Box>
                    </CardContent>
                </Card>
            </Box>
            
        </div>
    )
}
