import React from "react";
import "./Home.css"
// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';

function Home() {

  const [selectedTab, setSelectedTab] = React.useState(0);  // 0 = Home, 1 = Profile, 2 = Contact

  return (
    <>
      <section className="hero__section">
        <div className="">
          <div className="hero__image"></div>

          <div className="hero__content">
            <div className="hero__content__header">
              <h1> <span style={{ color: "#25D366" }}>Hela </span> Travels</h1>
              <h3> Discover Your Dream Destinations with Us  </h3>
            </div>
            <div className="tab-container-inner">
                <div className="tab-header">
                  <ul className="header-list">
                    <li><button className={`${selectedTab === 0 ? "tab-button-active" : "tab-button"}`} onClick={() => {setSelectedTab(0);}}>Hotels</button></li>
                    <li><button className={`${selectedTab === 1 ? "tab-button-active" : "tab-button"}`} onClick={() => {setSelectedTab(1);}}>Packages</button></li>
                    <li><button className={`${selectedTab === 2 ? "tab-button-active" : "tab-button"}`} onClick={() => {setSelectedTab(2);}}>Guides</button></li>
                  </ul>
                </div>
                <div className="tab-content-holder">
                  <div className={`${selectedTab === 0 ? "tab-content-active" : "tab-content"}`}><p>Hotel content </p></div>
                  <div className={`${selectedTab === 1 ? "tab-content-active" : "tab-content"}`}><p>Guide content</p></div>
                  <div className={`${selectedTab === 2 ? "tab-content-active" : "tab-content"}`}><p>Package content</p></div>
                </div>
              </div>
          </div>


        </div>



      </section>

      {/* <div class="hero d-sm-flex justify-align-content-center  row g-0" >
      <div className="d-sm-flex mx-auto items-center align-items-center justify-content-between w-100" style={{ height: "90vh" }}>
        <div className="col-md-4 mx-auto mb-4 mb-sm-0 headline">
          <span className="text-secondary text-uppercase">Hela Travels</span>
          <h1 className="display-4 my-4 font-weight-bold">Enjoy Your <br></br> <span style={{ color: "#25D366" }}>dream holiday</span></h1>
          <a href="#" className="hero_btn px-5 py-3 text-white mt-3 mt-sm-0" style={{ borderRadius: "30px", backgroundColor: "#25D366" }}>Let's go</a>
        </div>
        <div className="col-md-8 h-100 clipped" style={{ minHeight: "200px", backgroundImage: "url(./images/hero.jpg)", backgroundPosition: "center", backgroundSize: "cover" }}>
        </div>
      </div>
    </div>  */}
    </>
  )

}
export default Home;
