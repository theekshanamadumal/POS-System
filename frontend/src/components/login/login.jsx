import "./login.css";
import React, { Component } from "react";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import URL from "../../config";
import AuthService from "../../services/authService";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.setMessage = this.setMessage.bind(this);
    this.handleClickShowPassword = this.handleClickShowPassword.bind(this);

    this.state = {
      email: "",
      password: "",
      cpassword: "",
      showPassword: false,
      cEmail: "",
      isLogin: false,
      errorList: [],
    };
  }
  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }
  onChangePassword(e) {
    this.setState({ password: e.target.value });
  }
  handleBlur(input) {
    if (input.target.value === "") {
      this.setMessage(
        "error",
        input.target.name + " can't be empty",
        input.target.id
      );
      if (this.state.errorList.includes(input.target.id) === false) {
        this.state.errorList.push(input.target.id);
      }
    } else if (input.target.id === "email") {
      if (input.target.value.trim().includes("@") === false) {
        this.setMessage("error", "Invalid Email Address", input.target.id);
        if (this.state.errorList.includes(input.target.id) === false) {
          this.state.errorList.push(input.target.id);
        }
      } else {
        this.setMessage("success", " ", input.target.id);
        if (this.state.errorList.includes(input.target.id) === true) {
          const index = this.state.errorList.indexOf(input.target.id);
          this.state.errorList.splice(index, 1);
        }
      }
    } else {
      this.setMessage("success", " ", input.target.id);
      if (this.state.errorList.includes(input.target.id) === true) {
        const index = this.state.errorList.indexOf(input.target.id);
        this.state.errorList.splice(index, 1);
      }
    }
  }
  handleClickShowPassword = () => {
    this.setState({
      showPassword: !this.state.showPassword,
    });
  };
  onSubmit(e) {
    e.preventDefault();
    var arr = this.state;
    var errorMsg = false;
    for (var key in arr) {
      var val = arr[key];
      if (key === "email" || key === "password") {
        if (val === "") {
          this.setMessage("error", key + " can't be empty", key);
          errorMsg = true;
        }
      }
    }
    let w = "";
    /////////////////// login with jwt ///////////////////
    if (errorMsg === false && this.state.errorList.length === 0) {
      AuthService.login(this.state.email, this.state.password).then(
        () => {
          
          const currentUser = AuthService.getCurrentUser();

          if (currentUser && currentUser.roles.includes("ROLE_ADMIN")) {
              console.log("----------log done----------");
              console.log("----------role is a admin----------");
              window.location = URL.itAdmin;
          }
          else if (currentUser && currentUser.roles.includes("ROLE_MANAGER")) {
            console.log("----------log done----------");
            console.log("----------role is a MANAGER----------");
            window.location = URL.management;
          }else{
            alert("Salesperson can't Login to the system..")
          }

          //this.props.history.push("/profile");
          //window.location.reload();
          /*
          if (condition) {
          } else {
          }*/
          
        },
        (error) => {
          console.log("----------log failed----------");
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          if (resMessage.toString().toLowerCase().includes("email")) {
            this.setMessage("error", resMessage, "email");
          } else {
            this.setMessage("error", resMessage, "password");
          }
          errorMsg = true;
        }
      );
    }
    ///////////////////////////////////////////////
  }
  setMessage(msgType, msg, idElem) {
    var inp = document.getElementById(idElem);
    const formControl = inp.parentElement;
    const small = formControl.querySelector("small");
    small.innerText = msg;
    formControl.className = "form-out " + msgType;
    if (idElem === "password") {
      var chk = document.getElementById("customCheck1");
      const formControl2 = chk.parentElement;
      formControl2.className = "custom-control custom-checkbox chk " + msgType;
    }
  }
  render() {
    return (
      <div data-testid="login" className="bgImg">
        <h1 className="text-center p-4 mt-4 text-light">
          Welcome To POS System!
        </h1>
        {/*<img src="/images/cyan.png" style={{width:"100%", height:"100%"}}></img>*/}
        <div className="d-flex justify-content-center">
          <div className="mx-2 loginBox p-4">
            <form onSubmit={this.onSubmit}>
              <h3 className="text-center">Sign In</h3>
              <img
                className="align-center userLogo my-2"
                src="/images/userlogo.png"
              ></img>

              <div className="form-group form-out">
                <label>Email address</label>
                <input
                  data-testid="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                  onBlur={this.handleBlur}
                  name="Email"
                />
                <small data-testid="emailStatus"></small>
              </div>

              <div className="form-out form-group">
                <label>Password</label>
                <input
                  data-testid="password"
                  type={this.state.showPassword ? "text" : "password"}
                  id="password"
                  className="form-control pass"
                  placeholder="Enter password"
                  value={this.state.password}
                  onChange={this.onChangePassword}
                  onBlur={this.handleBlur}
                  name="Password"
                />
                {this.state.showPassword ? (
                  <Visibility
                    style={{
                      position: "absolute",
                      marginTop: "-30px",
                      marginLeft: "230px",
                      color: "rgb(97, 96, 96)",
                    }}
                    onClick={this.handleClickShowPassword}
                  />
                ) : (
                  <VisibilityOff
                    style={{
                      position: "absolute",
                      marginTop: "-30px",
                      marginLeft: "230px",
                      color: "rgb(97, 96, 96)",
                    }}
                    onClick={this.handleClickShowPassword}
                  />
                )}
                <small></small>
              </div>

              <div className="form-group">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  {/* <label
                    className="custom-control-label"
                    htmlFor="customCheck1"
                  >
                    Remember me
                  </label> */}
                </div>
              </div>

              <button
                data-testid="loginBtn"
                type="submit"
                className="btn btn-block text-light lgBtn"
                style={{ backgroundColor: "rgb(46, 100, 100)" ,marginTop:"-20px"}}
              >
                Sign In
              </button>
              <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
