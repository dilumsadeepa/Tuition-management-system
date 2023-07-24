import React from 'react';

import Dashhead from './Dashhead';

const ParentDashboard = () => {
  return (
    <section>

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
              <a href="/ParentProfile">
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

        </div>

        </div>
        
      </main>


      </div>
    </section>
  );
};

export default ParentDashboard;
