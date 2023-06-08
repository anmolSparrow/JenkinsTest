import * as React from "react";
import ReactApexChart from 'react-apexcharts';

export default function GaugeChart(){
    
    const options = {

        chart: {
            height: 45,
            type: 'radialBar',
            offsetY: -20
          },
        stroke: {
            lineCap: 'round',
            width: 5
          },
        colors: ['#20E647'],
    
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 135,
            hollow: {
                size: '70%'
              },
            dataLabels: {
              show: true,
              name: {
                fontSize: '10px',
                color: undefined,
                offsetY: 120
              },
              value: {
                offsetY: 76,
                fontSize: '10px',
                color: '#000',
                formatter: function (val) {
                  return val + "%";
                }
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
              shade: 'dark',
              shadeIntensity: 0.15,
              inverseColors: false,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 50, 65, 91]
          },
        },
       
        labels: ['Median Ratio'],

    }

    const series = [67]

    return (
        <div>
            <ReactApexChart
            options={options}
            series={series}
            type='radialBar'
            height={45}
            />
        </div>
    )
}