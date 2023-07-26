import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Apiurl from '../Apiurl';
import Sidebar from './Sidebar';
import Dashhead from './Dashhead';
import { Link } from 'react-router-dom';
import User from '../User';
import { useCookies } from 'react-cookie';


const ViewStudentDetails = () => {
    const [students, setStudents] = useState([]);

    const [cookies, setCookie] = useCookies(['user']);

    const getstu = async(e) =>{
        
        const id = cookies.id;
        try {
            const response = await axios.get(`${Apiurl}/getstudentbyp/${id}`);
            setStudents(response.data);
            console.log(response.data);
            
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
                                <h1>Student Data</h1>
                                <div className="col-sm-12 mb-5 mt-3">
                                <div className="col-sm-12 mb-5 mt-3"></div>  
                                <form>
                                {/* <div>
                                    <a href="/EditStudentProfile" class="btn btn-primary btn-outline">Edit Sudent Details</a>
                                </div> */}
                                <div className="col-sm-12 mb-5 mt-3"></div>
                                </form> 
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>User Name</th>
                                                    <th>Name with Inniti</th>
                                                    <th>Address</th>
                                                    <th>DOB</th>
                                                    <th>Gender</th>
                                                    <th>NIC</th>
                                                    <th>Email</th>
                                                    <th>TP Number</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {students.map((student) => 
                                                <tr>
                                                    <td>{student.username}</td>
                                                    <td>{student.fullname}</td>
                                                    <td>{student.address}</td>
                                                    <td>{student.dob}</td>
                                                    <td>{student.gender}</td>
                                                    <td>{student.nic}</td>
                                                    <td>{student.email}</td>
                                                    <td>{student.tel}</td>
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


export default ViewStudentDetails;