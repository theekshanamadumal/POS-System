import "./login.css";
import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
  constructor(props) {
    super(props);
    
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      email: "",
      password: "",
    };
  }
  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }
  onChangePassword(e) {
    this.setState({ password: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };

    console.log(userData);

    axios
      .post("http://localhost:3001/management/addProduct", userData)
      .then((res) => {
        console.log(res.data);
        alert(res.data, (window.location = "/"));
      })
      .catch((error) => {
        console.log(error);
        alert(error, (window.location = "/"));
      });
  }
  render() {
    return (
      <body className="bgImg" >
      <h1 className="text-center p-4 text-light">Welcome To POS System!</h1>
      {/*<img src="/images/cyan.png" style={{width:"100%", height:"100%"}}></img>*/}
      <div >
        <div className="mx-2 loginBox p-4">
          <form onSubmit={this.onSubmit}>
            <h3 className="text-center">Sign In</h3>
            <img className="align-center userLogo my-4" src="/images/userlogo.png"></img>

            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={this.state.email}
                onChange={this.onChangeEmail}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={this.state.password}
                onChange={this.onChangePassword}
              />
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
