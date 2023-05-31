import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Apiurl from '../Apiurl';
import Sidebar from './Sidebar';
import Dashhead from './Dashhead';
import { Link } from 'react-router-dom';



const ViewAttendence = () => {

}

const Attendence = () => {
    const [attendence, setAttendence] = useState([]);

    const getstu = async(e) =>{
        try {
            const response = await axios.get(`${Apiurl}/getattendence/1`);
            setAttendence(response.data);
            
            
        } catch (error) {
            console.log("error in getting data")
        }

    }

    useEffect(()=>{
        getstu();
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
                                <h1>Attendence</h1>
                                <div className="col-sm-12 mb-5 mt-3">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Full Name</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {attendence.map((att) =>
                                                <tr>
                                                    <td>{att.sfullname}</td>
                                                    
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


export default ViewStudentParent;