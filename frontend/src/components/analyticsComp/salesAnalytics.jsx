import React, { useState ,useEffect} from "react";
import { Button } from "reactstrap";
import {
  XAxis,
  YAxis,
  Area,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart
} from "recharts";
import salesAnalytics from "../../services/analytics/sale";

export default function SalesAnalytics() {
  const [salesLast,setSalesLast]=useState([]);
  useEffect(() => {
    setSalesLast(salesAnalytics.perDay())
    
  }, [])

  const [selected, setSelected] = React.useState("");
  
  /** Function that will set different values to state variable
   * based on which dropdown is selected
   */
  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
  };
  
  /** Different arrays for different dropdowns */
  const year= [
    "2021",
    "2020",
  ];
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const dataStructure = [];
  
  /** Type variable to store different array for different dropdown */
  let type = null;
  
  /** This will be used to create set of options that user will see */
  let options = null;
  
  /** Setting Type variable according to dropdown */
  if (selected === "Year") {
    type = year;
  } else if (selected === "Month") {
    type = month;
  } else if (selected === "Week") {
    type = dataStructure;
  }
  
  /** If "Type" is null or undefined then options will be null,
   * otherwise it will create a options iterable based on our array
   */
  if (type) {
    options = type.map((el) => <option key={el}>{el}</option>);
  }
  return (
    <div className="chart">
      
    <h1>Sales Analytics</h1>
    <span className="chartTitle">Sales Analysis</span>
    <br></br>

    <form style={{margin:"0px 60px"}}>
        <div className="row">
          {/** Bind changeSelectOptionHandler to onChange method of select.
           * This method will trigger every time different
           * option is selected.
           */}
           <p style={{padding:"5px 20px 0px 0px" }}> Select Duration: </p>
          <select className="form-select form-control col"  style={{backgroundColor:"rgba(239, 228, 228, 0.5)"}} onChange={changeSelectOptionHandler}>
            <option>Choose...</option>
            <option>Year</option>
            <option>Month</option>
            <option>Current Day</option>
          </select>
        
          <select className="form-select form-control col"  style={{backgroundColor:"rgba(239, 228, 228, 0.5)"}} >
            {
              /** This is where we have used our options variable */
              options
            }
          </select>
        
          <button className="btn btn btn-secondary">View Analysis</button>
        </div>
        
      </form>
    
    <br></br>

    <ResponsiveContainer width="100%" aspect={3 / 1}>
        <AreaChart data= {salesLast} margin={{bottom:59}}>
        <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="mediumseagreen" stopOpacity={0.8} />
                <stop offset="95%" stopColor="mediumseagreen" stopOpacity={0} />
            </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="2 2"/>
        <Tooltip contentStyle={{backgroundColor:"moccasin"}}/>
        
        <Area type="monotone" dataKey="sales" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
        <XAxis dataKey="date" stroke="royalblue" />
        <YAxis stroke="royalblue" />
        
        </AreaChart>
    </ResponsiveContainer>
    <Button class="float-right">Download</Button>
      
    </div>
  );
}
