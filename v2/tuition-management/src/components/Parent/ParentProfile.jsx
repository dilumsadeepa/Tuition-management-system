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
            const response = await axios.get(`${Apiurl}/getparentdata/${cookies.email}`);
            console.log(response.data);
            // Check if response.data is an array
            if (Array.isArray(response.data)) {
                setUserData(response.data);
            } else {
                console.log("Invalid data format: Expected an array.");
            }
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
                                    {users.map((s, index) => (
                                        <div className="row">

                                            <div className="col-lg-4">
                                                <div className="card mb-4">
                                                    <div className="card-body text-center">
                                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                                                            className="rounded-circle img-fluid" style={{ width: "150px" }} />
                                                        <h5 className="my-3">{s.username}</h5>
                                                        <p className="text-muted mb-1">{s.email}</p>
                                                        <div className="d-flex justify-content-center mb-2">
                                                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">Edit Profile</button>
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
                                                                <p className="text-muted mb-0">{s.fullname}</p>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div className="row">
                                                            <div className="col-sm-3">
                                                                <p className="mb-0">Email</p>
                                                            </div>
                                                            <div className="col-sm-9">
                                                                <p className="text-muted mb-0">{s.email}</p>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div className="row">
                                                            <div className="col-sm-3">
                                                                <p className="mb-0">Phone</p>
                                                            </div>
                                                            <div className="col-sm-9">
                                                                <p className="text-muted mb-0">{s.tel}</p>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div className="row">
                                                            <div className="col-sm-3">
                                                                <p className="mb-0">NIC</p>
                                                            </div>
                                                            <div className="col-sm-9">
                                                                <p className="text-muted mb-0">{s.nic}</p>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div className="row">
                                                            <div className="col-sm-3">
                                                                <p className="mb-0">Address</p>
                                                            </div>
                                                            <div className="col-sm-9">
                                                                <p className="text-muted mb-0">{s.address}</p>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div className="row">
                                                            <div className="col-sm-3">
                                                                <p className="mb-0">DOB</p>
                                                            </div>
                                                            <div className="col-sm-9">
                                                                <p className="text-muted mb-0">{s.dob}</p>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div className="row">
                                                            <div className="col-sm-3">
                                                                <p className="mb-0">Gender</p>
                                                            </div>
                                                            <div className="col-sm-9">
                                                                <p className="text-muted mb-0">{s.gender}</p>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div className="row">
                                                            <div className="col-sm-3">
                                                                <p className="mb-0">User ID</p>
                                                            </div>
                                                            <div className="col-sm-9">
                                                                <p className="text-muted mb-0">{s.id}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>



                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>


            <div className="modal" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">


                        <div className="modal-header">
                            <h4 className="modal-title">Edit Profile</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>


                        <div className="modal-body">
                            <form action="/action_page.php">
                                {/* <img src=" " class="rounded-circle" alt="Profile Picture" /> */}
                                <div className="mb-3 mt-3">
                                    <label className="form-label">Username</label>
                                    <input type="text" className="form-control" id="name" placeholder="Enter Name" name="name" />
                                </div>
                                <div className="mb-3 mt-3">
                                    <label className="form-label">Fullrname</label>
                                    <input type="text" className="form-control" id="fullname" placeholder="Enter Fullname" name="fullname" />
                                </div>
                                <div className="mb-3 mt-3">
                                    <label className="form-label">Address</label>
                                    <input type="text" className="form-control" id="naddress" placeholder="Enter Address" name="address" />
                                </div>
                                <div className="mb-3 mt-3">
                                    <label className="form-label">Date Of Birth</label>
                                    <input type="date" className="form-control" id="DOB" placeholder="Enter DOB" name="birth" />
                                </div>
                                <div className="form-check">
                                    <input type="radio" className="form-check-input" id="radio1" name="radio" value="male" />Male
                                    <label className="form-check-label" for="radio1"></label>
                                </div>
                                <div className="form-check">
                                    <input type="radio" className="form-check-input" id="radio2" name="radio" value="female" />Female
                                    <label className="form-check-label" for="radio2"></label>
                                </div>
                                <div className="mb-3 mt-3">
                                    <label className="form-label">NIC</label>
                                    <input type="text" className="form-control" id="nic" placeholder="Enter NIC Number" name="nic" />
                                </div>
                                <div className="mb-3 mt-3">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control" id="mail" placeholder="Enter Email" name="email" />
                                </div>
                                <div className="mb-3 mt-3">
                                    <label className="form-label">TP - Number</label>
                                    <input type="number" className="form-control" id="number" placeholder="Enter Telephone Number" name="tpN" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password:</label>
                                    <input type="password" className="form-control" id="pwd1" placeholder="Enter New password" name="pswd" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 6 or more characters" required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Confirm Password:</label>
                                    <input type="password" className="form-control" id="pwd2" placeholder="Re-enter password" name="pswd" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 6 or more characters" required />
                                </div>
                                <div className="modal-footer">
                                    <input type="reset" className="btn btn-primary"  value="Clear" />
                                    <input type="submit" className="btn btn-info"  value="Save" />

                                </div>

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default ParentProfile;
