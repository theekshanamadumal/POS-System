import "./salesPerson.css";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import axios from "axios";
//import { DataGrid } from "@material-ui/data-grid";
//import { rows } from "../../../dataCollection";
import { Delete, SportsMma } from "@material-ui/icons";

import { Box } from '@material-ui/core';
import SalesPersonList from "../../../components/salesPersonComp/salesPesonListComp";
import SalesPersonToolBar from '../../../components/salesPersonComp/salesPersonToolbar';

/*const columns = [
  { field: "_id", hide: true },

  {
    field: "idNumber",
    headerName: "ID",
    width: 120,
  },
  {
    field: "fullName",
    headerName: "Name",
    width: 150,
    renderCell: (params) => {
      return (
        <div>
          {params.salesperson.firstName}
          <span> </span>
          {params.salesperson.lastName}
        </div>
      );
    },
  },
  {
    field: "password",
    headerName: "password",
    width: 100,
  },
  {
    field: "address",
    headerName: "address",
    width: 130,
  },
  {
    field: "city",
    headerName: "City",
    width: 130,
  },
  {
    field: "phoneNo",
    headerName: "Phone Number",
    width: 120,
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
  },
  {
    field: "joinedDate",
    headerName: "Joined Date",
    width: 120,
  },
  {
    field: "action",
    headerName: "Action",
    width: 160,
    renderCell: (params) => {
      return (
        <div className="actionButton">
          <Link to={"/management/salesPerson/" + params.salesperson.id}>
            <button className="editButton">View</button>
          </Link>

          <Delete
            className="deleteButton"
            onClick={() => params.handleDelete(params.salesperson.idNumber)}
          />
        </div>
      );
    },
  },
];*/

const Person = (props) => (
  <tr>
    <td>{props.salesperson.idNumber}</td>

    <td>
      {props.salesperson.firstName}
      {props.salesperson.lastName}
    </td>
    <td>{props.salesperson.password}</td>
    <td>{props.salesperson.address}</td>
    <td>{props.salesperson.city}</td>
    <td>{props.salesperson.phoneNumber}</td>
    <td>{props.salesperson.email}</td>
    <td>{props.salesperson.joinedDate.substring(0, 10)}</td>
    <td>
      <Link to={"/management/salesPerson/" + props.salesperson._id}>edit</Link>{" "}
      |{" "}
      <a
        href="#"
        onClick={() => {
          props.handleDelete(props.salesperson.idNumber);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);

export default class SalesPerson extends Component {
  //const [data, setData] = useState(rows);
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
       salespersons: [] 
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3001/management/salesperson")
      .then((response) => {
        this.setState({ salespersons: response.data });
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleDelete(id) {
    //setData(data.filter((item) => item.id !== id));
    axios
      .delete("http://localhost:3001/management/salesperson/" + id)
      .then((response) => {
        console.log(response.data);
      });

    this.setState({
      exercises: this.state.salespersons.filter((el) => el._id !== id),
    });
  }

  salespersonsList() {
    console.log(this.salespersonsList);
    return this.state.salespersons.map((currentsalesperson) => {
      return (
        <Person
          salesperson={currentsalesperson}
          deleteExercise={this.handleDelete}
          key={currentsalesperson.idNumber}
        />
      );
    });
  }
  

  render() {
    return (
      <div className="salesPerson" >
        <SalesPersonToolBar className="contain"/>
            <Box sx={{ pt: 3 }} className="contain">
                <SalesPersonList salesPerson={this.state.salespersons} />
            </Box>
      </div>
    )





      /*<div className="salesPerson">
        <div className="contain">
          <h1 className="heading">Salespersons</h1>
          <Link to="/management/addSalesperson">
            <button className="addUser">Add New Salesperson</button>
          </Link>
        </div>
        <thead className="thead-light">
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>password</th>
            <th>address</th>
            <th>city</th>
            <th>phone number</th>
            <th>email</th>
            <th>joined date</th>
          </tr>
        </thead>
        <tbody>{this.salespersonsList()}</tbody>
        {/*<DataGrid
          rows={this.state.salespersons}
          columns={columns}
          pageSize={10}
          checkboxSelection
          disableSelectionOnClick
        />}
      </div> 
    );*/
  }
}
