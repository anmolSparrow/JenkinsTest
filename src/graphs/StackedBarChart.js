import React from "react";
import ReactApexChart from "react-apexcharts";

export default function StackedBarChart(props) {

    const options = {
        plotOptions: {
            bar: {
              dataLabels: {
                position: "top" // top, center, bottom
              },
            //   borderTopRightRadius: 3,
            //   borderTopLeftRadius: 3
            borderRadius: 0
            }
          },
          dataLabels: {
            enabled: false,
            formatter: function(val) {
              return Number(val).toLocaleString() + props.symbol;
            },
            offsetY: -20,
            style: {
              fontSize: "12px",
              colors:  ['#00cc00', '#a6a6a6']
            }
          },
          xaxis: {
            categories: props.xCategories,
            position: "bottom",
            labels: {
              offsetY: 0
            },
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            },
            crosshairs_: {
              fill: {
                type: "gradient",
                gradient: {
                  colorFrom: "#D8E3F0",
                  colorTo: "#BED1E6",
                  stops: [0, 100],
                  opacityFrom: 0.4,
                  opacityTo: 0.5
                }
              }
            },
           
            tooltip: {
              enabled: false,
              offsetY: -35
            }
          },
          yaxis : {
            show: true,
            showAlways: true,
        labels: {
            formatter: function (value) {
            return value;
            },
        },},    
          fill: {
            gradient: {
              shade: "light",
              type: "horizontal",
              shadeIntensity: 0.25,
              gradientToColors: undefined,
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [50, 0, 100, 100]
            },
            colors: props.colors ? props.colors :['#00cc00', '#a6a6a6', '#9C27B0']
          },
          grid: {
            show: false
          },
          yaxis: {
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            },
            labels: {
              show: true,
              formatter: function(val) {
                 return val.toFixed(0);;
              }
            },
            tickAmount: props.tickAmount
          },
          chart: {
            animations: {
              enabled: false
            },
            toolbar : {
                show: false
            },
            stacked: true,
            legend: {
              show:true,
              labels: {
                colors : props.colors ? props.colors : ['#00cc00', '#a6a6a6', '#9C27B0']
              }
            }
           
          },
          curve: "smooth",
          colors: props.colors ? props.colors : ['#00cc00', '#a6a6a6', '#9C27B0'],
          annotations : {
            yaxis : [props.yAnnotation]
          }
         
        
    };

    return (
        <ReactApexChart
            options={options}
            series={props.series && props.series}
            type='bar'
            height={props.height ? props.height : 100}
        />
    )
}