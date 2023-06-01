import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Apiurl from '../Apiurl';
import Sidebar from './AdminSidebar';
import Dashhead from './Dashhead';


const StudenttoCourse = () => {

    const [students, setStudents] = useState([]);

    const getstu = async(e) =>{
        try {
            const response = await axios.get(`${Apiurl}/stucourse`);
            setStudents(response.data);
            
        } catch (error) {
            console.log("error in getting data")
        }
    }


    useEffect(()=>{
        getstu();
    },[])

    return(
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
                    
                        <div class="container">

                        <div className="row">
                                <div class="col-xl-4 col-sm-6 col-12">
                                    <div class="card shadow border-0">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col">
                                                    {/* <span class="h6 font-semibold text-muted text-sm d-block mb-2">Budget</span> */}
                                                    <span class="h4 mb-0"><a href="/assignstudent" className='debtn'>Assign Student</a></span>
                                                </div>
                                                <div class="col-auto">
                                                    <div class="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                                                    <i class="bi bi-person-plus"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-5">
                               
                                <div className="col-sm-12">
                                    <div class="table-responsive">
                                        <table class="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>Full Name</th>
                                                    <th>NIC</th>
                                                    <th>CourseID</th>
                                                    <th>Course</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {students.map((student) => 
                                                <tr>
                                                <td>{student.sfullname}</td>
                                                <td>{student.snic}</td>
                                                <td>{student.courseid}</td>
                                                <td>{student.coursename}</td>
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

export default StudenttoCourse;