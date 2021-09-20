import React from 'react';
import "./shops.css";
import ShopList from '../../../components/shopComp/shopList';
import ShopToolBar from "../../../components/shopComp/shopToolbar";
import {shopRows} from "../../../dataCollection";
import { Box } from '@material-ui/core';


export default function Shops() {
  return (
    <div className="shops">
        <ShopToolBar className="contain"/>
        <Box sx={{ pt: 3 }} className="contain">
            <ShopList shops={shopRows} />
        </Box>
    </div>
  );
}
