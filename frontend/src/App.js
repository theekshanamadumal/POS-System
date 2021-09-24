import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Topbar from "./components/topbar/Topbar";
import'./app.css'

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
import Reports from "./pages/management/Reports/reports";

import Tasks from "./pages/management/Tasks/tasks";
import ViewTasks from "./pages/management/Tasks/viewTasks";
import AssignTasks from './pages/management/Tasks/assignTasks';
import RealTimeData from "./pages/management/Tasks/realTimeData";


function App() {
//const logged = true;
  return (
    <Router>
    <div className="App">

    <Topbar/>
        <div className='contain'>
    
        <Switch>
        
          <Route exact path="/">
           <h1>login page</h1>         
          </Route>
      
          <Route exact path="/itAdmin">
            <ItAdminSidebar/>  
            <ItAdminHome />  
          </Route>

          <Route path="/itAdmin/reports">
            <ItAdminSidebar/>  
            <h1>reports page</h1> 
          </Route>

          <Route exact path="/itAdmin/management">
            <ItAdminSidebar/> 
            <Management/> 
          </Route>

          <Route path="/itAdmin/addManager">
            <ItAdminSidebar/> 
            <AddManager />  
          </Route>
        
          <Route path="/itAdmin/editManager/:id">
            <ItAdminSidebar/> 
            <ViewManager />
          </Route> 



          <Route exact path="/management">
            <ManagementSidebar/>
            <ManagementHome/>
          </Route>  
          
          <Route path="/management/analytics">
            <ManagementSidebar/>
            <Analytics/>
          </Route>  

          <Route exact path="/management/salesperson">
            <ManagementSidebar/>
            <SalesPerson/>
          </Route> 

          <Route path="/management/addSalesperson">
            <ManagementSidebar/>
            <NewSalesPerson/>
          </Route>  
          
          <Route exact path="/management/salesPerson/:id">
            <ManagementSidebar/>
            <ViewSalesPerson/>
          </Route>         
          
          <Route exact path="/management/products">
            <ManagementSidebar/>
            <Products/>
          </Route>  
          
          <Route path="/management/products/:productName">
              <ManagementSidebar/>
              <ViewProducts/>
            </Route>  

          <Route path="/management/addProduct">
            <ManagementSidebar/>
            <AddProducts/>
          </Route>  
          
          <Route path="/management/addProductCategory">
            <ManagementSidebar/>
            <AddProductCategory location="/management"/>
          </Route>  

          <Route path="/management/reports">
            <ManagementSidebar/>
            <Reports/>
          </Route>  
          
          <Route exact path="/management/routes">
          <ManagementSidebar/>
          <Routes/>
          </Route>  

          <Route exact path="/management/routes/addRoute">
              <ManagementSidebar/>
              <AddRoute/>
            </Route> 

            <Route exact path="/management/routes/:id">
              <ManagementSidebar/>
              <ViewRoute/>
            </Route>  

            <Route path="/management/route/lastSales">
              <ManagementSidebar/>
              <LastSales/>
            </Route>  

            
            <Route path="/management/orders">
            <ManagementSidebar/>
            <Orders/>
          </Route>   

          <Route path="/management/Order/:id">
            <ManagementSidebar/>
            <ViewOrders/>
          </Route>  

          <Route exact path="/management/shops">
            <ManagementSidebar/>
            <Shops/>
          </Route> 

          <Route path="/management/shops/addShop">
            <ManagementSidebar/>
            <AddShop/>
          </Route> 

          <Route path="/management/shops/:shopName">
            <ManagementSidebar/>
            <ViewShop/>
          </Route> 

          <Route exact path="/management/tasks">
            <ManagementSidebar/>
            <Tasks/>
          </Route>

          <Route path="/management/tasks/:id/viewTasks">
            <ManagementSidebar/>
            <ViewTasks/>
          </Route>

          <Route path="/management/tasks/:id/assignTasks">
            <ManagementSidebar/>
            <AssignTasks/>
          </Route>

          <Route path="/management/tasks/:id/realData">
            <ManagementSidebar/>
            <RealTimeData/>
          </Route> 
          

        </Switch>  
        </div>
      
    </div>
    </Router>
  );
}

export default App;
