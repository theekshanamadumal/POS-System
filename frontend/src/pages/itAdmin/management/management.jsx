import "./management.css";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import axios from "axios";
import { Delete, SportsMma } from "@material-ui/icons";

import { Box } from "@material-ui/core";
import SalesPersonList from "../../../components/salesPersonComp/salesPesonListComp";
import SalesPersonToolBar from "../../../components/salesPersonComp/salesPersonToolbar";

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
      salespersons: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3001/itAdmin/management")
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
      .delete("http://localhost:5000/itAdmin/management/" + id)
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
      <div className="salesPerson">
        <SalesPersonToolBar className="contain" />
        <Box sx={{ pt: 3 }} className="contain">
          <SalesPersonList salesPerson={this.state.salespersons} />
        </Box>
      </div>
    );
  }
}
