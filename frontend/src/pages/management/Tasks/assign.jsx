import React, { Component } from 'react';
import "./assignTasks/assignTasks.css";
import {Delete,Add} from '@material-ui/icons';
import axios from "axios";
import URL from "../../../config";

export default class AssignTasks extends Component {
    constructor(props){
        super(props)
        this.state={
            inventoryList:[{productId: "", quantity: 0,unitPrice:0,total:0} ],
            routeList:[],
            dailyRoute: "",
            dailySalesTarget: 0,
            salespersonId:"",
            productList:[],
            salespersonList:[],
            shopsRoute:[],
            shopsId:[],
            tot:[],
            finalTotal:0,
            arr:[1,2,3],
        }
        this.onChangeDailyRoute = this.onChangeDailyRoute.bind(this);
        this.onChangeDailySalesTarget = this.onChangeDailySalesTarget.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.loadRoutes = this.loadRoutes.bind(this);
        this.loadProducts=this.loadProducts.bind(this);
        this.loadSalesperson=this.loadSalesperson.bind(this);
        this.onChangeSalesperson=this.onChangeSalesperson.bind(this);
        this.loadShops=this.loadShops.bind(this);
    }
    handleInventoryInputChange = (e, index) => {
        const { name, value,type } = e.target;
        const list = this.state.inventoryList;
        if (type==="number"){
            list[index][name] = parseInt(value,10) ;
            list[index].total=list[index].quantity*list[index].unitPrice;
            if (list[index].quantity>=0){
                if (this.state.tot.length>index){
                    const old=this.state.tot[index];
                    this.setState({finalTotal:this.state.finalTotal+list[index].total-old})
                }
                else{
                    this.setState({finalTotal:this.state.finalTotal+list[index].total})
                }
                const lis=this.state.tot;
                lis[index]=list[index].total;
            }
        }
        else{
            list[index][name] = value ;
            const uP=this.state.productList.filter(el=>el._id===value);
            list[index].unitPrice=uP[0].unitPrice;
            if (list[index].quantity!==0){ //or gt 0
                list[index].total=list[index].quantity*list[index].unitPrice;
                const old=this.state.tot[index];
                    this.setState({finalTotal:this.state.finalTotal+list[index].total-old})
                    const lis=this.state.tot;
                lis[index]=list[index].total;
            }
        }
        
        this.setState({inventoryList:list})
    };
    onChangeSalesperson(e){
        this.setState({salespersonId:e.target.value})
    }
       
      // handle click event of the Remove button
    handleRemoveInventory = index => {
        
        if (this.state.inventoryList[index].quantity){
            const lis=this.state.tot;
            this.setState({finalTotal:this.state.finalTotal-lis[index]})
            lis.splice(index, 1);
            this.setState({tot:lis});
        }const list = this.state.inventoryList;
        list.splice(index, 1);
        this.setState({inventoryList:list})
        
    };
    
    // handle click event of the Add button
    handleAddInventory = () => {
        const list = this.state.inventoryList;
        list.push({ productId: "", quantity: 0 ,unitPrice:0,total:0});
        this.setState({inventoryList:list})
        
    };
    onChangeDailyRoute(e) {
        this.setState({ dailyRoute: e.target.value });
      }
    onChangeDailySalesTarget(e) {
        this.setState({ dailySalesTarget: parseInt(e.target.value,10) });
    }
    loadProducts() {
        axios
            .get(URL.main + URL.products+"/productIds")
            .then((response) => {
            console.log("products...",response.data)
            this.setState({
                productList: response.data,
            });
            console.log(response.data);
            })
            .catch((error) => {
            console.log(error);
            alert(error, (window.location = URL.management));
            });
        }
    loadRoutes() {
        axios
            .get(URL.main+URL.salesRoutes)
            .then((response) => {
            this.setState({
                routeList: response.data,
            });
            console.log(response.data);
            })
            .catch((error) => {
            console.log(error);
            alert(error, (window.location = URL.management));
            });
        }
    loadSalesperson() {
        axios.get(URL.main+URL.salesperson)
            .then((response) => {
                this.setState({
                    salespersonList:response.data,
                });
            })
            .catch((error) => {
                console.log(error);
                alert(error, (window.location = URL.management));
            });
        }
        

