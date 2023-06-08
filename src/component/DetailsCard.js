import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import {IoTriangleSharp} from "react-icons/io5";
import {IoCaretDownSharp} from "react-icons/io5";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 20,
        [theme.breakpoints.down('md')]: {
            padding: 5,
        },
        textAlign: "center"
    },
    title: {
        fontSize: 14,
    },

    icon: {
        // color: "red"
        marginRight: theme.spacing(1)
    },
    pos: {
        marginBottom: 12,
    },
    flex: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: theme.spacing(1.5),
    },
    percentage: {
        fontWeight: 700
    },
    heading: {
        color: " #595959",
        fontWeight: 500,
        fontSize: 13,
        marginBottom: theme.spacing(4),

    },
    data: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // marginBottom : theme.spacing(2),
    },
    left: {
        marginRight: 14,
        textAlign: "right"
    },
    right: {
        marginLeft: 14,
        textAlign: "left"
    },
    number: {
        color: " #595959",
        fontWeight: 800,
        fontSize: 12,
        marginBottom: theme.spacing(1),
    },
    info: {
        color: " #595959",
        // fontWeight: 800,
        fontSize: 12,
        marginBottom: theme.spacing(1),
    }
}));

export default function DetailCard(props) {
    const classes = useStyles();
    const percentageColor =  `${props.perColor}`
    return (
        <Card className={classes.root}>
            <div className={classes.flex} style={{color : `${percentageColor}`}} >
                {props.direction === "up" ? <IoTriangleSharp className={classes.icon} /> : <IoCaretDownSharp className={classes.icon}/>}
                <div className={classes.percentage} >
                    {props.percentage}%
                </div>
            </div>

            <div className={classes.heading}>
                {props.heading}
            </div>


            <div className={classes.data}>
                <div className={classes.left}>
                    <div className={classes.number}>
                        {props.number1}
                    </div>
                    <div className={classes.info}>
                        Current Month
                    </div>
                </div>
                <Divider orientation="vertical" flexItem/>
                <div className={classes.right}>
                    <div className={classes.number}>
                        {props.number2}
                    </div>
                    <div className={classes.info}>
                        Last Month
                    </div>
                </div>
            </div>
        </Card>
    );
}
