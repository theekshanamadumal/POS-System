import AuthService from "./authService";
import { Route, Redirect } from 'react-router-dom';

export const PrivateAdminRoute = ({Component}) => (
  console.log("----------Component check for admin----------",Component),

    <Route render={props => {

        const currentUser = AuthService.getCurrentUser();

        if (currentUser && currentUser.roles.includes("ROLE_ADMIN")) {
            console.log("----------role is a admin----------");
            // authorised so return component
            return (Component);
        }

        // not logged in so redirect to login page with the return url
        console.log("----------role is not admin----------");
        alert("log in as an admin")

        return (Component);

        return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    }} />
)

export const PrivateManagerRoute = (Component) => (
    console.log("----------Component check for manager----------",Component),
  
      <Route render={props => {
        const currentUser = AuthService.getCurrentUser();
  
        if (currentUser && currentUser.roles.includes("ROLE_MANAGER")) {
            console.log("----------role is a manager----------");
            // authorised so return component
            return Component;
        }
  
        // not logged in so redirect to login page with the return url
        console.log("----------role is not manager----------");
        alert("log in as a manager");
  
        return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      }} />
  )


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
        return (Component);
    }} />
)
