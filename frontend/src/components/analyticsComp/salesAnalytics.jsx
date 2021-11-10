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
import axios from 'axios';
import URL from "../../config";
import salesAnalytics from "../../services/analytics/sale";
import authHeader from '../../services/authHeader';

export default function SalesAnalytics(props) {
  const [salesLast,setSalesLast]=useState([]);
  const [maximum,setMaximum]=useState(0);
  useEffect(() => {
    axios.get(URL.main + URL.salesAnalyticsDuration+"/"+"Day-7",{ headers: authHeader() })  
        .then((response)=>{
              console.log('-------------------sales analytics',response.data);
              const maxi=salesAnalytics.mapDays(response.data).maximum;
              const saArr=salesAnalytics.mapDays(response.data).salesArray;
              setMaximum(maxi);
              setSalesLast(saArr)
        })
        .catch((error) => {
          console.log(error);
          alert(error, (window.location = URL.management));
        })
  }, [])

  const [selected, setSelected] = React.useState("Day");
  const [selectedValue,setSelectedValue]=useState("7");
  
  /** Function that will set different values to state variable
   * based on which dropdown is selected
   */
  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
    {event.target.value==="Month"?setSelectedValue("January")
      :event.target.value==="Day"?setSelectedValue("Last 7 Days")
      :setSelectedValue("2021")}
  };
  const changeValueHandler = (event) => {
    setSelectedValue(event.target.value);
  };
  
  /** Different arrays for different dropdowns */
  const year= [
    "2021",
    "2020",
  ];
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const day = ["Last 7 Days"];
  
  /** Type variable to store different array for different dropdown */
  let type = null;
  
  /** This will be used to create set of options that user will see */
  let options = null;
  
  /** Setting Type variable according to dropdown */
  if (selected === "Year") {
    type = year;
  } else if (selected === "Month") {
    type = month;
  } else if (selected === "Day") {
    type = day;
  }
  
  /** If "Type" is null or undefined then options will be null,
   * otherwise it will create a options iterable based on our array
   */
  if (type) {
    options = type.map((el) => <option value={selected==="Month"?type.indexOf(el)+1:el} key={el}>{el}</option>);
  }
  const changeRenderComp=(dur)=>{
    console.log("button clicked...",dur);
    axios.get(URL.main + URL.salesAnalyticsDuration+"/"+dur,{ headers: authHeader() })  
        .then((response)=>{
              console.log('-------------------sales analytics',response.data);
              var maxi;
              var saArr;
              if (dur.includes("Day")){
                maxi=salesAnalytics.mapDays(response.data).maximum;
                saArr=salesAnalytics.mapDays(response.data).salesArray;
              }else if (dur.includes("Month")){
                maxi=salesAnalytics.mapMonth(response.data,dur).maximum;
                saArr=salesAnalytics.mapMonth(response.data,dur).salesArray;
              }else{
                maxi=salesAnalytics.mapYear(response.data).maximum;
                saArr=salesAnalytics.mapYear(response.data).salesArray;
              }
              setMaximum(maxi);
              setSalesLast(saArr)   
        })
        .catch((error) => {
          console.log(error);
          alert(error, (window.location = URL.management));
        })
  }
  const onSubmitDuration=(e)=>{
    e.preventDefault();
    console.log(selected+"-"+selectedValue)
    changeRenderComp(selected+"-"+selectedValue) 
  }
  return (
    <div className="chart">
      
    <h1>Sales Analytics</h1>
    <span className="chartTitle"></span>
    <br></br>

    <form style={{margin:"0px 60px"}} onSubmit={onSubmitDuration}>
        <div className="row">
          {/** Bind changeSelectOptionHandler to onChange method of select.
           * This method will trigger every time different
           * option is selected.
           */}
           <p style={{padding:"5px 20px 0px 0px" }}> Select Duration: </p>
          <select className="form-select form-control col"  style={{backgroundColor:"rgba(239, 228, 228, 0.5)"}} onChange={changeSelectOptionHandler}>
          <option>Day</option>
            <option>Year</option>
            <option>Month</option>
            
          </select>
        
          <select className="form-select form-control col" onChange={changeValueHandler} style={{backgroundColor:"rgba(239, 228, 228, 0.5)"}} >
            {
              /** This is where we have used our options variable */
              options
            }
          </select>
        
          <button className="btn btn btn-secondary">View Analysis</button>
        </div>
        
      </form>
    
    <br></br>
    {salesLast.length>0?
      <div>
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
            <XAxis dataKey="_id" stroke="royalblue" />
            <YAxis stroke="royalblue"  domain={[0, dataMax => maximum]} />
            
            </AreaChart>
        </ResponsiveContainer>
        <Button class="float-right">Download</Button>
    </div>
    
    :<div
        className="d-flex flex-column align-items-center justify-content-center"
        style={{height: "56vh"}}
      >
        <img 
            className="align-center mb-3" 
            style={{height:"200px", width:"200px"}}
            src="/images/no_sales.png">
          </img>
        <p className="h2 text-secondary">No Sales In This Duration</p>
      </div>
    }
      
    </div>
  );
}
