import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"

function DriverTable(){

    const [driver , setDrivers] = useState([]);

    useEffect(() => {
        function getDrivers() {
            axios.get("http://localhost:8070/driver/").then((res) => {
                setDrivers(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getDrivers();
    }, [driver])


    const deleteDriver = (id) =>{
        // alert(id)
        var answer = window.confirm("Are you sure")

if(answer){
    axios.delete("http://localhost:8070/driver/delete/"+id).then((res)=>{
            if(res.status===200){
                alert("Driver deleted")
                // getGuides()
            }
        })
}    }

    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Lic No</th>
                    <th scope="col">Update</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    driver.map((Driver , index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td>{Driver.d_name }</td>
                                <td>{Driver.d_licNo}</td>
                                <td> <Link to={"update/"+Driver._id}><button  className='btn btn-warning'>Update</button></Link> </td>
                                <td> <button onClick={()=>{deleteDriver(Driver._id)}} className='btn btn-danger'>Delete</button> </td>
                            </tr>
                        )
                    })
                }

            </tbody>
        </table>
    )
}

export default DriverTable;
