import React from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import Apiurl from '../Apiurl';
import Sidebar from './AdminSidebar';
import Dashhead from './Dashhead';
import { Link } from 'react-router-dom';


const Parent = () => {

    const { id } = useParams();


    return (
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

                        <div className="container py-5">

                            <div className="row g-6 mb-6">
                                <Link to={`/singlestudent/${id}`} className="">
                                <div class="col-xl-3 col-sm-6 col-12 debtn">
                                    <div class="card shadow border-0">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col">
                                                    <span class="h6 font-semibold text-muted text-sm d-block mb-2">Budget</span>
                                                    <span class="h3 font-bold mb-0">$750.90</span>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                            </div>



                        </div>

                    </main>
                </div>


            </div>
        </section>
    )
}

export default Parent;