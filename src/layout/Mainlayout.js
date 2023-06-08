import { Outlet } from 'react-router-dom';

// @mui
import { styled } from '@mui/material/styles';

// component
import MiniDrawer from '.';


const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 62;

const StyledRoot = styled('div')({
    display: 'flex',
    minHeight: '100%',
    overflow: 'hidden',
  });


  const Main = styled('div')(({ theme }) => ({
    flexGrow: 1,
    overflow: 'auto',
    minHeight: '100%',
    paddingTop: APP_BAR_MOBILE + 24,
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up('lg')]: {
      paddingTop: APP_BAR_DESKTOP + 24,
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(2),
    },
  }));

// ---------------------------------------------------

export default function Mainlayout({header}) {
    return(
        <StyledRoot>
        <MiniDrawer header={header}/>
        <Main>
            <Outlet/>
        </Main>
        </StyledRoot>
    )
}