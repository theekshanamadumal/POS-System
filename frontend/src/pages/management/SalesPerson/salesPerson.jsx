import "./salesPerson.css";
import React, { Component } from "react";
import axios from "axios";
import { Box } from "@material-ui/core";
import SalesPersonList from "../../../components/salesPersonComp/salesPesonListComp";
import SalesPersonToolBar from "../../../components/salesPersonComp/salesPersonToolbar";

export default class SalesPerson extends Component {
  //const [data, setData] = useState(rows);
  constructor(props) {
    super(props);

    this.state = {
      salespersons: [],
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
