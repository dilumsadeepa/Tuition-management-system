import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Apiurl from '../Apiurl';
import Sidebar from './AdminSidebar';
import Dashhead from './Dashhead';
import { Link } from 'react-router-dom';



const ViewStudent = () =>{

    const [students, setStudents] = useState([]);

    const [data, setData] = useState([]);


    const getstu = async(e) =>{
        try {
            const response = await axios.get(`${Apiurl}/astudata`);
            setStudents(response.data);
            setData(response.data);
            
        } catch (error) {
            console.log("error in getting data")
        }
    }

    const search = () => {        
        students.forEach(searchst);
    }

    const searchst = (stu) => {
        let val = document.getElementById('email').value;
        console.log(val);
        console.log(stu['email']);
        if (stu['email'] === val || stu['tel'] === val) {
            console.log([stu]);
            setData([stu]);
            
        }
    }

    const reset = () => {
        setData(students);
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
                                                    <span class="h4 mb-0"><a href="/assignstudent" className='debtn'>Assign Students</a></span>
                                                </div>
                                                <div class="col-auto">
                                                    <div class="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                                                    <i class="bi bi-people"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            
                                <div class="col-xl-4 col-sm-6 col-12">
                                    <div class="card shadow border-0">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col">
                                                    {/* <span class="h6 font-semibold text-muted text-sm d-block mb-2">Budget</span> */}
                                                    <span class="h4 mb-0"><a href="/addstudent" className='debtn'>Add Students</a></span>
                                                </div>
                                                <div class="col-auto">
                                                    <div class="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                                                    <i class="bi bi-people"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="row mt-5">
                                <label class="form-label">Enter Email or Phone number:</label>
                                <div class=" input-group mb-3 mt-3">
                                    
                                    <input type="email" class="form-control" id="email" placeholder="Enter email" />
                                    <button class="btn btn-primary" onClick={(e) => search()} type="button">Go</button>
                                    <button class="btn btn-danger" onClick={(e) => reset()} type="button">Reset</button>
                                </div>

                                <div className="col-sm-12">
                                    <div class="table-responsive">
                                        <table class="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>Action</th>
                                                    <th>Parent</th>
                                                    <th>UserID</th>
                                                    <th>Full Name</th>
                                                    <th>Email</th>
                                                    <th>Phone Number</th>
                                                    <th>Address</th>
                                                    <th>DOB</th>
                                                    <th>Gender</th>
                                                    <th>NIC</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {data.map((student) => 
                                                <tr>
                                                <td><Link to={`/singlestudent/${student.id}`} className='btn btn-info'>View</Link></td>
                                                <td><td><Link to={`/parent/${student.id}`} className='btn btn-info'>Parents</Link></td></td>
                                                <td>{student.id}</td>
                                                <td>{student.username}</td>
                                                <td>{student.email}</td>
                                                <td>{student.tel}</td>
                                                <td>{student.address}</td>
                                                <td>{student.dob}</td>
                                                <td>{student.gender}</td>
                                                <td>{student.nic}</td>
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

export default ViewStudent;