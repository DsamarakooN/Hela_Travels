import React from 'react';
//import Collapsible from 'react-collapsible';
import Modal from 'react-bootstrap/Modal';
//import Button from 'react-bootstrap/Button';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';
import {useState} from "react";
import { Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'

function App(props) {
  const [show, setShow] = useState(false);
  const userType = props.value;
  //const userType2 = props.value2;
  return (
  
    <>
    <div class="col text-center">
      <Button class="btn btn-outline-success" onClick={() => setShow(true)}>
        Find out more
      </Button>
    </div>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        scrollable={true}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {userType}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {(() => {
  
  switch (userType) {
     case 'Colombo':
         return (
          <div className='row'>
          <Col sm={7}>
          <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../assets/Colombo.jpg')}
      alt="First slide"
      height='275px'
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../assets/1.1.jpg')}
      alt="Second slide"
      height='275px'
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../assets/1.2.jpg')}
      alt="Third slide"
      height='275px'
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../assets/1.3.jpg')}
      alt="Third slide"
      height='275px'
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../assets/1.4.jpg')}
      alt="Third slide"
      height='275px'
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../assets/1.5.jpg')}
      alt="Third slide"
      height='275px'
    />

    
  </Carousel.Item>
</Carousel>
          </Col>
          <Col sm={5}>
            
            <p>The capital city combines modern urban amenities with the country's colorful indigenous and colonial history.
               As a key stop on the world spice trade routes, Sri Lanka has long held strategic importance for European trading powers. 
               The country has been a colony of Portugal, the Netherlands, and most recently the British, and all these cultures blend with the Indigenous 
               culture to form a wonderful hybrid. You can taste these influences in the food, see them in the architecture and the arts, and you can really 
               feel them in Colombo.</p>
            
          </Col>
          <p>     The city is also filled with museums and other things to do that can help connect you with Sri Lankan culture. Colombo sits on the coast, 
              and there's a large green space and beach area right in the heart of the city separating an area called Fort from the Indian Ocean. It's the 
              city's public playground and a fun place to visit, especially on Friday and Saturday nights.</p>
            <p>     The city's new mega-tower, the Colombo Lotus Tower, is a great place to visit. The tallest free-standing tower in Southeast Asia, it provides 
              amazing views of the city. Aside from indoor and outdoor observation areas, there's a fancy restaurant at the top and a popular food court in 
              the mall at the tower base.</p>
              <p>The Gangaramaya Temple is a unique blend of architecture and culture and a place for Buddhist learning and worship. It also effectively takes 
                part in social welfare. It was built first in the 19th century and started by the famous scholar-monk Hikkaduwe Sri Sumangala Nayaka Thera. The 
                temple is a unique blend of architectural styles from Sri Lanka, Thailand, Chinese and India.</p>
        </div>
         )
     case 'Galle':
         return (
          <div className='row'>
          <Col sm={7}>
          <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../assets/Galle.jpg')}
      alt="First slide"
      height='275px'
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../assets/2.1.jpg')}
      alt="Second slide"
      height='275px'
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../assets/2.2.jpg')}
      alt="Third slide"
      height='275px'
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../assets/2.3.jpg')}
      alt="Third slide"
      height='275px'
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../assets/2.4.jpg')}
      alt="Third slide"
      height='275px'
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../assets/2.5.jpg')}
      alt="Third slide"
      height='275px'
    />

    
  </Carousel.Item>
</Carousel>
          </Col>
          <Col sm={5}>
            
            <p>
            The city of Galle is about a two-hour drive from Colombo via one of the country's first modern superhighways. This ancient trading port reflects
             its colonial history and is focused around a large, 17th-century seafront fort.</p>
            <p>Galle Fort is an entire preserved walled town, now filled with boutique hotels, shops, and restaurants (along with real residents). The entire 
              area is a UNESCO World Heritage Site.</p>

          </Col>
          <br></br>
          <p>This is a great place to explore on foot – the entire Fort area is car-free. It's hard to get lost, as you're surrounded on three sides by the sea.</p>

          <p>Aside from and outside the fort, the city is surrounded by some amazing beaches. Like others in the country, the wide sand beach leads into clear, 
          turquoise water. There's even a beach right beneath the iconic Galle lighthouse.</p>
          <p>Galle Fort Lighthouse, one of the oldest in Sri Lanka, is a coastal lighthouse inside Galle Fort. Initially built in 1848, it is one of the most visited
            attractions of the fort due to its picturesque surroundings, perfect for a serene stroll or an Instagram-worthy photo. It is important to note that visitors
            are not allowed to climb to the top of the lighthouse.</p>

          <p>Some more prominent landmarks include the natural harbour, the Historical Mansion Museum, Flag Rock and Meeran Mosque. In addition, Galle International 
            Stadium is acclaimed as one of the most picturesque cricket grounds worldwide. To round off your Galle tour, take home precious handicrafts, silk and 
            trinkets from the Old Dutch Market and Galle Face Green Night Market.</p>
        </div>
         )
         case 'Kandy':
         return (
          <div className='row'>
          <Col sm={7}>
          <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../assets/Kandy.jpg')}
      alt="First slide"
      height='275px'
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../assets/3.1.jpg')}
      alt="Second slide"
      height='275px'
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../assets/3.2.jpg')}
      alt="Second slide"
      height='275px'
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../assets/3.3.jpg')}
      alt="Second slide"
      height='275px'
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../assets/3.4.jpg')}
      alt="Second slide"
      height='275px'
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../assets/3.5.jpg')}
      alt="Second slide"
      height='275px'
    />

    
  </Carousel.Item>
</Carousel>
          </Col>
          <Col sm={5}>
            
            <p>Kandy is where you go to learn about and experience Sri Lankan history. Located in central Sri Lanka, the city is the former capital city 
              of the Sri Lankan royal dynasty, the country's main capital before the colonial period. The high point of what's called the "Kandian Era" was
               between the 15th and 18th centuries, when the area remained independent while most of the coastal regions were colonized by European powers.</p>
           
          </Col>
          <p>Be sure to visit the city's National Museum of Kandy, as it illustrates the story of the region and its people via exhibits and artifacts. Nearby, 
              the Temple of the Sacred Tooth Relic is a very holy Buddhist shrine, part of the royal palace complex. Kandy Lake is at the heart of the city and offers 
              a peaceful refuge from the heat. There are hiking paths that circle the lake, dotted with temples and shrines.</p>
          <p>Kandy is surrounded by mountains, which are home to many tea plantations. Some can be visited and offer tours and tea tastings. It's also surrounded 
              by rainforests. The Udawatta Kele Sanctuary is a forest park located within the city limits. The forest reserve has miles of hiking trails, as well as
               an excellent nature center with educational information.</p>
               <p>Sri Dalada Maligawa is the Sinhalese name for this holy shrine. Famously called Temple of the Sacred Tooth Relic, it is touted to be the most sacred 
                 Buddhist temple in the whole world. It houses the tooth of Buddha nestled in a golden chamber and is within the premises of the royal palace complex 
                 (formerly a princely state). Kandy is a UNESCO World Heritage Site, and it is said that whichever state holds the tooth relic, maintains an essential
                  place in the governance of the country.  </p>
        </div>
         )
         case 'Trincomalee':
         return (
          <div className='row'>
          <Col sm={7}>
          <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../assets/Trincomalee.jpg')}
      alt="First slide"
      height='275px'
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../assets/4.1.jpg')}
      alt="Second slide"
      height='275px'
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../assets/4.2.jpg')}
      alt="Third slide"
      height='275px'
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../assets/4.3.jpg')}
      alt="Third slide"
      height='275px'
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../assets/4.4.jpg')}
      alt="Third slide"
      height='275px'
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../assets/4.5.jpg')}
      alt="Third slide"
      height='275px'
    />

    
  </Carousel.Item>
</Carousel>
          </Col>
          <Col sm={5}>
            
            <p>Trincomalee is a port city on the northeast coast of Sri Lanka. Set on a peninsula, Fort Frederick was built by the Portuguese in the 17th century. 
              Within its grounds, the grand Koneswaram Temple stands on Swami Rock cliff, a popular vantage point for blue-whale watching. The holy complex contains 
              ornate shrines and a massive statue of Shiva. Nearby Gokanna Temple has panoramic views over the city and the coastline.</p>
           
          </Col>
          <p>The best time to visit Trincomalee is when the weather is warm and rainfall’s the least, in the months of January through September and then in December.
             Since the average high temperature in Trincomalee varies rarely, the temperature and weather here are usually hot through most parts of the year. Tourism’s
              the busiest in June-August.</p>
          <p>With some of the finest deep water ports spanning the country’s Eastern coastline, Trincomalee has an interesting mélange of people, a gorgeous stretch of
             white beaches with a sparkling coastal view and magnificent ancient history to brag about. There’s so much more to this town than what meets the eye!</p>
             <p>The Koneswaram temple is one of the main highlights of the east coast of Sri Lanka in Trincomalee. The temple is located high above the bay, and you 
               can view the breathtaking and awe-inspiring scenery on all sides. The site is a religious pilgrimage for the Hindus and is also known as the Kailasa 
               of the South. The Koneswaram temple is one of the five “Pancha Ishwarams” (abodes of Shiva) which has been built to worship Lord Shiva- the supreme
                God of Hinduism.</p>
            <p>The Kanniya Hot Springs is on the east coast of Sri Lanka in Trincomalee and includes a series of seven square shaped wells each with a depth of 
              about four feet. The temperature of the water at these hot springs varies between wells, but the average temperature is warm to hot. These hot
               springs are an example of nature in its purest form where the water from the well is believed to have healing properties. The water in each of 
               the wells is not very deep, and one can see the bottom of the well. The depth of the well is such that the water will run out by drawing 10-15 buckets from it.</p>
        </div>
         )

         case 'Yala':
         return (
          <div className='row'>
          <Col sm={7}>
          <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../assets/Yala.jpg')}
      alt="First slide"
      height='275px'
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../assets/5.1.jpg')}
      alt="Second slide"
      height='275px'
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../assets/5.2.jpg')}
      alt="Third slide"
      height='275px'
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../assets/5.3.jpg')}
      alt="Third slide"
      height='275px'
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../assets/5.4.jpeg')}
      alt="Third slide"
      height='275px'
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../assets/5.5.jpg')}
      alt="Third slide"
      height='275px'
    />

    
  </Carousel.Item>
</Carousel>
          </Col>
          <Col sm={5}>
            
            <p>Located on the island's southeast coast, Yala National park is known for leopard safaris. Leopards are very rare, but the park has a large 
              population and it's possible to spot them even on a day trip. The park is also home to a large population of Asian elephants, which are endemic to Sri Lanka.</p>

              <p>There are also some important Buddhist temples and shrines within Yala, which is not far from the city of Hambantota.</p>
           
          </Col>
          <p> The park is is split into five sectors and out of these only two are open to visitors. You can also find a herd of Asian elephants. If you are lucky you
             might as well see a sloth bear apart from crocodiles and deer. Also, there are around 400 bird species which includes 33 that are rare. 
             Don't forget to carry your binoculars while you're in for safari ride! The safari rides last nearly 5 hours and will take you on a wildlife
              experience of a lifetime! The thrill exists in unexpectedly coming across animals in the wild, in their habitat. You never know what you could
               find here! Cost: It could cost you up to 4800 INR for a 5-hour trip, per person. A number of people: a typical jeep safari can accommodate up to 
               5 people in one jeep, excluding the driver and guide.Aside from the fauna, the park is home to some incredible, varied environments and ecosystems.
                You can visit the marine and beach environment of the coastal areas, 
              follow leopards across vast grasslands, or explore tropical rainforests.</p>
            
            <p>Although it is considered to be a year-round destination, people often say that best sightseeing can be done during the dry season from February to June 
              because during this time the water level is lower and animals come out in open in search for water. Although the park is closed during September month for
               maintenance. April is known to be Tamil new year and therefore you'll find a lot of families gathering near beaches of Ayala. It's the best time as all 
               around you'll find temples being decorated.</p>

          
        </div>
         )
         case 'Nuwara-Eliya':
          return (
           <div className='row'>
           <Col sm={7}>
           <Carousel>
   <Carousel.Item>
     <img
       className="d-block w-100"
       src={require('../assets/Nuwara-Eliya.jpg')}
       alt="First slide"
       height='275px'
     />
     
   </Carousel.Item>
   <Carousel.Item>
     <img
       className="d-block w-100"
       src={require('../assets/6.1.jpg')}
       alt="Second slide"
       height='275px'
     />
 
     
   </Carousel.Item>
   <Carousel.Item>
     <img
       className="d-block w-100"
       src={require('../assets/6.2.jpg')}
       alt="Third slide"
       height='275px'
     />
 
     
   </Carousel.Item>
   <Carousel.Item>
     <img
       className="d-block w-100"
       src={require('../assets/6.3.jpg')}
       alt="Third slide"
       height='275px'
     />
 
     
   </Carousel.Item>
   <Carousel.Item>
     <img
       className="d-block w-100"
       src={require('../assets/6.4.jpg')}
       alt="Third slide"
       height='275px'
     />
 
     
   </Carousel.Item>
   <Carousel.Item>
     <img
       className="d-block w-100"
       src={require('../assets/6.5.jpg')}
       alt="Third slide"
       height='275px'
     />
 
     
   </Carousel.Item>
 </Carousel>
           </Col>
           <Col sm={5}>
             
             <p>Nuwara Eliya is a city in the tea country hills of central Sri Lanka. The naturally landscaped Hakgala Botanical Gardens displays roses and tree ferns, 
               and shelters monkeys and blue magpies. Nearby Seetha Amman Temple, a colorful Hindu shrine, is decorated with religious figures. Densely forested Galway's 
               Land National Park is a sanctuary for endemic and migratory bird species, including bulbuls and flycatchers.</p>
 
             
            
           </Col>
           <p>Victoria Park is a well-maintained park situated in the heart of Nuwara Eliya. It is the perfect place for family outings where the tourists can enjoy watching 
             exotic birds, and some rare flowering plants. The park also has a children’s play area, and some rides, that make the place enjoyable for all ages alike. The pretty 
             flowers, serene ponds, and many other scenic spots in the park would also make it an excellent location for clicking beautiful photographs. Victoria Park is in the 
             centre of the city of Nuwara Eliya. You need to pay an entrance fee before getting in. It is an ideal place for morning walks and picnics.</p>
 
           <p>Located at a distance of 3km from the Nuwara Eliya, The Galway's Land National Park is one of the few well-known national parks in the city, even if it is one of the 
             smallest ones. The park consists of many exotic birds and animals, coexisting to form biodiversity. The park opens up early in the morning to aid birdwatchers.</p>

            <p>The waterfalls in and around Nuwara Eliya include Lover's Leap Falls, Bomburu Ella Falls, St. Clair's Falls and Devon Falls. Victoria Park is a beautiful 
              recreational area with several floral species and is a popular spot for birdwatching in the city. Another location for birdwatching and rare wildlife sightings 
              is Galway's Land National Park. The numerous verdant tea plantations in Nuwara Eliya deserve a special mention; they are certainly one of the main draws of the 
              city's tourism.</p>

            <p>Nuwara Eliya is a start point for visiting Horton Plains National Park. The city is near the Hakgala Botanical Gardens, home to thousands of flora, 
              and the Seetha Amman Temple, dedicated to the Hindu goddess Seetha.</p>
         </div>
          )
          case 'Mirissa':
            return (
             <div className='row'>
             <Col sm={7}>
             <Carousel>
     <Carousel.Item>
       <img
         className="d-block w-100"
         src={require('../assets/Mirissa.jpg')}
         alt="First slide"
         height='275px'
       />
       
     </Carousel.Item>
     <Carousel.Item>
       <img
         className="d-block w-100"
         src={require('../assets/7.1.jpg')}
         alt="Second slide"
         height='275px'
       />
   
       
     </Carousel.Item>
     <Carousel.Item>
       <img
         className="d-block w-100"
         src={require('../assets/7.2.jpg')}
         alt="Third slide"
         height='275px'
       />
     </Carousel.Item>
     <Carousel.Item>
       <img
         className="d-block w-100"
         src={require('../assets/7.3.jpg')}
         alt="Third slide"
         height='275px'
       />
     </Carousel.Item>
     <Carousel.Item>
       <img
         className="d-block w-100"
         src={require('../assets/7.4.jpg')}
         alt="Third slide"
         height='275px'
       />
     </Carousel.Item>
     <Carousel.Item>
       <img
         className="d-block w-100"
         src={require('../assets/7.5.jpg')}
         alt="Third slide"
         height='275px'
       />
     </Carousel.Item>
   </Carousel>
             </Col>
             <Col sm={5}>
               
               <p>Mirissa is a small town on the south coast of Sri Lanka, located in the Matara District of the Southern Province. It is approximately 150 kilometres south of 
                 Colombo and is situated at an elevation of 4 metres above sea level. Mirissa's beach and nightlife make it a popular tourist destination.</p>
   
                 <p>Mirissa is hugely famous for its whale watching and dolphin watching activities. Whale watching in Mirissa allows visitors to enjoy watching them swim
                and play in their natural habitat. It is a completely unforgettable experience and a must-see for kids.</p>
              
             </Col>
             
             <p>Weligama is a town located on the south coast of Sri Lanka, in Matara District, Southern Province. The shores of Weligama are best known to have some of the most 
               pristine surfing spots of the country. One such beach is the Weligama beach.</p>
            <p>The bright and lively coast has happy hours for a part of the day and candle-lit sea-food dinners once the sun sets. The clear waters bundled with 
              turtles and aquatic life are a sight to behold.</p>

            <p>From classic cocktail mixes to coconut induced delights, burgers from the beach shacks to kootu, rice and curry – Mirissa is a traveller’s paradise. 
              A scooter ride away are the Weligama, Dalawella and Unawatuna beaches and if you’re lucky enough you’ll see how stilt fishing in the shallow waters. 
              The Parrot rock, the iconic coconut island, Elephant transit home and Galle fort are some picturesque locations of this shoreline.</p>
           </div>
            )
            case 'Unawatuna':
              return (
               <div className='row'>
               <Col sm={7}>
               <Carousel>
       <Carousel.Item>
         <img
           className="d-block w-100"
           src={require('../assets/Unawatuna.jpg')}
           alt="First slide"
           height='275px'
         />
         
       </Carousel.Item>
       <Carousel.Item>
         <img
           className="d-block w-100"
           src={require('../assets/8.1.jpg')}
           alt="Second slide"
           height='275px'
         />
     
         
       </Carousel.Item>
       <Carousel.Item>
         <img
           className="d-block w-100"
           src={require('../assets/8.2.jpg')}
           alt="Third slide"
           height='275px'
         />
       </Carousel.Item>
       <Carousel.Item>
         <img
           className="d-block w-100"
           src={require('../assets/8.3.jpg')}
           alt="Third slide"
           height='275px'
         />
       </Carousel.Item>
       <Carousel.Item>
         <img
           className="d-block w-100"
           src={require('../assets/8.4.jpg')}
           alt="Third slide"
           height='275px'
         />
       </Carousel.Item>
       <Carousel.Item>
         <img
           className="d-block w-100"
           src={require('../assets/8.5.jpg')}
           alt="Third slide"
           height='275px'
         />
       </Carousel.Item>
     </Carousel>
               </Col>
               <Col sm={5}>
                 
                 <p>Unawatuna is a town in southern Sri Lanka. It’s known for its coral reef and its palm-lined beaches, like Unawatuna Beach. Nestled in nearby jungle, 
                   the Japanese Peace Pagoda has a stupa with ocean views. The Sea Turtle Farm and Hatchery south of town protects endangered species. North across the bay 
                   is the city of Galle’s fortified old town, founded by the Portuguese and expanded by the Dutch in the 17th century. </p>
     
                
               </Col>
               <p>One of the lesser unknown treasures of Unawatuna is Jungle Beach. Located between Unawatuna and Galle, right next to the jungle is the beautiful and calm 
                 emerald green waters of this beach. The beach is not as easy to visit as compared to the other beaches of the city, but you can access it either by walking on 
                 foot and making a trekking trip out of it or even take a boat ride which will become a whole new experience for you.</p>
     
               <p>Nestled along the Rumassala Hill in Unawatuna, Rumassala South Beach is also renowned as the Jungle Beach. It is located very close to Galle-Matara's main road.</p>

               <p>The vibe of the place is quite similar to being in Thailand or Cambodia, and if you are fond of a happening nightlife, Unawatuna is the place to be. 
                 During the day you can have a chill time at the beach or indulge in some guilty pleasure by going on a shopping spree or pampering yourself in the delicious 
                 food of Sri Lanka. Make sure to visit the turquoise waters of the hidden Jungle Beach for a beautiful sunset.</p>

                <p>Unfortunately, the place has been rebuilt quickly after being affected by the devastating Tsunami in the year 2004, which might be a negative for
                   some of the visitors. However, barring the negative side, there is still a lot to do and explore and make some beautiful memories at Unawatuna.</p>
             </div>
              )
              case 'Sigiriya':
                return (
                 <div className='row'>
                 <Col sm={7}>
                 <Carousel>
         <Carousel.Item>
           <img
             className="d-block w-100"
             src={require('../assets/sigiriya.jpg')}
             alt="First slide"
             height='275px'
           />
           
         </Carousel.Item>
         <Carousel.Item>
           <img
             className="d-block w-100"
             src={require('../assets/9.1.jpg')}
             alt="Second slide"
             height='275px'
           />
       
           
         </Carousel.Item>
         <Carousel.Item>
           <img
             className="d-block w-100"
             src={require('../assets/9.2.jpg')}
             alt="Third slide"
             height='275px'
           />
         </Carousel.Item>
         <Carousel.Item>
           <img
             className="d-block w-100"
             src={require('../assets/9.3.jpg')}
             alt="Third slide"
             height='275px'
           />
         </Carousel.Item>
         <Carousel.Item>
           <img
             className="d-block w-100"
             src={require('../assets/9.4.jpg')}
             alt="Third slide"
             height='275px'
           />
         </Carousel.Item>
         <Carousel.Item>
           <img
             className="d-block w-100"
             src={require('../assets/9.5.jpg')}
             alt="Third slide"
             height='275px'
           />
         </Carousel.Item>
       </Carousel>
                 </Col>
                 <Col sm={5}>
                   
                   <p>Like Machu Picchu or Masada, Sigiriya impresses visitors just with the absurdity of its construction. It's a huge rock formation that's been carved 
                     and transformed into a palace. The ruins are near the town of Dambulla in the central part of the country.</p>
       
                     <p>Built about 1,500 years ago, the palace complex sits atop a 660-foot (220-meter) rock with sheer walls. </p>
                  
                 </Col>
                 <p>Those walls have ancient painted frescoes and 
                   carvings transforming the whole structure into a work of art. In the middle of one rock wall, there's a giant gateway carved in the shape of a lion.</p>
       
                 <p>Aside from the palace above, the area below is an intricate city complex with gardens and residential and commercial areas. It's a very important 
                   surviving example of early city planning from this era.</p>
                
                <p>The fortress complex, constructed in the 5th century, includes attractions such as the royal gardens, one of the oldest landscaped gardens in the world, 
                  and the Mirror Wall, which is adorned with ancient graffiti. The highlight of the fortress is the colourful frescoes painted on the western face of the rock;
                   it is believed that there were initially 500 such frescoes, but merely around 22 of them remain today. The gigantic Lion’s Paws greet visitors before the 
                   summit. At the peak are the ruins of the royal palace of King Kashyapa I, and 360-degree panoramas of the surrounding landscape. Sigiriya Museum at the foot 
                   of the rock has a plethora of artefacts related to Sigiriya on display for visitors seeking information regarding the site’s history.</p>

                <p>Another interesting archaeological site located nearby is Pidurangala, which houses the remains of a cave temple complex. Hiking to the summit of
                   Pidurangala Rock offers stunning views of the Sigiriya Rock. Visit Sigiriya and explore the opulence, might and sophistication of the ancient kingdoms 
                   of Sri Lanka.</p>
               </div>
                )
                case 'Ella':
                  return (
                   <div className='row'>
                   <Col sm={7}>
                   <Carousel>
           <Carousel.Item>
             <img
               className="d-block w-100"
               src={require('../assets/Ella.jpg')}
               alt="First slide"
               height='275px'
             />
             
           </Carousel.Item>
           <Carousel.Item>
             <img
               className="d-block w-100"
               src={require('../assets/10.1.jpg')}
               alt="Second slide"
               height='275px'
             />
         
             
           </Carousel.Item>
           <Carousel.Item>
             <img
               className="d-block w-100"
               src={require('../assets/10.2.jpg')}
               alt="Third slide"
               height='275px'
             />
           </Carousel.Item>
           <Carousel.Item>
             <img
               className="d-block w-100"
               src={require('../assets/10.3.jpg')}
               alt="Third slide"
               height='275px'
             />
           </Carousel.Item>
           <Carousel.Item>
             <img
               className="d-block w-100"
               src={require('../assets/10.4.jpg')}
               alt="Third slide"
               height='275px'
             />
           </Carousel.Item>
           <Carousel.Item>
             <img
               className="d-block w-100"
               src={require('../assets/10.5.jpg')}
               alt="Third slide"
               height='275px'
             />
           </Carousel.Item>
         </Carousel>
             </Col>
               <Col sm={5}>
                     
                <p>Tucked into Badulla District, Ella is a laid-back town drawing travellers to Sri Lanka's highlands with tea plantations, 
                   mountain jungles and a cool climate. At an elevation of 1,041 metres, this wildlife-rich townhouse friendly town has ancient 
                  caves, centuries-old secluded temples, and the famous Ella Gap - a cleft between two hills overlooking lofty views.</p>
         
              </Col>
                <p>The town is most famous for its iconic nine arches railway bridge which is a fine example of colonial-era construction in Sri Lanka.
                   A trek down the railway track to the bridge is a popular activity, especially around the time the train arrives. There are numerous quaint cafes, 
                  walking trails and guest houses nestled in the hills for a peaceful getaway. One can also visit the famous Lipton's Seat where the tea mogul Sir 
                  Thomas Lipton would oversee his ever-expanding empire.</p>
                
                <p>Hiking to the breathtaking Ella Rock and Little Adam's Peak through bamboo forests is an incredible accomplishment. Sri Lanka's second-highest waterfall, 
                  Diyaluma Falls, overlooks natural swimming pools in Ella's mountains. Connoisseurs of the world-famous Ceylon tea love the plantations, tea factories, and 
                  Ella Spice Garden.</p>
                
                <p>Ella's other popular attractions are Ellawala Falls and Ravana Caves, where King Ravana hid Princess Sita and now offers 82-metre-high ziplining. So whether 
                  for a fun-filled vacation with friends and family, digging into Lanka's past, or beating the heat in style, Sri Lanka's "Little England", Ella features 
                  something special for every history buff, nature enthusiast, and hiker, trekker and the modern traveller.</p>
                 </div>
                  )
                  case 'Jaffna':
                    return (
                     <div className='row'>
                     <Col sm={7}>
                     <Carousel>
             <Carousel.Item>
               <img
                 className="d-block w-100"
                 src={require('../assets/Jaffna.jpg')}
                 alt="First slide"
                 height='275px'
               />
               
             </Carousel.Item>
             <Carousel.Item>
               <img
                 className="d-block w-100"
                 src={require('../assets/11.1.jpg')}
                 alt="Second slide"
                 height='275px'
               />
             </Carousel.Item>
             <Carousel.Item>
               <img
                 className="d-block w-100"
                 src={require('../assets/11.2.jpg')}
                 alt="Third slide"
                 height='275px'
               />
             </Carousel.Item>
             <Carousel.Item>
               <img
                 className="d-block w-100"
                 src={require('../assets/11.3.jpg')}
                 alt="Third slide"
                 height='275px'
               />
             </Carousel.Item>
             <Carousel.Item>
               <img
                 className="d-block w-100"
                 src={require('../assets/11.4.jpg')}
                 alt="Third slide"
                 height='275px'
               />
             </Carousel.Item>
             <Carousel.Item>
               <img
                 className="d-block w-100"
                 src={require('../assets/11.5.jpg')}
                 alt="Third slide"
                 height='275px'
               />
             </Carousel.Item>
           </Carousel>
                     </Col>
                     <Col sm={5}>
                       
                       <p>Jaffna is a city on the northern tip of Sri Lanka. Nallur Kandaswamy is a huge Hindu temple with golden arches and an ornate gopuram tower. 
                         By the coast, star-shaped Jaffna Fort was built by the Portuguese in the 17th century and later occupied by the Dutch and British. Jaffna 
                         Public Library is a symbol of the city’s post-war regeneration. Jaffna Archaeological Museum has Dutch cannons and pre-colonial artifacts</p>
           
                       
                      
                     </Col>
                     <p>Built in the year of 1933, the Jaffna library is one of the prominent and illustrious buildings in not only the city of Jaffna but also 
                       the country of Sri Lanka. The building holds a special place in the hearts of the people.</p>
           
                     <p>Standing erect since 1618, under the rule of the Portuguese, once the Dutch fort of Asia, the Dutch fort of Jaffna is a monument that recalls
                     the events that took place ever since, and the role that the fort played. Being passed on from ruler to the other the fort today stands with its ruins.</p>

                     <p>Deriving its name from the abundant casuarina trees found along the shore of the beach, the Casuarina beach with its soft golden sand grains and 
                       refreshing blue waters is located at about 20 kilometres from Jaffna. One of the things that lure visitors to the beach is crystal clear water and
                        is free of any sort of pollution.</p>
                      
                      <p>Located in Jaffna, its namesake Jaffna Fort is the second largest fort in the country, spanning an area of 55 acres. A former architectural marvel, 
                        most of the fort had been reduced to rubble during the Sri Lankan Civil War; fortunately, part restoration has taken place. Jaffna Fort stands today 
                        as a testament to the fact that war spares nothing and no one, not even a monument of paramount significance.</p>
                   </div>
                    )
                    case 'Bentota':
                      return (
                       <div className='row'>
                       <Col sm={7}>
                       <Carousel>
               <Carousel.Item>
                 <img
                   className="d-block w-100"
                   src={require('../assets/Bentota.jpg')}
                   alt="First slide"
                   height='275px'
                 />
                 
               </Carousel.Item>
               <Carousel.Item>
                 <img
                   className="d-block w-100"
                   src={require('../assets/12.1.jpg')}
                   alt="Second slide"
                   height='275px'
                 />
               </Carousel.Item>
               <Carousel.Item>
                 <img
                   className="d-block w-100"
                   src={require('../assets/12.2.jpg')}
                   alt="Third slide"
                   height='275px'
                 />
               </Carousel.Item>
               <Carousel.Item>
                 <img
                   className="d-block w-100"
                   src={require('../assets/12.3.jpg')}
                   alt="Third slide"
                   height='275px'
                 />
               </Carousel.Item>
               <Carousel.Item>
                 <img
                   className="d-block w-100"
                   src={require('../assets/12.4.jpg')}
                   alt="Third slide"
                   height='275px'
                 />
               </Carousel.Item>
               <Carousel.Item>
                 <img
                   className="d-block w-100"
                   src={require('../assets/12.5.jpg')}
                   alt="Third slide"
                   height='275px'
                 />
               </Carousel.Item>
             </Carousel>
                       </Col>
                       <Col sm={5}>
                         
                         <p>Bentota is a resort town on Sri Lanka’s southwest coast. Its long Bentota Beach stretches north, where it becomes a sandy 
                           strip known as Paradise Island, parallel to Bentota Lagoon. Coral-rich dive sites include Canoe Rock. On Bentota River, 
                           centuries-old Galapota Temple has a large Buddha statue. Southeast is Lunuganga, the estate and gardens of architect Geoffrey Bawa.
                            Northeast is his brother Bevis's Brief Garden.</p>
             
                         
                        
                       </Col>
                       <p>Cinnamon Island is a gorgeous island in the town of Bentota, which is about 65 kilometres from Columbo, is a place where you can witness the making of the
                          favourite cinnamon spice. It is famous for its spice heritage and the engaging water sports offered by the island.</p>
             
                       <p>Situated between Bentota beach and Beruwala beach, the Moragalla Beach has a unique and peaceful shore. Though like the other beaches there are clear 
                         blue waters and golden white sand, the Moragalla Beach can boast of its tranquil environment. This is one of the reasons that the beach is a retreat 
                         for beach lovers who want to bask in the sunny beach with a quiet and secluded environment. The Moragalla Beach is also visited by many water-sports 
                         enthusiasts as the beach has shallow waters, the beach is an apt location for water-sports such as snorkelling, windsurfing, etc.</p>
                       
                       <p>Local and international tourists make Bentota a part of their itinerary because of the breathtakingly beautiful landscape that predominates the town. 
                         The town is in shades of green along with the blue waters, which are a visual treat. This beautiful view makes Bentota a favourite weekend getaway from 
                         Colombo, Beruwala, etc.</p>

                        <p>Apart from this, the prime importance of the coastal town is in its toddy production, which is an alcoholic beverage made from coconut nectar, 
                          and the rejuvenating Ayurveda therapies that the scenic village offers. Bentota also has some enterprising tourist attractions, like Bentota beach, 
                          a few turtle hatcheries, Brief Garden, and five local temples. Bentota also has an airport, named Bentota River Airport and the local population is 
                          predominantly Sinhalese Buddhists. </p>
                     </div>
                      )
                      case 'Anuradhapura':
                        return (
                         <div className='row'>
                         <Col sm={7}>
                         <Carousel>
                 <Carousel.Item>
                   <img
                     className="d-block w-100"
                     src={require('../assets/Anuradhapura.jpg')}
                     alt="First slide"
                     height='275px'
                   />
                   
                 </Carousel.Item>
                 <Carousel.Item>
                   <img
                     className="d-block w-100"
                     src={require('../assets/13.1.jpg')}
                     alt="Second slide"
                     height='275px'
                   />
                 </Carousel.Item>
                 <Carousel.Item>
                   <img
                     className="d-block w-100"
                     src={require('../assets/13.2.jpg')}
                     alt="Third slide"
                     height='275px'
                   />
                 </Carousel.Item>
                 <Carousel.Item>
                   <img
                     className="d-block w-100"
                     src={require('../assets/13.3.JPG')}
                     alt="Third slide"
                     height='275px'
                   />
                 </Carousel.Item>
                 <Carousel.Item>
                   <img
                     className="d-block w-100"
                     src={require('../assets/13.4.jpg')}
                     alt="Third slide"
                     height='275px'
                   />
                 </Carousel.Item>
                 <Carousel.Item>
                   <img
                     className="d-block w-100"
                     src={require('../assets/13.5.jpg')}
                     alt="Third slide"
                     height='275px'
                   />
                 </Carousel.Item>
               </Carousel>
                         </Col>
                         <Col sm={5}>
                           
                           <p>Anuradhapura is a historical paradise as it houses several heritage monasteries, palaces and monuments. It is known for its 
                             vast dagobas or brick stupas, ancient ponds and pools and magnificent temples. The city was established as the first capital 
                             of Sri Lanka in 377 BC. It was also at this time that Anuradhapura rose to prominence as a seat of political and economic importance.</p>
               
                           
                          
                         </Col>
                         <p>The Ruwanweliseya stupa is one of the largest stupas or dagobas, which is in the heart of the beautiful heritage city of Anuradhapura. 
                           This magnificent stupa was built by King Dutugamunu, who was hailed to be the hero of the island. The Ruwanweliseya stupa is also known 
                           as the Maha stupa and is one of the most adorned structures of the people of Sri Lanka.</p>
               
                         <p>The Jaya Sri Maha Bodhi is one of the most ancient trees which are living even today standing tall in the Mahamewna Gardens in 
                           Anuradhapura in Sri Lanka. The tree is believed to have sprouted from a cutting brought from Bodh Gaya in India, where Gautama 
                           Buddha had attained enlightenment. The tree is an authentic and living link to Gautama Buddha and is often respected as the oldest 
                           tree in history which has a recorded date of the plantation.</p>
                           
                        <p>The Brazen Palace or Lovamahapaya is a 2000-year-old palace constructed by King Dutugemunu in 2nd century B.C and had 1600 stone columns
                           that supported nine stories reaching 150 feet and sides of 400 feet length with 1000 rooms. It is also known as the Brazen Place because
                            of the bronze tiles that were used on its roof.</p>

                        <p>Authentic Buddhist traditions, archaeological ruins, lavish palaces, traditional monasteries and informative museums define the grandeur 
                          of Anuradhapura. Even though it is a large town, Anuradhapura gives the feel of being in a village. With its well preserved cultural sites, 
                          ponds and monuments, Anuradhapura is a well-established tourist attraction in Sri Lanka. Tourists visit this town for a rejuvenating getaway, 
                          to seek peace and to satiate their inquisitiveness.</p>
                       </div>
                        )
                        case 'Polonnaruwa':
                          return (
                           <div className='row'>
                           <Col sm={7}>
                           <Carousel>
                   <Carousel.Item>
                     <img
                       className="d-block w-100"
                       src={require('../assets/Polonnaruwa.jpg')}
                       alt="First slide"
                       height='275px'
                     />
                     
                   </Carousel.Item>
                   <Carousel.Item>
                     <img
                       className="d-block w-100"
                       src={require('../assets/14.1.jpg')}
                       alt="Second slide"
                       height='275px'
                     />
                   </Carousel.Item>
                   <Carousel.Item>
                     <img
                       className="d-block w-100"
                       src={require('../assets/14.2.jpeg')}
                       alt="Third slide"
                       height='275px'
                     />
                   </Carousel.Item>
                   <Carousel.Item>
                     <img
                       className="d-block w-100"
                       src={require('../assets/14.3.jpg')}
                       alt="Third slide"
                       height='275px'
                     />
                   </Carousel.Item>
                   <Carousel.Item>
                     <img
                       className="d-block w-100"
                       src={require('../assets/14.4.jpg')}
                       alt="Third slide"
                       height='275px'
                     />
                   </Carousel.Item>
                   <Carousel.Item>
                     <img
                       className="d-block w-100"
                       src={require('../assets/14.5.jpg')}
                       alt="Third slide"
                       height='275px'
                     />
                   </Carousel.Item>
                 </Carousel>
                           </Col>
                           <Col sm={5}>
                             
                             <p>Polonnaruwa, a marvel of a place, is in Northern Sri Lanka. The city once served as the capital of the Kingdom of Polonnaruwa 
                               under the Chola Empire in the 10th century. This makes it the second most historic kingdom in Sri Lanka after Anuradhapura.</p>
                 
                             <p>The entire town has two sections - the development and infrastructure part called the Polonnaruwa new town and the Old Site with
                                ancient remains and monarchical structures. </p>
                            
                           </Col>
                           <p>The old part of the city is a UNESCO World Heritage site. It has numerous ruins dating 
                                back to 800 years comprising of tombs, temples, statues and stupas. </p>
                           <p>Within the town, is the celebrated quadrangle, Gal Vihara – Buddhist
                                 12th century rock temple, Archaeological museum, Polonnaruwa Vatadage – holds the relic of the tooth of Buddha, Rankot Vihara – a 12th 
                                 century stupa, Hatadage - an ancient relic shrine and the Lankathilaka – a cathedral type Buddhist temple and many other statuettes dedicated 
                                 to Lord Buddha.</p>

                           <p>Rankoth Vehera is a magnificent stupa situated in Polonnaruwa and is the 4th largest stupa in Sri Lanka. Built by the Nissanka Malla(1187-1196)
                              it is one of the most sought after tourist attractions, i.e. 'dagobas' of the country. Rich in vibrant history and scenic beauty, this place must 
                              be on your to-visit list if you come to Sri Lanka.The stupa of Rankoth Vehera is in the centre of a large square terrace. There are four entrances
                               to the yard with four cardinal points.</p>
                 
                           <p>Another beauty is the wildlife in the Minneriya National Park dedicated to elephants. It has the most significant elephant gathering in the whole
                              of Asia. A jeep safari there will show you around monkeys, iguana, crocodiles pelicans and various animals and birds in their natural habitat. The
                               eerie ruins of Polonnaruwa are home to the Potgul vihara – an age-old library with domes for roofs that hold sacred books and a lecture theatre. 
                               The eternal city has beautiful landscapes for pictures. For instance, the Parakrama Samudra is one of the five reservoirs in Sri Lanka that has 
                               provided water to the people since the days of yore.</p>
                         </div>
                          )
                          case "Adam's Peak":
                            return (
                             <div className='row'>
                             <Col sm={7}>
                             <Carousel>
                     <Carousel.Item>
                       <img
                         className="d-block w-100"
                         src={require('../assets/Adams Peak.jpg')}
                         alt="First slide"
                         height='275px'
                       />
                       
                     </Carousel.Item>
                     <Carousel.Item>
                       <img
                         className="d-block w-100"
                         src={require('../assets/15.1.jpg')}
                         alt="Second slide"
                         height='275px'
                       />
                     </Carousel.Item>
                     <Carousel.Item>
                       <img
                         className="d-block w-100"
                         src={require('../assets/15.2.jpg')}
                         alt="Third slide"
                         height='275px'
                       />
                     </Carousel.Item>
                     <Carousel.Item>
                       <img
                         className="d-block w-100"
                         src={require('../assets/15.3.jpg')}
                         alt="Third slide"
                         height='275px'
                       />
                     </Carousel.Item>
                     <Carousel.Item>
                       <img
                         className="d-block w-100"
                         src={require('../assets/15.4.jpg')}
                         alt="Third slide"
                         height='275px'
                       />
                     </Carousel.Item>
                     <Carousel.Item>
                       <img
                         className="d-block w-100"
                         src={require('../assets/15.5.jpg')}
                         alt="Third slide"
                         height='275px'
                       />
                     </Carousel.Item>
                   </Carousel>
                             </Col>
                             <Col sm={5}>
                               
                               <p>As one of the most famous pilgrimage sites in the Indian subcontinent, Adam’s Peak is a 7,359 feet tall mountain 
                                 in Sri Lanka, frequently visited by people of almost all major religions. It is widely known for Sri Pada, a foot-shaped 
                                 indentation at the summit of the pyramid-like mountain. Also called the sacred footprint, the Buddhists believe that it is
                                  the footprint of Lord Buddha, the Hindus as that of Shiva, the Muslims as Adam’s, and the Christians as that of St. Thomas 
                                  the Apostle.</p>
                   
                               
                              
                             </Col>
                             <div className='row'>
                             <Col >
                             <p>After completing the ascent, pilgrims offer prayers at a shrine that sits atop the mountain. Apart from the legends surrounding 
                               the holy site, Adam’s Peak offers enchanting views of the sunrise. Any of the six trails, and a flight of more than 5000 steps, 
                               lead to the mountain peak. As one is reaching the summit, the steps gradually become steeper. Most visitors, irrespective of age 
                               and fitness levels, complete the hike in an average duration of two to four hours.</p>

                              <p>The best time to visit Adam’s Peak is usually around December to May, as there are little to no rains and the weather doesn’t 
                                hinder the exhausting ascent up the mountain. The trails are often crowded in April, which is the month of the Sinhalese New Year,
                                  full-moon days and the weekends. Unlike many attractions in Sri Lanka, entry to Adam’s Peak is entirely free.</p>
                   
                             <p>An area of religious significance, a moderate challenge for enthusiastic hikers, and breathtaking scenery all around— Adam’s 
                               Peak is one of the must-see sights on a trip to Sri Lanka.</p>
                            </Col>
                            </div> 
                           </div>
                            )
     default:
         return (
          <div className='row'>
          <Col sm={7}>
            <img
              className='img-fluid'
              src={require('../assets/Kandy.jpg')}
              alt='ReactHunt'
            />
          </Col>
          <Col sm={5}>
          
            <p>
              Kandy is one of the best JavaScript libraries which is widely known
              for its adjustable and extensible nature. We make the best use of its
              exceptional feature of component reusability. Our experts attain
              outcomes by splitting the interface segments into the smaller
              components. This process of breaking down a web app into several
              independent components consumes lesser efforts and results in highly
              scalable and robust ReactJS application. Moreover, it has broadened
              its scope by creating awesome user interfaces and web applications.
              So, hire ReactJS developer from us and let your dreams of having great
              online presence come true.{' '}
            </p>
          </Col>
        </div>
         )
  }

})()}
    
        </Modal.Body>
      </Modal>
    </>
  );
}

export default App;
