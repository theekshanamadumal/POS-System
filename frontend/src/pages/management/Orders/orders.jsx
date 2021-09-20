import React from 'react';
import "./order.css";
import {orderRows} from "../../../dataCollection";
import { Box } from '@material-ui/core';
import OrderList from '../../../components/orderComp/orderList';
import OrderToolBar from "../../../components/orderComp/orderToolbar";
  
  export default function Order() {
    return (
        <div className="order">
            <OrderToolBar className="contain"/>
              <Box sx={{ pt: 3 }} className="contain">
                  <OrderList orders={orderRows} />
              </Box>
            
            
  
        </div>
    )
  }
