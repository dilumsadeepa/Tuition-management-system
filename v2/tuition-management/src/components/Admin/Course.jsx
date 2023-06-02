import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Apiurl from '../Apiurl';
import Sidebar from './AdminSidebar';
import Dashhead from './Dashhead';
import { Link } from 'react-router-dom';



const Course = () =>{

    const [courses, setCourses] = useState([]);
    
 
    const getcou = async(e) =>{
        try {
            const response = await axios.get(`${Apiurl}/coursedata`);
            setCourses(response.data);
        } catch (error) {
            console.log("error in getting data")
        }
    }

    const deletecourse = async(id) =>{
        console.log(`${Apiurl}/deletecourse/${id}`);
        try {
            const deleted = await axios.delete(`${Apiurl}/deletecourse/${id}`);
            console.log(deleted.data);
        } catch (error) {
            console.log("error on deleting" + error);
        }
    }

    useEffect(()=>{
        getcou();
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
                     <main>
                    
                        <div class="container">
                            <h2 className='mt-3 mb-3'>Course</h2>
                            <div className="row">
                                <div class="col-xl-4 col-sm-6 col-12">
                                    <div class="card shadow border-0">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col">
                                                    {/* <span class="h6 font-semibold text-muted text-sm d-block mb-2">Budget</span> */}
                                                    <span class="h4 mb-0"><a href="/course/create" className='debtn'>Create Course</a></span>
                                                </div>
                                                <div class="col-auto">
                                                    <div class="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                                                    <i class="bi bi-book-half"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div class="mt-2 mb-0 text-sm">
                                                <span class="badge badge-pill bg-soft-success text-success me-2">
                                                    <i class="bi bi-arrow-up me-1"></i>13%
                                                </span>
                                                <span class="text-nowrap text-xs text-muted">Since last month</span>
                                            </div> */}
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
                                                    <th>Course ID</th>
                                                    <th>Course NAme</th>
                                                    <th>Course Price</th>
                                                    <th>Teacher</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {courses.map((course) => 
                                                <tr>
                                                <td>{course.courseid}</td>
                                                <td>{course.coursename}</td>
                                                <td>{course.courseprice}</td>
                                                <td>{course.user.fullname}</td>
                                                <td><Link to={`/editcourse/${course.id}`} className='btn btn-info'>Edit</Link><button className='btn btn-danger' onClick={()=> deletecourse(course.id)}>Delete</button></td>
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

export default Course;