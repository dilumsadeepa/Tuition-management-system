import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Apiurl from '../Apiurl';
import Sidebar from './Sidebar';
import Dashhead from './Dashhead';

const Pay = () => {


}

    return (
        <section>
            {/* Dashboard */}
            <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
                <Sidebar />

                {/* Main content */}
                <div className="h-screen flex-grow-1 overflow-y-lg-auto">
                    {/* Header */}
                    <Dashhead />

                    {/* Main */}
                    <main className="py-6 bg-surface-secondary">
                        <div className="container">
                            <div className="row mt-5 mb-5">
                                <div className="col-sm-12">
                                    <h2>Edit Profile</h2>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </section>
    )

export default Pay;