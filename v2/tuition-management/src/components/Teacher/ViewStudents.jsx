import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Apiurl from '../Apiurl';
import TeacherSidebar from './TeacherSidebar';
import Dashhead from './Dashhead';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useParams } from 'react-router-dom';



const ViewStudents = () =>{

    const { id } = useParams();
    const [students, setStudents] = useState([]);
   
    const getstudents = async (e) => {
        try {
            const response = await axios.get(`${Apiurl}/getAllStudentById/${id}`);
            setStudents(response.data);
            console.log("Students "+response.data);
        } catch (error) {
            console.log("Error in getting data:", error.message);
        }
    }

   

    useEffect(()=>{
        getstudents();
    },[])

    return(
        <section> 
            {/* <!-- Dashboard --> */}
                <div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
                        
                <TeacherSidebar />


                {/* <!-- Main content --> */}
                <div class="h-screen flex-grow-1 overflow-y-lg-auto">
                    
                    {/* <!-- Header --> */}
                    <Dashhead />

                    {/* <!-- Main --> */}
                     <main>
                    
                        <div class="container">
                            <h2 className='mt-3 mb-3'>Students</h2>
                            <div className="row">
                                <div class="col-xl-4 col-sm-6 col-12">
                                    <div class="card shadow border-0">
                                       
                                    </div>
                                </div>
                            </div>


                            <div className="row mt-5">
                               
                                <div className="col-sm-12">
                                    <div class="table-responsive">
                                        <table class="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>Student Name</th>
                                                    <th>Student Address</th>
                                                    <th>Student Email</th>
                                                    <th>Student Phone</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {students.map((student) => 
                                                <tr>
                                                <td>{student.student_name}</td>
                                                <td>{student.student_address}</td>
                                                <td>{student.student_email}</td>
                                                <td>{student.student_tel}</td>
                                                {/* <td><Link to={`/showstudents/${student.id}`} className='btn btn-info'>View Students</Link></td> */}
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

export default ViewStudents;