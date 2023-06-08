import { useRoutes , Navigate} from "react-router-dom";
import * as React from 'react';
// layouts
// import MiniDrawer from "./layout";
import Mainlayout from "./layout/Mainlayout";

// pages
import Home from './pages/Home';
import PreventiveMaintainance from "./pages/PreventiveMaintainance";
import AnalyticsPage from "./pages/AnalyticsPage";


export default function Router() {

    const [header , setHeader] = React.useState('');

    const headerHandler = (value) => {
        setHeader(value);
    }

    

    const routes = useRoutes([
        {
            path: '/main',
            element: <Mainlayout header={header}/>,
            children : [
                { element: <Navigate to='/ppi'/> , index: true},
                {path: 'ppi' , element: <Home headerHandler={headerHandler}/>},
                {path: 'pm' , element: <PreventiveMaintainance headerHandler={headerHandler}/>},
                {path: 'analytics' , element: <AnalyticsPage headerHandler={headerHandler}/>}
            ]

        },
        {
            path: '/',
            element: <Navigate to="/main/ppi" replace />,
          },
    ])

    return routes;
}
