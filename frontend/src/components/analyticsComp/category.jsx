import { Doughnut } from 'react-chartjs-2';
import {Box,Card,CardContent,Divider,Typography,colors,useTheme} from '@material-ui/core';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./category.css";
import { Button } from 'reactstrap';
import React from "react";
import { useState,useEffect } from "react";
import categoryAnalytics from "../../services/analytics/category";

const Category = (props) => {
  const [productByCategory,setProductByCategory]=useState([]);
  const [data,setData]=useState([]);
  const [labels,setLabels]=useState([]);
  const [salesArray,setSalesArray]=useState([]);

  useEffect(() => {
    setProductByCategory(categoryAnalytics.perDay().percentageArray); 
    setData(categoryAnalytics.perDay().data);
    setLabels(categoryAnalytics.perDay().labels);
    setSalesArray(categoryAnalytics.perDay().priceArray);
  }, [])
  
  const theme = useTheme();
  const dataSet = {
    datasets: [
      {
        data: data,
        backgroundColor: [
          colors.red[600],
          colors.green[500],
          colors.indigo[500],
          colors.grey[500],
          colors.orange[600],
          colors.pink[600],
        ],
        borderWidth: 6,
        borderColor: colors.common.white,
        hoverBorderColor: colors.common.white
      }
    ],
    labels: labels,
  };

  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderWidth: 7,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  const dataBar =salesArray;


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
  let optionsSelect = null;

  if (selected === "Year") {
    type = year;
  } else if (selected === "Month") {
    type = month;
  } else if (selected === "Week") {
    type = dataStructure;
  }
  if (type) {
    optionsSelect = type.map((el) => <option key={el}>{el}</option>);
  }
  
  return (
    
    <div className="category">
      <Card   {...props} sx={{height:220}}>
        <h1 class="text-center">Income By Catergory </h1>
        {console.log("price sales ",salesArray)}
        <Divider />
        <br></br>
        <form style={{margin:"0px 60px"}}>
          <div className="row">
            <p style={{padding:"5px 20px 0px 0px" }}> Select Duration: </p>
            <select className="form-select form-control col"  style={{backgroundColor:"rgba(239, 228, 228, 0.5)"}}  onChange={changeSelectOptionHandler}>
              <option>Choose...</option>
              <option>Year</option>
              <option>Month</option>
              <option>Current Day</option>
            </select>
          
            <select className="form-select form-control col"  style={{backgroundColor:"rgba(239, 228, 228, 0.5)"}} >
              {optionsSelect}
            </select>
          
            <button className="btn btn btn-secondary">View Analysis</button>
          </div> 
        </form>
        <br></br>

        <CardContent>
          <Box
            sx={{
              height: 280,
              position: 'relative'
            }}
          >
            <Doughnut
              data={dataSet}
              options={options}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              pt: 2
            }}
          >
            {productByCategory.map(({
              color,
              title,
              value
            }) => (
              <Box
                key={title}
                sx={{
                  p: 1,
                  textAlign: 'center'
                }}
              >
                
                <Typography
                  color="textPrimary"
                  variant="body1"
                >
                  {title}
                </Typography>
                <Typography
                  style={{ color }}
                  variant="h6" mx="2"
                >
                  {value}
                  %
                </Typography>
              </Box>
            ))}
          </Box>
        </CardContent>
      </Card><br></br>

      <ResponsiveContainer width="100%" aspect={3 / 1}>
        <BarChart
          width={500}
          height={300}
          data={dataBar}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
            
          }}
          barCategoryGap={50}
        >
          <XAxis dataKey="name" padding={{ left: 50, right: 30 }} />

          <YAxis />
          <Tooltip />
          
          <CartesianGrid strokeDasharray="3 3" />
          <Bar barGap={10} barSize={500/salesArray.length} dataKey="sales" fill="indianred" stroke="#494949" background={{ fill: '#eee' }} />
        </BarChart>
      </ResponsiveContainer>

                


      <Button>Download</Button>
    </div>
  );
};

export default Category;
