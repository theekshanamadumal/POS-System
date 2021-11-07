import { Doughnut } from "react-chartjs-2";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  colors,
  useTheme,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import URL from "../../config";
import categoryAnalytics from "../../services/analytics/category";
import { useState,useEffect } from "react";

const SalesPieChart = (props) => {
  const [productByCategory,setProductByCategory]=useState([]);
  const [data,setData]=useState([]);
  const [labels,setLabels]=useState([]);

  useEffect(() => {
    setProductByCategory(categoryAnalytics.perDay().percentageArray); 
    setData(categoryAnalytics.perDay().data);
    setLabels(categoryAnalytics.perDay().labels)
    
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
        ],
        borderWidth: 6,
        borderColor: colors.common.white,
        hoverBorderColor: colors.common.white,
      },
    ],
    labels:labels,
  };

  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false,
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 7,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: "index",
      titleFontColor: theme.palette.text.primary,
    },
  };

  return (
    <Link to={URL.analyticsCategory} className="linkAnaly">
      <Card {...props} sx={{ height: 220 }} style={{ cursor: "pointer" }}>
        <CardHeader title="Sales By Catergory" />
        <Divider />
        <CardContent>
          <Box
            sx={{
              height: 280,
              position: "relative",
            }}
          >
            <Doughnut data={dataSet} options={options} />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              pt: 2,
            }}
          >
            {productByCategory.map(({ color, title, value }) => (
              <Box
                key={title}
                sx={{
                  p: 1,
                  textAlign: "center",
                }}
              >
                <Typography color="textPrimary" variant="body1">
                  {title}
                </Typography>
                <Typography style={{ color }} variant="h6" mx="2">
                  {value}%
                </Typography>
              </Box>
            ))}
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
};

export default SalesPieChart;
