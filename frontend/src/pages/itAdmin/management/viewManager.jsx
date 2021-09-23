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
var multer = require("multer");

var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

export default class ViewManager extends Component {
  constructor(props) {
    super(props);

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
      firstName: "",
      lastName: "",
      idNumber: "",
      image: "",
      password: "",
      address: "",
      city: "",
      phoneNumber: "",
      email: "",
      joinedDate: new Date(),
    };
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
      joinedDate: this.state.joinedDate,
    };

    console.log(user);

    axios
      .post("http://localhost:3001/itAdmin/addManager", user)
      .then((res) => console.log(res.data));

    window.location = "/itAdmin/management";
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
                <h2 className="name">John Michel</h2>
              </div>
            </div>
            <div className="detailSub">
              <p className="detail">Account Details:</p>
              <ul className="instructions">
                <li className="contact">
                  {" "}
                  ID Number : <span className="value"> 987770000V</span>
                </li>
                <li className="contact">
                  Joined Date :<span className="value">09/03/2021 </span>
                </li>
              </ul>
              <br></br>
              <p className="detail">Contact Details:</p>
              <ul className="instructions">
                <li className="contact">
                  {" "}
                  <Email /> <span className="value"> John@gmail.com</span>
                </li>
                <li className="contact">
                  <PhoneAndroid />
                  <span className="value">0776378493 </span>
                </li>
                <li className="contact">
                  <LocationCity /> <span className="value">Colombo </span>
                </li>
                <li className="contact">
                  <Home />{" "}
                  <span className="value">
                    N0.07, 5th lane, Colombo 03, SriLanka{" "}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="editContainer">
            <h1 className="editTitle">Edit</h1>
            <form action="" className="form">
              <div className="editItems">
                <div className="leftItemContainer saleSLI">
                  <label>First Name</label>
                  <br></br>
                  <input placeholder="John" type="text" required></input>
                  <br></br>
                  <label>Last Name</label>
                  <br></br>
                  <input placeholder="Michel" type="text" required></input>
                  <br></br>
                  <label>Email Address</label>
                  <br></br>
                  <input
                    placeholder="John@gmail.com"
                    type="email"
                    required
                  ></input>
                  <br></br>
                  <label>Phone number </label>
                  <br></br>
                  <input placeholder="0776378493" type="number"></input>
                  <br></br>
                  <label>City</label>
                  <br></br>
                  <input placeholder="Colombo" type="text" required></input>
                  <br></br>
                  <label>Address</label>
                  <br></br>
                  <input
                    placeholder="N0.07, 5th lane, Colombo 03, SriLanka"
                    type="text"
                    required
                  ></input>
                  <br></br>
                </div>

                <div className="rightItemContainer">
                  <div className="upload">
                    <img
                      className="prImg"
                      src="https://media.istockphoto.com/photos/handsome-smiling-business-man-in-blue-shirt-standing-with-crossed-picture-id1098036052"
                      alt=""
                    ></img>
                    <br></br>
                    <label htmlFor="file">
                      <Publish />
                      Upload
                    </label>
                    <br></br>
                    <input
                      placeholder="img"
                      type="file"
                      id="file"
                      style={{ display: "none" }}
                    ></input>
                    <br></br>
                    <button className="update">Update</button>
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