    componentDidMount() {
        this.loadRoutes();
        this.loadSalesperson();
        this.loadProducts();
    }
    loadShops(){
        axios.get(URL.main+URL.shops+"/getRoutes/"+this.state.dailyRoute)
            .then((res) => {
                this.setState({shopsId:res.data});
                this.state.shopsId.map(e=>{
                    e.isCovered=false;
                })
                console.log("shops id",this.state.shopsId)
                
            }).catch((error) => {
                console.log(error);
                alert(error, (window.location = URL.tasks));
        });
    }
    onSubmit(e) {
        e.preventDefault();

        this.loadShops();
        console.log("shops id again",this.state.shopsId)
        const dailyTarget = {
            sellerId: this.state.salespersonId,
            dailyRoute: this.state.dailyRoute,
            dailySalesTarget: this.state.dailySalesTarget,
            dailyInventory:this.state.inventoryList,
            dailyShops:this.state.shopsId,
        };
        console.log("shops id again",this.state.shopsId)
        console.log(dailyTarget);
        axios
            .post(URL.main+URL.addDailyTarget, dailyTarget)
            .then((res) => {
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
                    <form>
                        <div className="card my-1 bg-light col-md-12">
                            <div className="row my-3">
                                <label for="assignSalesperson" className="form-label card-header col mx-3" style={{backgroundColor:"rgba(211, 208, 208, 0.699)"}}><h4>Select a Salesperson</h4></label><br></br>
                                <select 
                                    style={{height:"60px"}}
                                    className="form-control form-control-lg col mx-3"
                                    id="assignSalesperson"
                                    required
                                    value={this.state.salespersonId}
                                    onChange={this.onChangeSalesperson}> 
                                    <option>Choose a Salesperson</option>  
                                    {this.state.salespersonList.map((el) => 
                                        <option value={el._id} key={el.idNumber}>{el.idNumber+" - "+el.firstName+" "+el.lastName}</option>
                                    )}     
                                </select>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label for="assignRoute" className="form-label card-header my-2" style={{backgroundColor:"rgba(211, 208, 208, 0.699)"}}>
                                        <h4>Assign Route</h4>
                                    </label><br></br>
                                    <select
                                        className="form-control form-control-lg col mb-3 "
                                        id="assignRoute"
                                        placeholder="Select a Route"
                                        required
                                        value={this.state.dailyRoute}
                                        onChange={this.onChangeDailyRoute}>  
                                        <option>Select a Route</option>    
                                        {this.state.routeList.map((e)=>
                                            <option value={e._id} key={e._id}>{e._id.substr(19)+" " +e.origin +" - "+e.destination}</option>
                                        )}                               
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label for="exampleInputEmail1" className="form-label card-header my-2" style={{backgroundColor:"rgba(211, 208, 208, 0.699)"}}>
                                        <h4>Daily Sales Target</h4>
                                    </label>
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
                            <div className="row mt-3">
                                <h3 className="col-md-3 text-right">Select product</h3>
                                <h3 className="col-md-3 text-right">Select Amount</h3>
                                <h3 className="col-md-2 text-right">Unit Price</h3>
                                <h3 className="col-md-2 text-right">Total</h3>
                            </div>
                            <div className="card-body row"><br></br><br></br>
                                {this.state.inventoryList.map((x, i) => {
                                    return (
                                        <div className="container row mb-2 pb-2">
                                            <select 
                                                style={{height:"50px"}}
                                                className="form-control form-control-lg col-md-3 mx-3"
                                                id="productId"
                                                name="productId"
                                                required
                                                value={x.productId}
                                                onChange={inp => this.handleInventoryInputChange(inp, i)}>     
                                                <option>Select a Product</option>     
                                                {this.state.productList.map((e)=>
                                                    <option value={e._id} key={e._id}>{e._id.substr(19)+" - " +e.itemName }</option>
                                                )}                         
                                            </select>
                                            <input
                                                className="form-control form-control-lg col-md-3"
                                                style={{height:"50px"}}
                                                type="number"
                                                name="quantity"
                                                placeholder="Enter Quantity"
                                                value={x.quantity}
                                                onChange={e => this.handleInventoryInputChange(e, i)}
                                                required
                                            />
                                            <label className="col-md-2 text-right mt-2">{x.unitPrice.toFixed(2)}{" "}</label>
                                            <label className="col-md-2 text-right mt-2 mx-1">{x.total.toFixed(2)}{" "}</label>
                                            <span className="row">
                                                {this.state.inventoryList.length !== 1 && <Delete
                                                    className="mt-2 mx-3"
                                                    style={{cursor:"pointer"}}
                                                    onClick={() => this.handleRemoveInventory(i)}/>
                                                }
                                                {this.state.inventoryList.length - 1 === i && <Add 
                                                    className="cursor-pointer mt-2 mx-4" 
                                                    style={{cursor:"pointer"}} 
                                                    onClick={this.handleAddInventory}/>
                                                }
                                            </span>
                                            {console.log(typeof this.state.dailySalesTarget,"type")}
                                            {console.log(this.state)}
                                        </div> 
                                    );
                                })}
                            </div>
                            <div className="row">
                                    <strong className="col-md-8 text-right">Total Amount in LKR </strong>
                                    <strong className="col-md-2 text-right">{this.state.finalTotal.toFixed(2)}{" "}</strong>
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
