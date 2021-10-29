import AuthService from "./authService";
import { Route, Redirect } from 'react-router-dom';

export const PrivateAdminRoute = (Component) => (
  console.log("----------Component----------",Component),

    <Route render={props => {

        const currentUser = AuthService.getCurrentUser();
        const isAdmin = currentUser.roles.includes("ROLE_ADMIN");

        if (!isAdmin) {
            // not logged in so redirect to login page with the return url
            console.log("----------role is not admin----------");
            alert("log in as an admin")

            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }

        // authorised so return component
        return Component;
    }} />
)


export const PrivateManagerRoute =  (Component) => (
  console.log("----------Component----------",Component),

    <Route render={props => {

        const currentUser = AuthService.getCurrentUser();
        console.log("----------currentUser----------",currentUser.roles);

        const isManager = currentUser.roles.includes("ROLE_ADMIN");

        if (!isManager) {
            // not logged in so redirect to login page with the return url
            console.log("----------role is not manager----------");
            alert("log in as a manager")

            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }
        console.log("----------role is a manager----------");

        // authorised so return component
        return Component;
    }} />
)
/*
class RoleHandler {
  
  // Constructor
    constructor(isAdmin,isManager) {
      const adminRole = isAdmin;
      const managerRole = isManager;
    }

    admin(component) {
      
        console.log("----------isAdmin in controller----------",this.adminRole);

        return (this.adminRole && component);
      
    }

}

export default RoleHandler;  
*/