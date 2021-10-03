import React, { Component } from "react";
import axios from "axios";
import "./viewManager.css";
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
  class ViewManager extends Component {
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

      this.state = {
        manager: [],
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
      };
    }

    componentDidMount() {
      this.dataId = this.props.match.params.id;

      axios
        .get("http://localhost:3001/itAdmin/management/" + this.dataId)
        .then((response) => {
          this.setState({
            manager: response.data,
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
          });
          console.log("response.data");
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
          alert(
            "Error:",
            error.data,
            (window.location = "/itAdmin/management")
          );
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
        joinedDate: this.state.manager.joinedDate,
      };

      console.log(user);

      axios
        .post(
          "http://localhost:3001/itAdmin/managerUpdate/" + this.dataId,
          user
        )
        .then((res) => {
          console.log(res.data);
          alert(res.data, (window.location = "/itAdmin/management"));
        })
        .catch((error) => {
          console.log(error);
          alert(error, (window.location = "/itAdmin/management"));
        });

      //window.location = "/itAdmin/editManager/" + this.dataId;
    }

    render() {
      return (
        <div className="viewSalesPerson">
          <div className="task">
            <h3>Manager</h3>
          </div>
          <div className="Container">
            <div className="detailsContainer">
              <div className="detailMain">
                <img
                  className="imNewSale"
                  src="https://media.istockphoto.com/photos/handsome-smiling-business-man-in-blue-shirt-standing-with-crossed-picture-id1098036052"
                  alt=""
                ></img>
                <div className="idName">
                  <h2 className="name">
                    {this.state.manager.firstName +
                      " " +
                      this.state.manager.lastName}
                  </h2>
                </div>
              </div>
              <div className="detailSub">
                <p className="detail">Account Details:</p>
                <ul className="instructions">
                  <li className="contact">
                    ID Number :
                    <span className="value">{this.state.manager.idNumber}</span>
                  </li>
                  <li className="contact">
                    Joined Date :
                    <span className="value">
                      {String(this.state.manager.joinedDate).substr(0, 10)}
                    </span>
                  </li>
                  <li className="contact">
                    password :
                    <span className="value">{this.state.manager.password}</span>
                  </li>
                </ul>
                <br></br>
                <p className="detail">Contact Details:</p>
                <ul className="instructions">
                  <li className="contact">
                    <Email />{" "}
                    <span className="value"> {this.state.manager.email}</span>
                  </li>
                  <li className="contact">
                    <PhoneAndroid />
                    <span className="value">
                      {this.state.manager.phoneNumber}
                    </span>
                  </li>
                  <li className="contact">
                    <LocationCity />{" "}
                    <span className="value">{this.state.manager.city} </span>
                  </li>
                  <li className="contact">
                    <Home />{" "}
                    <span className="value">{this.state.manager.address}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="editContainer">
              <h1 className="editTitle">Edit</h1>
              <form
                className="form"
                onSubmit={this.onSubmit}
                enctype="multipart/form-data"
              >
                <div className="editItems">
                  <div className="leftItemContainer saleSLI">
                    <label>First Name</label>
                    <br></br>
                    <input
                      value={this.state.firstName}
                      onChange={this.onChangeFirstName}
                      type="text"
                      required
                    ></input>
                    <br></br>
                    <label>Last Name</label>
                    <br></br>
                    <input
                      value={this.state.lastName}
                      onChange={this.onChangeLastName}
                      type="text"
                      required
                    ></input>
                    <br></br>
                    <label>ID Number</label>
                    <br></br>
                    <input
                      value={this.state.idNumber}
                      onChange={this.onChangeIdNumber}
                      type="text"
                      required
                    ></input>
                    <br></br>
                    <label>Password</label>
                    <br></br>
                    <input
                      onChange={this.onChangePassword}
                      value={this.state.password}
                      type="text"
                      required
                    ></input>
                    <br></br>
                    <label>Email Address</label>
                    <br></br>
                    <input
                      value={this.state.email}
                      onChange={this.onChangeEmail}
                      type="email"
                      required
                    ></input>
                    <br></br>
                    <label>Phone number </label>
                    <br></br>
                    <input
                      required
                      value={this.state.phoneNumber}
                      onChange={this.onChangePhoneNumber}
                      type="Number"
                    ></input>
                    <br></br>
                    <label>City</label>
                    <br></br>
                    <input
                      required
                      value={this.state.city}
                      onChange={this.onChangeCity}
                      type="text"
                      required
                    ></input>
                    <br></br>
                    <label>Address</label>
                    <br></br>
                    <input
                      value={this.state.address}
                      onChange={this.onChangeAddress}
                      type="text"
                    ></input>
                    <br></br>
                  </div>

                  <div className="rightItemContainer">
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
                        Upload image
                      </label>
                      <br></br>
                      <button type="submit" className="btn btn-success btn-lg">
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
