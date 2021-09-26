import "./management.css";

import React, { Component } from "react";
import axios from "axios";
import { Box } from "@material-ui/core";
import ManagementList from "../../../components/managementComp/managementListComp";
import ManagementToolBar from "../../../components/managementComp/managementToolbar.jsx";

export default class Management extends Component {
  constructor(props) {
    super(props);

    this.state = {
      managements: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3001/itAdmin/management")
      .then((response) => {
        this.setState({ managements: response.data });
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="management">
        <ManagementToolBar className="contain" />
        <Box sx={{ pt: 3 }} className="contain">
          <ManagementList management={this.state.managements} />
        </Box>
      </div>
    );
  }
}
