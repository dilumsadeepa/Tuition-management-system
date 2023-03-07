import React from 'react';
// import { useCookies } from 'react-cookie';

import Sidebar from './AdminSidebar';
import Dashhead from './Dashhead';


const Admin = () =>{

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
                                                    <span class="h6 font-semibold text-muted text-sm d-block mb-2">Budget</span>
                                                    <span class="h3 font-bold mb-0">$750.90</span>
                                                </div>
                                                <div class="col-auto">
                                                    <div class="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                                                        <i class="bi bi-credit-card"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mt-2 mb-0 text-sm">
                                                <span class="badge badge-pill bg-soft-success text-success me-2">
                                                    <i class="bi bi-arrow-up me-1"></i>13%
                                                </span>
                                                <span class="text-nowrap text-xs text-muted">Since last month</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-sm-6 col-12">
                                    <div class="card shadow border-0">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col">
                                                    <span class="h6 font-semibold text-muted text-sm d-block mb-2">New projects</span>
                                                    <span class="h3 font-bold mb-0">215</span>
                                                </div>
                                                <div class="col-auto">
                                                    <div class="icon icon-shape bg-primary text-white text-lg rounded-circle">
                                                        <i class="bi bi-people"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mt-2 mb-0 text-sm">
                                                <span class="badge badge-pill bg-soft-success text-success me-2">
                                                    <i class="bi bi-arrow-up me-1"></i>30%
                                                </span>
                                                <span class="text-nowrap text-xs text-muted">Since last month</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-sm-6 col-12">
                                    <div class="card shadow border-0">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col">
                                                    <span class="h6 font-semibold text-muted text-sm d-block mb-2">Total hours</span>
                                                    <span class="h3 font-bold mb-0">1.400</span>
                                                </div>
                                                <div class="col-auto">
                                                    <div class="icon icon-shape bg-info text-white text-lg rounded-circle">
                                                        <i class="bi bi-clock-history"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mt-2 mb-0 text-sm">
                                                <span class="badge badge-pill bg-soft-danger text-danger me-2">
                                                    <i class="bi bi-arrow-down me-1"></i>-5%
                                                </span>
                                                <span class="text-nowrap text-xs text-muted">Since last month</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-sm-6 col-12">
                                    <div class="card shadow border-0">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col">
                                                    <span class="h6 font-semibold text-muted text-sm d-block mb-2">Work load</span>
                                                    <span class="h3 font-bold mb-0">95%</span>
                                                </div>
                                                <div class="col-auto">
                                                    <div class="icon icon-shape bg-warning text-white text-lg rounded-circle">
                                                        <i class="bi bi-minecart-loaded"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mt-2 mb-0 text-sm">
                                                <span class="badge badge-pill bg-soft-success text-success me-2">
                                                    <i class="bi bi-arrow-up me-1"></i>10%
                                                </span>
                                                <span class="text-nowrap text-xs text-muted">Since last month</span>
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

export default Admin;