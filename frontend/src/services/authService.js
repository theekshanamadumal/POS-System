import axios from "axios";
import URL from "../config";

const API_URL = "http://localhost:3001/api/auth/";

class AuthService {

  login(email, password) {
    return axios
      .post(API_URL + "signin", {
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
  }


  register(user) {
    return axios.post(API_URL + "signup", user);
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();