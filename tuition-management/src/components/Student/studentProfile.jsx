import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Apiurl from '../Apiurl';

import Sidebar from './StudentSidebar';
import Dashhead from './Dashhead';

///Apiurl/students/profile/1

const StudentProfile = () => {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchStudentProfile = async () => {
      try {
        const response = await axios.get(`${Apiurl}/student/1`); // Replace with your API endpoint to retrieve student profile by ID
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
    <main>
    <div>
      <h1>Student Profile</h1>
      {student ? (
        <div>
          <p>Name: {student.sfullname}</p>
          <p>name with initials: {student.snamewithini}</p>
          <p>Address: {student.saddress}</p>
          <p>Date of birth: {student.sdob}</p>
            <p>snic: {student.snic}</p>
          <p>Gender: {student.sgender}</p>
          {/* Add more student details as needed */}
        </div>
        
      ) : (
        <p>Loading student profile...</p>
      )}
    </div>
    </main>
    </div>
    </div>
    </section>
  );
};

export default StudentProfile;
