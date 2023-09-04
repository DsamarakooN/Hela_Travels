import React, { useState, useEffect } from "react";
import axios from "axios";

import {Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const UpdateDriver = (props) => {
    const {id} = useParams();
    const Navigate = useNavigate()
    const [d_name, setd_name] = useState("");
    const [ d_email, setd_email] = useState("");
    const [d_telephone, setd_telephone] = useState("");
    const [d_licNo, setd_licNo] = useState("");
    const [d_experience, setd_experience] = useState("");
    const [v_type, setv_type] = useState("");
    const [v_image, setv_image] = useState("");
    const [d_description, setd_description] = useState("");
    const [d_image, setd_image] = useState("");
    const [formValues, setFormValues] = useState({
        d_name,
        d_email,
        d_telephone,
        d_licNo,
        d_experience,
        v_type,
        v_image,
        d_description,
        d_image,   
    });

    //onSubmit  Handler
    const onSubmit = (driverObject) => {
        axios
        .put(
            `http://localhost:8070/api/drivers/update/${id}`,
            driverObject
        )
        .then((res) => {
            if (res.status === 200) {
            alert("Driver successfully updated");
            props.history.push("/AddDrivers.js");
            } else Promise.reject();    
        })
        .catch((err) => alert("Something went wrong"));
    };

    // Load data from server and reinitialize driver form
    useEffect(() => {
        axios
        .get(
            `http://localhost:8070/api/drivers/get/${id}`
        )
        .then((res) =>  {
            const {d_name,d_email,d_telephone,d_licNo,d_experience,v_type,v_image,d_description,d_image}= res.data.driver;
            
            console.log(d_name)
            console.log(d_email)
            console.log(d_telephone)
            console.log(d_licNo)
            console.log(d_experience)
            console.log(v_type)
            console.log(v_image)
            console.log(d_description)
            console.log(d_image)

            // 
            setd_name(d_name)
            setd_email(d_email)
            setd_telephone(d_telephone)
            setd_licNo(d_licNo)
            setd_experience(d_experience)
            setv_type(v_type)
            setv_image(v_image)
            setd_description(d_description)
            setd_image(d_image)
    })
    .catch((err) => console.log(err));
},[]);
function sendData(e){
    e.preventDefault();

    const newDriver ={
        d_name,
        d_email,
        d_telephone,
        d_licNo,
        d_experience,
        v_type,
        v_image,
        d_description,
        d_image
    }

    axios.put(`http://localhost:8070/api/drivers/update/${id}`, newDriver).then((res) =>{
	  alert("Driver Updated" )
	 console.log(res.data)
	 Navigate(`/admin`)

	}).catch((err)=>{
	  alert(err)
	}) 
}

//return hotel Form
return(

    <div className="container">
       
       <h1>Update Your Driver Profile Here...</h1>
        <form onSubmit={sendData} className="was-validated">
        <div class="mb-3">
          <label for="d_name" className="form-label">Name</label>
          <input value={d_name}type="text" className="form-control is-invalid" id="h_name" placeholder=" Name" required

            onChange={(e)=>{
              setd_name(e.target.value);
            }}
          /> 
        </div>

        <div className="mb-3">
          <label for="demail" class="form-label">Email address</label>
          <input value={d_email}type="email" class="form-control" id="demail" placeholder="name@example.com" required
          
          onChange={(e)=>{
            setd_email(e.target.value);
          }}/>
        </div>

        <div class="mb-3">
          <label for="htelephone" class="form-label">Telephone Number</label>
          <input value={d_telephone}type="telephone" maxLength={10} minLength={10} class="form-control" id="htelephone" placeholder="011xxxxxxx"  required
          
          onChange={(e)=>{
             setd_telephone(e.target.value);
          
            
          }}/>
        </div>

        <div class="mb-3">
          <label for="hlocation" class="form-label">Driving Licence number</label>
          <input value={d_licNo}type="text" class="form-control" id="hlocation"  required
          
          onChange={(e)=>{
            setd_licNo(e.target.value);
          }}/>
        </div>
      
        <div class="mb-3">
          <label for="hdescription" class="form-label">Experience</label>
          <textarea value={d_experience}class="form-control" id="hdescription"  required
          
          onChange={(e)=>{
            setd_experience(e.target.value);
          }}/>
        </div>

        <div class="mb-3">
        <label for="hphoto" class="form-label">Vehicle type</label>
          <input value={v_type} type="text" class="form-control"  required
          
          onChange={(e)=>{
            setv_type(e.target.value);
          }}/>
          <div class="invalid-feedback">Upload Photo</div>
        </div>

        <div class="mb-3">
        <label for="hphoto" class="form-label">Upload Vehicle Photo</label>
          <input value={v_image} type="text" class="form-control"  required
          
          onChange={(e)=>{
            setv_image(e.target.value);
          }}/>
          <div class="invalid-feedback">Upload Photo</div>
        </div>

        <div class="mb-3">
        <label for="hphoto" class="form-label">Description</label>
          <input value={d_description} type="text" class="form-control"  required
          
          onChange={(e)=>{
            setd_description(e.target.value);
          }}/>
          <div class="invalid-feedback">Upload Photo</div>
        </div>

        <div class="mb-3">
        <label for="hphoto" class="form-label">Upload your photo</label>
          <input value={d_image} type="text" class="form-control"  required
          
          onChange={(e)=>{
            setd_image(e.target.value);
          }}/>
          <div class="invalid-feedback">Upload Photo</div>
        </div>
      
        <div class="mb-3">
          <button id='btn1' class="btn btn-primary" type="submit">update</button>
        </div>

      </form>

		<Link to = {`/delete/${id}`} style={{textDecoration:'none',  width:'30px', color:'white'}}>
		<button id="btn1" class="btn btn-primary" type="button">
		Delete
		</button> 	 
	 </Link>
      
      </div>

    )
};

// Export Edithotel Component

export default UpdateDriver;