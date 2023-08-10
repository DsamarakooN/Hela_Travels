import React from "react";
import styled from 'styled-components';

const Styles = styled.div`
  .footer {
    background-color: #D9D9D9;
  }

`;

function Footer() {

    return(
        <Styles>
             <hr className="clearfix w-100 d-md-none pb-0 " />
        <footer className="page-footer font-small blue pt-4 bg-opacity-10">
            <hr style = {{color: "#25D366"}} ></hr>
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
            <a className="navbar-brand fw-bold fst-italic fs-2" href="#" style={{color:"#25D366"}}>Serendib Explorers</a>
            
            <div class="container ">
            <a href="#"><i class="fa fa-facebook"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-linkedin"></i></a>
            <a href="#"><i class="fa fa-google-plus"></i></a>
            <a href="#"><i class="fa fa-skype"></i></a>
            </div>

                
            </div>

           

            <div className="col-md-3 mb-md-0 mb-3 ">
                <h5 className="text-uppercase"style={{color:"#25D366"}}>Quick Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!"style={{color:"black"}}>Packages</a></li>
                    <li><a href="#!"style={{color:"black"}}>Destinations</a></li>
                    <li><a href="#!"style={{color:"black"}}>Hotels</a></li>
                    <li><a href="#!"style={{color:"black"}}>Transport</a></li>
                    <li><a href="#!"style={{color:"black"}}>Guides</a></li>
                    <li><a href="#!"style={{color:"black"}}>Events</a></li>
                    <li><a href="#!"style={{color:"black"}}>Shops</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase"style={{color:"#25D366"}}>Quick Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!"style={{color:"black"}}>About US</a></li>
                    <li><a href="#!"style={{color:"black"}}>Terms and Conditions</a></li>
                    <li><a href="#!"style={{color:"black"}}>Help</a></li>
                    <li><a href="#!"style={{color:"black"}}>Contact us</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2022 Copyright:
        <a href="https://mdbootstrap.com/"> SerendibExplorers</a>
    </div>

</footer>
</Styles>
    )
}

export default Footer;