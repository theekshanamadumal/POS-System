import React, { Component } from "react";
import axios from "axios";
import "./addManager.css";

var multer = require("multer");

var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

export default class AddManager extends Component {
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
      <div className="newUser">
        <h1 className="title">Add a New Manager</h1>
        <form
          className="addManagerForm"
          onSubmit={this.onSubmit}
          enctype="multipart/form-data"
        >
          <section className="h-100 h-custom gradient-custom-2">
            <div className="container py-5 h-100">
              <div className="col-12">
                <div
                  className="card card-registration card-registration-2"
                  style={{ borderRadius: "15px" }}
                >
                  <div>
                    <div className="row g-0">
                      <div className="col-lg-6 bg-ash">
                        <div className="p-5">
                          <h3
                            className="fw-normal mb-5"
                            style={{ color: "#4835d4" }}
                          >
                            Account Details
                          </h3>

                          <div className="row">
                            <div className="col-md-6 mb-4 pb-2">
                              <div className="form-outline">
                                <input
                                  required
                                  value={this.state.firstName}
                                  onChange={this.onChangeFirstName}
                                  type="text"
                                  id="form3Examplev2"
                                  className="form-control form-control-lg"
                                />
                                <label
                                  className="form-label"
                                  for="form3Examplev2"
                                >
                                  First name
                                </label>
                              </div>
                            </div>
                            <div className="col-md-6 mb-4 pb-2">
                              <div className="form-outline">
                                <input
                                  required
                                  value={this.state.lastName}
                                  onChange={this.onChangeLastName}
                                  type="text"
                                  id="form3Examplev3"
                                  className="form-control form-control-lg"
                                />
                                <label
                                  className="form-label"
                                  for="form3Examplev3"
                                >
                                  Last name
                                </label>
                              </div>
                            </div>
                          </div>

                          <div className="mb-4 pb-2">
                            <div className="form-outline">
                              {/* <div value={this.state.firstName}>sdsdsd</div>*/}

                              <input
                                required
                                value={this.state.idNumber}
                                onChange={this.onChangeIdNumber}
                                type="text"
                                id="form3Examplev4"
                                className="form-control form-control-lg"
                              />
                              <label
                                className="form-label"
                                for="form3Examplev4"
                              >
                                ID Number
                              </label>
                            </div>
                          </div>

                          <div className="mb-4 pb-2">
                            <div className="form-outline">
                              <input
                                onChange={this.onChangeImage}
                                type="file"
                                id="form3Examplev4"
                                className="form-control form-control-lg"
                              />
                              <label
                                className="form-label"
                                for="form3Examplev4"
                              >
                                add Image
                              </label>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-6 col-sm-12 mb-4 pb-2">
                              <div className="form-outline">
                                <input
                                  required
                                  onChange={this.onChangePassword}
                                  type="password"
                                  id="form3Examplev2"
                                  className="form-control form-control-lg"
                                />
                                <label
                                  className="form-label"
                                  for="form3Examplev2"
                                >
                                  Enter Password
                                </label>
                              </div>
                            </div>
                            <div className="col-md-6 mb-4 pb-2">
                              <div className="form-outline">
                                <input
                                  required
                                  onChange={this.onChangePassword}
                                  type="password"
                                  id="form3Examplev3"
                                  className="form-control form-control-lg"
                                />
                                <label
                                  className="form-label"
                                  for="form3Examplev3"
                                >
                                  Confirm Password
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 bg-indigo text-white">
                        <div className="p-5">
                          <h3 className="fw-normal mb-5">Contact Details</h3>
                          <div className="row">
                            <div className="col-md-12 mb-4 pb-2">
                              <div className="form-outline">
                                <input
                                  value={this.state.address}
                                  onChange={this.onChangeAddress}
                                  type="text"
                                  id="form3Examplev2"
                                  className="form-control form-control-lg"
                                />
                                <label
                                  className="form-label"
                                  for="form3Examplev2"
                                >
                                  Address
                                </label>
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-12 mb-4 pb-2">
                              <div className="form-outline">
                                <input
                                  required
                                  value={this.state.city}
                                  onChange={this.onChangeCity}
                                  type="text"
                                  id="form3Examplev2"
                                  className="form-control form-control-lg"
                                />
                                <label
                                  className="form-label"
                                  for="form3Examplev2"
                                >
                                  city
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="mb-4 pb-2">
                            <div className="form-outline">
                              <input
                                required
                                value={this.state.phoneNumber}
                                onChange={this.onChangePhoneNumber}
                                type="Number"
                                id="form3Examplev4"
                                className="form-control form-control-lg"
                              />
                              <label
                                className="form-label"
                                for="form3Examplev4"
                              >
                                Phone Number
                              </label>
                            </div>
                          </div>
                          <div className="mb-4 pb-2">
                            <div className="form-outline">
                              <input
                                required
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                                type="email"
                                id="form3Examplev4"
                                className="form-control form-control-lg"
                              />
                              <label
                                className="form-label"
                                for="form3Examplev4"
                              >
                                Email Address
                              </label>
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
