import { Doughnut,Pie } from 'react-chartjs-2';
import {Box,Card,CardContent,CardHeader,Divider,Typography,colors,useTheme} from '@material-ui/core';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./category.css";
import { Button } from 'reactstrap';

const Category = (props) => {
  const theme = useTheme();
  const devices = [
    {
      title: 'Laptop',
      value: 27,
      color: colors.indigo[500]
    },
    {
        title: 'Tablet',
        value: 18,
        color: colors.grey[500]
      },
      {
        title: 'Desktop',
        value: 13,
        color: colors.pink[600]
      },
      {
        title: 'Mobile Phone',
        value: 28,
        color: colors.green[500]
      },
    {
      title: 'EarPhone',
      value: 10,
      color: colors.red[600]
    },

    {
      title: 'Others',
      value: 8,
      color: colors.orange[600]
    }
  ];
  const data = {
    datasets: [
      {
        data: [25,18,13,28,10,8],
        backgroundColor: [
          colors.indigo[500],
          colors.grey[500],
          colors.pink[600],
          colors.green[500],
          colors.red[600],
          colors.orange[600]
        ],
        borderWidth: 6,
        borderColor: colors.common.white,
        hoverBorderColor: colors.common.white
      }
    ],
    labels: ['Laptop', 'Tablet','Desktop', 'Mobile Phone','EarPhone','Others']
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

  const dataBar = [
    {
      name: 'Mobile',
      sales: 420000,
    },
    {
      name: 'Desktop',
      sales: 200000,
    },
    {
      name: 'Earphone',
      sales: 84000,
    },
    {
      name: 'Tablet',
      sales: 177800,
    },
    {
      name: 'Laptop',
      sales: 381000,
    },
    {
      name: 'USB pen',
      sales: 23900,
    },
    {
      name: 'Others',
      sales: 34900,
    },
  ];
  return (
    <div className="category">
      <Card   {...props} sx={{height:220}}>
        <h1 class="text-center">Income By Catergory </h1>
        <Divider />
        <CardContent>
          <Box
            sx={{
              height: 280,
              position: 'relative'
            }}
          >
            <Doughnut
              data={data}
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
            {devices.map(({
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
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="sales" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
      </ResponsiveContainer>

                


      <Button>Download</Button>
    </div>
  );
};

export default Category;
