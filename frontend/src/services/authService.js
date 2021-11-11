import axios from "axios";
import URL from "../config";
import authHeader from './authHeader';


class AuthService {
  
  login(email, password) {
    return axios
      .post(URL.API_URL + "signin", {
        email,
        password
      })
      .then(response => {
          console.log("response",response);
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
          console.log("--------response.data.accessToken----------",JSON.parse(localStorage.getItem('user')));

        }

        return response.data;
      });
  }


  logout() {
    localStorage.removeItem("user");
    console.log("logging out");
    window.location =URL.signinpage;

  }


  register(user) {
   console.log("response to axio",user);

    console.log("user request recieved to authservice",user);
    return axios.post(URL.main+ URL.addUser, user,{ headers: authHeader() })
      .then(response => {
      //    console.log("response",response);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
        //alert(error, (window.location = './'));
      });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();