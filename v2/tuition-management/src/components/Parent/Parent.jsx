import React from 'react';
// import { useCookies } from 'react-cookie';

import Sidebar from './Sidebar';
import Dashhead from './Dashhead';


const ParentDashboard = () =>{

    // const [cookies] = useCookies(['user']);

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
                        <div class="container-fluid">
                            {/* <!-- Card stats --> */}
                            <div class="row g-6 mb-6">
                                <div class="col-xl-3 col-sm-6 col-12">
                                    <div class="card shadow border-0">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col">
                                                    <span class="h6 font-semibold text-muted text-sm d-block mb-2">Student Details</span>
                                                </div>
                                                {/* <div class="col-auto">
                                                    <div class="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                                                        <i class="bi bi-credit-card"></i>
                                                    </div>
                                                </div> */}
                                            </div>
                                            <div class="mt-2 mb-0 text-sm">
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-sm-6 col-12">
                                    <div class="card shadow border-0">
                                        <div class="card-body">
                                            <div class="row">
                                                <a class="nav-link" href="/notice">
                                                    {/* <i class="fa-regular fa-note-sticky"></i> Notices */}
                                                    <span class="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto">Notices</span>
                                                 </a>
                                                {/* <div class="col-auto">
                                                    <div class="icon icon-shape bg-primary text-white text-lg rounded-circle">
                                                        <i class="bi bi-people"></i>
                                                    </div>
                                                </div> */}
                                            </div>
                                            <div class="mt-2 mb-0 text-sm">
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-sm-6 col-12">
                                    <div class="card shadow border-0">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col">
                                                    <span class="h6 font-semibold text-muted text-sm d-block mb-2">Profile</span>
                                                </div>
                                                {/* <div class="col-auto">
                                                    <div class="icon icon-shape bg-info text-white text-lg rounded-circle">
                                                        <i class="bi bi-clock-history"></i>
                                                    </div>
                                                </div> */}
                                            </div>
                                            <div class="mt-2 mb-0 text-sm">
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-sm-6 col-12">
                                    <div class="card shadow border-0">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col">
                                                    <span class="h6 font-semibold text-muted text-sm d-block mb-2">Payment</span>
                                                </div>
                                                {/* <div class="col-auto">
                                                    <div class="icon icon-shape bg-warning text-white text-lg rounded-circle">
                                                        <i class="bi bi-minecart-loaded"></i>
                                                    </div>
                                                </div> */}
                                            </div>
                                            <div class="mt-2 mb-0 text-sm">
                                                
                                            </div>
                                        </div>
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

export default ParentDashboard;