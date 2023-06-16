import React, { useEffect, useState } from 'react';

import axios from 'axios';
import Apiurl from '../Apiurl';

import Sidebar from './StudentSidebar';
import Dashhead from './Dashhead';
import { useCookies } from 'react-cookie';

import "./studentDetailsForm.css";



///Apiurl/students/profile/1

const StudentProfile = () => {
  const [student, setStudent] = useState([]);
  const [cookies] = useCookies(['user']);


  const handleUpdate = () => {
  // Handle update logic here
};

const handleDelete = () => {
  // Handle delete logic here
};


  useEffect(() => {
    const fetchStudentProfile = async () => {
      try {
        const response = await axios.get(`${Apiurl}/student/${cookies.id}`); // Replace with your API endpoint to retrieve student profile by ID
        setStudent(response.data);
      } catch (error) {
        console.log('Error fetching student profile:', error);
      }
    };

    fetchStudentProfile();
  }, []);

  return (
    <section>
  <div className="h-screen flex-grow-1 overflow-y-lg-auto"> 
    <Dashhead />  

    <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
      <Sidebar />

      <div className="profback">
      <main className="p-5">
        <div className="container">
          <center><h1>Student Profile</h1></center><br></br>
          <h3></h3>
          {student ? (
            <div className="row row-cols-1 row-cols-md-2 g-4">
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Name</h5>
                    <p className="card-text">{student.sfullname}</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Name with initials</h5>
                    <p className="card-text">{student.snamewithini}</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Address</h5>
                    <p className="card-text">{student.saddress}</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Date of Birth</h5>
                    <p className="card-text">{student.sdob}</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">NIC</h5>
                    <p className="card-text">{student.snic}</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Gender</h5>
                    <p className="card-text">{student.sgender}</p>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-center">
            <button className="btn btn-primary" onClick={handleUpdate}>
               Update
            </button>
            </div>
            <div className="d-flex justify-content-center">
            <button className="btn btn-danger" onClick={handleDelete}>
               Delete
            </button>
            </div>

              {/* Add more student details as needed */}
            </div>
          ) : (
            <p>Loading student profile...</p>
          )}
        </div>
      </main>
      </div>
    </div>
  </div>
</section>


  );
};

export default StudentProfile;
