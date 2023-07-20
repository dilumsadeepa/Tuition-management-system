import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Apiurl from '../Apiurl';
import Sidebar from '../Admin/AdminSidebar';
import Dashhead from '../Admin/Dashhead';
import { useParams } from 'react-router-dom';


const Profile = () => {


    const { id } = useParams();

    const [data, setData] = useState([]);

    async function getstu(e) {

        try {
            const response = await axios.get(`${Apiurl}/profile/${id}`);
            setData(response.data);

        } catch (error) {
            console.log("error in getting data");
        }
        
    }

    useEffect(()=>{
        getstu();
        
   
    })

    return (
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

                        <div className="container py-5">
                            {/* <div className="row">
                            <div className="col">
                                <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item"><a href="s">Admin</a></li>
                                    <li className="breadcrumb-item"><a href="s">User</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">User Profile</li>
                                </ol>
                                </nav>
                            </div>
                            </div> */}


                            

                                <div className="row">

                                    <div className="col-lg-4">
                                        <div className="card mb-4">
                                            <div className="card-body text-center">
                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                                                    className="rounded-circle img-fluid" style={{ width: "150px" }} />
                                                <h5 className="my-3">{data.fullname}</h5>
                                                <p className="text-muted mb-1">{data.email}</p>
                                                <p className="text-muted mb-4">{data.address}</p>
                                                {/* <div className="d-flex justify-content-center mb-2">
                                        <button type="button" className="btn btn-primary">Follow</button>
                                        <button type="button" className="btn btn-outline-primary ms-1">Message</button>
                                        </div> */}
                                            </div>
                                        </div>
                                        <div className="card mb-4 mb-lg-0">

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
                                                        <p className="text-muted mb-0">{data.fullname}</p>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <p className="mb-0">Email</p>
                                                    </div>
                                                    <div className="col-sm-9">
                                                        <p className="text-muted mb-0">{data.email}</p>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <p className="mb-0">Phone</p>
                                                    </div>
                                                    <div className="col-sm-9">
                                                        <p className="text-muted mb-0">{data.tel}</p>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <p className="mb-0">NIC</p>
                                                    </div>
                                                    <div className="col-sm-9">
                                                        <p className="text-muted mb-0">{data.nic}</p>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <p className="mb-0">Address</p>
                                                    </div>
                                                    <div className="col-sm-9">
                                                        <p className="text-muted mb-0">{data.address}</p>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <p className="mb-0">DOB</p>
                                                    </div>
                                                    <div className="col-sm-9">
                                                        <p className="text-muted mb-0">{data.dob}</p>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <p className="mb-0">Gender</p>
                                                    </div>
                                                    <div className="col-sm-9">
                                                        <p className="text-muted mb-0">{data.gender}</p>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <p className="mb-0">User ID</p>
                                                    </div>
                                                    <div className="col-sm-9">
                                                        <p className="text-muted mb-0">{data.id}</p>
                                                    </div>
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

export default Profile;