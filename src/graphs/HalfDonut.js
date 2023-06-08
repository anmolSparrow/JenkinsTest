import * as React from "react";
import Chart from "react-apexcharts";




export default function HalfDonut(props) {
  const series = props.series
    const options = {
        chart: {
            type: 'donut',
            height: "500px"
          },
        plotOptions: {
            pie: {
                startAngle: -90,
                endAngle: 90,
                offsetY: 10
              }
        },
        grid: {
            padding: {
              bottom: -80
            }
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 300,
                // height: "auto"
              },
              legend: {
                
                position: 'bottom'
              }
            }
          }],
          legend: {
            show:false
          },
          colors:props.colors,
          labels: ['Achieved' , 'Not Achieved']
    }

    return (
        <div>
            <Chart
                options={options}
                series={series}
                type="donut"
            />
        </div>
    )
}