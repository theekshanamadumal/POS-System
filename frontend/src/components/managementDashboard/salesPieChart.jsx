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

const SalesPieChart = (props) => {
  const theme = useTheme();
  const devices = [
    {
      title: "Laptop",
      value: 0,
      color: colors.indigo[500],
    },
    {
      title: "Tablet",
      value: 15,
      color: colors.grey[500],
    },
    {
      title: "Mobile Phone",
      value: 32,
      color: colors.green[500],
    },
    {
      title: "EarPhone",
      value: 15,
      color: colors.red[600],
    },

    {
      title: "Others",
      value: 10,
      color: colors.orange[600],
    },
  ];
  const data = {
    datasets: [
      {
        data: [28, 15, 32, 15, 10],
        backgroundColor: [
          colors.indigo[500],
          colors.grey[500],
          colors.green[500],
          colors.red[600],
          colors.orange[600],
        ],
        borderWidth: 6,
        borderColor: colors.common.white,
        hoverBorderColor: colors.common.white,
      },
    ],
    labels: ["Laptop", "Tablet", "Mobile Phone", "EarPhone", "Others"],
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
        <CardHeader title="Income By Catergory" />
        <Divider />
        <div>{/*categoryAnalytics.perDay()*/}</div>
        <CardContent>
          <Box
            sx={{
              height: 280,
              position: "relative",
            }}
          >
            <Doughnut data={data} options={options} />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              pt: 2,
            }}
          >
            {devices.map(({ color, title, value }) => (
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
