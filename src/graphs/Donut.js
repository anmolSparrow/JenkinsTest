import * as React from "react";
import Chart from "react-apexcharts";

// @mui

import {makeStyles, withStyles} from '@material-ui/core/styles';
import {Stack , Box} from '@mui/material'


const useStyles = makeStyles((theme) => ({
  donutData : {
    display: 'flex',
    justifyContent : "space-between",
    alignItems: 'center'
}
}))

const commonStyles = {
  bgcolor: 'background.paper',
  borderColor: 'text.primary',
  m: 1,
  border: 1,
  width: '1rem',
  height: '1rem',
};

const donutData = [180 , 92 , 20];

export default function Donut() {
    const series = [12 , 27 , 61]
    const options ={
        chart : {
            type: 'donut',
          
        },
        plotOptions : {
            donut: {
                size: '60%',
                background: 'transparent',
                labels: {
                  show: true,
                  name: {
                    show: true,
                    fontSize: '22px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 600,
                    color: undefined,
                    offsetY: -10,
                    formatter: function (val) {
                      return val
                    }
                  },
                  value: {
                    show: false,
                    fontSize: '16px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 400,
                    color: undefined,
                    offsetY: 16,
                    formatter: function (val) {
                      return val
                    }
                  },
                  total: {
                    show: false,
                    showAlways: false,
                    label: 'Total',
                    fontSize: '22px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 600,
                    color: '#373d3f',
                    formatter: function (w) {
                      return w.globals.seriesTotals.reduce((a, b) => {
                        return a + b
                      }, 0)
                    }
                  },
               
                },
               
              },      
            },
            legend: {
                show : false
            },
            colors : ['#5cb2f6', '#eaf5fe', '#00e673'],
            labels : ['Late' ,  'Early' ,'On Time'  ]
        }

        const classes = useStyles();

        return (
            <Box>
                <Chart
                    options={options}
                    series={series}
                    type='donut'
                    />


                <div className={classes.donutData}>
                    <Stack>
                    <Box sx={{ ...commonStyles, borderRadius: '50%' , color:'#00e673'}} />
                    <div style={{fontSize:12}}>On Time</div>
                    <div style={{fontSize:12 , fontWeight: 'bold'}}>180</div>
                    </Stack>
                    <Stack>
                    <Box sx={{ ...commonStyles, borderRadius: '50%' , color:'#eaf5fe'}} />
                    <div style={{fontSize:12}}>Early</div>
                    <div style={{fontSize:12 , fontWeight: 'bold'}}>92</div>
                    </Stack>
                    <Stack>
                    <Box sx={{ ...commonStyles, borderRadius: '50%' , color:'#5cb2f6'}} />
                    <div style={{fontSize:12}}>Late</div>
                    <div style={{fontSize:12 , fontWeight: 'bold'}}>18</div>
                    </Stack>

                </div>
            </Box>
        )
    }

