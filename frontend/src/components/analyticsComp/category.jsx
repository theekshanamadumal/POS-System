import { Doughnut } from 'react-chartjs-2';
import {Box,Card,CardContent,Divider,Typography,colors,useTheme} from '@material-ui/core';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./category.css";
import { Button } from 'reactstrap';
import React from "react";
import { useState,useEffect } from "react";
import URL from "../../config";
import categoryAnalytics from "../../services/analytics/category";
import axios from 'axios';
import authHeader from '../../services/authHeader';
import html2pdf from "html2pdf.js"

const Category = (props) => {
  const [productByCategory,setProductByCategory]=useState([]);
  const [data,setData]=useState([]);
  const [labels,setLabels]=useState([]);
  const [salesArray,setSalesArray]=useState([]);

  const printDocument=()=> {
    const element = document.getElementById('categoryPdf');
		var opt = {
      margin:       0.2,
      filename:     'Analysis.pdf',
      jsPDF:        { unit: 'mm', format: 'a3', orientation: 'portrait' }
    };
		html2pdf().set(opt).from(element).save();
  }

  useEffect(() => {
    axios.get(URL.main + URL.categoryAnalyticsDuration+"/Day-7",{ headers: authHeader() }) 
    .then( (response) => {
      console.log('-------------------this.response category',response.data);
      const x=categoryAnalytics.findFinalArray(response.data);
      setData(x.data);
      setLabels(x.labels);
      setSalesArray(x.priceArray);
      setProductByCategory(x.percentageArray)
    } )
    .catch((error) => {
      console.log(error);
      alert(error, (window.location = URL.management));
    });
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


  const [selected, setSelected] = React.useState("Day");
  const [selectedValue,setSelectedValue]=useState("7");
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
  let optionsSelect = null;

  if (selected === "Year") {
    type = year;
  } else if (selected === "Month") {
    type = month;
  } else if (selected === "Day") {
    type = ["Last 7 Days"];
  }
  if (type) {
    optionsSelect = type.map((el) => <option key={el} value={selected==="Month"?type.indexOf(el)+1:el}>{el}</option>);
  }
  const changeRenderComp=(dur)=>{
    console.log("button clicked...",dur);
    axios.get(URL.main +URL.categoryAnalyticsDuration+"/"+dur,{ headers: authHeader() })  
        .then((response)=>{
          const x=categoryAnalytics.findFinalArray(response.data);
          setData(x.data);
          setLabels(x.labels);
          setSalesArray(x.priceArray);
          setProductByCategory(x.percentageArray)
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
    
    <div className="category" >
      <div id="categoryPdf">
        <Card   {...props} sx={{height:220}}>
          <h1 class="text-center">Sales By Catergory </h1>
          {console.log("price sales ",salesArray)}
          <Divider />
          <br></br>
          <form style={{margin:"0px 60px"}} onSubmit={onSubmitDuration}>
            <div className="row">
              <p style={{padding:"5px 20px 0px 0px" }}> Select Duration: </p>
              <select className="form-select form-control col"  style={{backgroundColor:"rgba(239, 228, 228, 0.5)"}}  onChange={changeSelectOptionHandler}>
              <option>Day</option>
                <option>Year</option>
                <option>Month</option>
                
              </select>
            
              <select className="form-select form-control col" onChange={changeValueHandler} style={{backgroundColor:"rgba(239, 228, 228, 0.5)"}} >
                {optionsSelect}
              </select>
            
              <button className="btn btn btn-secondary" >View Analysis</button>
            </div> 
          </form>
          <br></br>

        {salesArray.length>0?
          <div>
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
      </Card><br></br>
      </div>
      {salesArray.length>0?
        <Button onClick={printDocument}>Download</Button>
      :<p></p>}
    </div>
  );
};

export default Category;
