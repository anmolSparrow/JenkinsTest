import React from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import Tooltip from '@material-ui/core/Tooltip';
// import HorizontalBar from "../graphs/HorizontalBar";
// import LineChart from "../graphs/LineChart"

import HalfDonut from "../graphs/HalfDonut";
const useStyles = makeStyles((theme) => ({
    root: {
        padding: 20,
        [theme.breakpoints.down('md')]: {
            padding: 5,
        },
        minHeight: 300
    },

    heading: {
        fontWeight :700,
        textAlign: "left",
        fontSize: 20,
        marginRight: theme.spacing(1)

    },
    tooltip:{
        color: " #595959",
        width: 15,
        height: 15
    },
    flex:{
        display: "flex",
        alignItems: "center",
        marginBottom: theme.spacing(5)
    },
    info: {
        color: " #595959",
        fontWeight: 700,
        fontSize: 13,
        marginBottom: theme.spacing(2),
    },
    lag: {
        color: "#ff1a1a"
    },
    lead: {
        color: "green"
    }

}));

export default function GraphCard(props) {
    const classes = useStyles();

    const HtmlTooltip = withStyles((theme) => ({
        tooltip: {
            backgroundColor: '#f5f5f9',
            color: 'rgba(0, 0, 0, 0.87)',
            maxWidth: 220,
            fontSize: theme.typography.pxToRem(12),
            border: '1px solid #dadde9',
        },
    }))(Tooltip);

    return (
        <Card className={classes.root}>
            <div className={classes.flex}>
                <h3 className={classes.heading}> {props.heading}</h3>
                <div>
                    {/* <HtmlTooltip
                        title={
                            <React.Fragment>
                                <Typography color="inherit">Tooltip with HTML</Typography>
                                <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
                                {"It's very engaging. Right?"}
                            </React.Fragment>
                        }
                    >
                        <InfoOutlinedIcon className={classes.tooltip}/>
                    </HtmlTooltip> */}


                </div>



            </div>
            

            <div>
                <HalfDonut series={props.series} colors={props.colors}/>
            </div>

            <div className={classes.info}>
            <div>
            Target : {props.target}%
            </div>
            <div>
                Achieved : {props.achieved}%
            </div>
            {
                props.target - props.achieved > 0 ? <div className={classes.lag}>Lag by: {(props.target - props.achieved).toFixed(2)}%</div>:
                <div className={classes.lead}>Lead by: {(props.achieved - props.target).toFixed(2)}%</div>
            }
            </div>

        </Card>

    );
}
