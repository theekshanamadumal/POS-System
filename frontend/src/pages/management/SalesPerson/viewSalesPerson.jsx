import React from "react";
import "./viewSalesPerson.css";
import {
  Publish,
  Email,
  PhoneAndroid,
  LocationCity,
  Home,
  PermIdentity,
} from "@material-ui/icons";

export default function viewSalesPerson() {
  return (
    <div className="viewSalesPerson">
      <div className="userTitle">
        <h1 className="name">User details</h1>
      </div>
      <div className="Container">
        <div className="detailsContainer">
          <div className="detailMain">
            <img
              className="im"
              src="https://media.istockphoto.com/photos/handsome-smiling-business-man-in-blue-shirt-standing-with-crossed-picture-id1098036052"
              alt=""
            ></img>
            <div className="idName">
              <h1 className="name">John Michel</h1>
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
              <div className="leftItemContainer">
                <label>First Name</label>
                <input placeholder="John" type="text"></input>
                <label>Last Name</label>

                <input placeholder="Michel" type="text"></input>

                <label>Email Address</label>

                <input placeholder="John@gmail.com" type="email"></input>

                <label>Phone number </label>

                <input placeholder="0776378493" type="text"></input>

                <label>City</label>

                <input placeholder="Colombo" type="text"></input>

                <label>Address</label>

                <input
                  placeholder="N0.07, 5th lane, Colombo 03, SriLanka"
                  type="text"
                ></input>
              </div>

              <div className="rightItemContainer">
                <div className="upload">
                  <img
                    className="prImg"
                    src="https://media.istockphoto.com/photos/handsome-smiling-business-man-in-blue-shirt-standing-with-crossed-picture-id1098036052"
                    alt=""
                  ></img>

                  <label htmlFor="file">
                    <Publish />
                    Upload
                  </label>

                  <input
                    placeholder="img"
                    type="file"
                    id="file"
                    style={{ display: "none" }}
                  ></input>

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
