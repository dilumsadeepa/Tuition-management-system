import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Apiurl from '../Apiurl';
import Sidebar from './StudentSidebar';
import Dashhead from './Dashhead';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';

export default function DisableElevation() {
  let { id } = useParams();
  console.log("id passed: " + id)
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [cookies] = useCookies(['user']);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const getcou = async () => {
    try {
      const response = await axios.get(`${Apiurl}/course`);
      setCourses(response.data);
      setFilteredCourses(response.data);
    } catch (error) {
      console.log('Error in getting data:', error);
    }
  };

  const send = async (courseid) => {
    console.log("course id: " + courseid);
    console.log("user id: " + cookies.id);

    const data = {
      aprovel: '0',
      userId: cookies.id,
      courseId: courseid,
    };

    console.log(data);

    axios.post(`${Apiurl}/enrollcourse`, data)
      .then(res => {
        console.log(res);

        // Show a success SweetAlert
        Swal.fire({
          icon: 'success',
          title: 'Approval Requested',
          text: 'Your request has been sent for approval.',
          timer: 3000,
          timerProgressBar: true,
          showConfirmButton: false,
        });

        // Add the enrolled course to the local state
        setEnrolledCourses(prevCourses => [...prevCourses, courseid]);
      })
      .catch(err => {
        console.log(err);

        // Show an error SweetAlert
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: err.response.data.error,
          showConfirmButton: true,
        });
      });
  };

  useEffect(() => {
    getcou();
  }, []);

  //-------------
  const handleFilter = async (event) => {
    const value = event.target.value;
    console.log(value);
    try {
      if (value === 'all') {
        // If the "All" option is selected, fetch all courses
        const response = await axios.get(`${Apiurl}/coursedata`);
        setFilteredCourses(response.data);
        setCourses(response.data);
      } else {
        // If a specific subject is selected, fetch courses filtered by subject
        const response = await axios.get(`${Apiurl}/coursebysubject/${value}`);
        setFilteredCourses(response.data);
        setCourses(response.data);
        console.log(response.data);
      }
    } catch (error) {
      console.log('Error in getting filtered data:', error);
    }
  };
  //-----------------

  return (
    <section>
      <ToastContainer autoClose={3000} />

      <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
        <Sidebar />
        <div className="h-screen flex-grow-1 overflow-y-lg-auto">
          <Dashhead />

          <main>
            <div className="container">
              <div className="row mt-3 mb-3">
                <div className="d-flex align-items-center justify-content-between w-100">
                  <h2><b>Classes</b></h2>
                  <div className="filter-btn-wrapper">
                    <label htmlFor="subjectFilter" className="form-label">Filter by Subject:</label>
                    <select className="form-select filter-select" id="subjectFilter" onChange={handleFilter}>
                      <option value="all">All</option>
                      <option value="Technology">Technology</option>
                      <option value="Combined maths">Combined maths</option>
                      <option value="Biologyl">Biology</option>
                      <option value="Arts">Arts</option>
                      <option value="Commerce">Commerce</option>
                      <option value="Common">Common</option>
                      <option value="Grade11">Grade11</option>
                      <option value="Grade10">Grade10</option>
                      <option value="Grade9">Grade9</option>
                      <option value="Grade8">Grade8</option>
                      <option value="Grade7">Grade7</option>
                      <option value="Grade6">Grade6</option>

                    </select>
                    <br />
                    <Link to="/my-classes" className="btn btn-primary view-classes-btn">My Enrolled Classes</Link>
                  </div>
                </div>
              </div>

              <div className="row mb-3 mt-3">
                {filteredCourses.map((course) => (
                  <div className="col-sm-3" key={course.id}>
                    <div className="card">
                      <div className="card">
                        <img src={course.coursebanner} className="card-img-top" alt="..." style={{ height: '200px' }} />
                        <div className="card-body">
                          <h5 className="card-title">{course.coursename}</h5>
                          <p className="card-text">Rs.{course.courseprice}</p>
                          {/* Hide the Enroll button if the course is already enrolled */}
                          {!enrolledCourses.includes(course.id) ? (
                            <button type='button' className="btn btn-primary" onClick={() => send(course.id)}>Enroll</button>
                          ) : (
                            <button className="btn btn-primary" disabled>Approval Requested</button>
                          )}
                        </div>
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
