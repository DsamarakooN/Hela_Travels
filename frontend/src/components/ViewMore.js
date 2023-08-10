import React, { useState, useEffect } from "react";
import axios from "axios";

import {Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Viewmore = (props) => {
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

        // Load data from server and reinitialize driver form
    useEffect(() => {
        axios
        .get(
            `http://localhost:8070/driver/get/${id}`
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

}


// Return Driver Form



return (
    <div className="container p-3 my-3 border">
        
    <br/><br/>
        <h2 className="text-danger text-left">Contact Your Driver....</h2>
        <br/><br/>
    <div className="row">   
    
        <div className="col-md-3">
        <div className="image">
            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" className="avatar img-circle img-thumbnail" alt="avatar"/>
            </div>
            <div className="text-center">
                
            </div>
        </div>
    <div className="col-md-9 personal-info">
           
            <form className="form" onSubmit={sendData}>
                   
                    <h5 className="user-name">Name: {d_name} </h5>
                    <h5 className="user-name">Email: {d_email}</h5>
                    <h5 className="user-name">Phone: {d_telephone}</h5>
                    <h5 className="user-name">Driving Licence No: {d_licNo}</h5>
                    <h5 className="user-name">Experience: {d_experience}</h5>
                    <h5 className="user-name">Vehicle Type: {v_type}</h5>
                    <h5 className="user-name">Vehicle image: {v_image}</h5>
                    <h5 className="user-name">Description: {d_description}</h5>
                    <h5 className="user-name">Profile Picture: {d_image}</h5>

                 
       
                    <div className="d-grid col-8 mx-10">
                        <br/> <br/>

                    <button className="btn1" type="submit"> Contact Now</button>
                    

            </div>
            </form>
            <br/><br/><br/>
    
           
    
        </div>
        </div>

        
    
    </div>

    
    
    );
    }
    
    export default Viewmore;