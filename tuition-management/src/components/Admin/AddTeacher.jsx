import React from "react";
// import axios from 'axios';
// import Apiurl from '../Apiurl';
import Sidebar from './AdminSidebar';
import Dashhead from './Dashhead';



const AddTeacher = () =>{

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
                            <h2>Add Teachers</h2>

                            <div className="row mt-5">
                               
                               <form>
                                    <div class="mb-3 mt-3">
                                        <label class="form-label">Username:</label>
                                        <input type="text" class="form-control" placeholder="Enter Username" />
                                    </div>

                                    <div class="mb-3 mt-3">
                                        <label class="form-label">Email:</label>
                                        <input type="email" class="form-control" placeholder="Enter email" />
                                    </div>

                                    <div class="mb-3 mt-3">
                                        <label class="form-label">Phone Number:</label>
                                        <input type="number" class="form-control" placeholder="Enter Phone number" />
                                    </div>

                                    <div class="mb-3 mt-3">
                                        <label class="form-label">Password:</label>
                                        <input type="password" class="form-control" placeholder="Enter Password" />
                                    </div>

                                    <br /><hr />
                                    <h3>Personal Infomation</h3>
                                    <br />

                                    <div class="mb-3 mt-3">
                                        <label class="form-label">Username:</label>
                                        <input type="text" class="form-control" placeholder="Enter Username" />
                                    </div>

                               </form>
                                
                            </div>
                            
                        </div>
                    </main>
                </div>
                
                
            </div>


        </section>
    )
}


export default AddTeacher;