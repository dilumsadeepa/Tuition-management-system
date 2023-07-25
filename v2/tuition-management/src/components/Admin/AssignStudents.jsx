import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Apiurl from '../Apiurl';
import Sidebar from './AdminSidebar';
import Dashhead from './Dashhead';


const AssignStudents = () => {

    const [students, setStudents] = useState([]);

    const getstu = async(e) =>{
        try {
            const response = await axios.get(`${Apiurl}/stucourse`);
            setStudents(response.data);
            console.log(response.data);
            
        } catch (error) {
            console.log("error in getting data")
        }
    }

    const updateCS = async (id,cid,sid,ap) => {
        // e.preventDefault();
        console.log("clicked");
        await axios.patch(`${Apiurl}/updateCS/${id}`,{
            aprovel: ap,
            userId: sid,
            courseId:cid
        });

        getstu();
        
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

                            {/* <div className="row">
                                <div className="col-sm-8 d-flex justify-content-center">
                                <div className="search">
                                    <input 
                                        type="text" 
                                        className="form-control searchTerm" 
                                        placeholder="What are you looking for?"
                                    />
                                    <button type="submit" className="searchButton">
                                        <i class="fa fa-search"></i>
                                    </button>
                                </div>
                                </div>
                            </div> */}

                            <div className="row mt-5">
                               <h2>unapproved</h2>
                                <div className="col-sm-12">
                                    <div class="table-responsive">
                                        <table class="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>Full Name</th>
                                                    <th>NIC</th>
                                                    <th>CourseID</th>
                                                    <th>Course</th>
                                                    <th>Aprovel</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {students.map((student) => 
                                               <>
                                                {student.aprovel === '0' &&
                                                <tr>
                                                    <td>{student.user.fullname}</td>
                                                    <td>{student.user.nic}</td>
                                                    <td>{student.course.courseid}</td>
                                                    <td>{student.course.coursename}</td>
                                                    <td>unapproved</td>
                                                    <td><button type='button' onClick={(e) => updateCS(student.id,student.courseId,student.userId,'1')} className='debtn'>Approve</button></td>
                                                </tr>
                                                }
                                               </>  
                                            )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-5">
                               <h2>Approved</h2>
                               <div className="col-sm-12">
                                   <div class="table-responsive">
                                       <table class="table table-bordered">
                                           <thead>
                                               <tr>
                                                   <th>Full Name</th>
                                                   <th>NIC</th>
                                                   <th>CourseID</th>
                                                   <th>Course</th>
                                                   <th>Aprovel</th>
                                                   <th>Action</th>
                                               </tr>
                                           </thead>
                                           <tbody>
                                           {students.map((student) => 
                                              <>
                                               {student.aprovel === '1' &&
                                               <tr>
                                                   <td>{student.user.fullname}</td>
                                                   <td>{student.user.nic}</td>
                                                   <td>{student.course.courseid}</td>
                                                   <td>{student.course.coursename}</td>
                                                   <td>Approved</td>
                                                   <td><button type='button' onClick={(e) => updateCS(student.id,student.courseId,student.userId,'0')} className='debtn'>Unapproved</button></td>
                                               </tr>
                                               }
                                              </>  
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

export default AssignStudents;