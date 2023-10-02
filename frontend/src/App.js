import Header from './components/Header';
import AddDrivers from "./components/AddDrivers";
import UpdateDriver from './components/UpdateDriver';
import AllDrivers from "./components/AllDrivers";
import DriverTable from './components/DriverTable';
import Home from './pages/home/Home';
import Viewmore from './components/ViewMore';
import Register from './pages/user/Register';
import Login from './pages/user/Login';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from './components/Footer';
import './App.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from './pages/user/UpdateProfile';
import ProfileDetails from './pages/user/ProfileDetails';
import AllGuides from './pages/guides/AllGuides';
import AddGuides from './pages/guides/AddGuide';
import Packages from './pages/packages/Packages';
import Destination from './pages/destinations/Destination';
import Hotels from './pages/hotels/Hotels';
import Destinations from './Destinations';



function App() {
  return (
    <>
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
            <Route path = '/register' element={<Register/>} /> 
            <Route path = '/login' element={<Login/>} />
            <Route path = '/updateprofile' element={<Profile/>} />
            <Route path = '/profile' element={<ProfileDetails/>} />

            <Route path='/guides' element={<AllGuides/>} />
            <Route path='/guides/add' element={<AddGuides/>} />
            <Route path='/packages' element={<Packages/>} />
            <Route path='/destinations' element={<Destinations/>} />
            <Route path='/hotels' element={<Hotels/>} />
          </Routes>

        <Footer/>
      
  </Router>
  <ToastContainer />
  </>
  );
}

export default App;
