import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Apiurl from '../Apiurl';
import Sidebar from './StudentSidebar';
import Dashhead from './Dashhead';
import { useCookies } from 'react-cookie';

const Attendecep = () => {
    const [attendence, setAttendece] = useState([]);
    const [cookies, setCookie] = useCookies(['user']);

    useEffect(() => {
        getAttendece();
    }, []);

    const getAttendece = async () => {
        try {
            
            const userId = cookies.id;
            console.log(userId);
            const response = await axios.get(`${Apiurl}/att/${userId}`);
            setAttendece(response.data);
            console.log(response.data);
        } catch (error) {
            console.log("Error in getting data", error);
        }
    }

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
                                <h1>Student Attendance</h1>
                                <div className="col-sm-12 mb-5 mt-3">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Course ID</th>
                                                    <th>Date</th>
                                                    <th>Time</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {attendence.map((att) => (
                                                    <tr>
                                                        <td>{att.acourseid}</td>
                                                        <td>{att.aday}</td>
                                                        <td>{att.atime}</td>
                                                    </tr>
                                                ))}
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

export default Attendecep;
