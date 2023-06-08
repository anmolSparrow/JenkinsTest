import * as React from 'react';
import GaugeChart from 'react-gauge-chart';


// @mui
import {makeStyles, withStyles , Grid} from '@material-ui/core';

// component
import MaintainanceCard from '../component/MaintainanceCard';
import GraphCard from '../component/Graphcard';
import Donut from '../graphs/Donut';
import BatchRun from '../component/BatchRun/BatchRun';
import ColorBlock from '../graphs/ColorBar';
import LineChart from '../graphs/LineChart';
// import GaugeChart from '../graphs/GaugeChart';
import AnalyticsCard from '../component/AnalyticsCard';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#f2f2f2",
        height: "auto",
        padding: theme.spacing(4)
    },

    heading: {
        fontWeight: 700,
        textAlign: "left",
        fontSize: 20,
        marginRight: theme.spacing(1)

    },
    tooltip: {
        color: " #595959",
        width: 15,
        height: 15
    },
    flex: {
        display: "flex",
        alignItems: "center",
        marginBottom: theme.spacing(5)
    }

}));

export default function PreventiveMaintainance({ headerHandler }) {


    const ppiMonths = ["Aug" , "Sep" , "Oct" , "Nov" , "Dec" , "Jan" , "Feb"];
    const ppiSeries1 = [81 , 88 , 82 , 85 , 78 , 87 , 89 ];
    const ppiSeries2 = [85 , 83 , 92 , 93 , 88 , 93 , 89 ];



    
    const card1 = [
        {
            color: "green",
            percentage: "14.87",
            heading: "PM Job Cards",
            info1: 'Open Cards',
            info2 : 'Waiting For Parts',
            info3 : 'On Hold',
            number1: "5",
            number2: "4",
            direction: "up"
        },
        {
            color: "green",
            percentage: "20",
            heading: "PM Records",
            info1: 'Open records',
            info2 : 'Without Job Cards',
            info3 : 'Unassigned',
            number1: "3",
            number2: "2",
            direction: "up"

        },
        {
            color: "green",
            percentage: "5",
            heading: "Maintenance",
            info1: 'Overdue - All Time',
            info2 : 'Completed',
            info3 : 'Scheduled',
            number1: "6",
            number2: "4",
            direction: "down"
        },
    ];

    const donutData = [180 , 92 , 20];

    React.useEffect(() => {
        headerHandler('Preventive Maintenance')
    } , [])

    const classes = useStyles();
    
    return (
        <div className={classes.root}>
               <Grid container spacing={3} style={{marginBottom: 10}}>
                {card1.map((data , Index) => {
                    return (
                        <Grid item xs={12} lg={4} key={Index}>
                            {
                                
                            <MaintainanceCard
                                perColor={data.color}
                                percentage={data.percentage}
                                heading={data.heading}
                                number1={data.number1}
                                number2={data.number2}
                                info1 = {data.info1}
                                info2 = {data.info2}
                                info3 = {data.info3}
                                direction={data.direction}
                            />
                            }
                        </Grid>
                    )

                })}
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={12} lg={4}>
                <GraphCard heading="Total Maintenance Cost" >
                    <GaugeChart id='gauge-chart1'  nrOfLevels="10"  hideText={false} needleColor='red' textColor='black' formatTextValue={function (value) {
                        return(
                            '1.2cr'
                        )
                    }}/>
                </GraphCard>
                
                </Grid>
                <Grid item xs={12} lg={4}>
                    <GraphCard heading="PM Batch Run">
                        <BatchRun/>
                    </GraphCard>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <GraphCard heading="Maintenance Count By Status">
                    <Donut/>

                    {/* <ColorBlock/> */}
                    </GraphCard>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
            <Grid item xs={12} lg={6}>
            <GraphCard heading="Line 1 Availability">
                        <LineChart ppiMonths={ppiMonths} series={[{name: 'Line 1' , data: ppiSeries1}]} colors={['#00cc00']}/>
            </GraphCard>
            </Grid>
            <Grid item xs={12} lg={6}>
            <GraphCard heading="Line 2 Availability">
                        <LineChart ppiMonths={ppiMonths} series={[{name: 'Line 2' , data: ppiSeries2}]} />
            </GraphCard>
            </Grid>
            </Grid>
            
        </div>
    )
}