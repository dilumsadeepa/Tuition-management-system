import React, { useEffect, useState } from "react";
import axios from 'axios';
import Apiurl from '../Apiurl';
import Sidebar from './Sidebar';
import Dashhead from './Dashhead';
import { useCookies } from 'react-cookie';

const ParentProfile = () => {
    const [users, setUserData] = useState([]);
    const [cookies, setCookie] = useCookies(['user']);


    const getUser = async () => {
        try {
            const response = await axios.get(`${Apiurl}/profile/${cookies.id}`);
            console.log(response.data);
                setUserData(response.data);



        } catch (error) {
            console.log("Error in getting data", error);
        }
    }

    useEffect(() => {
        getUser();
    }, [])

    useEffect(() => {
        console.log("users", users);
    }, [users])

    return (
        <section>
            {/* <!-- Dashboard --> */}
            <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
                <Sidebar />

                {/* <!-- Main content --> */}
                <div className="h-screen flex-grow-1 overflow-y-lg-auto">
                    {/* <!-- Header --> */}
                    <Dashhead />

                    {/* <!-- Main --> */}
                    <main className="py-6 bg-surface-secondary">
                        <div className="container-fluid">
                            <div className="row mb-3 mt-3">
                                <h1>Parent Profile</h1>
                                <div className="col-sm-12 mb-5 mt-3">
                                    
                                        <div className="row">

                                            <div className="col-lg-4">
                                                <div className="card mb-4">
                                                    <div className="card-body text-center">
                                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                                                            className="rounded-circle img-fluid" style={{ width: "150px" }} />
                                                        <h5 className="my-3">{users.username}</h5>
                                                        <p className="text-muted mb-1">{users.email}</p>
                                                        <div className="d-flex justify-content-center mb-2">
                                                            <a href="/editparent" className="btn btn-primary">Edit Profile</a>
                                                        </div>
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
                                                                <p className="text-muted mb-0">{users.fullname}</p>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div className="row">
                                                            <div className="col-sm-3">
                                                                <p className="mb-0">Email</p>
                                                            </div>
                                                            <div className="col-sm-9">
                                                                <p className="text-muted mb-0">{users.email}</p>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div className="row">
                                                            <div className="col-sm-3">
                                                                <p className="mb-0">Phone</p>
                                                            </div>
                                                            <div className="col-sm-9">
                                                                <p className="text-muted mb-0">{users.tel}</p>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div className="row">
                                                            <div className="col-sm-3">
                                                                <p className="mb-0">NIC</p>
                                                            </div>
                                                            <div className="col-sm-9">
                                                                <p className="text-muted mb-0">{users.nic}</p>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div className="row">
                                                            <div className="col-sm-3">
                                                                <p className="mb-0">Address</p>
                                                            </div>
                                                            <div className="col-sm-9">
                                                                <p className="text-muted mb-0">{users.address}</p>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div className="row">
                                                            <div className="col-sm-3">
                                                                <p className="mb-0">DOB</p>
                                                            </div>
                                                            <div className="col-sm-9">
                                                                <p className="text-muted mb-0">{users.dob}</p>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div className="row">
                                                            <div className="col-sm-3">
                                                                <p className="mb-0">Gender</p>
                                                            </div>
                                                            <div className="col-sm-9">
                                                                <p className="text-muted mb-0">{users.gender}</p>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div className="row">
                                                            <div className="col-sm-3">
                                                                <p className="mb-0">User ID</p>
                                                            </div>
                                                            <div className="col-sm-9">
                                                                <p className="text-muted mb-0">{users.id}</p>
                                                            </div>
                                                        </div>
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

export default ParentProfile;
