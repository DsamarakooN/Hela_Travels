import React from "react";
import "./Home.css"
import { FaBed, FaUserTie , FaHotel   } from 'react-icons/fa'
import { Justify } from "react-bootstrap-icons";
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
                  <div className={`${selectedTab === 0 ? "tab-content-active" : "tab-content"}`}>

                    <div className="hotel-filters">
                      <div className="hotel-filter">
                        <label htmlFor="location">Location</label>
                        <input type="text" name="location" id="location" placeholder="Where are you going?" />
                      </div>
                      <div className="hotel-filter">
                        <label htmlFor="check-in">Check-in</label>
                        <input type="date" name="check-in" id="check-in" />
                      </div>
                      <div className="hotel-filter">
                        <label htmlFor="check-out">Check-out</label>
                        <input type="date" name="check-out" id="check-out" />
                      </div>
                      <div className="hotel-filter">
                        <button className="btn btn-outline-success">Search</button>
                      </div>
            
                    </div>
                  </div>
                  <div className={`${selectedTab === 1 ? "tab-content-active" : "tab-content"}`}>
                  <div className="hotel-filters">
                      <div className="hotel-filter">
                        <label htmlFor="location">Location</label>
                        <input type="text" name="location" id="location" placeholder="Where are you going?" />
                      </div>
                      <div className="hotel-filter">
                        <label htmlFor="check-in">Start</label>
                        <input type="date" name="check-in" id="check-in" />
                      </div>
                      <div className="hotel-filter">
                        <label htmlFor="check-out">End</label>
                        <input type="date" name="check-out" id="check-out" />
                      </div>
                      <div className="hotel-filter">
                        <button className="btn btn-outline-success">Search</button>
                      </div>
                      </div>
                  </div>
                  <div className={`${selectedTab === 2 ? "tab-content-active" : "tab-content"}`}>
                  <div className="hotel-filters">
                      <div className="hotel-filter">
                        <label htmlFor="location">Language</label>
                        <input type="text" name="location" id="location" placeholder="Language preference?" />
                      </div>
                      <div className="hotel-filter">
                        <label htmlFor="check-in">Start</label>
                        <input type="date" name="check-in" id="check-in" />
                      </div>
                      <div className="hotel-filter">
                        <label htmlFor="check-out">End</label>
                        <input type="date" name="check-out" id="check-out" />
                      </div>
                      <div className="hotel-filter">
                        <button className="btn btn-outline-success">Search</button>
                      </div>
                  </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="services-container">
          <div className="service-heading">
            <h2>Our Services</h2>
          </div>
          <div className="services-content">
            <div className="service">
              <div className="service-image">
                <FaBed className="icon" size={64} />
              </div>
              <div className="service-content">
                <h3>Accommodations</h3>
                <h4>Discover Premier Stays</h4>
                <p>Find unparalleled luxury with our Accommodations service.
                  From charming boutique hotels to stunning beachfront villas.We ensur each night of your journey
                  is as exceptional as your days of exploration.</p>
              </div>
            </div>
            <div className="service">
              <div className="service-image">
                <FaHotel className="icon" size={64} />
              </div>
              <div className="service-content">
                <h3>Travel Packages</h3>
                <h4>Exclusive Travel Deals Await</h4>
                <p>Elevate your travel experiences with our curated Travel Packages. Enjoy exclusive
                  deals and expertly crafted itineraries that guarantee unforgettable adventures,
                  whether you're a solo traveler, a couple, or a family.</p>
              </div>
            </div>
            <div className="service">
              <div className="service-image">
                <FaUserTie className="icon" size={64} />
              </div>
              <div className="service-content">
                <h3>Expert Guides</h3>
                <h4>Personalized Local Guided Experiences</h4>
                <p>Enhance your journey with the expertise of our local guides.
                  These passionate individuals provide personalized insights, helping
                  you discover the heart of each destination and make
                  your trip truly memorable.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-container">
          <div className="about-image"></div>
          <div className="about-content">
            <h2>About Us</h2>
            
            <p align="justify">Founded in 2021, Hela Travels is a travel company that specializes in providing
              personalized travel experiences. We are passionate about helping our clients
              discover the world in a way that is unique to them. We believe that travel is
              a powerful tool for personal growth and transformation, and we are committed to
              helping our clients achieve their travel goals. Our team of experts will work
              with you to create an itinerary that is tailored to your needs and interests.
              Whether you are looking for an adventure or a relaxing getaway, we have the
              perfect trip for you. Let us take care of all the details so you can focus on
              what matters most – enjoying your time away from home!</p>
            
          </div>
        </div>
      </section>
    </>
  )

}
export default Home;
