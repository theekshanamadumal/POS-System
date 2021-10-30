import AuthService from "./authService";
import { Route, Redirect } from 'react-router-dom';

import Topbar from "../components/topbar/Topbar";
import ItAdminSidebar from "../components/itAdminSidebar/Sidebar";
import ManagementSidebar from "../components/managementSidebar/Sidebar";


export const PrivateAdminRoute = ({component: Component, ...rest}) => (
  //console.log("----------Component----------",Component),

    <Route {...rest} render={props => {
        const currentUser = AuthService.getCurrentUser();

        if (currentUser && currentUser.roles.includes("ROLE_ADMIN")) {
            console.log("----------role is a admin----------");
            // authorised so return component
            return (
              <div>
                <Topbar name={"Admin"}/>
              <div className="contain">
                <ItAdminSidebar/>
                <Component {...props}/>
              </div>
              </div>
              );        }

        // not logged in so redirect to login page with the return url
        console.log("----------role is not admin----------");
        alert("log in as an admin")

        return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    
    }} />
)


export const PrivateManagerRoute =  ({component: Component, ...rest}) => ( 
  //console.log("----------Component----------",Component),

    <Route {...rest} render={props => {
        const currentUser = AuthService.getCurrentUser();
  
        if (currentUser && currentUser.roles.includes("ROLE_MANAGER")) {
            console.log("----------role is a manager----------");
            // authorised so return component
            return (
            <div>
              <Topbar name={"Management"}/>
            <div className="contain">
              <ManagementSidebar/>
              <Component {...props}/>
            </div>
            </div>
            );
        }
  
        // not logged in so redirect to login page with the return url
        console.log("----------role is not manager----------");
        alert("log in as a manager");
  
        return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      }} />
)
