import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";
import '../App.css';
//import {Link, useParams} from "react-router-dom";
import '../AddDriver.css';


export default function AllDrivers(){

    const Navigate = useNavigate()
    
   // const {id} = useParams();
    const[driver , setDrivers] = useState([]);

    //For search
    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);

    useEffect(() => {
        function getDrivers(){
            axios.get("http://localhost:8070/driver/").then((res) => {
                setDrivers(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getDrivers();

    },[driver])
  

     //search

    useEffect(() => {
    setFilteredResults(

       driver.filter((d) => {
        return d.d_name.toLowerCase().includes(searchInput.toLowerCase())
        })
      )
    }, [searchInput, driver])

    //endsearch

    return(
        <div className="container">
        <h1>Find Drivers for your trip..</h1>
        

        <div> 
        <input type="search" placeholder="Search for Drivers Here.." className="form-control" style={{marginBottom:20 }} onChange={(e) => setSearchInput(e.target.value)}></input>
        </div>
        <hr></hr>
        
        {driver && filteredResults.map((d , index) => { 
          return (

            <div className="card driverCards " key={index} style={{width: '16rem' }} >
              <div className="card-body">
                <div className="driver-card-image">
                  <img src={d.d_image} alt="Driver Image" className="card-img" />
                </div>
                <div className="driver-card-details">
                  
                  <div class="row">
                    <div class="col-8">
                    <p className="card-title">{d.d_name}</p>
                      <p className="card-text">{d.d_telephone}</p>
                    </div>
                    <div class="col-4">
                      <img src={d.v_image} alt="vehicle" className="vehicle-img" />
                    </div>

                  </div>
                  

                </div>
                
                <center>
                  
                <Link to={"view/"+d._id}><button  className='btn btn-outline-success'>View more</button></Link>
                
                </center>
            </div>
            </div>
            
           
        
        
        )})
          }
           <hr></hr>

        <div>
          <button id='btn1' style={{width:'180px', height:'40px',marginLeft:10, marginTop:10}} className="btn btn-primary">
            <a href="/add" target="_blank" style={{textDecoration:'none', color:'white'}}>Register as Driver</a>
          </button>
        </div>

        </div>
    )
}