import React, { Component } from "react";
import URL from "../../../config";
import AuthService from "../../../services/authService";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import "../../management/SalesPerson/newSalesperson.css";

var multer = require("multer");

var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

export default class AddUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeIdNumber = this.onChangeIdNumber.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeConPassword = this.onChangeConPassword.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeJoinedDate = this.onChangeJoinedDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.onChangeRole = this.onChangeRole.bind(this);
    this.handleClickShowPassword = this.handleClickShowPassword.bind(this);

    this.state = {
      firstName: "",
      lastName: "",
      idNumber: "",
      image: "",
      password: "",
      conPassword: "",
      address: "",
      city: "",
      phoneNumber: "",
      email: "",
      roles: [],
      joinedDate: new Date(),
      showPassword: false,
      showConPassword: false,
    };
    this.errorList = [];
  }

  onChangeFirstName(e) {
    this.setState({
      firstName: e.target.value,
    });
  }
  onChangeLastName(e) {
    this.setState({
      lastName: e.target.value,
    });
  }
  onChangeIdNumber(e) {
    this.setState({
      idNumber: e.target.value,
    });
  }
  onChangeImage(e) {
    const selectedImage = e;
    upload.single("image");
    const imgData = toString(selectedImage);
    console.log(imgData);

    const imgcontentType = "image/jpg";
    const image = { data: imgData, contentType: imgcontentType };
    this.setState({
      image: e.target.value,
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  onChangeConPassword(e) {
    this.setState({
      conPassword: e.target.value,
    });
  }
  onChangeAddress(e) {
    this.setState({
      address: e.target.value,
    });
  }

  onChangeCity(e) {
    this.setState({
      city: e.target.value,
    });
  }

  onChangePhoneNumber(e) {
    this.setState({
      phoneNumber: e.target.value,
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangeJoinedDate(e) {
    this.setState({
      joinedDate: e.target.value,
    });
  }
  onChangeRole(e) {
    if (this.state.roles.includes(e.target.value) === true) {
      const index = this.state.roles.indexOf(e.target.value);
      this.state.roles.splice(index, 1);
    } else {
      this.state.roles.push(e.target.value);
    }
    console.log("roles", this.state.roles);

    console.log("process..", typeof this.state.roles, this.state.roles);
    if (this.state.roles.length === 0) {
      // set error
      //small.innerText = "Invalid Phone number";
      //formControl.className = "form-outline error";
      this.errorList.push(e.target.type);
    } else {
      //small.innerText = " ";
      //formControl.className = "form-outline success";
      if (this.errorList.includes(e.target.type) === true) {
        const index = this.errorList.indexOf(e.target.type);
        this.errorList.splice(index, 1);
      }
      //set success
    }
  }
  handleClickShowPassword = () => {
    this.setState({
      showPassword: !this.state.showPassword,
    });
  };
  handleClickShowConPassword = () => {
    this.setState({
      showConPassword: !this.state.showConPassword,
    });
  };
  handleBlur(input) {
    //check for any input
    const formControl = input.target.parentElement;
    const small = formControl.querySelector("small");
    if (input.target.value === "") {
      small.innerText = "Can't be empty";
      formControl.className = "form-outline error";
      if (this.errorList.includes(input.target.id) === false) {
        this.errorList.push(input.target.id);
      }
    } //check for invalid id number
    else if (input.target.id === "idNumber") {
      let idValid = true;
      if (input.target.value.trim().length === 12) {
        let isnum = /^\d+$/.test(input.target.value.trim());
        if (isnum !== true) {
          idValid = false;
        }
      } else if (input.target.value.trim().length === 10) {
        let isnum = /^\d+$/.test(
          input.target.value
            .trim()
            .substring(0, input.target.value.trim().length - 1)
        );
        let islett =
          input.target.value
            .trim()
            .substring(input.target.value.trim().length - 1)
            .toLowerCase() === "v";
        if (isnum === false || islett === false) {
          idValid = false;
        }
      } else {
        idValid = false;
      }
      if (idValid === true) {
        small.innerText = " ";
        formControl.className = "form-outline success";
        if (this.errorList.includes(input.target.id) === true) {
          const index = this.errorList.indexOf(input.target.id);
          this.errorList.splice(index, 1);
        }
      } else {
        small.innerText = "Invalid ID Number";
        formControl.className = "form-outline error";
        if (this.errorList.includes(input.target.id) === false) {
          this.errorList.push(input.target.id);
        }
      }
    } // check for password match
    else if (input.target.id === "conPassword") {
      if (input.target.value !== this.state.password) {
        small.innerText = "Password doesn't match";
        formControl.className = "form-outline error";
        if (this.errorList.includes(input.target.id) === false) {
          this.errorList.push(input.target.id);
        }
      } else {
        small.innerText = " ";
        formControl.className = "form-outline success";
        if (this.errorList.includes(input.target.id) === true) {
          const index = this.errorList.indexOf(input.target.id);
          this.errorList.splice(index, 1);
        }
      }
    } //check for invalid phone number
    else if (input.target.id === "phoneNumber") {
      if (input.target.value.length !== 10) {
        small.innerText = "Invalid Phone number";
        formControl.className = "form-outline error";
        if (this.errorList.includes(input.target.id) === false) {
          this.errorList.push(input.target.id);
        }
      } else {
        small.innerText = " ";
        formControl.className = "form-outline success";
        if (this.errorList.includes(input.target.id) === true) {
          const index = this.errorList.indexOf(input.target.id);
          this.errorList.splice(index, 1);
        }
      }
    } else {
      small.innerText = "   ";
      formControl.className = "form-outline success";
      if (this.errorList.includes(input.target.id) === true) {
        const index = this.errorList.indexOf(input.target.id);
        this.errorList.splice(index, 1);
      }
    }
  }
  onSubmit(e) {
    e.preventDefault();
    var arr = this.state;
    var errorMsg = false;
    for (var key in arr) {
      var val = arr[key];
      if (typeof val === "string") {
        var inp = document.getElementById(key);
        const formControl = inp.parentElement;
        const small = formControl.querySelector("small");
        if (val === "") {
          small.innerText = "Can't be empty";
          formControl.className = "form-outline error";
          errorMsg = true;
        }
      } else if (val === "roles") {
        console.log("df");
        if (val.length === 0) {
          errorMsg = true;
        }
      }
    }
    if (errorMsg === false && this.errorList.length === 0) {
      const user = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        idNumber: this.state.idNumber,
        image: this.state.image,
        password: this.state.password,
        address: this.state.address,
        city: this.state.city,
        phoneNumber: this.state.phoneNumber,
        email: this.state.email,
        joinedDate: this.state.joinedDate,
        roles: this.state.roles,
      };
      console.log("user register data to authservicr", user);

      AuthService.register(user)
        .then((res) => {
          console.log("user response from authservice", res);
          alert(res.message);
          alert(res.data, (window.location = URL.user));
        })
        .catch((error) => {
          console.log("user response error authservicr", error);
          alert(error);
          alert(error, (window.location = URL.user));
        });
    }
  }

  render() {
    return (
      <div data-testid="newSalesperson" className="newUser">
        <h1 className="title">Add a New User</h1>
        <form className="addSalespersonForm" onSubmit={this.onSubmit} enctype="multipart/form-data">
          <section className="h-100 h-custom gradient-custom-2">
            <div className="container py-5 h-100">
              <div className="col-12">
                <div
                  className="card card-registration card-registration-2"
                  style={{ borderRadius: "15px" }}
                >
                  <div>
                    <div className="row g-0">
                      <div className="col-lg-6">
                        <div className="p-5">
                          <h3
                            className="fw-normal mb-5"
                            style={{ color: "#4835d4" }}
                          >
                            Account Details
                          </h3>

                          <div className="row">
                            <div className="col-md-6 mb-2 pb-2">
                              <div className="form-outline">
                                <label
                                  className="form-label"
                                  htmlFor="firstName"
                                >
                                  First Name
                                </label>
                                <input
                                  value={this.state.firstName}
                                  onChange={this.onChangeFirstName}
                                  type="text"
                                  id="firstName"
                                  className="form-control form-control-lg"
                                  onBlur={this.handleBlur}
                                />
                                <small>error</small>
                              </div>
                            </div>
                            <div className="col-md-6 mb-2 pb-2">
                              <div className="form-outline">
                                <label
                                  className="form-label"
                                  htmlFor="lastName"
                                >
                                  Last name
                                </label>
                                <input
                                  value={this.state.lastName}
                                  onChange={this.onChangeLastName}
                                  type="text"
                                  id="lastName"
                                  className="form-control form-control-lg"
                                  onBlur={this.handleBlur}
                                />
                                <small>error</small>
                              </div>
                            </div>
                          </div>

                          <div className="mb-2 pb-2">
                            <div className="form-outline">
                              <label className="form-label" htmlFor="idNumber">
                                ID Number
                              </label>
                              <input
                                value={this.state.idNumber}
                                onChange={this.onChangeIdNumber}
                                type="text"
                                id="idNumber"
                                className="form-control form-control-lg"
                                onBlur={this.handleBlur}
                              />
                              <small>error</small>
                            </div>
                            <div className="form-outline">
                              <label className="form-label" htmlFor="role">
                                Role
                              </label>
                              <div className="form-outline row pb-2 px-3">
                                <div className="col-md-5 form-check mx-3 ">
                                  <input
                                    className="form-check-input"
                                    style={{ height: "20px", width: "20px" }}
                                    type="checkbox"
                                    value="manager"
                                    id="flexCheckManager"
                                    onChange={this.onChangeRole}
                                  />
                                  <label
                                    className="form-check-label mt-2 mx-2"
                                    for="flexCheckManager"
                                  >
                                    Manager
                                  </label>
                                </div>
                                <div className="col-md-5 form-check">
                                  <input
                                    style={{ height: "20px", width: "20px" }}
                                    className="form-check-input"
                                    type="checkbox"
                                    value="salesperson"
                                    id="flexCheckSalesperson"
                                    onChange={this.onChangeRole}
                                  />
                                  <label
                                    class="form-check-label mt-2  mx-2"
                                    for="flexCheckSalesperson"
                                  >
                                    Salesperson
                                  </label>
                                </div>
                                <small>error</small>
                              </div>
                            </div>
                          </div>

                          <div className="mb-2 pb-2">
                            <div className="form-outline">
                              <label className="form-label" htmlFor="image">
                                Add Image
                              </label>
                              <input
                                style={{ height: "40px" }}
                                onChange={this.onChangeImage}
                                type="file"
                                id="image"
                                className="form-control form-control-lg"
                                onBlur={this.handleBlur}
                              />
                              <small>error</small>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-6 col-sm-12 mb-2 pb-2">
                              <div className="form-outline">
                                <label
                                  className="form-label"
                                  htmlFor="password"
                                >
                                  Enter Password
                                </label>
                                <input
                                  onChange={this.onChangePassword}
                                  type={
                                    this.state.showPassword
                                      ? "text"
                                      : "password"
                                  }
                                  id="password"
                                  className="pass form-control form-control-lg"
                                  onBlur={this.handleBlur}
                                />
                                {this.state.showPassword ? (
                                  <Visibility
                                    style={{
                                      position: "absolute",
                                      marginTop: "-30px",
                                      marginLeft: "100px",
                                    }}
                                    onClick={this.handleClickShowPassword}
                                  />
                                ) : (
                                  <VisibilityOff
                                    style={{
                                      position: "absolute",
                                      marginTop: "-30px",
                                      marginLeft: "100px",
                                    }}
                                    onClick={this.handleClickShowPassword}
                                  />
                                )}
                                <small>error</small>
                              </div>
                            </div>
                            <div className="col-md-6 mb-2 pb-2">
                              <div className="form-outline">
                                <label
                                  className="form-label"
                                  htmlFor="conPassword"
                                >
                                  Confirm Password
                                </label>
                                <input
                                  onChange={this.onChangeConPassword}
                                  type={
                                    this.state.showConPassword
                                      ? "text"
                                      : "password"
                                  }
                                  id="conPassword"
                                  className="pass form-control form-control-sm"
                                  onBlur={this.handleBlur}
                                />
                                {this.state.showConPassword ? (
                                  <Visibility
                                    style={{
                                      position: "absolute",
                                      marginTop: "-30px",
                                      marginLeft: "100px",
                                    }}
                                    onClick={this.handleClickShowConPassword}
                                  />
                                ) : (
                                  <VisibilityOff
                                    style={{
                                      position: "absolute",
                                      marginTop: "-30px",
                                      marginLeft: "100px",
                                    }}
                                    onClick={this.handleClickShowConPassword}
                                  />
                                )}
                                <small>error message.</small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 bg-indigo text-white">
                        <div className="p-5">
                          <h3 className="fw-normal mb-5">Contact Details</h3>
                          <div className="row">
                            <div className="col-md-12 mb-2 pb-2">
                              <div className="form-outline">
                                <label
                                  className="form-label text-white"
                                  htmlFor="address"
                                >
                                  Address
                                </label>
                                <input
                                  value={this.state.address}
                                  onChange={this.onChangeAddress}
                                  type="text"
                                  id="address"
                                  className="form-control form-control-lg"
                                  onBlur={this.handleBlur}
                                />
                                <small>error</small>
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-12 mb-2 pb-2">
                              <div className="form-outline">
                                <label
                                  className="form-label text-white"
                                  htmlFor="city"
                                >
                                  city
                                </label>
                                <input
                                  value={this.state.city}
                                  onChange={this.onChangeCity}
                                  type="text"
                                  id="city"
                                  className="form-control form-control-lg"
                                  onBlur={this.handleBlur}
                                />
                                <small>error</small>
                              </div>
                            </div>
                          </div>
                          <div className="mb-2 pb-2">
                            <div className="form-outline">
                              <label
                                className="form-label text-white"
                                htmlFor="phoneNumber"
                              >
                                Phone Number
                              </label>
                              <input
                                value={this.state.phoneNumber}
                                onChange={this.onChangePhoneNumber}
                                type="Number"
                                id="phoneNumber"
                                className="form-control form-control-lg"
                                onBlur={this.handleBlur}
                              />
                              <small>error</small>
                            </div>
                          </div>
                          <div className="mb-2 pb-2">
                            <div className="form-outline">
                              <label
                                className="form-label text-white"
                                htmlFor="email"
                              >
                                Email Address
                              </label>
                              <input
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                                type="email"
                                id="email"
                                className="form-control form-control-lg"
                                onBlur={this.handleBlur}
                              />
                              <small>error</small>
                            </div>
                          </div>

                          <button
                            type="submit"
                            className="btn btn-success btn-lg"
                            data-mdb-ripple-color="dark"
                          >
                            Register
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </form>
      </div>
    );
  }
}
