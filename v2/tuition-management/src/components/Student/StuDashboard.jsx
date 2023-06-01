import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Apiurl from '../Apiurl';

import StudentSidebar from './StudentSidebar';
import Dashhead from './Dashhead';

const StudentDashboard = () => {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchStudentProfile = async () => {
      try {
        const response = await axios.get(`${Apiurl}/students/profile/1`); // Replace with your API endpoint to retrieve student profile by ID
        setStudent(response.data);
      } catch (error) {
        console.log('Error fetching student profile:', error);
      }
    };

    fetchStudentProfile();
  }, []);

  return (
    <section>
     
        <div>
        {/* <div className="h-screen flex-grow-1 overflow-y-lg-auto"> 
        <Dashhead />   */}
        
        <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
        <StudentSidebar />


            <div className="my-4">
              
            </div>

            <main class="py-6 bg-surface-secondary">
                        <div class="container-fluid">
                            {/* <!-- Card stats --> */}
                            <div class="row g-6 mb-6">

                         
                            <div class="col-xl-3 col-sm-6 col-12">
                            <a  href="/classeslist">
                                    <div class="card shadow border-0">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col">
                                                    <span class="h6 font-semibold text-muted text-sm d-block mb-2"><h1>Classes</h1></span>
                                                    <span class="h3 font-bold mb-0"><h4>Discover available classes for you to explore</h4></span>
                                                </div>
                                                <div class="col-auto">
                                                    <div class="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                                                        <i class="bi bi-credit-card"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mt-2 mb-0 text-sm">
                                                
                                                {/* <span class="text-nowrap text-xs text-muted">Since last month</span> */}
                                            </div>
                                        </div>
                                    </div>
                                    </a>
                                </div>

                                
                                <div class="col-xl-3 col-sm-6 col-12">
                                <a  href="/Profile">
                                    <div class="card shadow border-0">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col">
                                                    <span class="h6 font-semibold text-muted text-sm d-block mb-2"><h1>profile</h1></span>
                                                    <span class="h3 font-bold mb-0"><h4>your personal details</h4></span>
                                                </div>
                                                <div class="col-auto">
                                                    <div class="icon icon-shape bg-primary text-white text-lg rounded-circle">
                                                        <i class="bi bi-people"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mt-2 mb-0 text-sm">
                                                
                                            </div>
                                        </div>
                                    </div>
                                    </a>
                                </div>
                                <div class="col-xl-3 col-sm-6 col-12">
                                <a  href="/attendance">
                                    <div class="card shadow border-0">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col">
                                                    <span class="h6 font-semibold text-muted text-sm d-block mb-2"><h1>Attendance</h1></span>
                                                    <span class="h3 font-bold mb-0"></span>
                                                </div>
                                                <div class="col-auto">
                                                    <div class="icon icon-shape bg-info text-white text-lg rounded-circle">
                                                        <i class="bi bi-clock-history"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mt-2 mb-0 text-sm">
                                                
                                            </div>
                                        </div>
                                    </div>
                                    </a>
                                </div>
                                <div class="col-xl-3 col-sm-6 col-12">
                                    <div class="card shadow border-0">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col">
                                                    <span class="h6 font-semibold text-muted text-sm d-block mb-2"><h1>Learning Materials</h1></span>
                                                    <span class="h3 font-bold mb-0"></span>
                                                </div>
                                                <div class="col-auto">
                                                    <div class="icon icon-shape bg-warning text-white text-lg rounded-circle">
                                                        <i class="bi bi-minecart-loaded"></i>
                                                    </div>
                                                </div>
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
  );
};

export default StudentDashboard;
