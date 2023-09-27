import React from "react";
import { useEffect } from "react"
import "./Home.css"
import { FaBed, FaUserTie, FaHotel, FaStar } from 'react-icons/fa';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"

function Home() {

  const navigate = useNavigate()

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login")
    }
  }, [user, navigate])

  



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
                  <li><button className={`${selectedTab === 0 ? "tab-button-active" : "tab-button"}`} onClick={() => { setSelectedTab(0); }}>Hotels</button></li>
                  <li><button className={`${selectedTab === 1 ? "tab-button-active" : "tab-button"}`} onClick={() => { setSelectedTab(1); }}>Packages</button></li>
                  <li><button className={`${selectedTab === 2 ? "tab-button-active" : "tab-button"}`} onClick={() => { setSelectedTab(2); }}>Guides</button></li>
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
            <h2> <span style={{ color: "#25D366" }}>Our</span> Services</h2>
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
            <h2><span style={{ color: "#25D366" }}>About </span> Us</h2>

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

      <section className="testimonials-section">

        <div className="services-container">
          <div className="service-heading">
            <h2><span style={{ color: "#25D366" }}>Happy</span> Testimonials</h2>
          </div>
          <div className="services-content">
            <div className="service">
              <div className="testimonials-image1">

              </div>
              <div className="service-content">
                <h3>Jane Smith</h3>
                <h4>Enchanting Exploration</h4>
                <div class="testimonials-ratings mb-3">
                  <i class="fa fa-star"><FaStar /></i>
                  <i class="fa fa-star"><FaStar /></i>
                  <i class="fa fa-star"><FaStar /></i>
                  <i class="fa fa-star"><FaStar /></i>
                  <i class="fa fa-star"><FaStar /></i>

                </div>
                <p>"Booking with Hela Travels was a game-changer for our family
                  vacation. The 'Enchanting Exploration' package allowed us to
                  discover hidden gems we would have never found on our own. From the
                  moment we touched down, the itinerary flowed seamlessly, and the local
                  guides made our experience truly enchanting. Thank you, Hela Travels, for
                  turning our vacation into a magical journey!"</p>
              </div>
            </div>
            <div className="service">
              <div className="testimonials-image2">

              </div>
              <div className="service-content">
                <h3>David Rodriguez</h3>
                <h4>Luxury Redefined</h4>
                <div class="testimonials-ratings mb-3">
                  <i class="fa fa-star"><FaStar /></i>
                  <i class="fa fa-star"><FaStar /></i>
                  <i class="fa fa-star"><FaStar /></i>
                  <i class="fa fa-star"><FaStar /></i>
                  <i class="fa fa-star"><FaStar /></i>
                </div>
                <p>"I opted for the 'Luxury Redefined' package with Hela Travels, and it
                  exceeded all expectations. The accommodations were nothing short of
                  five-star, and the attention to detail in the itinerary showcased a
                  level of service that truly redefines luxury travel. I've traveled extensively,
                  and Hela Travels stands out for their commitment to excellence. Can't wait for
                  my next adventure with them!"</p>
              </div>
            </div>
            <div className="service">
              <div className="testimonials-image3">

              </div>
              <div className="service-content">
                <h3>Emily Turner</h3>
                <h4>Cultural Odyssey</h4>
                <div class="testimonials-ratings mb-3">
                  <i class="fa fa-star"><FaStar /></i>
                  <i class="fa fa-star"><FaStar /></i>
                  <i class="fa fa-star"><FaStar /></i>
                  <i class="fa fa-star"><FaStar /></i>
                  <i class="fa fa-star"><FaStar /></i>
                </div>
                <p>"Our 'Cultural Odyssey' with Hela Travels was an immersion into the heart
                  and soul of each destination. From historic sites to local traditions,
                  every moment was a cultural revelation. The knowledgeable guides shared
                  insights that enriched our journey. Hela Travels transformed our desire for cultural exploration into
                  an unforgettable odyssey. Highly recommend!"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="subscribe-section">
        {/* write subscribe section here */}

        <div className="subscribe-container">
          <div className="subscribe-image"></div>
          <div className="subscribe-content">
            <h2>Subscribe to our newsletter</h2>
            <p align='justify'>Subscribe to our newsletter and unlock a world of exclusive travel offers and insider
              tips delivered directly to your inbox. Our curated content is designed to ignite your
              wanderlust and provide you with the latest insights into exciting destinations. Don't miss o
              ut on the adventure – sign up now and let the exploration begin!</p>
            <div className="subscribe-form">
              <form action="#" method="post">
                <input type="email" name="email" id="email" placeholder="Enter your email address" />
                <button className="btn btn-success">Submit</button>
              </form>
            </div>
            <div className="customers-stat">
              <div className="stat">
                <h2>1000+</h2>
                <p>Customers</p>
              </div>
              <div className="stat">
                <h2>100+</h2>
                <p>Destinations</p>
              </div>
              <div className="stat">
                <h2>100+</h2>
                <p>Guides</p>
              </div>
            </div>

          </div>
        </div>

      </section>
    </>
  )

}
export default Home;
