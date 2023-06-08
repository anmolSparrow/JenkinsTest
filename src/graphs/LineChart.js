import * as React from "react";
import Chart from "react-apexcharts";


const months = ["Apr 2022" , "May 2022" , "Jun 2022" , "Jul 2022" , "Aug 2022" , "Sep 2022" , "Oct 2022" , "Nov 2022" , "Dec 2022" , "Jan 2023"]
const series1 = [100 , 123 , 231 , 154];
const series2 = [449.87 , 512.02 , 483.62 , 495.6 , 441.26 , 469.62 , 471.3 , 493.41 , 483.85 , 475.5 ];

export default function LineChart(props) {


    const tooltipFunc = props.tooltip && props.tooltip;

    const option = {

        chart : {
            height: 350,
            type: "line",
            id: "areachart-2",
            toolbar: {
                show: false
            }
        },
        dataLabels: {
            enabled: true
          },
        stroke: {
            curve: props.curve ? props.curve : "smooth"
          },
        grid: {
            padding: {
              right: 30,
              left: 20
            }
          },
        
        labels: props.ppiMonths ? props.ppiMonths : months,
        
        colors : props.colors ? props.colors : ["#1ad1ff", "#247BA0"],
        legend : {
            show: true,
            showForZeroSeries : true
        },
        yaxis : {
            floating: false,
            decimalsInFloat: 2
        },
        grid : {
            show: false
        },
        tooltip : {
            custom : function({series , seriesIndex , dataPointIndex , w}){

                const pointData = series[seriesIndex][dataPointIndex];
                const metaInfo = w.config.series[seriesIndex].metaInfo[dataPointIndex];
                const lineData = w.config.series[seriesIndex].data[dataPointIndex]
                const label = w.config.series[seriesIndex].name
                // const metaInfoHtml = metaInfo.map(info => `<div>Target: ${info.target} Lag: ${info.lag}</div>`).join('');
                return `
                <div class="tooltip-container">
                  <br>
                  <span> ${label}: ${lineData}%</span>
                  <br>
                  <span> Availability: ${metaInfo.Availability}</span>
                  <br>
                  <span> Performance: ${metaInfo.Performance}</span>
                  <br>
                  <span> Quality: ${metaInfo.Quality}</span>
                </div>
              `;
            }
        }
        


    }

    const series = [
        {
            name: props.label2 ? props.label2 : "Prouduction Cost",
            data:  props.ppiSeries2 ? props.ppiSeries2 : series2,
            metaInfo : props.metaInfo2 && props.metaInfo2
        },
        {
            name: props.label1 ? props.label1 : '',
            data : props.ppiSeries1 && props.ppiSeries1 ,
            metaInfo: props.metaInfo1 && props.metaInfo1
        }
    ]

    return (
        <div>
            <Chart
                options={option}
                series={props.series ? props.series : series}
                type="line"
                height= {props.height ? props.height : "350"}
            />
        </div>

    )
}
