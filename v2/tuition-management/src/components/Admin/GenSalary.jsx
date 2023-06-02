import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Apiurl from '../Apiurl';
import Sidebar from './AdminSidebar';
import Dashhead from './Dashhead';


const GenSalary = () => {

    

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
                                    <h2>Salary Generate</h2>
                                </div>
                            </div>

                        
                            <div className="row mt-5">
                               
                                <div className="col-sm-12">
                                    <label class="form-label">Select the User role for genarate the salary:</label>
                                    <div class="input-group mb-3">
                                        <select class="form-select">
                                            <option>-- Select role --</option>
                                            <option>Admin</option>
                                            <option>Teacher</option>
                                            <option>Staff</option>
                                        </select>
                                        <button class="btn btn-success" type="submit">Go</button>
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

export default GenSalary;