import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import {makeStyles, withStyles} from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
    navbar:{
        backgroundColor: "#fff",
        color: "#000",
        paddingLeft: theme.spacing(2),
        display: "flex"
    },
    text: {
        fontSize: 13,
        fontWeight: 700
    },
    icon:{
        height: 30,
        marginLeft: theme.spacing(1)
    },
    logo: {
        marginLeft: "80%"

    }

}));


export default function ElevateAppBar(props) {
    const classes = useStyles();

    const HtmlTooltip = withStyles((theme) => ({
        tooltip: {
            backgroundColor: '#f5f5f9',
            color: 'rgba(0, 0, 0, 0.87)',
            minWidth: 220,
            fontSize: theme.typography.pxToRem(12),
            border: '1px solid #dadde9',
        },
    }))(Tooltip);

    return (
        <React.Fragment>
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar className={classes.navbar}>
                    <Toolbar>
                        <Typography variant="h6" className={classes.text}>Plant Prouduction Index</Typography>
                        
                        <div className={classes.logo}>
                    <img src="industryOS.png" height={31} width={105} />
                    </div>
                    </Toolbar>
                    

                </AppBar>
            </ElevationScroll>
            <Toolbar />
{/*            <Container>*/}
{/*                <Box my={2}>*/}
{/*                    {[...new Array(12)]*/}
{/*                        .map(*/}
{/*                            () => `Cras mattis consectetur purus sit amet fermentum.*/}
{/*Cras justo odio, dapibus ac facilisis in, egestas eget quam.*/}
{/*Morbi leo risus, porta ac consectetur ac, vestibulum at eros.*/}
{/*Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,*/}
{/*                        )*/}
{/*                        .join('\n')}*/}
{/*                </Box>*/}
{/*            </Container>*/}
        </React.Fragment>
    );
}
