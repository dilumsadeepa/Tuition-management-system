import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Apiurl from '../Apiurl';
import Sidebar from './StudentSidebar';
import Dashhead from './Dashhead';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function DisableElevation() {
  let {id} = useParams();
  console.log("id passed: "+ id)
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [cookies] = useCookies(['id']);

  const getcou = async () => {
    try {
      const response = await axios.get(`${Apiurl}/coursedata`);
      setCourses(response.data);
      setFilteredCourses(response.data);
    } catch (error) {
      console.log('Error in getting data:', error);
    }
  };


  const send = async (courseid) => {
    console.log("couse iddddddd: " + courseid);
    console.log("user iddddddd: " + cookies.id)
    const data = {
      aprovel: '0',
      userId: cookies.id,
      courseId: courseid,  
    }
  

  
    console.log(data);
    axios.post(`${Apiurl}/enrollcourse` , data)
    .then(res => {
      console.log(res);
      toast.success("Approval Requested", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });

    })
    .catch(err => console.log(err));
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
      const response = await axios.get(`${Apiurl}/coursedata?courseStream=${value}`);
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
      <ToastContainer autoClose={3000}/>

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
                      <option value="Ordinary level">Ordinary level</option>
                      
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
                      <img src={course.coursebanner} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">{course.coursename}</h5>
                        <p className="card-text">Rs.{course.courseprice}</p>
                        {/* <p className="card-text">{course.coursesubject}</p> */}
                        <a className="btn btn-primary" onClick={() => send(course.id)}>Enroll</a>
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
