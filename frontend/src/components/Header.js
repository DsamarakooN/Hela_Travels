
import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import "../App.css"
import { Nav } from 'react-bootstrap';
import { Link,NavLink, useLocation, useNavigate } from 'react-router-dom';
import { logout, reset } from '../features/auth/authSlice'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'



function Header() {

  const location = useLocation();

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/login')
  }

    return(
        
       
      <nav className="navbar navbar-expand-md navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="/"><span style={{color: "#25D366"}}>Hela Travels</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <Nav.Item>
             
                <NavLink  to='/' className={`${location.pathname === "/" ? 'active-nav-link':''}`}>Home</NavLink>
             
            </Nav.Item>

            <Nav.Item className="nav-item">
             
                <NavLink  to='/about' className={`${location.pathname === "/about" ? 'active-nav-link':''}`}>Packages</NavLink>
             
            </Nav.Item>
            
            <Nav.Item className="nav-item">
             
                <NavLink  to='/destinations' className={`${location.pathname === "/destinations" ? 'active-nav-link':''}`}>Destinations</NavLink>
             
            </Nav.Item>
            <Nav.Item className="nav-item">
             
                <NavLink to='/Product' className={`${location.pathname === "/Product" ? 'active-nav-link':''}`}>Hotels</NavLink>
             
            </Nav.Item>
            <Nav.Item>
             
                <NavLink to='/contact' className={`${location.pathname === "/contact" ? 'active-nav-link':''}`}>Guides</NavLink>
             
            </Nav.Item>
            <Nav.Item>
             
                <NavLink to='/all' className={`${location.pathname.startsWith("/all") ? 'active-nav-link':''}`}>Drivers</NavLink>
             
            </Nav.Item>
          </ul>

          <ul ul className="navbar-nav mb-2 mb-lg-0">
        {user ? (
          <li>
            {/* <button className='btn' onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button> */}
            {/* <div class="dropdown">
                <button class="btn-profile btn-secondary dropdown-toggle profile-icon" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-expanded="false">
                  {user.name.charAt(0).toUpperCase()}
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a class="dropdown-item" href="/profile">Profile</a></li>
                  <li><a class="dropdown-item" href="/settings">Settings</a></li>
                  <li><a class="dropdown-item" href="/logout">Logout</a></li>
                </ul>
            </div> */}
            {/* <li class="nav-item dropdown">
              <div>
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg" width="40" height="40" class="rounded-circle"/>
          
         
          
        </a>
        </div>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Dashboard</a>
          <a class="dropdown-item" href="#">Edit Profile</a>
          <a class="dropdown-item" href="#">Log Out</a>
        </div>
      </li>  */}

<div class="dropdown">
  <button type="button" class="btn btn-outline-success dropdown-toggle" data-bs-toggle="dropdown">
  <FaUser />
  </button>
  <ul class="dropdown-menu">
  <li>Hello, {user.name.charAt(0).toUpperCase()}</li>
    <li><a class="dropdown-item" href="#">Profile</a></li>
    <li><a class="dropdown-item" href="#">Settings</a></li>
    <li><a class="dropdown-item" href="#" onClick={onLogout}>Logout</a></li>
  </ul>
</div>
            


          </li>
        ) : (
          <>
            <li>
              <Link to='/login'>
                <FaSignInAlt /> Login
              </Link>
            </li>
          </>
        )}
      </ul>
          
        </div>
      </div>
    </nav>
 

    
    )
}

export default Header;