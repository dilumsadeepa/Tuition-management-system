import React, { useEffect, useState } from "react";
import axios from 'axios';
import Apiurl from '../Apiurl';
import Sidebar from './Sidebar';
import Dashhead from './Dashhead';
import { useCookies } from 'react-cookie';

const EditParent = () => {
    const [users, setUserData] = useState([]);
    const [cookies, setCookie] = useCookies(['user']);

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [password, setPassword] = useState('');

    const [fullname, setFullname] = useState('');
    const [address, setAddress] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [nic, setNic] = useState('');

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

            users.forEach((user) => {
                document.getElementById("name").value = user.username;
                document.getElementById("fullname").value = user.fullname;
                document.getElementById("address").value = user.address;
                document.getElementById("DOB").value = user.dob;
                document.getElementById("nic").value = user.nic;
                document.getElementById("mail").value = user.email;
                document.getElementById("number").value = user.tel;
                document.getElementById("pwd1").value = user.password;
                

            })

        } catch (error) {
            console.log("Error in getting data", error);
        }
    }

    const updatePa = async (id) => {
        // e.preventDefault();
        console.log("clicked");
        await axios.patch(`${Apiurl}/updateCS/${id}`, {
            username,
            email,
            tel,
            password,
            fullname,
            address,
            dob,
            gender,
            nic,
        });


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
                                <form>
                                    {/* <img src=" " class="rounded-circle" alt="Profile Picture" /> */}
                                    <div className="mb-3 mt-3">
                                        <label className="form-label">Username</label>
                                        <input type="text" className="form-control" id="name" onClick={(e)=>setUsername(e.target.value)} placeholder="Enter Name" name="name" />
                                    </div>
                                    <div className="mb-3 mt-3">
                                        <label className="form-label">Fullrname</label>
                                        <input type="text" className="form-control" id="fullname" onClick={(e)=>setFullname(e.target.value)} placeholder="Enter Fullname" name="fullname" />
                                    </div>
                                    <div className="mb-3 mt-3">
                                        <label className="form-label">Address</label>
                                        <input type="text" className="form-control" id="address" onClick={(e)=>setAddress(e.target.value)} placeholder="Enter Address" name="address" />
                                    </div>
                                    <div className="mb-3 mt-3">
                                        <label className="form-label">Date Of Birth</label>
                                        <input type="date" className="form-control" id="DOB" onClick={(e)=>setDob(e.target.value)} placeholder="Enter DOB" name="birth" />
                                    </div>

                                    <div className="mb-3 mt-3">
                                        <label className="form-label">Gender</label>
                                        <select className="form-select" o>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                           
                                        </select>
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
                                        <input type="reset" className="btn btn-primary" value="Clear" />
                                        <button type="button" className="btn btn-info" onClick={updatePa(s.id)}>Save</button>

                                    </div>

                                </form>
                            ))}
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>



        </section>
    )
}

export default EditParent;
