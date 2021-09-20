import React from 'react';
import "./routes.css";
import RouteList from '../../../components/routeComp/routeList';
import RouteToolBar from "../../../components/routeComp/routeToolbar";
import {routesRows} from "../../../dataCollection";
import { Box } from '@material-ui/core';

export default function Routes() {
  
  return (
    <div className="routes">
      <RouteToolBar className="contain"/>
      <Box sx={{ pt: 3 }} className="contain">
          <RouteList routes={routesRows} />
      </Box>
    </div>
  );
}
