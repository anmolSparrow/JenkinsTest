import React from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: 20,
        [theme.breakpoints.down('md')]: {
            padding: 5,
        },
        minHeight: 180
    },

    heading: {
        fontWeight :700,
        textAlign: "left",
        fontSize: 20,
        marginRight: theme.spacing(1)

    },
    flex:{
        display: "flex",
        alignItems: "center",
        marginBottom: theme.spacing(5)
    },
}));


export default function AnalyticsCard(props) {
    const classes = useStyles();

    return(
        <Card className={classes.root}>
            <div className={classes.flex}>
            <h3 className={classes.heading}> {props.heading}</h3>
            </div>
            <div>
                {props.children}
            </div>
        </Card>
    )
}