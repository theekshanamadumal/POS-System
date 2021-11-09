import React, { useState ,useEffect} from "react";
import "./chart.css";
import axios from 'axios';
import {
  XAxis,
  YAxis,
  Area,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
} from "recharts";
import { Link } from "react-router-dom";
import URL from "../../config";
import salesAnalytics from "../../services/analytics/sale";
import authHeader from '../../services/authHeader';

export default function Chart() {
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
  
  return (
    <div className="chart" style={{ cursor: "pointer" }}>
      <Link to={URL.sales} className="linkAnaly">
        <span className="chartTitle">Sales Analysis</span>
        
        <br></br>
        <ResponsiveContainer width="100%" aspect={3 / 1}>
          <AreaChart data={salesLast} margin={{ bottom: 59 }}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="2 2" />
            <Tooltip contentStyle={{ backgroundColor: "moccasin" }} />

            <Area
              type="monotone"
              dataKey="sales"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <XAxis dataKey="_id" stroke="royalblue" />
            <YAxis stroke="royalblue" domain={[0, dataMax => maximum]}/>
          </AreaChart>
        </ResponsiveContainer>
      </Link>
    </div>
  );
}
