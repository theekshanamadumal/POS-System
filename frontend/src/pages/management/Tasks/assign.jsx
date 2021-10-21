import React, { Component } from 'react';
import "./assignTasks/assignTasks.css";
import {Delete,Add} from '@material-ui/icons';
import axios from "axios";
import URL from "../../../config";

export default class AssignTasks extends Component {
    constructor(props){
        super(props)
        this.state={
            inventoryList:[{productName: "", quantity: ""} ],
            routeList:[],
            dailyRoute: "",
            dailySalesTarget: "",
        }
        this.onChangeDailyRoute = this.onChangeDailyRoute.bind(this);
        this.onChangeDailySalesTarget = this.onChangeDailySalesTarget.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.loadRoutes = this.loadRoutes.bind(this);
    }
    handleInventoryInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = this.state.inventoryList;
        list[index][name] = value;
        this.setState({inventoryList:list})
      };
       
      // handle click event of the Remove button
    handleRemoveInventory = index => {
        const list = this.state.inventoryList;
        list.splice(index, 1);
        this.setState({inventoryList:list})
    };
    
    // handle click event of the Add button
    handleAddInventory = () => {
        const list = this.state.inventoryList;
        list.push({ productName: "", quantity: "" });
        this.setState({inventoryList:list})
        
    };
    onChangeDailyRoute(e) {
        this.setState({ dailyRoute: e.target.value });
      }
    onChangeDailySalesTarget(e) {
        this.setState({ dailySalesTarget: e.target.value });
    }

    loadRoutes() {
    axios
        .get(URL.main+URL.salesRoutes)
        .then((response) => {
        this.setState({
            routeList: response.data,
        });
        console.log("routes:");
        console.log(response.data);
        })
        .catch((error) => {
        console.log(error);
        alert(error, (window.location = URL.addShops));
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
            .post(URL.main+URL.addDailyTarget, dailyTarget)
            .then((res) => {
            console.log(res.data);
            alert(res.data, (window.location = URL.tasks));
            })
            .catch((error) => {
            console.log(error);
            alert(error, (window.location = URL.tasks));
        });
    }
    
    
    render() {
        return (
            <div className="assignTask">
                <h1 className="mx-5 my-2">Assign Tasks</h1> 
                <div className="col-md-11 card mx-5 rounded">
                    <div className="row">
                        <div className="my-3 mx-5 fw-light" style={{fontSize:"30px"}}>Salesperson ID :<span style={{fontWeight:"bolder"}} className="text-dark">{" "+this.props.id}</span> </div>
                        <div className="my-3 mx-5" style={{fontSize:"30px"}}>Salesperson Name:<span style={{fontWeight:"bolder"}} className="fw-bold"> Joseph</span></div>
                    </div>
                    <form>
                        <div className="card my-1 bg-light col-md-12">
                            <div className="row">
                                <div className="col-md-6">
                                    <label for="assignRoute" className="form-label card-header my-2" style={{backgroundColor:"rgba(211, 208, 208, 0.699)"}}><h4>Assign Route</h4></label><br></br>
                                    <select
                                        className="form-control form-control-lg col mb-3 "
                                        id="assignRoute"
                                        placeholder="Select a Route"
                                        required
                                        onChange={this.onChangeDailyRoute}>                                   
                                    </select>
                                    {this.state.routeList.map(e=>{
                                        <option>{e}</option>
                                    })}
                                </div>
                                <div className="col-md-6">
                                    <label for="exampleInputEmail1" className="form-label card-header my-2" style={{backgroundColor:"rgba(211, 208, 208, 0.699)"}}><h4>Daily Sales Target</h4></label>
                                    <input
                                        className="form-control form-control-lg col"
                                        type="number"
                                        name="dailySalesTarget"
                                        placeholder="Enter Daily Sales Target"
                                        required
                                        onChange={this.onChangeDailySalesTarget}>                                   
                                    </input> 
                                </div>
                            </div>
                        </div> 
                        <div className="card bg-light my-5">
                            <div class="card-header" style={{backgroundColor:"rgba(211, 208, 208, 0.699)"}}>
                                <h4 >Add inventory</h4>
                            </div>
                            <div className="card-body row"><br></br><br></br>
                                {this.state.inventoryList.map((x, i) => {
                                    return (
                                        <div className="container row mb-2 pb-2">
                                            <input className="form-control form-control-lg col" style={{height:"50px"}} name="productName" placeholder="Enter Product Name" value={x.productName}
                                            onChange={e => this.handleInventoryInputChange(e, i)}
                                            />
                                            <input
                                            className="form-control form-control-lg col"
                                            style={{height:"50px"}}
                                            type="number"
                                            name="quantity"
                                            placeholder="Enter Quantity"
                                            value={x.quantity}
                                            onChange={e => this.handleInventoryInputChange(e, i)}
                                            required
                                            />
                                            <span className="row">
                                                {this.state.inventoryList.length !== 1 && <Delete
                                                className="mt-2"
                                                onClick={() => this.handleRemoveInventory(i)}/>}
                                                {this.state.inventoryList.length - 1 === i && <Add className="mt-2" onClick={this.handleAddInventory}/>}
                                            </span>
                                        </div>
                                        
                                    );
                                })}
                            </div>
                        </div>
                        <div class="d-grid gap-1 col-3 mx-auto">
                            <button className="h4 btn btn-success m-3" onClick={this.onSubmit}><h4>Submit</h4></button>
                        </div> 
                    </form>
                </div>
                
            </div>
        )
    }
}
