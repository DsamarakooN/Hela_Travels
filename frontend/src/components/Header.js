
import React from "react";
//import { Link } from 'react-router-dom';

import { Facebook, Instagram, Twitter, Pinterest } from 'react-bootstrap-icons';
import "../App.css"
import { Nav } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';


function Header() {

  const location = useLocation();

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
             
                <NavLink exact to='/' className={`${location.pathname === "/" ? '':'active-nav-link'}`}>Home</NavLink>
             
            </Nav.Item>

            <Nav.Item className="nav-item">
             
                <NavLink exact to='/about' className={`${location.pathname === "/about" ? '':'active-nav-link'}`}>Packages</NavLink>
             
            </Nav.Item>
            
            <Nav.Item className="nav-item">
             
                <NavLink exact to='/destinations' className={`${location.pathname === "/destinations" ? '':'active-nav-link'}`}>Destinations</NavLink>
             
            </Nav.Item>
            <Nav.Item className="nav-item">
             
                <NavLink exact to='/Product' className={`${location.pathname === "/Product" ? '':'active-nav-link'}`}>Hotels</NavLink>
             
            </Nav.Item>
            <Nav.Item>
             
                <NavLink to='/contact' className={`${location.pathname === "/contact" ? '':'active-nav-link'}`}>Guides</NavLink>
             
            </Nav.Item>
            <Nav.Item>
             
                <NavLink exact to='/all' className={`${location.pathname === "/all" ? '':'active-nav-link'}`}>Drivers</NavLink>
             
            </Nav.Item>
          </ul>
          <ul className="navbar-nav sm-icons">
            <li><a className="nav-link" href="#"><Facebook className="icon"  size={20} /></a></li>
            <li><a className="nav-link" href="#"><Instagram className="icon"  size={20}/></a></li>
            <li><a className="nav-link" href="#"><Twitter className="icon"  size={20}/></a></li>
            <li><a className="nav-link" href="#"><Pinterest className="icon"  size={20}/></a></li>
          </ul>
        </div>
      </div>
    </nav>
 

    
    )
}

export default Header;