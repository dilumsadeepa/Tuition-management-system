import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentDetails = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch student data from the database
    const fetchStudents = async () => {
      try {
        const response = await axios.get('/apiurl/students'); // Replace with your API endpoint to retrieve student data
        setStudents(response.data);
      } catch (error) {
        console.log('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div>
      <h1>Student Details</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.address}</td>
              {/* Add more table cells based on the student properties */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentDetails;
