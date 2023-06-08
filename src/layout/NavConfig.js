// component
import SvgColor from "../component/svg-color/SvgColor";

// @mui
import BuildIcon from '@mui/icons-material/Build';
import InsightsIcon from '@mui/icons-material/Insights';
import FactoryIcon from '@mui/icons-material/Factory';

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;


const NavConfig = [
    {
        title: 'Plant Prouduction Index',
        path : '/main/ppi',
        icon : <FactoryIcon/>,
    },
    {
        title: 'Preventive Maintainance',
        path : '/main/pm',
        icon : <BuildIcon/>
    },
    {
        title: 'Analytics',
        path: '/main/analytics',
        icon: <InsightsIcon/>
    }
]

export default NavConfig;