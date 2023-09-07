import React from "react";





function Home() {

 return(

  

<div class="hero d-sm-flex justify-align-content-center  row g-0" >


<div className="d-sm-flex mx-auto items-center align-items-center justify-content-between w-100" style={{height: "90vh"}}>
  
  <div className="col-md-4 mx-auto mb-4 mb-sm-0 headline">
    
    <span className="text-secondary text-uppercase">Hela Travels</span>
    <h1 className="display-4 my-4 font-weight-bold">Enjoy Your <br></br> <span style={{color: "#25D366"}}>dream holiday</span></h1>
    <a href="#" className="hero_btn px-5 py-3 text-white mt-3 mt-sm-0" style={{borderRadius: "30px", backgroundColor: "#25D366"}}>Let's go</a>
  </div>
  <div className="col-md-8 h-100 clipped" style={{minHeight: "200px", backgroundImage: "url(https://static01.nyt.com/images/2019/02/03/travel/03frugal-srilanka01/merlin_148552275_74c0d250-949c-46e0-b8a1-e6d499e992cf-superJumbo.jpg)", backgroundPosition: "center", backgroundSize: "cover"}}>

  </div>
</div>
   
  
  
</div>
 )

}
export default Home;
