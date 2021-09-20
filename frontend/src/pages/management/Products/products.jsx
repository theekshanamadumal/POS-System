import React from 'react';
import "./products.css";
import {productRows} from "../../../dataCollection";
import ProductList from '../../../components/productComp/productList';
import ProductToolBar from "../../../components/productComp/productToolbar";
import { Box } from '@material-ui/core';


export default function Products() {
      return (
        <div className="product">
            <ProductToolBar className="contain"/>
            <Box sx={{ pt: 3 }} className="contain">
                <ProductList products={productRows} />
            </Box>
            
  
        </div>
    )
}

