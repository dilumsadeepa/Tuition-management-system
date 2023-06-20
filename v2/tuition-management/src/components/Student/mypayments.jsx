import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Apiurl from '../Apiurl';
import Sidebar from './StudentSidebar';
import Dashhead from './Dashhead';
import axios from 'axios';

export default function DisableElevation() {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);

  const getcou = async () => {
    try {
      const response = await axios.get(`${Apiurl}/coursedata`);
      setCourses(response.data);
      setFilteredCourses(response.data);
    } catch (error) {
      console.log('Error in getting data:', error);
    }
  };

  useEffect(() => {
    getcou();
  }, []);

  

  return (
    <section>
      <div className="h-screen flex-grow-1 overflow-y-lg-auto">
        <Dashhead />

        <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
          <Sidebar />

          <main>
            <div className="container">
              

              <div className="row mb-3 mt-3">
                {filteredCourses.map((course) => (
                  <div className="col-sm-3" key={course.id}>
                    <div className="card">
                      <img src={course.coursebanner} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">{course.coursename}</h5>
                        <p className="card-text">{course.courseprice}</p>
                        <Link to={`/EnrollPage/${course.id}`} className="btn btn-primary">Enroll</Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}
