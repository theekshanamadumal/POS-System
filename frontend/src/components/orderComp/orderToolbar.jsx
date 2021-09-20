import React from "react";
import {
  Box,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
} from "@material-ui/core";
import { Search as SearchIcon } from "react-feather";
import { Link } from "react-router-dom";
import "./orderToolbar.css";

export default function OrderToolBar() {
  return (
    <div className="spacingord">
      <div className="containerSale">
        <h1 className="heading">Orders</h1>
      </div>
      <Box sx={{ mt: 3 }}>
        <Card>
          <CardContent>
            <Box className="serach" sx={{ maxWidth: 500 }}>
              <TextField
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
                placeholder="Search order"
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}
