import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Apiurl from '../Apiurl';
import { useCookies } from 'react-cookie';

const ViewMyClass = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [cookies, setCookie] = useCookies(['user']); 
  console.log(cookies.id);

  useEffect(() => {
    // Assuming you have an endpoint to fetch the enrolled courses for the logged-in student
    const fetchEnrolledCourses = async () => {
      try {
        const response = await axios.get(`${Apiurl}/mystucourse/${cookies.id}`); // Replace with the actual API endpoint to fetch enrolled courses
        setEnrolledCourses(response.data);
        console.log(response.data);
      } catch (error) {
        console.log('Error fetching enrolled courses:', error);
      }
    };

    fetchEnrolledCourses();
  }, []);

  return (
    <div className="container">
        
      <div className="row mt-3">
        {enrolledCourses.map((course) => (
          <div className="col-md-4 mb-4" key={course.id}>
            <div className="card">
              <img src={course.coursebanner} className="card-img-top" alt="Course Banner" style={{ height: '200px' }} />
              <div className="card-body">
                <h5 className="card-title">{course.coursename}</h5>
                <p className="card-text">Rs. {course.courseprice}</p>
                {/* Add more course details here as needed */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewMyClass;




