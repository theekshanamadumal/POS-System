import React, { Component } from "react";
import "./realTimeData.css";

export default class RealTimeData extends Component {
  render() {
    return (
      <div className="realTime">
        <h1>Salesperson Location</h1>
        <section className="location container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31746.501505296463!2d80.44657211804935!3d5.951582324080296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae13fce3177dc59%3A0xa2d8a78b36dc9c90!2sMirissa!5e0!3m2!1sen!2slk!4v1626197013420!5m2!1sen!2slk"
            width="1000"
            height="600"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </section>
      </div>
    );
  }
}
