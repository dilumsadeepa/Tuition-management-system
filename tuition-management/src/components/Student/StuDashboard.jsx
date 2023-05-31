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

            <main className="col-md-9">
            <Dashhead />
            {student && (
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Profile</h5>
                      
                    </div>
                  </div>
                </div>
                {/* Add more cards for other student details */}
              </div>
            )}
          </main>
          
        </div>
      </div>
    </section>
  );
};

export default StudentDashboard;
