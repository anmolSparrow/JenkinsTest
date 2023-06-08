import React from 'react';
import {IoTriangleSharp} from "react-icons/io5";
import {IoCaretDownSharp} from "react-icons/io5";

// @mui
import {makeStyles , Card , Divider} from '@material-ui/core';
import {Stack} from '@mui/material';


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
        fontWeight: 'bold',
        fontSize: 13,
        marginBottom: theme.spacing(4),
        // justifyContent : 'flex-start'

    },
    data: {
        display: "flex",
        justifyContent: "center",
        alignItems: "left",
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
        textAlign: "left"
    },
    info: {
        color: " #595959",
        // fontWeight: 800,
        fontSize: 12,
        marginBottom: theme.spacing(1),
        textAlign: "left"
    }
}));

export default function MaintainanceCard(props) {

    const classes = useStyles();
    const percentageColor =  `${props.perColor}`

    return (
        <Card className={classes.root}>
           

            <div className={classes.heading} style={{justifyContent: 'flex-start'}}>
                {props.heading}
            </div>


            <div className={classes.data}>
                <div className={classes.right}>
                    <div className={classes.number}>
                        {props.number1}
                    </div>
                    <div className={classes.info}>
                        {props.info1}
                    </div>
                </div>
                <Divider orientation="vertical" flexItem style={{margin:'0 26px'}}/>
                <div className={classes.right}>
                    <div className={classes.number}>
                        {props.number2}
                    </div>
                    <div className={classes.info}>
                        {props.info2}
                    </div>
                </div>
                <Divider orientation="vertical" flexItem style={{margin:'0 26px'}}/>
                <div className={classes.right}>
                    <div className={classes.number}>
                        {props.number2}
                    </div>
                    <div className={classes.info}>
                       {props.info3}
                    </div>
                </div>

            </div>

        </Card>
    )
}