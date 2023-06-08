import * as React from 'react';

// @mui
import {makeStyles, withStyles , Grid} from '@material-ui/core';
import { Stack , TextField , FormControl , InputLabel , Select , MenuItem} from '@mui/material';
import dayjs from 'dayjs';
import { LocalizationProvider  , DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


// component
import AnalyticsCard from '../component/AnalyticsCard';
import GraphCard from '../component/Graphcard';

// Chart
import VerticalBarChart from '../graphs/VerticalBarChart';
import LineChart from '../graphs/LineChart';
import StackedBarChart from '../graphs/StackedBarChart';
import RadialBarChart from '../graphs/RadialBarChart';
import HorizontalBar from '../graphs/HorizontalBar';


const useStyles = makeStyles((theme) => ({

    heading: {
        fontWeight: 'bold',
        textAlign: "left",
        fontSize: 20,
        marginRight: theme.spacing(1)

    },
    root: {
        backgroundColor: "#f2f2f2",
        height: "auto",
        padding: theme.spacing(4)
    },
}))

export default function AnalyticsPage({ headerHandler }) {
    
    const classes = useStyles();

    const [value, setValue] = React.useState(dayjs('2022-04-07'));

    const ppiMonths = ["Aug" , "Sep" , "Oct" , "Nov" , "Dec" , "Jan" , "Feb"];

    const ppiSeries2 = [87 , 76 , 92 , 83 , 91 , 79 , 75 ];
    const ppiSeries1 = [65 , 83 , 82 , 75 , 78 , 83 , 89 ];
    const colors = ['#00cc00' , '#e62e00'];
    const mttrHours = [3 , 5 , 4 ,3.5 , 6  , 4 , 5];
    const mttrDays = [10 , 11 , 12 , 9 , 18 , 12 , 13];
    const metaInfo1= [
        { Availability: '96%', Performance: '97%' , Quality: '93%' },
        { Availability: '95%', Performance: '90%' , Quality: '88%' },
        { Availability: '97%', Performance: '96%', Quality: '98%' },
        { Availability: '93%', Performance: '95%' , Quality: '93%' },
        { Availability: '93%', Performance: '98%' , Quality: '99%'},
        { Availability: '90%', Performance: '88%' , Quality: '99%'},
        { Availability: '95%', Performance: '96%' , Quality: '82%'},
      ]
    
    const metaInfo2 = [
        { Availability: '90%', Performance: '70%' , Quality: '96%' },
        { Availability: '95%', Performance: '90%' , Quality: '96%' },
        { Availability: '90%', Performance: '96%', Quality: '95%' },
        { Availability: '93%', Performance: '95%' , Quality: '84%' },
        { Availability: '93%', Performance: '95%' , Quality: '88%'},
        { Availability: '93%', Performance: '92%' , Quality: '96%'},
        { Availability: '95%', Performance: '96%' , Quality: '97%'},
    ]

    const [bopet, setBopet] = React.useState(1);
    const [pet , setPet] = React.useState(1);

    const [bopetSeries , setBopetSeries] = React.useState([3 , 4 , 5 , 2 , 3 , 7]);
    const [minThreshold , setMinThreshold] = React.useState(2);
    
    const handleChange = (event) => {
        setBopet(event.target.value);
    };

    const petChange = (event) => {
        setPet(event.target.value);
    }
    
    const map = new Map()

    const bopetFilms = [1 ,2 ];

   bopetFilms.forEach((element) => {

    bopetFilms.forEach((element2) => {
        let newArr = [element , element2];
        const randomArr = [];
        for(let i = 0; i< 6; i+=1){
            const randomNum = Math.floor(Math.random() * 10) + 1;
            randomArr.push(randomNum);
        }
        let newObj = {PTA: randomArr[0] , MEG: randomArr[1] , IPA: randomArr[2] , UV702: randomArr[3] , AB9001: randomArr[4] , AO6: randomArr[5]};
        map.set(newArr , newObj);
    })
   });

   console.log(pet);
   console.log(map.get([1, 1]));


   function getBopetSeries(bopet , pet) {
        // let bopetSeries = Object.values(map.get([bopet , pet]));
        if(bopet === 1)
        {
            return [3 , 4 , 5 , 2 , 3 , 7];
        }
        
        return [3 , 7 , 3 , 5 , 9 , 8];

   }
   
   map.forEach(function(key , value){
    console.log(map.get(value));
   })



    React.useEffect(() => {

        headerHandler('Analytics');
        setBopetSeries(getBopetSeries(bopet , pet));
        setMinThreshold(bopet + 1);
    } , [bopet , pet])



    return (
        <div className={classes.root}>
        <Stack direction='row' justifyContent='space-between' spacing={3}>
            <Stack direction='row' className={classes.heading}>
                Production
            </Stack>
            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack>
            <DatePicker
                views={['year', 'month']}
                label="Year and Month"
                minDate={dayjs('2012-03-01')}
                maxDate={dayjs('2023-06-01')}
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} helperText={null}  size='small'/>}

                />
                </Stack>
                </LocalizationProvider> */}
        </Stack>
        <Grid container spacing={3} style={{marginTop: 3}}>
            <Grid item xs={12} lg={6}>
                <AnalyticsCard heading="OEE Trends">
                   <LineChart ppiMonths={ppiMonths} ppiSeries2={ppiSeries2} label2="Line 1" label1="Line 2" ppiSeries1={ppiSeries1} curve="straight" metaInfo1={metaInfo1} metaInfo2={metaInfo2} colors={colors} height="220"/> 
                </AnalyticsCard>
            </Grid>
            <Grid item xs={12} lg={6}>
                <AnalyticsCard heading="Capacity Utilization">
                    <StackedBarChart series={[{name: "Utilised" , data:[80 , 93 , 91 , 92 , 90 , 97 , 91] ,  borderRadius: [0, 0, 10, 0, 0, 10, 0, 0, 10, 0, 0, 10]} , {name: "Not Utilised" , data: [20 , 7 , 9 , 8 , 10 , 3 , 9] , borderRadius: [0, 10, 0, 0, 10, 0, 0, 10, 0, 0, 10, 0]}]} symbol="" xCategories={["Aug" , "Sep" , 'Oct' , 'Nov' , 'Dec' , 'Jan' , 'Feb']} height="220"/>
                    
                </AnalyticsCard>
            </Grid>
        </Grid>
        <Grid container spacing={1}>
            <Grid item xs={12} lg={12}>
                <AnalyticsCard heading='Production Bottleneck'>
                <Stack spacing={2}>
                    <StackedBarChart series={[{name: 'Remaining' , data: bopetSeries}]} symbol='' xCategories={['Terephthalic acid (PTA)' , 'Monoethylene Glycol (MEG)' , 'IPA' , 'UV Absorber - UV 702' , 'Antiblock - AB9001' , 'Antioxidant - 6 AO']}  yAnnotation={{y: 0, y2: minThreshold , borderColor: '#000' , fillColor: '#FEB019' , label: {
        text: `Available RM= ${minThreshold}` 
      }}} height='220'/>
                    <Stack direction='row' justifyContent='flex-end'>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-standard-label">Product</InputLabel>
                        <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={bopet}
                        onChange={handleChange}
                        label="Age"
                        >
                       
                        <MenuItem value={1}>BOPET Films</MenuItem>
                        <MenuItem value={2}>PET G Films</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-standard-label">Line</InputLabel>
                        <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={pet}
                        onChange={petChange}
                        label="Age"
                        >
                     
                        <MenuItem value={1}>Line 1</MenuItem>
                        <MenuItem value={2}>Line 2</MenuItem>
                        </Select>
                    </FormControl>

                    </Stack>
                    </Stack>
                </AnalyticsCard>
            </Grid>
        </Grid>
        <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
                <AnalyticsCard heading="Production Attainment">
                    <StackedBarChart series={[{name: 'On Time' , data: [270 , 320 , 370 , 190]} , {name: 'Delayed' , data:[130 , 160 , 60 , 120]}]} symbol="" xCategories={["Aug" , "Sep" , "Oct" , "Nov"]} height="255" colors={['#3333cc' , '#ffff1a']} />
                </AnalyticsCard>
            </Grid>
            <Grid item xs={12} lg={4}>
                <AnalyticsCard heading="Delay by Cause">
                    <RadialBarChart/>
                </AnalyticsCard>
            </Grid>
            <Grid item xs={12} lg={4}>
                <AnalyticsCard heading="Remaining Inventory (Days)">
                    <HorizontalBar series={[{name: 'Days' , data: [35 , 27 , 40, 10 , 6 , 16 , 3 , 23 , 3]}]}  xCategories={['Terephthalic acid (PTA)' , 'Monoethylene Glycol (MEG)' , 'Diethylene Glycol (DEG)' , 'IPA' , 'Copolymer' , 'UV Absorber - UV 702' , 'Antioxidant - 6 AO' , 'Fillers - Alumina trihydrate' , 'Accelerator - DMA (dimethyl aniline)']} height={250} />

                </AnalyticsCard>
            </Grid>
        </Grid>
        
        

        <Stack className={classes.heading} style={{marginTop: 25}}>
            Maintenance
        </Stack>
        <Grid container spacing={3} style={{marginTop: 3}}>
            <Grid item xs={12} md={6} lg={6}>
                <AnalyticsCard heading="MTTR (Hrs)">
                  <LineChart ppiMonths={ppiMonths} series={[{name: 'Overall Plant' , data: mttrHours}]} colors={['#0086b3']} height="220"   />
                </AnalyticsCard>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
                <AnalyticsCard heading="MTBF (Days)">
                  <LineChart ppiMonths={ppiMonths} series={[{name: 'Overall Plant' , data: mttrDays}]} colors={['#0086b3']} height='220'/>
                </AnalyticsCard>
            </Grid>
            
        </Grid>
        <Grid container spacing={3}>
            <Grid item xs={12} md={4} lg={4}>
                <AnalyticsCard heading="MTTR Categorization (Hrs)">
                    <VerticalBarChart series={[{name : 'Hours' , data: [0.61 , 0.50 , 0.56 , 0.97 , 0.50] }]} symbol='' xCategories={["RM feeding" , "Extruder" , "MDO" , "TDO" , "Slitting"]}/>
                </AnalyticsCard>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
                <AnalyticsCard heading="MTBF Categorization (Days)" >
                <VerticalBarChart series={[{name: 'Days' , data: [12.00 , 64.83 , 12.07] }]} symbol='' xCategories={[ "Grinding" , "Cooling" , "Bagging"]}/>
                </AnalyticsCard>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
                <AnalyticsCard heading="MRT Categorization (Mins)">
                <VerticalBarChart series={[{name: 'Mins' , data: [7.67 , 10.00 , 12.33 , 9.00 , 4.00] }]} symbol='' xCategories={["Pelleting" , "Batching" , "Grinding" , "Cooling" , "Bagging"]}/> 
                </AnalyticsCard>
            </Grid>
        </Grid>
        

        </div>
    )
}