import React, { useEffect, useState } from "react";
import axios from 'axios';
import Apiurl from '../Apiurl';
import Sidebar from './StudentSidebar';
import Dashhead from './Dashhead';
import { useCookies } from 'react-cookie';

const StudentProfile = () => {
    const [students, setStudentData] = useState([]);
    const [cookies, setCookie] = useCookies(['user']);

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

    useEffect(() => {
        getStudent();
    }, []);

    useEffect(() => {
        console.log("students", students);
    }, [students]);

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
                                    {students.length === 0 ? (
                                        <p>Loading...</p>
                                    ) : (
                                        students.map((s, index) => (
                                            <div className="row" key={index}>
                                                {/* ... Render student profile data */}
                                                <div className="col-lg-4">
                                                    <div className="card mb-4">
                                                        <div className="card-body text-center">
                                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                                                                className="rounded-circle img-fluid" style={{ width: "150px" }} />
                                                            <h5 className="my-3">{s.username}</h5>
                                                            <p className="text-muted mb-1">{s.email}</p>
                                                            <div className="d-flex justify-content-center mb-2">
                                                                <a href="/editstudent" className="btn btn-primary">Edit Profile</a>
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
                                                                    <p className="text-muted mb-0">{s.fullname}</p>
                                                                </div>
                                                            </div>
                                                            <hr />
                                                            {/* ... More profile details */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
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
