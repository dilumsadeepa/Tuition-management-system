import React from 'react';
import Sidebar from './Sidebar';
import Dashhead from './Dashhead';
import "./parentdetailsfrom.css";


const ParentDashboard = () => {
  return (
    <section>

        <div className="h-screen flex-grow-1 overflow-y-lg-auto"> 
        <Dashhead />  
                
        <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
        <Sidebar />


      <div className="my-4"></div>
            
      <main className="py-6 bg-surface-secondary">
      
        <div className="container-fluid">
        <div className="dashback">
            
          <div className="row">
            <div className="col-md-6 col-lg-6 mb-4">
              <a href="/findParentByParentId">
                <div className="card shadow border-0 h-100">
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <h2 className="h5 font-semibold text-muted text-sm d-block mb-2">
                          Student
                        </h2>
                        <h3 className="h4 font-bold mb-0">
                          
                        </h3>
                      </div>
                      <div className="col-auto">
                        <div className="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                        <i class="bi bi-people"></i>
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
                        <i class="bi bi-person-square"></i> 
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
              <a href="/pattendece/${students.id}">
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
            <a href="/paymentp/${students.id}">
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

            <div className="row">
            <div class="centered-container">
            <div className="col-md-6 col-lg-6 mb-4">
              <a href="/notice">
                <div className="card shadow border-0 h-100">
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <h2 className="h5 font-semibold text-muted text-sm d-block mb-2">
                          Notice
                        </h2>
                        <h3 className="h4 font-bold mb-0"></h3>
                      </div>
                      <div className="col-auto">
                        <div className="icon icon-shape bg-info text-white text-lg rounded-circle">
                        <i class="fa-regular fa-note-sticky"></i>
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

          <img src="https://m.media-amazon.com/images/G/01/kindle/tahoe/panda/PDUnauthHeader._CB653845284_.png" alt="Loss" class="custom-image" /> 

        </div>

        </div>
        
      </main>


      </div>
      </div>
    </section>
  );
};

export default ParentDashboard;
