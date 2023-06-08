import React from 'react';

// @mui
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

// chart
import Donut from '../graphs/Donut';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 20,
        [theme.breakpoints.down('md')]: {
            padding: 5,
        },
        minHeight: 300
    },
    flex:{
        display: "flex",
        alignItems: "center",
        marginBottom: theme.spacing(5)
    },
    heading: {
        fontWeight :700,
        textAlign: "left",
        fontSize: 20,
        marginRight: theme.spacing(1)

    },
}))


export default function DonutCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <div className={classes.flex}>
            <h3 className={classes.heading}> {props.heading}</h3>
            <div>
                <Donut/>
            </div>
            </div>
        </Card>
    )
}