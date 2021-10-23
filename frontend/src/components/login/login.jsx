import "./login.css";
import React, { Component } from "react";
import axios from "axios";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import URL from "../../config";

export default class Login extends Component {
  constructor(props) {
    super(props);
    
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
    this.handleBlur=this.handleBlur.bind(this);
    this.errorList = [];
    this.setMessage=this.setMessage.bind(this);
    this.handleClickShowPassword=this.handleClickShowPassword.bind(this);

    this.state = {
      email: "",
      password: "",
      cpassword: "",
      showPassword: false,
      salespersons:[],
      cEmail:"",
      isLogin:false,
    };
  }
  componentDidMount() {
    axios
      .get(URL.main+URL.salesperson)
      .then((response) => {
        this.setState({salespersons:response.data});
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }
  onChangePassword(e) {
    this.setState({ password: e.target.value });
  }
  handleBlur(input){
    if (input.target.value === "") {
      this.setMessage("error",input.target.name+" can't be empty",input.target.id);
      if (this.errorList.includes(input.target.id) === false) {
        this.errorList.push(input.target.id);
      }
    }else if (input.target.id==="email"){
      if (input.target.value.trim().includes("@")===false){
        this.setMessage("error", "Invalid Email Address",input.target.id);
        if (this.errorList.includes(input.target.id) === false) {
          this.errorList.push(input.target.id);
        }
      }
      else {
        this.setMessage("success", " ",input.target.id);
        if (this.errorList.includes(input.target.id) === true) {
          const index = this.errorList.indexOf(input.target.id);
          this.errorList.splice(index, 1);
        }
      }
    }
    else {
      this.setMessage("success", " ",input.target.id);
      if (this.errorList.includes(input.target.id) === true) {
        const index = this.errorList.indexOf(input.target.id);
        this.errorList.splice(index, 1);
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
      if (key === "email" || key==="password") {
        if (val === "") {
          this.setMessage("error",key +" can't be empty",key);
          errorMsg = true;
        }
      }
    }let w="";
    if (errorMsg === false && this.errorList.length === 0) {
      this.state.salespersons.filter((val)=>{
        if (val.email===this.state.email){
          w="correct email";
          if (val.password===this.state.password){
            window.location = "/management";
            
          }
          if (val.password!==this.state.password){
            this.setMessage("error","Incorrect Password","password");
            errorMsg = true;
          }
        }
      })
      if (w!=="correct email"){
        this.setMessage("error","Incorrect Email","email");
        errorMsg = true;
        this.setMessage("error","","password");
      }
    }
  }
  setMessage(msgType,msg,idElem){
    var inp = document.getElementById(idElem);
    const formControl = inp.parentElement;
    const small = formControl.querySelector("small");
    small.innerText = msg;
    formControl.className = "form-out "+msgType;
  }
  render() {
    return (
      <body className="bgImg" >
      <h1 className="text-center p-2 text-light">Welcome To POS System!</h1>
      {/*<img src="/images/cyan.png" style={{width:"100%", height:"100%"}}></img>*/}
      <div className="d-flex justify-content-center">
        <div className="mx-2 loginBox p-4">
          <form onSubmit={this.onSubmit}>
            <h3 className="text-center">Sign In</h3>
            <img className="align-center userLogo my-4" src="/images/userlogo.png"></img>

            <div className="form-group">
              <label>Email address</label>
              <input
                id="email"
                className="form-control"
                placeholder="Enter email"
                value={this.state.email}
                onChange={this.onChangeEmail}
                onBlur={this.handleBlur}
                name="Email"
              />
              <small></small>
            </div>

            <div className="form-out form-group">
              <label>Password</label>
              <input
                type={this.state.showPassword? "text": "password"}
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
                  }}
                  onClick={this.handleClickShowPassword}
                />
              ) : (
                <VisibilityOff
                  style={{
                    position: "absolute",
                    marginTop: "-30px",
                    marginLeft: "230px",
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
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>

            <button type="submit" className="btn btn-block text-light" style={{backgroundColor:"rgb(46, 100, 100)"}}>
              Submit
            </button>
            <p className="forgot-password text-right">
              Forgot <a href="#">password?</a>
            </p>
          </form>
        </div>
        
        </div>
      </body>
    );
  }
}
