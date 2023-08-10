import React from 'react';
//import { CardGroup } from 'react-bootstrap';
//import { Card,  CardDeck } from 'reactstrap';
//import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';

//import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';
import App from './components/collapse';


function Destinations() {

    return(
   
 
        <div class="px-5">
            <hr style = {{color: "#25D366"}} ></hr>
     <div >
     <div class="card-deck">
      <div class="card border-success">
        <img class="card-image" src={require('../src/assets/Colombo.jpg')} />
        <div class="card-body">
          <h4 class="card-title">Colombo</h4>
          <p class="card-text">
          A large sprightly city that embraces an endearing synthesis of past, present and future – 
          the pulsating metropolis of Colombo serves as the commercial hub and financial capital of Sri Lanka.
          The city is an enthralling concoction of innovation, street-culture, fashion, urbane art and antiquity, 
          that savours its rich history whilst simultaneously evolving in pace with the contemporary world.
          </p>
        </div>
        <div class="card-footer">
        
        <App value={'Colombo'} /> 
       
        </div>
      </div>
      <div class="card border-success">
        <img class="card-image" src={require('../src/assets/Galle.jpg')} />
        <div class="card-body">
          <h4 class="card-title">Galle</h4>
          <p class="card-text">
          Discover Galle by the places to visit and what to do in Galle with its striking magnificent sights 
          and tourist attractions. Galle can be referred to as the jewel of the south coast. The most magnificent 
          sight out of all the rest is the historical and colonial Galle Dutch fort, which has been declared as a UNESCO 
          World Heritage site.
          </p>
        </div>
        <div class="card-footer">
        <App value={'Galle'}/> 
        </div>
      </div>
      <div class="card border-success">
        <img class="card-image" src={require('../src/assets/Kandy.jpg')} />
        <div class="card-body">
          <h4 class="card-title">Kandy</h4>
          <p class="card-text">
          Discover Kandy while you experience the magnificent celebration of history, religion and culture by the places to 
          visit in Kandy as the city pulsates to the sound of drum beats. Sheltered in a natural forest amidst rivers and steep mountains, 
          sits the last stronghold of the last Sinhala kingdom of Sri Lanka, Kandy. It is the second largest city in Sri Lanka.
          </p>
        </div>
        <div class="card-footer">
        <App value={'Kandy'}/> 
        </div>
      </div>
      
    </div>

 </div>
 <br></br>
 <div>
     <div class="card-deck">
      <div class="card border-success"> 
        <img class="card-image" src={require('../src/assets/Trincomalee.jpg')} />
        <div class="card-body">
          <h4 class="card-title">Trincomalee</h4>
          <p class="card-text">
          Trincomalee, symbolic for its stunning natural harbour, the second largest in the world, a popular resort port city which attracted 
          many sea traders and explorers for many an era. The bright and vibrant city inter-woven with threads of history, culture and religion, 
          is home to the largest Dutch Fort of Sri Lanka, Fort Frederick.
          </p>
        </div>
        <div class="card-footer">
        
        <App value={'Trincomalee'}/> 
       
        </div>
      </div>
      <div class="card border-success">
        <img class="card-image" src={require('../src/assets/Yala.jpg')} />
        <div class="card-body">
          <h4 class="card-title">Yala</h4>
          <p class="card-text">
          Yala has a wealth of many places to visit with much to offer in Sri Lanka. Well renowned for its Yala National Park, it is an important tourist 
          attraction that one must include when visiting Sri Lanka. Yala has many things to do such as visiting Kataragama Kiri Vehera being one of the most 
          popular Buddhist Pilgrimage sites in Sri Lanka.
          </p>
        </div>
        <div class="card-footer">
        <App value={'Yala'}/> 
        </div>
      </div>
      <div class="card border-success">
        <img class="card-image" src={require('../src/assets/Nuwara-Eliya.jpg')} />
        <div class="card-body">
          <h4 class="card-title">Nuwara-Eliya</h4>
          <p class="card-text">
          Set amongst scenic mountains and lofty hills in the hill country, Sri Lanka with a chilly climate, Nuwara Eliya will surely take your breath away. It 
          is located 167.5 km away from the busy city of Colombo and the journey to the places to visit in Nuwara Eliya takes you through misty mountains, rolling
           green hills with tea and cascading waterfalls.
          </p>
        </div>
        <div class="card-footer">
        <App value={'Nuwara-Eliya'}/> 
        </div>
      </div>
      
    </div>

 </div>
 <br></br>
 <div>
     <div class="card-deck">
      <div class="card border-success">
        <img class="card-image" src={require('../src/assets/Mirissa.jpg')} />
        <div class="card-body">
          <h4 class="card-title">Mirissa</h4>
          <p class="card-text">
          Mirissa, an upcoming beach and surf destination for every beach lover and is home to lots of whales – yes the Blue Whale. Its beautiful crescent shaped beach, 
          a secluded piece of heaven with gentle waves yields serenity, yet comes to life with beach parties at night.
          </p>
        </div>
        <div class="card-footer">
        
        <App value={'Mirissa'}/> 
       
        </div>
      </div>
      <div class="card border-success">
        <img class="card-image" src={require('../src/assets/Unawatuna.jpg')} />
        <div class="card-body">
          <h4 class="card-title">Unawatuna</h4>
          <p class="card-text">
          Unawatuna, a coastal town famed for its breathtaking semicircular stretch of beach, fringed with palm trees and airs of serenity. Its beautiful beach, encompassed 
          by rich biodiversity of corals and marine life, a popular attraction for diving and snorkelling.
          </p>
        </div>
        <div class="card-footer">
        <App value={'Unawatuna'}/> 
        </div>
      </div>
      <div class="card border-success">
        <img class="card-image" src={require('../src/assets/sigiriya.jpg')} />
        <div class="card-body">
          <h4 class="card-title">Sigiriya</h4>
          <p class="card-text">
          Revered as the 8th wonder of the world, the spectacular Sigiriya Rock Fortress, a monumental sight that takes the breath away of every visitor since it is one of the best 
          places to visit in Sigiriya. Located in the heart of the Cultural Triangle in Sri Lanka, this extraordinary fortress is a UNESCO World Heritage Site.
          </p>
        </div>
        <div class="card-footer">
        <App value={'Sigiriya'}/> 
        </div>
      </div>
      
    </div>

 </div>
 <br></br>
 <div>
     <div class="card-deck">
      <div class="card border-success">
        <img class="card-image" src={require('../src/assets/Ella.jpg')} />
        <div class="card-body">
          <h4 class="card-title">Ella</h4>
          <p class="card-text">
          Ella is a little mountain town, tucked away in the misty hill country of Sri Lanka. An idyllic getaway for hiking especially the 
          Ella Rock hike which is the most popular things to do in Ella. The village is among the most popular hiking destinations, as the 
          treks venture through plantations and wilderness with spectacular views along the way.


          </p>
        </div>
        <div class="card-footer">
        
        <App value={'Ella'}/> 
       
        </div>
      </div>
      <div class="card border-success">
        <img class="card-image" src={require('../src/assets/Jaffna.jpg')} />
        <div class="card-body">
          <h4 class="card-title">Jaffna</h4>
          <p class="card-text">
          A city, once isolated and torn, soars from the ashes. A comeback in full vibrancy and colour; enticing every soul of a lover of travel. 
          Jaffna is rising since the end of the civil war. After years of hardship, the capital of the North is slowly becoming an upcoming tourist destination.
          </p>
        </div>
        <div class="card-footer">
        <App value={'Jaffna'}/> 
        </div>
      </div>
      <div class="card border-success">
        <img class="card-image" src={require('../src/assets/Bentota.jpg')} />
        <div class="card-body">
          <h4 class="card-title">Bentota</h4>
          <p class="card-text">
          Bentota, is every water lover’s dream. Boasting beautiful beaches for ultimate relaxation, it is also home for adrenaline junkies
           seeking thrill and fun above the water since Bentota is the water sports capital of Sri Lanka.
          </p>
        </div>
        <div class="card-footer">
        <App value={'Bentota'}/> 
        </div>
      </div>
      
    </div>

 </div>
 <br></br>
 <div>
     <div class="card-deck">
      <div class="card border-success">
        <img class="card-image" src={require('../src/assets/Anuradhapura.jpg')} />
        <div class="card-body">
          <h4 class="card-title">Anuradhapura</h4>
          <p class="card-text">
          Anuradhapura is a major city in Sri Lanka. It is the capital city of North Central Province, Sri Lanka and the capital of 
          Anuradhapura District. Anuradhapura is one of the ancient capitals of Sri Lanka, famous for its well-preserved ruins of an 
          ancient Sinhala civilisation.
          Anuradhapura was built around a cut piece from the Bodhi Tree, or the 'tree of enlightenment', which is considered sacred by Buddhists.
           This city was on the peak of political and religious activities for around 900 years.

          </p>
        </div>
        <div class="card-footer">
        
        <App value={'Anuradhapura'}/> 
       
        </div>
      </div>
      <div class="card border-success">
        <img class="card-image" src={require('../src/assets/Polonnaruwa.jpg')} />
        <div class="card-body">
          <h4 class="card-title">Polonnaruwa</h4>
          <p class="card-text">
          Poḷonnaruwa is the main town of Polonnaruwa District in North Central Province, Sri Lanka. The modern town of Polonnaruwa is 
          also known as New Town, and the other part of Polonnaruwa remains as the royal ancient city of the Kingdom of Polonnaruwa.
          The old part of the city is a UNESCO World Heritage site. It has numerous ruins dating back to 800 years comprising of tombs, 
          temples, statues and stupas. 
          </p>
        </div>
        <div class="card-footer">
        <App value={'Polonnaruwa'}/> 
        </div>
      </div>
      <div class="card border-success">
        <img class="card-image" src={require('../src/assets/Adams Peak.jpg')} />
        <div class="card-body">
          <h4 class="card-title">Adam's Peak</h4>
          <p class="card-text">
          As one of the most famous pilgrimage sites in the Indian subcontinent, Adam’s Peak is a 7,359 feet tall mountain in Sri Lanka, 
          frequently visited by people of almost all major religions.
          It is widely known for Sri Pada, a foot-shaped indentation at the summit of the pyramid-like mountain. Also called the sacred footprint,
           the Buddhists believe that it is the footprint of Lord Buddha, the Hindus as that of Shiva, the Muslims as Adam’s, and the Christians as 
           that of St. Thomas the Apostle.
          </p>
        </div>
        <div class="card-footer">
        <App value={"Adam's Peak"}/> 
        </div>
      </div>
      
    </div>

 </div>
 </div>
 
)

}
export default Destinations;


 