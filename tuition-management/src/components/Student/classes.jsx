import React, {useEffect, useState} from 'react';
import Apiurl from '../Apiurl';

import Sidebar from './StudentSidebar';
import Dashhead from './Dashhead';
import axios from 'axios';


export default function DisableElevation() {

  const [courses, setCourses] = useState([]);

  const getcou = async (e) => {
    try {
      const response = await axios.get(`${Apiurl}/coursedata`);
      setCourses(response.data);
    } catch (error) {
      console.log("error in getting data")
    }
  }

  useEffect(() => {
    getcou();
  }, [])

  return (
    <section>
      {/* <!-- Dashboard --> */}
      <div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">

        <Sidebar />


        {/* <!-- Main content --> */}
        <div class="h-screen flex-grow-1 overflow-y-lg-auto">

          {/* <!-- Header --> */}
          <Dashhead />

          <main>
            <div className='container'>
              <div className="row mt-3 mb-3">
                <h2>Classess</h2>
              </div>

              <div className="row mb-3 mt-3">
                <div className="col-sm-3">

                  {courses.map((course)=>
                  
                    <div class="card">
                      <img src={course.coursebanner} class="card-img-top" alt="..." />
                        <div class="card-body">
                          <h5 class="card-title">{course.coursename}</h5>
                          <p class="card-text">{course.courseprice}</p>
                          <a href="#s" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                  )}

                </div>
              </div>

            </div>
          </main>


        </div>
      </div>
    </section>
  );

}
