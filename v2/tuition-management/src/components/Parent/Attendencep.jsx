import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Apiurl from '../Apiurl';
import Sidebar from './Sidebar';
import Dashhead from './Dashhead';
import { Link, useParams } from 'react-router-dom';
import User from '../User';


const ViewAttendece = () => {

}

const Attendecep = () => {

    const [attendence, setAttendece] = useState([]);
    const { id } = useParams();

    const getatt = async(e) =>{
        console.log(User.getUser());

        try {
            const response = await axios.get(`${Apiurl}/getattendece/${id}`);
            console.log(response.data);
            setAttendece(response.data);
            
        } catch (error) {
            console.log("error in getting data")
        }

    }

    useEffect(()=>{
        getatt();
    },[])


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
                        <div class="container-fluid">
                            <div className="row mb-3 mt-3">
                                <h1>Student Attendece</h1>
                                <div className="col-sm-12 mb-5 mt-3">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Courseid</th>
                                                    <th>Date</th>
                                                    <th>Time</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {attendence.map((att) =>
                                                <tr>
                                                    <td>{att.acourseid}</td>
                                                    <td>{att.aday}</td>
                                                    <td>{att.atime}</td>
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


export default Attendecep;