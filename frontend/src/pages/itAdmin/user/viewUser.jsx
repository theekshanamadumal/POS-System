import React, { Component } from "react";
import axios from "axios";
import authHeader from "../../../services/authHeader";
import "./viewUser.css";
import URL from "../../../config";

import {
  Publish,
  Email,
  PhoneAndroid,
  LocationCity,
  Home,
} from "@material-ui/icons";
import { withRouter } from "react-router";
var multer = require("multer");

var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

export default withRouter(
  class ViewUser extends Component {
    constructor(props) {
      super(props);

      console.dir(props);
      this.onChangeLastName = this.onChangeLastName.bind(this);
      this.onChangeFirstName = this.onChangeFirstName.bind(this);
      this.onChangeIdNumber = this.onChangeIdNumber.bind(this);
      this.onChangeImage = this.onChangeImage.bind(this);
      this.onChangePassword = this.onChangePassword.bind(this);
      this.onChangeAddress = this.onChangeAddress.bind(this);
      this.onChangeCity = this.onChangeCity.bind(this);
      this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onChangeJoinedDate = this.onChangeJoinedDate.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.onChangeRole = this.onChangeRole.bind(this);

      this.state = {
        user: [],
        dataId: "",
        firstName: "",
        lastName: "",
        idNumber: "",
        image: "",
        password: "",
        address: "",
        city: "",
        phoneNumber: "",
        email: "",
        joinedDate: "",
        roles: [],
        checkedManager: false,
        checkedSalesperson: false,
      };
    }
    onChangeRole(e) {
      if (e.target.value === "manager") {
        this.setState({ checkedManager: !this.state.checkedManager });
      }
      if (e.target.value === "salesperson") {
        this.setState({ checkedSalesperson: !this.state.checkedSalesperson });
      }
      if (this.state.roles.includes(e.target.value) === true) {
        const index = this.state.roles.indexOf(e.target.value);
        this.state.roles.splice(index, 1);
      } else {
        this.state.roles.push(e.target.value);
      }
      console.log("roles", this.state.roles);
    }

    componentDidMount() {
      this.dataId = this.props.match.params.id;

      axios
        .get(URL.main + URL.user + this.dataId, {
          headers: authHeader(),
        })
        .then((response) => {
          this.setState({
            user: response.data,
            firstName: response.data.firstName,
            lastName: response.data.lastName,
            idNumber: response.data.idNumber,
            image: response.data.image,
            password: response.data.password,
            address: response.data.address,
            city: response.data.city,
            phoneNumber: response.data.phoneNumber,
            email: response.data.email,
            joinedDate: response.data.joinedDate,
            roles: response.data.roles,
          });
          this.state.roles.map((e) => {
            if (e === "manager") {
              this.setState({ checkedManager: true });
            }
            if (e === "salesperson") {
              this.setState({ checkedSalesperson: true });
            }
          });
          console.log("response.data");
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
          alert("An error Occured. Please Try again later", (window.location = URL.user));
        });
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
    onSubmit(e) {
      e.preventDefault();
      console.log("before ..", this.state.roles);
      if (window.confirm("Confirm to save?")) {
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
          joinedDate: this.state.user.joinedDate,
          roles: this.state.roles,
        };
  
        console.log(user);
  
        axios
          .post(URL.main + URL.userUpdate + this.dataId, user, {
            headers: authHeader(),
          })
          .then((res) => {
            console.log(res.data);
            alert(res.data, (window.location = URL.user));
          })
          .catch((error) => {
            console.log(error);
            alert(error, (window.location = URL.user));
          });
      }
      //window.location = "/itAdmin/edituser/" + this.dataId;
    }

    render() {
      return (
        <div className="viewSalesPerson">
          <div className="task">
            <h1 className="mainHead">User</h1>
          </div>
          <div className="Container">
            <div className="detailsContainerSale">
              <div className="detailMain">
                <img
                  className="imNewSale"
                  src="https://media.istockphoto.com/photos/handsome-smiling-business-man-in-blue-shirt-standing-with-crossed-picture-id1098036052"
                  alt=""
                ></img>
                <div className="idName">
                  <h2 className="name">
                    {this.state.user.firstName + " " + this.state.user.lastName}
                  </h2>
                </div>
              </div>
              <div className="detailSub">
                <p className="detail">Account Details:</p>
                <ul className="instructions">
                  <li className="contact">
                    ID Number :
                    <span className="value">{this.state.user.idNumber}</span>
                  </li>
                  <li className="contact">
                    Joined Date :
                    <span className="value">
                      {String(this.state.user.joinedDate).substr(0, 10)}
                    </span>
                  </li>
                  {/*<li className="contact">
                    password :
                    <span className="value">{this.state.user.password}</span>
                  </li>*/}
                </ul>

                <p className="detail">Contact Details:</p>
                <ul className="instructions">
                  <li className="contact">
                    <Email />{" "}
                    <span className="value"> {this.state.user.email}</span>
                  </li>
                  <li className="contact">
                    <PhoneAndroid />
                    <span className="value">{this.state.user.phoneNumber}</span>
                  </li>
                  <li className="contact">
                    <LocationCity />{" "}
                    <span className="value">{this.state.user.city} </span>
                  </li>
                  <li className="contact">
                    <Home />{" "}
                    <span className="value">{this.state.user.address}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="editContainer">
              <h1 className="subTitle">Edit</h1>
              <br></br>
              <form
                className="form"
                onSubmit={this.onSubmit}
                enctype="multipart/form-data"
              >
                <div className="editItems">
                  <div className="leftItemContainerSale saleSLI">
                    <div className="form-row">
                      <div className="col">
                        <label>First Name</label>
                        <input
                          value={this.state.firstName}
                          onChange={this.onChangeFirstName}
                          type="text"
                          required
                        ></input>
                      </div>
                      <div className="col">
                        <label>Last Name</label>
                        <br></br>
                        <input
                          value={this.state.lastName}
                          onChange={this.onChangeLastName}
                          type="text"
                          required
                        ></input>
                      </div>
                    </div>
                    <br></br>
                    <div className="form-row">
                      <div className="col">
                        <label>ID Number</label>
                        <input
                          value={this.state.idNumber}
                          onChange={this.onChangeIdNumber}
                          type="text"
                          required
                        ></input>
                      </div>
                      <div className="col">
                        <label>Password</label>
                        <input
                          onChange={this.onChangePassword}
                          value={this.state.password}
                          type="text"
                          required
                        ></input>
                      </div>
                    </div>
                    <br></br>
                    <div className="form-row">
                      <div className="col">
                        <label>Email Address</label>
                        <input
                          value={this.state.email}
                          onChange={this.onChangeEmail}
                          type="email"
                          required
                        ></input>
                      </div>
                      <div className="col">
                        <label>Phone number </label>
                        <input
                          required
                          value={this.state.phoneNumber}
                          onChange={this.onChangePhoneNumber}
                          type="Number"
                        ></input>
                      </div>
                    </div>
                    <br></br>
                    <div className="form-row">
                      <div className="col">
                        <label>City</label>
                        <input
                          required
                          value={this.state.city}
                          onChange={this.onChangeCity}
                          type="text"
                          required
                        ></input>
                      </div>
                      <div className="col">
                        <label>Address</label>
                        <br></br>
                        <input
                          value={this.state.address}
                          onChange={this.onChangeAddress}
                          type="text"
                        ></input>
                      </div>
                    </div>

                    <div className="form-outline mt-3">
                      <label
                        className="form-label"
                        htmlFor="role"
                        style={{ marginBottom: "-10px" }}
                      >
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
                            checked={this.state.checkedManager}
                            //checked={this.state.roles.includes("manager")?true :false}
                          />
                          <label
                            className="form-check-label mx-4"
                            style={{ marginTop: "-5px" }}
                            for="flexCheckManager"
                          >
                            Manager
                          </label>
                        </div>
                        <div className="col-md-5 form-check mx-3">
                          <input
                            style={{ height: "20px", width: "20px" }}
                            className="form-check-input"
                            type="checkbox"
                            value="salesperson"
                            id="flexCheckSalesperson"
                            onChange={this.onChangeRole}
                            checked={this.state.checkedSalesperson}
                            //checked={this.state.roles.includes("salesperson")?true :false}
                          />
                          <label
                            class="form-check-label mx-4"
                            style={{ marginTop: "-5px" }}
                            for="flexCheckSalesperson"
                          >
                            Salesperson
                          </label>
                        </div>
                        <small>error</small>
                      </div>
                    </div>
                  </div>

                  <div className="rightItemContainerSale">
                    <div className="upload">
                      <input
                        onChange={this.onChangeImage}
                        type="file"
                        id="file"
                        className="form-control form-control-lg"
                      />
                      <br></br>
                      <label htmlFor="file">
                        <Publish />
                        Upload Profile
                      </label>
                      <br></br>
                      <button type="submit" className="submitSale">
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    }
  }
);
