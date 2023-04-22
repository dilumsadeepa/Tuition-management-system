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
                    
                        {/* <div class="container">

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
                            
                        </div> */}

                        <div className="container py-5">
                            <div className="row">
                            <div className="col">
                                <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item"><a href="s">Home</a></li>
                                    <li className="breadcrumb-item"><a href="s">User</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">User Profile</li>
                                </ol>
                                </nav>
                            </div>
                            </div>

                            <div className="row">
                            <div className="col-lg-4">
                                <div className="card mb-4">
                                <div className="card-body text-center">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                                    className="rounded-circle img-fluid" style={{width: "150px"}}/>
                                    <h5 className="my-3">John Smith</h5>
                                    <p className="text-muted mb-1">Full Stack Developer</p>
                                    <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                                    <div className="d-flex justify-content-center mb-2">
                                    <button type="button" className="btn btn-primary">Follow</button>
                                    <button type="button" className="btn btn-outline-primary ms-1">Message</button>
                                    </div>
                                </div>
                                </div>
                                <div className="card mb-4 mb-lg-0">
                                <div className="card-body p-0">
                                    gggggggggggggggg
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="card mb-4">
                                <div className="card-body">
                                    <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Full Name</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">Johnatan Smith</p>
                                    </div>
                                    </div>
                                    <hr/>
                                    <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Email</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">example@example.com</p>
                                    </div>
                                    </div>
                                    <hr/>
                                    <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Phone</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">(097) 234-5678</p>
                                    </div>
                                    </div>
                                    <hr/>
                                    <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Mobile</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">(098) 765-4321</p>
                                    </div>
                                    </div>
                                    <hr/>
                                    <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Address</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">Bay Area, San Francisco, CA</p>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="table-responsive">
                                            <table className="table">
                                                <tr>
                                                    <th>#</th>
                                                    <th>First</th>
                                                    <th>Last</th>
                                                    <th>Handle</th>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                        
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