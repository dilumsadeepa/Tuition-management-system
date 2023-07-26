import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Apiurl from '../Apiurl';
import Sidebar from './AdminSidebar';
import Dashhead from './Dashhead';
import { Link } from 'react-router-dom';



const ViewTeacher = () =>{

    const [students, setStudents] = useState([]);

    const [data, setData] = useState([]);


    const getstu = async(e) =>{
        try {
            const response = await axios.get(`${Apiurl}/teacher`);
            setStudents(response.data);
            setData(response.data);
            console.log(response)
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
        }else{
            setData([]);
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
                                                    <th>Teacher ID</th>
                                                    <th>Teacher Name</th>
                                                    <th>Address</th>
                                                    <th>Gender</th>
                                                    <th>Email</th>
                                                    <th>NIC</th>
                                                    <th>Description</th>
                                                    
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {data.map((student) => 
                                                <tr>
                                                <td>{student.t_userid}</td>
                                                <td>{student.t_fullname}</td>
                                                <td>{student.t_address}</td>
                                                <td>{student.t_gender}</td>
                                                <td>{student.t_nic}</td>
                                                <td>{student.t_education}</td>
                                                <td>{student.t_dis}</td>
                                                
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

export default ViewTeacher;