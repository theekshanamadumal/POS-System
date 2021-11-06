import PropTypes from 'prop-types';
import "../list.css";
import React from 'react';
import "./salespersonPerform.css";
import { Button } from 'reactstrap';
import { BarChart, Bar, XAxis,YAxis, CartesianGrid, Tooltip,ResponsiveContainer,LabelList } from 'recharts';
import sellerAnalytics from "../../services/analytics/seller"

const SalespersonPerform = ({ salespersonPerform, ...rest }) => {
  const [selected, setSelected] = React.useState("");
  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
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
  } else if (selected === "Week") {
    type = dataStructure;
  }
  if (type) {
    options = type.map((el) => <option key={el}>{el}</option>);
  }
    
  return (
    <div className="tablePerson">
      <h1 style={{textAlign:"center"}}>Sales By Salespersons</h1>
      <br></br>
      <form style={{margin:"0px 60px"}}>
        <div className="row">
           <p style={{padding:"5px 20px 0px 0px" }}> Select Duration: </p>
          <select className="form-select form-control col"  style={{backgroundColor:"rgba(239, 228, 228, 0.5)"}} onChange={changeSelectOptionHandler}>
            <option>Choose...</option>
            <option>Year</option>
            <option>Month</option>
            <option>Current Day</option>
          </select>
        
          <select className="form-select form-control col"  style={{backgroundColor:"rgba(239, 228, 228, 0.5)"}} >
            {options}
          </select>
        
          <button className="btn btn btn-secondary">View Analysis</button>
          <div>{console.log("selle Anal...",sellerAnalytics.perDay().salesAll)}</div>
        </div>  
      </form>
      <br></br>
      <ResponsiveContainer width="100%" height={75*sellerAnalytics.perDay().salesAll.length}>
      
        <BarChart
          data={sellerAnalytics.perDay().salesAll}
          margin={{top: 5, right: 3, left: 2, bottom: 5}}
          margin={{left:59,right:59}}
          layout="vertical">
          <XAxis type="number" orientation="bottom" stroke="black"/>
          <YAxis type="category" dataKey="name" axisLine={false} dx={-15} tickLine={false} style={{ fill: "black" }} />
          <Bar background dataKey="income" stroke="#494949" fill="#8884d8" radius={5} barSize={{ width:"100%" ,aspect:1/3 }}>

              <LabelList dataKey="income"  position="right" style={{ fill: "#0004ff" }} />
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


