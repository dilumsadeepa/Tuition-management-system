import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Apiurl from '../Apiurl';
import Sidebar from './AdminSidebar';
import Dashhead from './Dashhead';
import { useParams } from 'react-router-dom';
import QRCode from "qrcode.react";



const SingleStudent = () =>{

    const { id } = useParams();

    const [data, setData] = useState([]);


    const getstu = async(e) =>{
        try {
            const response = await axios.get(`${Apiurl}/student/${id}`);
            
            setData(response.data);
            
        } catch (error) {
            console.log("error in getting data")
        }
    }

   
    useEffect(()=>{
        getstu();
    })

    return(
        <section> 
            {/* <!-- Dashboard --> */}
                <div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
                        
                <Sidebar />


                {/* <!-- Main content --> */}
                <div class="h-screen flex-grow-1 overflow-y-lg-auto">
                    
                    {/* <!-- Header --> */}
                    <Dashhead />

                    {/* <!-- Main --> */}
                    <main class="py-6 bg-surface-secondary">
                    
                        <div class="container">

                            <div className="row mt-5">
                                

                                <div className="col-sm-12">
                                    <div class="table-responsive">
                                        <table class="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>Action</th>
                                                    <th>UserID</th>
                                                    <th>Full Name</th>
                                                    <th>Email</th>
                                                    <th>Phone Number</th>
                                                    <th>Address</th>
                                                    <th>DOB</th>
                                                    <th>Gender</th>
                                                    <th>NIC</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {data.map((student) => 
                                                <tr>
                                                <td><QRCode value={id} /></td>
                                                <td>{student.userid}</td>
                                                <td>{student.sfullname}</td>
                                                <td>{student.email}</td>
                                                <td>{student.tel}</td>
                                                <td>{student.saddress}</td>
                                                <td>{student.sdob}</td>
                                                <td>{student.sgender}</td>
                                                <td>{student.snic}</td>
                                                </tr>
                                            )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </main>
                </div>
                
                
            </div>


        </section>
    )
}

export default SingleStudent;