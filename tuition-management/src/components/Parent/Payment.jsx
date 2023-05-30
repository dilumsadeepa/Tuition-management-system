import React from "react";
import Sidebar from './Sidebar';
import Dashhead from './Dashhead';
import { Link } from 'react-router-dom';



const Payment = () => {
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
                        <div class="container-fluid">
                            <div className="row mb-3 mt-3">
                                <h1>Payment</h1>
                                <div className="col-sm-12 mb-5 mt-3">
                                    
                                </div>
                            </div>

                        </div>
                    </main>
                </div>


            </div>
        </section>
    )
}


export default Payment;