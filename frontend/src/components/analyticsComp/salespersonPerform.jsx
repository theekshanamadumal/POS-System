import PropTypes from 'prop-types';
import "../list.css";
import React,{useEffect, useState} from 'react';
import "./salespersonPerform.css";
import { Button } from 'reactstrap';
import { BarChart, Bar, XAxis,YAxis, CartesianGrid, Tooltip,ResponsiveContainer,LabelList } from 'recharts';
import sellerAnalytics from "../../services/analytics/seller";
import axios from 'axios';
import URL from "../../config";
import authHeader from '../../services/authHeader';

const SalespersonPerform = ({ salespersonPerform, ...rest }) => {
  const [selected, setSelected] = React.useState("Day");
  const [selectedValue,setSelectedValue]=useState("7");
  const [sellerPerform,setSellerPerform]=useState([]);

  useEffect(() => {
    axios.get(URL.main + URL.salesPersonAnalyticsDuration+"/"+"Day-7",{ headers: authHeader() })  
        .then((response)=>{
              console.log('-------------------salesperson analytics',response.data);
              const nameList=sellerAnalytics.getName(response.data)
              setSellerPerform(nameList);
        })
        .catch((error) => {
          console.log(error);
          alert(error, (window.location = URL.management));
        })
  }, [])
  
  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
    {event.target.value==="Month"?setSelectedValue("January")
      :event.target.value==="Day"?setSelectedValue("Last 7 Days")
      :setSelectedValue("2021")}
  };
  const changeValueHandler = (event) => {
    setSelectedValue(event.target.value);
  };
  const year= [
    "2021",
    "2020",
  ];
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const dataStructure = [];
  let type = null;
  let options = null;

  if (selected === "Year") {
    type = year;
  } else if (selected === "Month") {
    type = month;
  } else if (selected === "Day") {
    type = ["Last 7 days"];
  }
  if (type) {
    options = type.map((el) => <option key={el} value={selected==="Month"?type.indexOf(el)+1:el}>{el}</option>);
  }
  const changeRenderComp=(dur)=>{
    console.log("button clicked...",dur);
    axios.get(URL.main + URL.salesPersonAnalyticsDuration+"/"+dur,{ headers: authHeader() })  
        .then((response)=>{
              console.log('-------------------sales analytics',response.data);
              const nameList=sellerAnalytics.getName(response.data)
              setSellerPerform(nameList);
        })
        .catch((error) => {
          console.log(error);
          alert(error, (window.location = URL.management));
        })
  }
  const onSubmitDuration=(e)=>{
    e.preventDefault();
    console.log(selected+"-"+selectedValue);
    changeRenderComp(selected+"-"+selectedValue) 
  }
    
  return (
    <div className="tablePerson">
      <h1 style={{textAlign:"center"}}>Sales By Salespersons</h1>
      <br></br>
      <form style={{margin:"0px 60px"}} onSubmit={onSubmitDuration}>
        <div className="row">
           <p style={{padding:"5px 20px 0px 0px" }}> Select Duration: </p>
          <select className="form-select form-control col"  style={{backgroundColor:"rgba(239, 228, 228, 0.5)"}} onChange={changeSelectOptionHandler}>
          <option>Day</option>
            <option>Year</option>
            <option>Month</option>
            
          </select>
        
          <select className="form-select form-control col" onChange={changeValueHandler}  style={{backgroundColor:"rgba(239, 228, 228, 0.5)"}} >
            {options}
          </select>
        
          <button className="btn btn btn-secondary">View Analysis</button>
        </div>  
      </form>
      <br></br>
     <ResponsiveContainer width="100%" height={75*sellerPerform.length}>
      
        <BarChart
          data={sellerPerform}
          margin={{top: 5, right: 3, left: 2, bottom: 5}}
          margin={{left:59,right:59}}
          layout="vertical">
          <XAxis type="number" domain={[0, dataMax => sellerPerform[0].sales]}  orientation="bottom" stroke="black"/>
          <YAxis type="category"  dataKey="name" axisLine={false} dx={-15} tickLine={false} style={{ fill: "black" }} />
          <Bar background dataKey="sales" stroke="#494949" fill="#8884d8" radius={5} barSize={{ width:"100%" ,aspect:1/3 }}>

              <LabelList dataKey="sales"  position="right" style={{ fill: "#0004ff" }} />
          </Bar>
          <Tooltip cursor={{fill: 'transparent'}}  contentStyle={{width:"150px", height:"80px"}}/>
          <CartesianGrid strokeDasharray="1 1"/>
        </BarChart>
      </ResponsiveContainer>
      <br></br>
      <br></br>
      <a href="" download rel="noopener noreferrer" target="_blank">
          <Button>Download</Button>
      </a>
    </div>
  );
};

SalespersonPerform.propTypes = {
    salespersonPerform: PropTypes.array.isRequired
};
export default SalespersonPerform;


