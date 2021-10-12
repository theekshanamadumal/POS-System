import React, { Component } from "react";
import axios from "axios";

class AddDailyTarget extends Component {
  constructor(props) {
    super(props);
    this.onChangeDailyRoute = this.onChangeDailyRoute.bind(this);
    this.onChangeDailySalesTarget = this.onChangeDailySalesTarget.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.loadRoutes = this.loadRoutes.bind(this);

    this.state = {
      routeList: [],
      dailyRoute: "",
      dailySalesTarget: "",
    };
  }

  onChangeDailyRoute(e) {
    this.setState({ dailyRoute: e.target.value });
  }
  onChangeDailySalesTarget(e) {
    this.setState({ dailySalesTarget: e.target.value });
  }

  loadRoutes() {
    axios
      .get("http://localhost:3001/management/salesRoutes")
      .then((response) => {
        this.setState({
          routeList: response.data,
        });
        console.log("routes:");
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert(error, (window.location = "/management/shops/addShop"));
      });
  }

  componentDidMount() {
    this.loadRoutes();
  }

  onSubmit(e) {
    e.preventDefault();
    const dailyTarget = {
      sellerId: this.props.sellerId,
      dailyRoute: this.state.dailyRoute,
      dailySalesTarget: this.state.dailySalesTarget,
    };

    console.log(dailyTarget);

    axios
      .post("http://localhost:3001/management/adddailyTarget", dailyTarget)
      .then((res) => {
        console.log(res.data);
        alert(res.data, (window.location = "/management/tasks"));
      })
      .catch((error) => {
        console.log(error);
        alert(error, (window.location = "/management/tasks"));
      });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div class="form-outline mb-4">
          <div class="form-group">
            <label for="exampleInputEmail1">Select Route</label>
            <input
              required
              type="text"
              class="form-control"
              placeholder="Enter Route "
              value={this.state.Route}
              onChange={this.onChangeRoute}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">daily Sales Target</label>
            <input
              required
              type="number"
              class="form-control"
              placeholder="Enter value "
              value={this.state.Route}
              onChange={this.onChangeRoute}
            />
          </div>
          <button type="submit" class=" btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default AddDailyTarget;
