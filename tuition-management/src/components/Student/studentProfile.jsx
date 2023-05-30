import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentProfile = () => {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchStudentProfile = async () => {
      try {
        const response = await axios.get('/Apiurl/students/profile/1'); // Replace with your API endpoint to retrieve student profile by ID
        setStudent(response.data);
      } catch (error) {
        console.log('Error fetching student profile:', error);
      }
    };

    fetchStudentProfile();
  }, []);

  return (
    <div>
      <h1>Student Profile</h1>
      {student ? (
        <div>
          <p>Name: {student.name}</p>
          <p>Email: {student.email}</p>
          <p>Address: {student.address}</p>
          {/* Add more student details as needed */}
        </div>
      ) : (
        <p>Loading student profile...</p>
      )}
    </div>
  );
};

export default StudentProfile;
