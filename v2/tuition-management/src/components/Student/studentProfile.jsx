import React, { useEffect, useState, useRef } from "react";
import axios from 'axios';
import Apiurl from '../Apiurl';
import Sidebar from './StudentSidebar';
import Dashhead from './Dashhead';
import { useCookies } from 'react-cookie';
import QRCode from "qrcode.react";
import html2canvas from 'html2canvas'

const StudentProfile = () => {
    const [students, setStudentData] = useState([]);
    const [cookies, setCookie] = useCookies(['user']);

    const cardRef = useRef(null);

    let count = 0;

    let qrj = { 'userid': cookies.id }
    let qrtext = JSON.stringify(qrj);

    const getStudent = async () => {
        try {
            const response = await axios.get(`${Apiurl}/getstudentdata/${cookies.email}`);
            console.log(response.data);
            // Check if response.data is an array
            if (Array.isArray(response.data)) {
                setStudentData(response.data);
            } else {
                console.log("Invalid data format: Expected an array.");
            }
        } catch (error) {
            console.log("Error in getting data", error);
        }
    }

    const downloadImage = () => {
        html2canvas(cardRef.current).then(canvas => {
            const link = document.createElement('a');
            link.download = 'my-card.png';
            link.href = canvas.toDataURL();
            link.click();
        });
    }

    useEffect(() => {
        getStudent();
    }, []);

    useEffect(() => {
        console.log("students", students);
    }, [students]);

    // Filter the students array to show only the profile of the logged-in student
    const loggedInStudent = students.find(student => student.email === cookies.email);

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
                                <h1>Student Profile</h1>
                                <div className="col-sm-12 mb-5 mt-3">
                                    {/* Check if loggedInStudent is available */}
                                    {loggedInStudent ? (
                                        <div className="row">
                                            {/* ... Render student profile data */}
                                            <div className="col-lg-4">
                                                <div className="card mb-4">
                                                    <div className="card-body text-center">
                                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                                                            className="rounded-circle img-fluid" style={{ width: "150px" }} />
                                                        <h5 className="my-3">{loggedInStudent.username}</h5>
                                                        <p className="text-muted mb-1">{loggedInStudent.email}</p>
                                                        <div className="d-flex justify-content-center mb-2">
                                                            <a href="/EditStudentProfile" className="btn btn-primary">Edit Profile</a>
                                                        </div>
                                                        
                                                    </div>
                                                    <div className="card mb-4 mb-lg-0">
                                            <div className="card-body p-0">
                                                <QRCode value={qrtext} />
                                                <br />
                                                <button onClick={() => downloadImage()} className='debtn'>Download student ID</button>
                                            </div>
                                        </div>
                                                </div>
                                                <div className="card mb-4 mb-lg-0">
                                                    {/* ... Some other content specific to student */}
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="card mb-4">
                                                    <div className="card-body">
                                                        {/* ... Render student profile details */}
                                                        <div className="row">
                                                            <div className="col-sm-3">
                                                                <p className="mb-0">Full Name</p>
                                                            </div>
                                                            <div className="col-sm-9">
                                                                <p className="text-muted mb-0">{loggedInStudent.fullname}</p>
                                                            </div>
                                                        </div>
                                                        <hr />

                                                        
                                                        <div className="row">
                                                            <div className="col-sm-3">
                                                                <p className="mb-0">Email</p>
                                                            </div>
                                                            <div className="col-sm-9">
                                                                <p className="text-muted mb-0">{loggedInStudent.email}</p>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        {/* ... More profile details */}
                                                        <div className="row">
                                                            <div className="col-sm-3">
                                                                <p className="mb-0">Contact number</p>
                                                            </div>
                                                            <div className="col-sm-9">
                                                                <p className="text-muted mb-0">{loggedInStudent.tel}</p>
                                                            </div>
                                                        </div>
                                                        <hr />

                                                        <div className="row">
                                                            <div className="col-sm-3">
                                                                <p className="mb-0">Address</p>
                                                            </div>
                                                            <div className="col-sm-9">
                                                                <p className="text-muted mb-0">{loggedInStudent.address}</p>
                                                            </div>
                                                        </div>
                                                        <hr />

                                                        <div className="row">
                                                            <div className="col-sm-3">
                                                                <p className="mb-0">Date of birth</p>
                                                            </div>
                                                            <div className="col-sm-9">
                                                                <p className="text-muted mb-0">{loggedInStudent.dob}</p>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        
                                                        <div className="row">
                                                            <div className="col-sm-3">
                                                                <p className="mb-0">Gender</p>
                                                            </div>
                                                            <div className="col-sm-9">
                                                                <p className="text-muted mb-0">{loggedInStudent.gender}</p>
                                                            </div>
                                                        </div>
                                                        <hr />

                                                        <div className="row">
                                                            <div className="col-sm-3">
                                                                <p className="mb-0">NIC</p>
                                                            </div>
                                                            <div className="col-sm-9">
                                                                <p className="text-muted mb-0">{loggedInStudent.nic}</p>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <p>Loading...</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </section>
    )
}

export default StudentProfile;
