import * as React from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import DetailCard from "../component/DetailsCard";
import GraphCard from "../component/Graphcard";
import PieCard from "../component/PieCard"
import Grid from '@material-ui/core/Grid';
import HorizontalBar from "../graphs/HorizontalBar";
import LineChart from "../graphs/LineChart";


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

export default function Home({ headerHandler }) {
    const classes = useStyles();

    const ppiMonths = ["Apr 2022" , "May 2022" , "Jun 2022" , "Jul 2022" , "Aug 2022" , "Sep 2022" , "Oct 2022" , "Nov 2022" , "Dec 2022" , "Jan 2023"]
    const ppiSeries2 = [449.87 , 512.02 , 483.62 , 495.6 , 441.26 , 469.62 , 471.3 , 493.41 , 483.85 , 475.5 ];


    const card1 = [
        {
            color: "green",
            percentage: "14.87",
            heading: "Quantity produced (Metric Tons)",
            number1: "10,994,272",
            number2: "9,472,706",
            direction: "up"
        },
        {
            color: "green",
            percentage: "20",
            heading: "Rework Quantity (Metric Tons)",
            number1: "31,679",
            number2: "25343",
            direction: "up"

        },
        {
            color: "green",
            percentage: "5",
            heading: "Manufacturing Cost (INR)",
            number1: "6568",
            number2: "6914",
            direction: "down"
        },
        {
            color: "red",
            percentage: "8",
            heading: "Labor Cost (INR)",
            number1: "1,531",
            number2: "1408",
            direction: "down"

        }
    ]

    const card3 = [
        {
            heading: "Availability",
            series :  [73.59, 26.41],
            colors:['#4d94ff', '#bfbfbf'],
            target: 90,
            achieved : 73.59
        },
        {
            heading: "Performance",
            series :  [94.56, 5.44],
            colors:['#00cc99', '#bfbfbf'],
            target: 90,
            achieved: 94.56
        },
        {
            heading: "Quality",
            series :  [90.85, 9.15],
            colors:['#a366ff', '#bfbfbf'],
            target: 90,
            achieved: 90.85
        },
        {
            heading: "OEE",
            series :  [63.21,36.79],
            colors:['#ff80b3', '#bfbfbf'],
            target: 90,
            achieved: 63.21
        }
    ]

    React.useEffect(() => {
        headerHandler('Plant Production Index')
    } , [])



    return (
        <div className={classes.root}>
            <Grid container spacing={3} style={{marginBottom: 10}}>
                {card1.map((data) => {
                    return (
                        <Grid item xs={12} lg={3}>
                            <DetailCard
                                perColor={data.color}
                                percentage={data.percentage}
                                heading={data.heading}
                                number1={data.number1}
                                number2={data.number2}
                                direction={data.direction}
                            />
                        </Grid>
                    )

                })}
            </Grid>

            <Grid container spacing={3} style={{marginBottom: 10}}>
                {card3.map((data) => {
                    return (
                        <Grid item xs={12} lg={3}>
                            <PieCard
                            heading = {data.heading} series={data.series} colors={data.colors} target={data.target} achieved={data.achieved}/>
                        </Grid>
                    )
                })}
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={12} lg={4}>
                    <GraphCard  heading = "Run Time Vs. Downtime">

                        <HorizontalBar/>
                    </GraphCard>
                </Grid>
                <Grid item xs={12} lg={8}>
                    <GraphCard heading="Prouduction Cost: Last 12 months">
                        <LineChart ppiMonths={ppiMonths} ppiSeries2={ppiSeries2}/>
                    </GraphCard>
                </Grid>
            </Grid>

          
        </div>

    );
}
