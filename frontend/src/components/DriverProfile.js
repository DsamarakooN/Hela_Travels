// Edit Component for update data

// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
//import AddHotel from "./AddHotel";
import {Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// Edithotel Component
const HotelProfile = (props) => {
	 const {id} = useParams();
	 const Navigate = useNavigate()
	 const [h_name, seth_name] = useState("");
     const [h_email, seth_email] = useState("");
     const [h_telephone, seth_telephone] = useState("");
     const [h_location, seth_location] = useState("");
     const [h_description, seth_description] = useState("");
     const [h_images, seth_images] = useState("");
     const [formValues, setFormValues] = useState({
  h_name:"",
  h_email:"",
  h_telephone:"",  
  h_description:"",
  h_location:"",
  h_images:""
});
	
//onSubmit handler
const onSubmit = (hotelObject) => {
	axios
	.put(
		`http://localhost:8070/hotel/update/${id}`,
		hotelObject
	)
	.then((res) => {
		if (res.status === 200) {
		alert("hotel successfully updated");
		props.history.push("/AddHotel");
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

// Load data from server and reinitialize hotel form
useEffect(() => {
	axios
	.get(
    `http://localhost:8070/hotel/get/${id}`
		
	)
	.then((res) => {
		const {h_name,h_email, h_telephone,  h_description, h_location, h_images } = res.data.hotel;
		/*console.log(h_name)
		console.log(h_email)
		console.log(h_telephone)
		console.log(h_email)
		console.log(h_location)
		console.log(h_images)*/
		//setFormValues({...formValues,h_name, h_email, h_telephone,   h_description, h_location, h_images });
	seth_name(h_name)
	seth_email(h_email)
	seth_telephone(h_telephone)
	seth_description(h_description)
	seth_location(h_location)
	seth_images(h_images)
	})
	.catch((err) => console.log(err));
}, []);
function sendData(e){
	e.preventDefault();

	const newhotel = {

	  h_name,
	  h_email,
	  h_telephone,  
	  h_description,
	  h_location,
	  h_images
	}
   
	axios.put(`http://localhost:8070/hotel/update/${id}`, newhotel).then((res) =>{
	  alert("Hotel Updated" )
	 console.log(res.data)
	 Navigate(`/update/${res.data._id}`)

	}).catch((err)=>{
	  alert(err)
	}) 

   }

// Return hotel form
return (
<div className="container">
       
       <h1>Your Hotel Here...</h1>
        <form onSubmit={sendData} className="was-validated">
        <div class="mb-3">
          <label for="h_name" className="form-label">Hotel Name</label>
          <input value={h_name}type="text" className="form-control " id="h_name" placeholder=" Hotel Name" readOnly

            onChange={(e)=>{
              seth_name(e.target.value);
            }}
          /> 
        </div>

        <div className="mb-3">
          <label for="hemail" class="form-label">Email address</label>
          <input value={h_email}type="email" class="form-control" id="hemail" placeholder="name@example.com" readOnly
          
          onChange={(e)=>{
            seth_email(e.target.value);
          }}/>
        </div>

        <div class="mb-3">
          <label for="htelephone" class="form-label">Telephone Number</label>
          <input value={h_telephone}type="telephone" maxLength={10} minLength={10} class="form-control" id="htelephone" placeholder="011xxxxxxx"  readOnly
          
          onChange={(e)=>{
             seth_telephone(e.target.value);
          
            
          }}/>
        </div>

        <div class="mb-3">
          <label for="hlocation" class="form-label">Location</label>
          <input value={h_location}type="text" class="form-control" id="hlocation" placeholder="Colombo" readOnly
          
          onChange={(e)=>{
            seth_location(e.target.value);
          }}/>
        </div>
      
        <div class="mb-3">
          <label for="hdescription" class="form-label">Description</label>
          <textarea value={h_description}class="form-control" id="hdescription" placeholder="hellow there" readOnly
          
          onChange={(e)=>{
            seth_description(e.target.value);
          }}/>
        </div>

        <div class="mb-3">
        <label for="hphoto" class="form-label">Upload images</label>
          <input value={h_images} type="text" class="form-control"  readOnly
          
          onChange={(e)=>{
            seth_images(e.target.value);
          }}/>
          <div class="invalid-feedback">Upload Photo</div>
        </div>
      

      </form>
      <Link to = {`/update/${id}`} style={{textDecoration:'none',  width:'30px', color:'white', padding:10}}>
		<button id="btn1" class="btn btn-primary" type="button">
		Update My Hotel
		</button> 	 
	 </Link>

		<Link to = {`/delete/${id}`} style={{textDecoration:'none',  width:'30px', color:'white'}}>
		<button id="btn1" class="btn btn-primary" type="button">
		Delete Account
		</button> 	 
	 </Link>
      
      </div>
)
};

// Export Edithotel Component

export default HotelProfile;
