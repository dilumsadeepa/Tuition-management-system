import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Apiurl from '../Apiurl';
import Sidebar from './AdminSidebar';
import Dashhead from './Dashhead';


const Salary = () => {

    const [salary, setSalary] = useState([]);

    const getsalary = async(e) =>{
        try {
            const response = await axios.get(`${Apiurl}/salary`);
            setSalary(response.data);
            console.log(response.data);
            
        } catch (error) {
            console.log("error in getting data")
        }
    }

   

    useEffect(()=>{
        getsalary();
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


                            <div className="row mt-3">
                                <div className="col-sm-12">
                                    <h2>Salary</h2>
                                </div>
                            </div>

                            <div className="row">
                                <div class="col-xl-4 col-sm-6 col-12">
                                    <div class="card shadow border-0">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col">
                                                    {/* <span class="h6 font-semibold text-muted text-sm d-block mb-2">Budget</span> */}
                                                    <span class="h4 mb-0"><a href="/salarypresentage" className='debtn'>Salary Prentage</a></span>
                                                </div>
                                                <div class="col-auto">
                                                    <div class="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                                                    <i class="bi bi-bookmark-plus-fill"></i>
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
                                                    <th>Full Name</th>
                                                    <th>NIC</th>
                                                    <th>Salary</th>
                                                    <th>Month</th>
                                                    
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {salary.map((s) => 
                                                <tr>
                                                    <td>{s.teacher.t_fullname}</td>
                                                    <td>{s.teacher.t_nic}</td>
                                                    <td>{s.s_salary}</td>
                                                    <td>{s.month}</td>
                                                    
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

export default Salary;