import React from "react";
import styled from 'styled-components';
import { Facebook, Instagram, Twitter, Pinterest } from 'react-bootstrap-icons';



function Footer() {

    return (
            <footer className="main-footer">
                <hr style={{ color: "#25D366" }} ></hr>
                {/* <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3">
                            <a className="navbar-brand fw-bold fst-italic fs-2" href="#" style={{ color: "#25D366" }}>Hela Travels</a>
                        </div>
                        <div className="col-md-3 mb-md-0 mb-3 ">
                            <h5 className="text-uppercase" style={{ color: "#25D366" }}>Quick Links</h5>
                            <ul className="list-unstyled">
                                <li><a href="#!" style={{ color: "black" }}>Packages</a></li>
                                <li><a href="#!" style={{ color: "black" }}>Destinations</a></li>
                                <li><a href="#!" style={{ color: "black" }}>Hotels</a></li>
                                <li><a href="#!" style={{ color: "black" }}>Transport</a></li>
                                <li><a href="#!" style={{ color: "black" }}>Guides</a></li>
                                <li><a href="#!" style={{ color: "black" }}>Events</a></li>
                                <li><a href="#!" style={{ color: "black" }}>Shops</a></li>
                            </ul>
                        </div>
    
                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase" style={{ color: "#25D366" }}>Quick Links</h5>
                            <ul className="list-unstyled">
                                <li><a href="#!" style={{ color: "black" }}>About US</a></li>
                                <li><a href="#!" style={{ color: "black" }}>Terms and Conditions</a></li>
                               <li><a href="#!" style={{ color: "black" }}>Help</a></li>
                                <li><a href="#!" style={{ color: "black" }}>Contact us</a></li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div className="footer-copyright text-center py-3">© 2023 Copyright:
                    <a href="#"> Hela Travels </a>
                 <div class="sm-icons ">

                     <ul className="sm-icons footer-social">
                            <li><a className="fs-icon" href="#"><Facebook className="icon" size={20} /></a></li>
                            <li><a className="fs-icon" href="#"><Instagram className="icon" size={20} /></a></li>
                            <li><a className="fs-icon" href="#"><Twitter className="icon" size={20} /></a></li>
                           <li><a className="fs-icon" href="#"><Pinterest className="icon" size={20} /></a></li>
                        </ul>
                 </div>
                </div> */}

                <div className="footer-container">
                    <div className="footer-left-col">
                        <div className="footer-logo-container"></div>

                        <div className="footer-about">
                            <p className="footer-about-text" align='justify'>
                            Hela Travels is more than just a travel company; we're your 
                            dedicated partner in crafting unforgettable journeys. Based in the 
                            picturesque landscapes of Sri Lanka, our mission is to transform travel 
                            dreams into reality.</p>
                        </div>
                        <div className="footer-sm">
                        
                        <ul className="sm-icons footer-social">
                            <li><a className="fs-icon" href="#"><Facebook className="icon" size={16} /></a></li>
                            <li><a className="fs-icon" href="#"><Instagram className="icon" size={16} /></a></li>
                            <li><a className="fs-icon" href="#"><Twitter className="icon" size={16} /></a></li>
                           <li><a className="fs-icon" href="#"><Pinterest className="icon" size={16} /></a></li>
                        </ul>

                        </div>
                    </div>
                    <div className="footer-center-col mt-3">
                        <h2>Pages</h2>
                        <ul>
                            <li><a href="#">home</a></li>
                            <li><a href="#">Packages</a></li>
                            <li><a href="#">Destinations</a></li>
                            <li><a href="#">Hotels</a></li>
                            <li><a href="#">Guides</a></li>
                            <li><a href="#">Drivers</a></li>
                            
                        </ul>
                    </div>
                    <div className="footer-center-col mt-3">
                        <h2>Info</h2>
                        <ul>
                            <li><a href="#">Customer Service</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Company</a></li>
                            
                        </ul>
                    </div>
                    <div className="footer-center-col mt-3">
                        <h2>My Account</h2>
                        <ul>
                            <li><a href="#">Profile</a></li>
                            <li><a href="#">Settings</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-copywright">
                    <p>© 2023 Hela Travels. All Rights Reserved</p>
                </div>

            </footer>
    )
}

export default Footer;