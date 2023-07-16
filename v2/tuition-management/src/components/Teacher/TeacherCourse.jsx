import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Apiurl from '../Apiurl';
import TeacherSidebar from './TeacherSidebar';
import Dashhead from './Dashhead';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';



const TeacherCourse = () =>{

    const [courses, setCourses] = useState([]);
    const [id,setId]=useState([]);
    const [cookies] = useCookies(['id']);
    console.log("user id "+cookies.id);
    
    const getId = async(e) =>{
        try {
            const response = await axios.get(`${Apiurl}/getteacherbyId/${cookies.id}`);
            const teacherId = response.data;
            console.log("Teacher"+teacherId);
            getcou(teacherId);
        } catch (error) {
            console.log("error in getting data")
        }
    }

    const getcou = async (teacherId) => {
        try {
            const response = await axios.get(`${Apiurl}/teachercourse/${cookies.id}`);
            setCourses(response.data);
            console.log("course "+response.data);
        } catch (error) {
            console.log("Error in getting data:", error.message);
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
        getId();
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
                            <h2 className='mt-3 mb-3'>Course</h2>
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
                                                    <th>Course ID</th>
                                                    <th>Course Name</th>
                                                    <th>Course Fee</th>
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
                                                <td>{}</td>
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

export default TeacherCourse;