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
          <div className="my-4"></div>
    
          <main className="py-6 bg-surface-secondary">
            <div className="container-fluid">
              <div className="row g-6 mb-6">
                <div className="col-xl-3 col-sm-6 col-12">
                  <a href="/classeslist">
                    <div className="card shadow border-0">
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <h2 className="h6 font-semibold text-muted text-sm d-block mb-2">
                              Classes
                            </h2>
                            <h3 className="h4 font-bold mb-0">
                             
                            </h3>
                          </div>
                          <div className="col-auto">
                            <div className="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                              <i className="bi bi-credit-card"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
    
                <div className="col-xl-3 col-sm-6 col-12">
                  <a href="/Profile">
                    <div className="card shadow border-0">
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <h2 className="h6 font-semibold text-muted text-sm d-block mb-2">
                              Profile
                            </h2>
                            <h3 className="h4 font-bold mb-0">
                              
                            </h3>
                          </div>
                          <div className="col-auto">
                            <div className="icon icon-shape bg-primary text-white text-lg rounded-circle">
                              <i className="bi bi-people"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
    
                <div className="col-xl-3 col-sm-6 col-12">
                  <a href="/attendance">
                    <div className="card shadow border-0">
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <h2 className="h6 font-semibold text-muted text-sm d-block mb-2">
                              Attendance
                            </h2>
                            <h3 className="h4 font-bold mb-0"></h3>
                          </div>
                          <div className="col-auto">
                            <div className="icon icon-shape bg-info text-white text-lg rounded-circle">
                              <i className="bi bi-clock-history"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
    
                <div className="col-xl-3 col-sm-6 col-12">
                  <div className="card shadow border-0">
                    <div className="card-body">
                      <div className="row">
                        <div className="col">
                          <h2 className="h6 font-semibold text-muted text-sm d-block mb-2">
                            Learning Materials
                          </h2>
                          <h3 className="h4 font-bold mb-0"></h3>
                        </div>
                        <div className="col-auto">
                          <div className="icon icon-shape bg-warning text-white text-lg rounded-circle">
                            <i className="bi bi-minecart-loaded"></i>
                          </div>
                          </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
      </main>
    </section>
                       
    
  );
};

export default StudentDashboard;
