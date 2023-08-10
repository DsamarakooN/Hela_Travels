import Header from './components/Header';
import AddDrivers from "./components/AddDrivers";
import UpdateDriver from './components/UpdateDriver';
import AllDrivers from "./components/AllDrivers";
import DriverTable from './components/DriverTable';
import Home from "./components/Home";
import Viewmore from './components/ViewMore';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from './components/Footer';
import Destinations from './Destinations';
import './App.css';



function App() {
  return (
    <Router>
      

        <Header/>
        
      
          <Routes>
            <Route path='/add' element={<AddDrivers/>} />
            <Route path='/update/:id' element = {<UpdateDriver/>} />
            <Route path='/' element={<Home/>} />
            <Route path='/all' element={<AllDrivers/>} />
            <Route path='/admin' element={<DriverTable/>} />
            <Route path = '/admin/update/:id' element={<UpdateDriver/>} />
            <Route path = '/all/view/:id' element={<Viewmore/>} />
            <Route path = '/destinations' element={<Destinations/>} />  
          </Routes>

        <Footer/>
      
  </Router>
  );
}

export default App;
