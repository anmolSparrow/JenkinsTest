import React from "react";
import ReactApexChart from "react-apexcharts";


export default function VerticalBarChart(props) {

    const options = {
        plotOptions: {
            bar: {
              dataLabels: {
                position: "top" // top, center, bottom
              }
            }
          },
          dataLabels: {
            enabled: true,
            formatter: function(val) {
              return Number(val).toLocaleString() + props.symbol;
            },
            offsetY: -20,
            style: {
              fontSize: "12px",
              colors: ["#304758"]
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
            colors:['#0086b3', '#E91E63', '#9C27B0']
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
              show: false,
              formatter: function(val) {
                return Number(val).toLocaleString() + props.symbol;
              }
            }
          },
          chart: {
            animations: {
              enabled: false
            },
            toolbar : {
                show: false
            },
       
           
          }
        
    };

    const series = [{
        data: [0.67]
    }]

    return (
        <ReactApexChart
            options={options}
            series={props.series && props.series}
            type='bar'
            height={100}
        />
    )

}