import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Topbar from "./components/topbar/Topbar";
import'./app.css'

import AuthService from "./services/authService";
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
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: undefined,
      isManager: false,
      isAdmin: false,
    };
  }

  componentDidMount() { 
    
    const user = AuthService.getCurrentUser();

    console.log("----------user did mount----------",user);

    if (user) {
      this.setState({
        currentUser: user,
        isManager: user.roles.includes("ROLE_MANAGER"),
        isAdmin: user.roles.includes("ROLE_ADMIN"),
      });

      console.log("----------user roles----------",user.roles);

    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
   // const { currentUser, isManager, isAdmin } = this.state;

   // const Access = new AccessController(isAdmin,isManager); 


    //console.log("----------isManager----------",this.state.isManager);
    //console.log("----------isAdmin----------",this.state.isAdmin);

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
    
        <PrivateAdminRoute exact path="/itAdmin">

            <Topbar name={"Admin"}/>
            <div className="contain">
              <ItAdminSidebar/>  
              <ItAdminHome />  
            </div>

        </PrivateAdminRoute>
    


          <PrivateAdminRoute path="/itAdmin/reports">
            <Topbar name={"Admin"}/>
            <div className="contain">
              <ItAdminSidebar/>  
              <h1>reports page</h1> 
            </div>
          </PrivateAdminRoute>

          <PrivateAdminRoute exact path="/itAdmin/management">
            <Topbar name={"Admin"}/>
            <div className="contain">
              <ItAdminSidebar/> 
              <Management/> 
            </div>
          </PrivateAdminRoute>

          <PrivateAdminRoute path="/itAdmin/addManager">
            <Topbar name={"Admin"}/>
            <div className="contain">
              <ItAdminSidebar/> 
              <AddManager />  
            </div>
          </PrivateAdminRoute>
        
          <PrivateAdminRoute path="/itAdmin/editManager/:id">
            <Topbar name={"Admin"}/>
            <div className="contain">
              <ItAdminSidebar/> 
              <ViewManager />
            </div>
          </PrivateAdminRoute> 

          {/*  management routes  */}


          
          <PrivateManagerRoute exact path="/management">
            <Topbar name={"Management"}/>
            <div className="contain">
              <ManagementSidebar/>
              <ManagementHome/>
            </div>
          </PrivateManagerRoute>  
          


          <PrivateManagerRoute exact path="/management/analytics">
            <Topbar name={"Management"}/>
            <div className="contain">
              <ManagementSidebar/>
              <Analytics/>
            </div>
          </PrivateManagerRoute>  




          <PrivateManagerRoute exact path="/management/salesperson">
            <Topbar name={"Management"}/>
            <div className="contain">
              <ManagementSidebar/>
              <SalesPerson/>
            </div>
          </PrivateManagerRoute> 

          <PrivateManagerRoute path="/management/addSalesperson">
            <Topbar name={"Management"}/>
            <div className="contain">
              <ManagementSidebar/>
              <NewSalesPerson/>
            </div>
          </PrivateManagerRoute>  
          
          <PrivateManagerRoute exact path="/management/salesPerson/:id">
            <Topbar name={"Management"}/>
            <div className="contain">
              <ManagementSidebar/>
              <ViewSalesPerson/>
            </div>
          </PrivateManagerRoute>         
          
          <PrivateManagerRoute exact path="/management/products">
            <Topbar name={"Management"}/>
            <div className="contain">
              <ManagementSidebar/>
              <Products/>
            </div>
          </PrivateManagerRoute>  
          
          <PrivateManagerRoute exact path="/management/products/:id">
            <Topbar name={"Management"}/>
            <div className="contain">
              <ManagementSidebar/>
              <ViewProducts/>
            </div>
          </PrivateManagerRoute>  

          <PrivateManagerRoute path="/management/addProduct">
            <Topbar name={"Management"}/>
            <div className="contain">
              <ManagementSidebar/>
              <AddProducts/>
            </div>
          </PrivateManagerRoute>  
          
          <PrivateManagerRoute path="/management/addProductCategory">
            <Topbar name={"Management"}/>
            <div className="contain">
              <ManagementSidebar/>
              <AddProductCategory location="/management"/>
            </div>
          </PrivateManagerRoute>  

          <PrivateManagerRoute exact path="/management/routes">
            <Topbar name={"Management"}/>
            <div className="contain">
              <ManagementSidebar/>
              <Routes/>
            </div>
          </PrivateManagerRoute>  

          <PrivateManagerRoute exact path="/management/routes/addRoute">
            <Topbar name={"Management"}/>
            <div className="contain">
              <ManagementSidebar/>
              <AddRoute/>
            </div>
          </PrivateManagerRoute> 

          <PrivateManagerRoute exact path="/management/routes/:id">
            <Topbar name={"Management"}/>
            <div className="contain">
              <ManagementSidebar/>
              <ViewRoute/>
            </div>
          </PrivateManagerRoute>  

          <PrivateManagerRoute path="/management/route/lastSales">
            <Topbar name={"Management"}/>
            <div className="contain">
              <LastSales/>
              <ManagementSidebar/>
            </div>           
          </PrivateManagerRoute>  

            
          <PrivateManagerRoute path="/management/orders">
            <Topbar name={"Management"}/>
            <div className="contain">
              <ManagementSidebar/>
              <Orders/>
            </div>
          </PrivateManagerRoute>   

          <PrivateManagerRoute path="/management/Order/:id">
            <Topbar name={"Management"}/>
            <div className="contain">
              <ManagementSidebar/>
              <ViewOrders/>
            </div>
          </PrivateManagerRoute>  

          <PrivateManagerRoute exact path="/management/shops">
            <Topbar name={"Management"}/>
            <div className="contain">
              <ManagementSidebar/>
              <Shops/>
            </div>
          </PrivateManagerRoute> 

          <PrivateManagerRoute path="/management/shops/addShop">
            <Topbar name={"Management"}/>
            <div className="contain">
              <ManagementSidebar/>
              <AddShop/>
            </div>
          </PrivateManagerRoute> 

          <PrivateManagerRoute path="/management/shops/:id">
            <Topbar name={"Management"}/>
            <div className="contain">
              <ManagementSidebar/>
              <ViewShop/>
            </div>
          </PrivateManagerRoute> 

          <PrivateManagerRoute exact path="/management/tasks">
            <Topbar name={"Management"}/>
            <div className="contain">
              <ManagementSidebar/>
              <Tasks/>
            </div>
          </PrivateManagerRoute>

          <PrivateManagerRoute exact path="/management/tasks/:id/viewTasks">
            <Topbar name={"Management"}/>
            <div className="contain">
              <ManagementSidebar/>
              <ViewTasks/>
            </div>
          </PrivateManagerRoute>

          <PrivateManagerRoute exact path="/management/tasks/:id/assignTasks">
            <Topbar name={"Management"}/>
            <div className="contain">
              <ManagementSidebar/>
              <AssignTasks />
            </div>
          </PrivateManagerRoute>

        </Switch>  
      </div>
    </Router>
  );
}
}

export default App;