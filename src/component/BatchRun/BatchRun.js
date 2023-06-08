import * as React from 'react';
// @mui
import {Grid , Card , Typography , Stack} from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import {makeStyles , Paper} from '@material-ui/core';


// css
import './BatchRun.css';



const useStyles = makeStyles((theme) => ({
    boxHeader : {
        justifyContent: 'center' , 
        marginTop: 35
    },
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        width: 30,
        borderRadius: '50%',
        backgroundColor: '#5cb2f6',
        marginLeft: 20
    },
    number: {
        color: theme.palette.secondary.contrastText,
        fontWeight: 'bold',
        fontSize: 14,
      },
    text: {
        color: theme.palette.secondary.contrastText,
        fontWeight: 'normal',
        fontSize: 17,
        marginLeft: 8
    }
}))

const commonStyles = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    width: '3rem',
    height: '3rem',
  };


export default function BatchRun() {

    const classes = useStyles();
    return (
        <>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={6}>

            <Card sx={{ backgroundColor:'#5cb2f6' , borderBottomLeftRadius: '15%' , borderBottomRightRadius: '15%' , zIndex: 1 , position: 'relative'  , width: '100%' , height: 100 , marginBottom: '-40px'}}>
            <Stack direction='row' className={classes.boxHeader} sx={{margin: 2}}>
            <AccessTimeIcon sx={{ color:'white'}}/>
            <Typography sx={{ color:'white' , ml: 1}} >Today</Typography> 
            </Stack>

            </Card>
            
            <Card sx={{ backgroundColor:'#4ca9ee',  height:200 , width:'100%' , zIndex:2 , borderTopLeftRadius: '10%' , borderTopRightRadius: '10%' , position: 'relative' , marginTop:'-20px' , borderBottomLeftRadius: '10%' , borderBottomRightRadius: '10%'   }}>
            
            <Stack className={classes.boxHeader} spacing={3}>
                <Stack direction='row'>
                <Paper className={classes.root}>
                <span className={classes.number}>4</span>
                </Paper>
                <div className={classes.text}>Batch Count</div>
                </Stack>
                <Stack direction='row'>
                <Paper className={classes.root}>
                <span className={classes.number}>20</span>
                </Paper>
                <div className={classes.text}>PM Count</div>
                </Stack>

            </Stack>

            </Card>
            

            </Grid>
            <Grid item xs={12} md={6} lg={6} >

            <Card sx={{ backgroundColor:'#eaf5fe' , borderTopLeftRadius: '15%' , borderTopRightRadius: '15%' , zIndex: 1 , position:'relative'  , width: '100%' , height:100 , marginBottom: '-40px'}}>
            <Stack direction='row' className={classes.boxHeader} sx={{margin: 2}}>
            <AccessTimeIcon sx={{ color:'#5cb2f6'}}/>
            <Typography sx={{ color:'#70bcf9', ml:1}} >This Week</Typography> 
            </Stack>
            </Card>
            <Card sx={{ backgroundColor:'#dceefd' , height:200 , width: '100%', zIndex:2  , borderTopLeftRadius: '10%' , borderTopRightRadius: '10%' , position: 'relative' , marginTop:'-20px' , borderBottomLeftRadius: '10%' , borderBottomRightRadius: '10%'   }}>
            {/* <div className="circle3">2</div>
            <Typography sx={{ color:'#70bcf9', ml:15, mb:3}} variant='h6'>Batch Count</Typography> 
            <div className="circle4">4</div>
            <Typography sx={{ color:'#70bcf9', ml:15, mb:3}} variant='h6'>PM Count</Typography>  */}
            <Stack className={classes.boxHeader} spacing={3}>
                <Stack direction='row'>
                <Paper className={classes.root}>
                <span className={classes.number}>12</span>
                </Paper>
                <div className={classes.text} style={{color: "#5cb2f6"}}>Batch Count</div>
                </Stack>
                <Stack direction='row'>
                <Paper className={classes.root}>
                <span className={classes.number}>50</span>
                </Paper>
                <div className={classes.text} style={{color: "#5cb2f6"}}>PM Count</div>
                </Stack>

            </Stack>
            </Card>
           

            </Grid>
            </Grid>
        </>
    )
}