import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Apiurl from '../Apiurl';
import { useCookies } from 'react-cookie';
import Sidebar from './StudentSidebar';
import Dashhead from './Dashhead';

const ViewMyClass = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [cookies, setCookie] = useCookies(['user']);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      try {
        const response = await axios.get(`${Apiurl}/mystucourse/${cookies.id}`);
        setEnrolledCourses(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log('Error fetching enrolled courses:', error);
        setError('Error fetching enrolled courses. Please try again later.');
        setIsLoading(false);
      }
    };

    fetchEnrolledCourses();
  }, [cookies.id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Function to chunk the array into rows of 4 cards each
  const chunkArray = (arr, size) => {
    const chunkedArr = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArr.push(arr.slice(i, i + size));
    }
    return chunkedArr;
  };

  // Chunk the enrolledCourses array into rows of 4 cards each
  const coursesRows = chunkArray(enrolledCourses, 4);

  return (
    <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
      <Sidebar />
      <div className="h-screen flex-grow-1 overflow-y-lg-auto">
        <Dashhead />
        <div className="container">
          {coursesRows.map((row, rowIndex) => (
            <div className="row mt-3" key={rowIndex}>
              {row.map((course) => (
                <div className="col-md-3 mb-4" key={course.id}>
                  <div className="card">
                    <img
                      src={course.coursebanner}
                      className="card-img-top"
                      alt="Course Banner"
                      style={{ height: '200px' }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{course.coursename}</h5>
                      <p className="card-text">Rs. {course.courseprice}</p>
                      {/* Add more course details here as needed */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewMyClass;
