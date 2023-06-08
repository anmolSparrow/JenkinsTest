import React from 'react';
import { Box , Stack , Typography } from '@mui/material';
import {makeStyles , Paper} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({

    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 15,
        width: 15,
        marginLeft: 20
    },
}))


function ColorBlock() {
    const colors = [
        { color: '#0086b3', length: '10%' , borderRadius: '7%' },
        { color: '#5cb2f6', length: '39%' , borderRadius: '0' },
        { color: '#eaf5fe', length: '28%'  , borderRadius: '0'},
        { color: '#00e673', length: '23%'  , borderRadius: '7%'},
      ];

    const classes = useStyles();
  return (
    <>
    <Box
      sx={{
        display: 'flex',
        height: '17px',
        borderRadius: '50%'
      }}
    >
      {/* <Box sx={{ height: '100%', flex: '1', flexBasis: '20%' }} />
      <Box sx={{ height: '100%', flex: '1', flexBasis: '50%' }} />
      <Box sx={{ height: '100%', flex: '1', flexBasis: '30%' }} /> */}
      {colors.map((color, index) => (
        <Box
          key={index}
          sx={{
            height: '100%',
            backgroundColor: color.color,
            flexBasis: color.length,
            borderRadius: color.borderRadius

          }}
        />
      ))}
    </Box>
    <Stack marginTop={10} direction='column' justifyContent='space-between'>
        <Stack direction='row' justifyContent="space-between">
        <Stack direction='row' justifyContent='flex-start'>
          <Paper className={classes.root} style={{backgroundColor: '#0086b3' , borderRadius: '20%' , marginTop:5}}/>
          <Typography sx={{ ml: 2}} >Overdue Maintainance</Typography> 
        </Stack>
        <Typography sx={{ ml: 2}} >8</Typography> 
        


        </Stack>
        <Stack direction='row' justifyContent="space-between">
        <Stack direction='row' justifyContent='flex-start'>
          <Paper className={classes.root} style={{backgroundColor: '#5cb2f6' , borderRadius: '20%' , marginTop:5}}/>
          <Typography sx={{ ml: 2}} >Scheduled</Typography> 
        </Stack>
        <Typography sx={{ ml: 2}} >26</Typography> 
        


        </Stack>
        <Stack direction='row' justifyContent="space-between">
        <Stack direction='row' justifyContent='flex-start'>
          <Paper className={classes.root} style={{backgroundColor: '#eaf5fe' , borderRadius: '20%' , marginTop:5}}/>
          <Typography sx={{ ml: 2}} >Due Maintainance</Typography> 
        </Stack>
        <Typography sx={{ ml: 2}} >14</Typography> 
        


        </Stack>
        <Stack direction='row' justifyContent="space-between">
        <Stack direction='row' justifyContent='flex-start'>
          <Paper className={classes.root} style={{backgroundColor: '#00e673' , borderRadius: '20%' , marginTop:5}}/>
          <Typography sx={{ ml: 2}} >Completed</Typography> 
        </Stack>
        <Typography sx={{ ml: 2}} >12</Typography> 
        


        </Stack>
    </Stack>


    </>
  );
}

export default ColorBlock;
