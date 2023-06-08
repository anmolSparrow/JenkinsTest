import * as React from "react";
import ReactApexChart from "react-apexcharts"

const series= [{
  name: "Down Time",
  data: [13, 11, 9, 14.4, 8]
}, {
  name: "Run Time",
  data: [87, 89, 91, 85.6 , 92]
}]

export default function HorizontalBar(props) {

    const options = {
        
            chart: {
            type: 'bar',
            height: 430
          },
          plotOptions: {
            bar: {
              horizontal: true,
              dataLabels: {
                position: 'right',
              },
            }
          },
          dataLabels: {
            enabled: true,
            offsetX: -6,
            style: {
              fontSize: '12px',
              colors: ['#000']
            }
          },
          stroke: {
            show: true,
            width: 1,
            colors: ['#fff']
          },
          tooltip: {
            shared: true,
            intersect: false,
            // custom: function({series , seriesIndex , dataPointIndex , w}) {
            //   return '<div class="arrow_box">' +
            //   '<span>' + series[seriesIndex][dataPointIndex] + '</span>' +
            //   '</div>'
            // }
          },
          xaxis: {
            categories: props.xCategories ? props.xCategories : ["Packaging and shipping", "Kiln Phase", "Cooling and Final grinding", "Propertioning Blending and Grinding", "Pre heating"],
          },
          legend: {
            show: true
          }
    }

    return (
        <div id="chart">
            <ReactApexChart
                options={options}
                series={props.series ? props.series : series}
                type="bar"
                height={props.height ? props.height : 350}
            />
        </div>
    )
}