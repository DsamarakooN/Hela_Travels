import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from '../firebaseConfig';

export default function AddDrivers(){

    const [d_name, setD_name] = useState("");
    const [ d_email, setD_email] = useState("");
    const [d_telephone, setD_telephone] = useState("");
    const [d_licNo, setD_licNo] = useState("");
    const [d_experience, setD_experience] = useState("");
    const [v_type, setV_type] = useState("");
    const [v_image, setV_image] = useState("");
    const [d_description, setD_description] = useState("");
    const [d_image, setD_image] = useState("");

    function sendData(e){
        e.preventDefault();
        alert("Insert");

        const newDriver ={
           
            d_name,
            d_email,
            d_telephone,
            d_licNo,
            d_experience,
            v_type,
            v_image,
            d_description,
            d_image,

        }
        console.log(newDriver);

        axios.post("http://localhost:8070/api/drivers/add", newDriver).then((res)=>{
            alert("Driver Added")
            console.log(res.data)
            Navigate(`/add`)
        }).catch((err)=>{
            alert(err)
        })

    }
    // handle image upload
    const isValidFileType = (file) => {
        const validTypes = ['image/png', 'image/jpeg', 'image/svg+xml', 'image/avif'];
        return validTypes.includes(file.type);
    };

    const handleImageChange = async (event, isDriver) => {
        if (!event.target.files || event.target.files.length === 0) return;
    
        const file = event.target.files[0];
    
        // Validate file type
        if (!isValidFileType(file)) {
            alert("Invalid file type. Please select a png, jpg, SVG, or avif image.");
            return;
        }
    
        const fileName = file.name;
        const storageRef = ref(storage, `images/${fileName}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
    
        const downloadURL = await new Promise((resolve, reject) => {
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log("Upload progress:", progress.toFixed(2));
                },
                (error) => {
                    reject(error);
                },
                async () => {
                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                    resolve(downloadURL);
                }
            );
        });
    
        if (isDriver) {
            setD_image(downloadURL);
        } else {
            setV_image(downloadURL);
        }
    };
    






    return(

    <div className="container bg-light p-2 text-dark bg-opacity-50">
        <h4>Driver Registration Form</h4>

        <form className="form-horizontal" onSubmit={sendData}>
                <div className="col-md-6">
                    <label for="validationCustom01" className="form-label">Name</label>
                    <input type="text" className="form-control" id="validationCustom01" placeholder="John Doe" onChange={(e)=>{

                    setD_name(e.target.value);

                    } } required/>

                    <div className="valid-feedback">
                    Looks good!
                    </div>
                </div>

                <div className="col-md-6">
                    <label for="validationCustom02" className="form-label">E-mail</label>
                    <input type="email" className="form-control" id="validationCustom02" placeholder="johndoe@gmail.com" onChange={(e)=>{

                    setD_email(e.target.value);

                    } } required/>
                    <div className="valid-feedback">
                    Looks good!
                    </div>
                </div>

                
                <div className="col-md-6">
                    <label for="validationCustom03" className="form-label">Telephone No</label>
                    <input type="tel" className="form-control"  maxLength={10} minLength={10} id="validationCustom03" placeholder="011xxxxxxx" onChange={(e)=>{

                        setD_telephone(e.target.value);
                        } } required/>

                        <div className="invalid-feedback">
                            Please provide a valid city.
                        </div>
                </div>
        
                <div className="col-md-6">
                    <label for="validationCustom01" className="form-label">Driving Licence number</label>
                    <input type="text" className="form-control" maxLength={8} minLength={8} id="validationCustom01" placeholder="B4881783" onChange={(e)=>{

                        setD_licNo(e.target.value);
                        } } required/>

                    <div className="valid-feedback">
                    Looks good!
                    </div>
                </div>

                <div className="col-md-6">
                    <label for="validationCustom01" className="form-label">Experience</label>
                    <input type="text" className="form-control" id="validationCustom01" onChange={(e)=>{

                        setD_experience(e.target.value);
                        } } required/>

                    <div className="valid-feedback">
                    Looks good!
                    </div>
                </div>

                <div className="col-md-6">
                    <label for="validationCustom01" className="form-label">Vehicle type</label>
                    <input type="text" className="form-control" id="validationCustom01"  onChange={(e)=>{

                        setV_type(e.target.value);
                        } } required/>

                    <div className="valid-feedback">
                    Looks good!
                    </div>
                </div>

                <div className="col-md-6">
                    <label for="validationCustom01" className="form-label">Upload Vehicle Photo</label>
                    <input type="file" className="form-control" id="validationCustom01"  onChange={(e)=>{

                            handleImageChange(e, false);
                        } } required/>

                    <div className="valid-feedback">
                    Looks good!
                    </div>
                </div>

                <div className="col-md-6">
                    <label for="validationCustom01" className="form-label">Description</label>
                    <input type="text" className="form-control" id="validationCustom01"  onChange={(e)=>{

                        setD_description(e.target.value);
                        } } required/>

                    <div className="valid-feedback">
                    Looks good!
                    </div>
                </div>

                <div className="col-md-6">
                    <label for="validationCustom01" className="form-label">Upload your photo</label>
                    <input type="file" className="form-control" id="validationCustom01" onChange={(e)=>{

                        handleImageChange(e, true);
                        } } />

                    <div className="valid-feedback">
                    Looks good!
                    </div>
                </div>

                
                <div className="col-12">
                <button class="btn btn-primary" type="submit">
                    <a href="/update" validate="true"style={{textDecoration:'none', color:'white'}}></a>
                 Register</button>
                </div>
        </form>

    </div>

    )
}