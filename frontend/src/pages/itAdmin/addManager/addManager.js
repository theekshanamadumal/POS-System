import React, { Component } from "react";
import axios from "axios";

import "./addManager.css";

export default class AddManager extends Component {
  constructor(props) {
    super(props);
     this.onChangeFirstName = this.onChangeFirstName.bind(this);
     this.onChangeLastName = this.onChangeLastName.bind(this);
     this.onChangeIdNumber = this.onChangeIdNumber.bind(this);
     this.onChangeImage = this.onChangeImage.bind(this);
     this.onChangePassword = this.onChangePassword.bind(this);
     this.onChangeLine1 = this.onChangeLine1.bind(this);
     this.onChangeLine2 = this.onChangeLine2.bind(this);
     this.onChangeCity = this.onChangeCity.bind(this);
     this.onChangeDistrict = this.onChangeDistrict.bind(this);
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
      line1: "",
      line2: "",
      city: "",
      district: "",
      phoneNumber: "",
      email: "",
      joinedDate: new Date(),
    }
  }

  onChangefirstName(e) {
    this.setState({
      firstName: e.target.value,
    });
  }
  onChangelastName(e) {
    this.setState({
      lastName: e.target.value,
    });
  }
  onChangeidNumber(e) {
    this.setState({
      idNumber: e.target.value,
    });
  }
  onChangeimage(e) {
    this.setState({
      image: e.target.value,
    });
  }
  onChangepassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  onChangeaddress(e) {
    this.setState({
      address: e.target.value,
    });
  }
  onChangephoneNumber(e) {
    this.setState({
      phoneNumber: e.target.value,
    });
  }
  onChangeemail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangejoinedDate(e) {
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
      address: {
        line1: this.state.line1,
        line2: this.state.line2,
        city: this.state.city,
        district: this.state.district,
      },
      phoneNumber: this.state.phoneNumber,
      email: this.state.email,
      joinedDate: this.state.joinedDate,
    };

    console.log(user);

    axios
      .post("http://localhost:3001/itAdmin/users/add", user)
      .then((res) => console.log(res.data));

    // window.location = "/itAdmin/users";
  }

  render() {
    return (
      <div>
      <form onSubmit={this.onSubmit}>
        <section className="h-100 h-custom gradient-custom-2">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12">
                <div
                  className="card card-registration card-registration-2"
                  style={{ borderRadius: "15px" }}
                >
                  <div className="card-body p-0">
                    <div className="row g-0">
                      <div className="col-lg-6">
                        <div className="p-5">
                          <h3
                            className="fw-normal mb-5"
                            style={{ color: "#4835d4" }}
                          >
                            General Infomation
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
                            <div className="col-md-6 mb-4 pb-2">
                              <div className="form-outline">
                                <input
                                  required
                                  onChange={this.onChangeIdNumber}
                                  type="text"
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
                                  onChange={this.onChangeIdNumber}
                                  type="text"
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
                          <label>Address</label>
                          <div className="row">
                            <div className="col-md-6 mb-4 pb-2">
                              <div className="form-outline">
                                <input
                                  value={this.state.lineOne}
                                  onChange={this.onChangeLineOne}
                                  type="text"
                                  id="form3Examplev2"
                                  className="form-control form-control-lg"
                                />
                                <label
                                  className="form-label"
                                  for="form3Examplev2"
                                >
                                  line 1
                                </label>
                              </div>
                            </div>
                            <div className="col-md-6 mb-4 pb-2">
                              <div className="form-outline">
                                <input
                                  value={this.state.lineTwo}
                                  onChange={this.onChangeLineTwo}
                                  type="text"
                                  id="form3Examplev3"
                                  className="form-control form-control-lg"
                                />
                                <label
                                  className="form-label"
                                  for="form3Examplev3"
                                >
                                  line 2
                                </label>
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-6 mb-4 pb-2">
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
                            <div className="col-md-6 mb-4 pb-2">
                              <div className="form-outline">
                                <input
                                  required
                                  value={this.state.district}
                                  onChange={this.onChangeDistrict}
                                  type="text"
                                  id="form3Examplev3"
                                  className="form-control form-control-lg"
                                />
                                <label
                                  className="form-label"
                                  for="form3Examplev3"
                                >
                                  District
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
                            className="btn btn-light btn-lg"
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
          </div>
        </section>
      </form>
      </div>
    );
  }
}
