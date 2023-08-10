import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";
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


        const deleteDriver = (id) =>{
        // alert(id)
        var answer = window.confirm("Are you sure")

       if(answer){
    axios.delete("http://localhost:8070/driver/delete/"+id).then((res)=>{
            if(res?.status == 200){

           

                setTimeout(() => {

                    Navigate('/all-table')

                }, 3000);

        }
        })
}    }
    

    


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
        <img className ="icon" style={{width:'1080px', height:'260px',alignItems:'center'}}src={process.env.PUBLIC_URL+"C:\fakepath\IMG_20190307_153701.jpg"}/> <br></br> 
       <hr></hr>
        {driver && filteredResults.map((d , index) => { 
          return (
           
          

            <tr key={index}> 
            <th scope="row">{index+1}</th>
      
             
             <tr>
             <td> {d.d_image}</td>
             </tr>
             <tr>
             <td><h3>{d.d_name}</h3></td>
             </tr>
             <tr>
             <td><h5>{d.d_email}</h5></td>
             </tr>
             <tr>
             <td><h5>{d.d_telephone}</h5></td>
             </tr>
            
             <tr>
             <td><h5>{d.v_type}</h5></td>
             </tr>
             
             <tr>
             <td><h5>{d.d_description}</h5></td>
             </tr>
             <hr></hr>
             
            
              
             <div className="btn-bar">
             <td> <Link to={"view/"+d._id}><button  className='btn btn-warning'>View more</button></Link> </td>
                    </div>
            </tr>
           
        
        
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