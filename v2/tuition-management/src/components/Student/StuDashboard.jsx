import React from 'react';
import Sidebar from './StudentSidebar';
import Dashhead from './Dashhead';
import "./studentDetailsForm.css";




const StudentDashboard = () => {
  return (
    <section>

          <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
          <Sidebar />
        <div className="h-screen flex-grow-1 overflow-y-lg-auto">
        <Dashhead />

        


      <div className="my-4"></div>
            
      <main className="py-6 bg-surface-secondary">
      
        <div className="container-fluid">
        <div className="dashback">
            
          <div className="row">
            <div className="col-md-6 col-lg-6 mb-4">
              <a href="/classeslist">
                <div className="card shadow border-0 h-100">
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <h2 className="h5 font-semibold text-muted text-sm d-block mb-2">
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

            <div className="col-md-6 col-lg-6 mb-4">
              <a href="/Profile">
                <div className="card shadow border-0 h-100">
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <h2 className="h5 font-semibold text-muted text-sm d-block mb-2">
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
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-6 mb-4">
              <a href="/attendance">
                <div className="card shadow border-0 h-100">
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <h2 className="h5 font-semibold text-muted text-sm d-block mb-2">
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

            <div className="col-md-6 col-lg-6 mb-4">
            <a href="/mypayments">
              <div className="card shadow border-0 h-100">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <h2 className="h5 font-semibold text-muted text-sm d-block mb-2">
                        Payments
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
              </a>
            </div>
            
          </div>

          
          <img src="https://img.freepik.com/free-vector/collection-people-getting-degree_1262-19755.jpg?w=740&t=st=1685696454~exp=1685697054~hmac=18cc08c221b858c6678409f67153507a36ebfd23ddd208406da82e1ed2923d36"  alt="Loss" />
        </div>

        </div>
        
      </main>


      </div>
      </div>
    </section>
  );
};

export default StudentDashboard;
