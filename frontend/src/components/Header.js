
import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import "../App.css"
import { Nav } from 'react-bootstrap';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { logout, reset } from '../features/auth/authSlice'
import { FaSignInAlt, FaUser, FaAlignJustify  } from 'react-icons/fa'




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

  return (
    
    <div className="header">
      <nav className="navbar navbar-expand-md ">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="/"><span style={{ color: "#25D366" }}>Hela Travels</span></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"><a className="fs-icon" href="#"><FaAlignJustify className="icon" size={24} /></a></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <Nav.Item>

                <NavLink to='/' className={`${location.pathname === "/" ? 'active-nav-link' : ''}`}>Home</NavLink>
                
              </Nav.Item>

              <Nav.Item className="nav-item">

                <NavLink to='/about' className={`${location.pathname === "/about" ? 'active-nav-link' : ''}`}>Packages</NavLink>

              </Nav.Item>

              <Nav.Item className="nav-item">

                <NavLink to='/destinations' className={`${location.pathname === "/destinations" ? 'active-nav-link' : ''}`}>Destinations</NavLink>

              </Nav.Item>
              <Nav.Item className="nav-item">

                <NavLink to='/Product' className={`${location.pathname === "/Product" ? 'active-nav-link' : ''}`}>Hotels</NavLink>

              </Nav.Item>
              <Nav.Item>

                <NavLink to='/guides' className={`${location.pathname === "//guides" ? 'active-nav-link' : ''}`}>Guides</NavLink>

              </Nav.Item>
              <Nav.Item>

                <NavLink to='/all' className={`${location.pathname.startsWith("/all") ? 'active-nav-link' : ''}`}>Drivers</NavLink>

              </Nav.Item>
            </ul>

            <ul ul className="navbar-nav mb-2 mb-lg-0">
              {user ? (
                <li>
                  <div class="dropdown">
                    <button type="button" class="btn btn-outline-success dropdown-toggle" data-bs-toggle="dropdown">
                      <FaUser />
                      {user.role === 'business' && (
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                          Biz
                          <span class="visually-hidden">unread messages</span>
                        </span>
                      )}
                    </button>
                    <ul class="dropdown-menu">
                      <li>Hello, {user.name.charAt(0).toUpperCase()}</li>
                      <li><a class="dropdown-item" href="/profile">Profile</a></li>
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
      <hr style={{ color: "#25D366" }} ></hr>
    </div>



  )
}

export default Header;