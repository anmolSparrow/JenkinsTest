import './App.css';
import Home from './pages/Home'
import ElevateAppBar from './component/NavBar';
import MiniDrawer from './layout';
import Router from './routes';

function App() {
    return (
      <div>
        {/* <ElevateAppBar/>
        <Home/> */}
        <Router/>
        </div>
    );
}

export default App;
