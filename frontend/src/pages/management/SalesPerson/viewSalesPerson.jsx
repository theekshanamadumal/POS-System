import React, { Component } from "react";
import axios from "axios";
import "./viewSalesPerson.css";
import URL from "../../../config";
import authHeader from "../../../services/authHeader";

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
        .get(URL.main+URL.salesperson+"/" + this.dataId,{ headers: authHeader() })
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
          alert(error, (window.location = URL.salesperson));
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
          URL.main=URL.updateSalesperson+ this.dataId,
          user,
          { headers: authHeader() }
        )
        .then((res) => {
          console.log(res.data);
          alert(res.data, (window.location =URL.salesperson));
        })
        .catch((error) => {
          console.log(error);
          alert(error, (window.location = URL.salesperson));
        });
    }

    render() {
      return (
        <div className="viewSalesPerson">
          <div className="task">
            <h1 className="mainHead">Salesperson</h1>
          </div>
        
          <div className="d-flex" >
            <div className="col-md-3"></div>
            <div className="col-md-5 detailsContainerSale" style={{width:"400px"}} >
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
                    {/*<li className="contact">
                      password :
                      <span className="value">{this.state.manager.password}</span>
                    </li>*/}
                  </ul>

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
          </div>
        </div>
      );
    }
  }
);
