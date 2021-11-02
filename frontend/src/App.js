import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Topbar from "./components/topbar/Topbar";
import'./app.css'

//import AuthService from "./services/authService";
import {PrivateAdminRoute,PrivateManagerRoute} from "./services/roleHandler";
//import AccessController from "./services/roleHandler";


import Login from "./components/login/login";
//import Maps from "./pages/management/sellerLocation/Maps";

//it admin
import ItAdminSidebar from "./components/itAdminSidebar/Sidebar";
import ItAdminHome from "./pages/itAdmin/Home/itAdminHome";
import Management from './pages/itAdmin/management/management';
import AddManager from './pages/itAdmin/addManager/addManager';
import ViewManager from './pages/itAdmin/management/viewManager';

//management
import ManagementSidebar from "./components/managementSidebar/Sidebar";
import ManagementHome from "./pages/management/Home/managementHome";

import SalesPerson from "./pages/management/SalesPerson/salesPerson";
import NewSalesPerson from "./pages/management/SalesPerson/newSalesPerson";
import ViewSalesPerson from "./pages/management/SalesPerson/viewSalesPerson";

import Products from "./pages/management/Products/products";
import AddProducts from "./pages/management/Products/addProduct";
import ViewProducts from './pages/management/Products/viewProducts';
import AddProductCategory from './pages/management/Products/addProductCategory';

import Orders from "./pages/management/Orders/orders";
import ViewOrders from './pages/management/Orders/viewOrder';

import Routes from "./pages/management/Routes/route";
import AddRoute from "./pages/management/Routes/addRoute";
import ViewRoute from "./pages/management/Routes/viewRoute";
import LastSales from './pages/management/Routes/lastSales';

import Shops from "./pages/management/Shops/shops";
import AddShop from "./pages/management/Shops/addShop";
import ViewShop from "./pages/management/Shops/viewShop";

import Analytics from "./pages/management/Analytics/analytics";
//import Reports from "./pages/management/Reports/reports";

import Tasks from "./pages/management/Tasks/tasks";
import ViewTasks from "./pages/management/Tasks/viewTasks";
import AssignTasks from './pages/management/Tasks/assign';


class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() { 
    
  }

  render() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Login/>
          </Route>

          <Route exact path="/login">
            <Login/>
          </Route>

          {/*  admin routes  */}
    
        <PrivateAdminRoute exact path="/itAdmin" component={ItAdminHome}/>

        <PrivateAdminRoute exact path="/itAdmin/reports" component={<h1>reports page</h1> }/>

        <PrivateAdminRoute exact path="/itAdmin/management" component={Management}/>

        <PrivateAdminRoute exact path="/itAdmin/addManager" component={AddManager}/>

        <PrivateAdminRoute exact path="/itAdmin/editManager/:id" component={ViewManager}/>

          {/*  management routes  */}
          <PrivateManagerRoute exact path="/management" component={ManagementHome}/>
          
          <PrivateManagerRoute exact path="/management/analytics" component={Analytics}/> 

          <PrivateManagerRoute exact path="/management/salesperson" component={SalesPerson}/> 

          <PrivateManagerRoute exact path="/management/addSalesperson" component={NewSalesPerson}/> 

          <PrivateManagerRoute exact path="/management/salesPerson/:id" component={ViewSalesPerson}/> 

          <PrivateManagerRoute exact path="/management/products" component={Products}/> 

          <PrivateManagerRoute exact path="/management/products/:id" component={ViewProducts}/> 

          <PrivateManagerRoute exact path="/management/addProduct" component={AddProducts}/> 

          <PrivateManagerRoute exact path="/management/addProductCategory" component={AddProductCategory}/> 

          <PrivateManagerRoute exact path="/management/routes" component={Routes}/> 

          <PrivateManagerRoute exact path="/management/routes/addRoute" component={AddRoute}/> 

          <PrivateManagerRoute exact path="/management/routes/:id" component={ViewRoute}/> 

          <PrivateManagerRoute exact path="/management/route/lastSales" component={LastSales}/> 

          <PrivateManagerRoute exact path="/management/orders" component={Orders}/> 

          <PrivateManagerRoute exact path="/management/Order/:id" component={ViewOrders}/> 

          <PrivateManagerRoute exact path="/management/shops" component={Shops}/> 

          <PrivateManagerRoute exact path="/management/shops/addShop" component={AddShop}/> 

          <PrivateManagerRoute exact path="/management/shops/:id" component={ViewShop}/> 

          <PrivateManagerRoute exact path="/management/tasks" component={Tasks}/> 

          <PrivateManagerRoute exact path="/management/tasks/:id/viewTasks" component={ViewTasks}/> 

          <PrivateManagerRoute exact path="/management/tasks/assignTasks" component={AssignTasks }/> 
    

        </Switch>  
      </div>
    </Router>
  );
}
}

export default App;