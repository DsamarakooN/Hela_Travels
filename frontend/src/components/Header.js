
import React from "react";
//import { Link } from 'react-router-dom';

import { Facebook, Instagram, Twitter, Pinterest } from 'react-bootstrap-icons';
import "../App.css"
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


function Header() {

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
              <Nav.Link>
                <NavLink to='/' activeClassName='active-nav-link'>Home</NavLink>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <NavLink to='/about' activeClassName='active-nav-link'>Packages</NavLink>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <NavLink to='/destinations' activeClassName='active-nav-link'>Destinations</NavLink>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <NavLink to='/Product' activeClassName='active-nav-link'>Hotels</NavLink>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <NavLink to='/contact' activeClassName='active-nav-link'>Guides</NavLink>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <NavLink to='/all' activeClassName='active-nav-link'>Drivers</NavLink>
              </Nav.Link>
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