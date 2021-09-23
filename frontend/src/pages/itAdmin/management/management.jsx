import "./management.css";

import React, { Component } from "react";
import axios from "axios";
import { Box } from '@material-ui/core';
import ManagementList from "../../../components/managementComp/managementListComp";
import ManagementToolBar from '../../../components/managementComp/managementToolbar.jsx';

export default class Management extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
       managements: [] 
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

  handleDelete(id) {
    axios
      .delete("http://localhost:3001/itAdmin/management/" + id)
      .then((response) => {
        console.log(response.data);
      });

    this.setState({
      exercises: this.state.managements.filter((el) => el._id !== id),
    });
  }

 

  /*managementsList() {
    console.log(this.managementsList);
    return this.state.managements.map((currentmanagement) => {
      return (
        <Person
          management={currentmanagement}
          deleteExercise={this.handleDelete}
          key={currentmanagement.idNumber}
        />
      );
    });
  }*/
  

  render() {
    return (
      <div className="management" >
        <ManagementToolBar className="contain"/>
        <Box sx={{ pt: 3 }} className="contain">
          <ManagementList management={this.state.managements} />
        </Box>
      </div>
    )

  }
}
