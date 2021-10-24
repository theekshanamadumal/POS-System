import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Topbar from "./components/topbar/Topbar";
import'./app.css'

import Login from "./components/login/login";
import Maps from "./pages/management/sellerLocation/Maps";

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


function App() {
//const logged = true;
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Login/>
          </Route>

          <Route exact path="/itAdmin">
            <Topbar name={"Admin"}/>
            <div className="contain">
              <ItAdminSidebar/>  
              <ItAdminHome />  
            </div>
          </Route>

          <Route path="/itAdmin/reports">
            <Topbar name={"Admin"}/>
            <div className="contain">
              <ItAdminSidebar/>  
              <h1>reports page</h1> 
            </div>
          </Route>

          <Route exact path="/itAdmin/management">
            <Topbar name={"Admin"}/>
            <div className="contain">
              <ItAdminSidebar/> 
              <Management/> 
            </div>
          </Route>

          <Route path="/itAdmin/addManager">
            <Topbar name={"Admin"}/>
            <div className="contain">
              <ItAdminSidebar/> 
              <AddManager />  
            </div>
          </Route>
        
          <Route path="/itAdmin/editManager/:id">
            <Topbar name={"Admin"}/>
            <div className="contain">
              <ItAdminSidebar/> 
              <ViewManager />
            </div>
          </Route> 
          
          <Route exact path="/management">
            <Topbar name={"Management"}/>
            <div className="contain">
              <ManagementSidebar/>
              <ManagementHome/>
            </div>
          </Route>  
          
          <Route exact path="/management/analytics">
            <Topbar name={"Management"}/>
            <div className="contain">
              <ManagementSidebar/>
              <Analytics/>
            </div>
          </Route>  

          <Route exact path="/management/salesperson">
            <Topbar name={"Management"}/>
            <div className="contain">
              <ManagementSidebar/>
              <SalesPerson/>
            </div>
          </Route> 

          <Route path="/management/addSalesperson">
            <Topbar name={"Management"}/>
            <div className="contain">
              <ManagementSidebar/>
              <NewSalesPerson/>
            </div>
          </Route>  
          
          <Route exact path="/management/salesPerson/:id">
            <Topbar name={"Management"}/>
            <div className="contain">
              <ManagementSidebar/>
              <ViewSalesPerson/>
            </div>
          </Route>         
          
          <Route exact path="/management/products">
            <Topbar name={"Management"}/>
            <div className="contain">
              <ManagementSidebar/>
              <Products/>
            </div>
          </Route>  
          
          <Route exact path="/management/products/:id">
            <Topbar name={"Management"}/>
            <div className="contain">
              <ManagementSidebar/>
              <ViewProducts/>
            </div>
          </Route>  

          <Route path="/management/addProduct">
            <Topbar name={"Management"}/>
            <div className="contain">
              <ManagementSidebar/>
              <AddProducts/>
            </div>
          </Route>  
          
          <Route path="/management/addProductCategory">
            <Topbar name={"Management"}/>
            <div className="contain">
              <ManagementSidebar/>
              <AddProductCategory location="/management"/>
            </div>
          </Route>  

          <Route exact path="/management/routes">
            <Topbar name={"Management"}/>
            <div className="contain">
              <ManagementSidebar/>
              <Routes/>
            </div>
          </Route>  

          <Route exact path="/management/routes/addRoute">
            <Topbar name={"Management"}/>
            <div className="contain">
              <ManagementSidebar/>
              <AddRoute/>
            </div>
          </Route> 

          <Route exact path="/management/routes/:id">
            <Topbar name={"Management"}/>
            <div className="contain">
              <ManagementSidebar/>
              <ViewRoute/>
            </div>
          </Route>  

          <Route path="/management/route/lastSales">
            <Topbar name={"Management"}/>
            <div className="contain">
              <LastSales/>
              <ManagementSidebar/>
            </div>           
          </Route>  

            
          <Route path="/management/orders">
            <Topbar name={"Management"}/>
            <div className="contain">
              <ManagementSidebar/>
              <Orders/>
            </div>
          </Route>   

          <Route path="/management/Order/:id">
            <Topbar name={"Management"}/>
            <div className="contain">
              <ManagementSidebar/>
              <ViewOrders/>
            </div>
          </Route>  

          <Route exact path="/management/shops">
            <Topbar name={"Management"}/>
            <div className="contain">
              <ManagementSidebar/>
              <Shops/>
            </div>
          </Route> 

          <Route path="/management/shops/addShop">
            <Topbar name={"Management"}/>
            <div className="contain">
              <ManagementSidebar/>
              <AddShop/>
            </div>
          </Route> 

          <Route path="/management/shops/:id">
            <Topbar name={"Management"}/>
            <div className="contain">
              <ManagementSidebar/>
              <ViewShop/>
            </div>
          </Route> 

          <Route exact path="/management/tasks">
            <Topbar name={"Management"}/>
            <div className="contain">
              <ManagementSidebar/>
              <Tasks/>
            </div>
          </Route>

          <Route path="/management/tasks/:id/viewTasks">
            <Topbar name={"Management"}/>
            <div className="contain">
              <ManagementSidebar/>
              <ViewTasks/>
            </div>
          </Route>

          <Route path="/management/tasks/:id/assignTasks">
            <Topbar name={"Management"}/>
            <div className="contain">
              <ManagementSidebar/>
              <AssignTasks />
            </div>
          </Route>

        </Switch>  
      </div>
    </Router>
  );
}

export default App;
