import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Apiurl from '../Apiurl';
import Sidebar from './AdminSidebar';
import Dashhead from './Dashhead';

const AddTeacher = () => {
  const [t_userid, setTeacherId] = useState("");
  const [t_fullname, setFullName] = useState("");
  const [t_address, setAddress] = useState("");
  const [t_gender, setGender] = useState("");
  const [t_nic, setNic] = useState("");
  const [t_education, setEducation] = useState("");
  const [t_dis, setDescription] = useState("");
  const [succ, setsucc] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  // Register user
  const addTeacher = async (e) => {
    e.preventDefault();

    const validationErrors = {};

    // register validation
    if (t_userid.trim() === "") {
      validationErrors.teacherid = "Teacher ID is required";
    }
    if (t_userid.trim() === "") {
      validationErrors.fullname = "Full Name is required";
    }
    if (t_address.trim() === "") {
      validationErrors.address = "Address is required";
    }
    if (!t_gender) {
      validationErrors.gender = "Gender is required";
    }
    if (t_nic.trim() === "") {
      validationErrors.nic = "NIC is required";
    }
    if (t_education.trim() === "") {
      validationErrors.education = "Education is required";
    }
    if (t_dis.trim() === "") {
        validationErrors.description = "Description is required";
      }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        await axios.post(`${Apiurl}/teacher/`, {
          t_userid,
          t_fullname,
          t_address,
          t_gender,
          t_nic,
          t_education,
          t_dis
        });

        navigate("/addteacher");
        setsucc("Teacher added success!");
        setErrors(false)
        
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <section>
      {/* <!-- Dashboard --> */}
      <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
        <Sidebar />

        {/* <!-- Main content --> */}
        <div className="h-screen flex-grow-1 overflow-y-lg-auto">
          {/* <!-- Header --> */}
          <Dashhead />

          {/* <!-- Main --> */}
          <main className="py-6 bg-surface-secondary">
            <div className="container">
              <h2>Add Teachers</h2>
              {succ.length > 0 &&
                                        <>
                                            <div class="alert alert-success alert-dismissible fade show">
                                                
                                                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                                                    <strong>Success!</strong> {succ}
                                            </div>
                                        </>
                                    }

              <div className="row mt-5">
                <div className="col-sm-8 debox">
                  <form onSubmit={addTeacher}>
                    <div className="mb-3 mt-3">
                      <label className="form-label">Teacher ID:</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Teacher ID"
                        value={t_userid}
                        onChange={(e) => setTeacherId(e.target.value)}
                      />
                      {errors.teacherid && <p style={{ color: 'red' }} className="error">{errors.teacherid}</p>}
                    </div>

                    <div className="mb-3 mt-3">
                      <label className="form-label">Teacher Full Name:</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Teacher Full Name"
                        value={t_fullname}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                      {errors.fullname && <p style={{ color: 'red' }} className="error">{errors.fullname}</p>}
                    </div>

                    <div className="mb-3 mt-3">
                      <label className="form-label">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter address"
                        value={t_address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                      {errors.address && <p style={{ color: 'red' }} className="error">{errors.address}</p>}
                    </div>

                    <div className="mb-3 mt-3">
                      <label className="form-label">Gender</label><br />
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          id="male"
                          value="male"
                          checked={t_gender === "male"}
                          onChange={(e) => setGender(e.target.value)}
                        />
                        <label className="form-check-label" htmlFor="male">Male</label>
                      </div>
                      <br />
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          id="female"
                          value="female"
                          checked={t_gender === "female"}
                          onChange={(e) => setGender(e.target.value)}
                        />
                        <label className="form-check-label" htmlFor="female">Female</label>
                      </div>
                      {errors.gender && <p style={{ color: 'red' }} className="error">{errors.gender}</p>}
                    </div>

                    <br /><hr />
                    <h3>Personal Information</h3>
                    <br />

                    <div className="mb-3 mt-3">
                      <label className="form-label">NIC:</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter National Identity Card Number"
                        value={t_nic}
                        onChange={(e) => setNic(e.target.value)}
                      />
                      {errors.nic && <p style={{ color: 'red' }} className="error">{errors.nic}</p>}
                    </div>

                    <div className="mb-3 mt-3">
                      <label className="form-label">Education:</label>
                      <textarea
                        className="form-control"
                        placeholder="Enter education qualifications"
                        value={t_education}
                        onChange={(e) => setEducation(e.target.value)}
                      ></textarea>
                      {errors.education && <p style={{ color: 'red' }} className="error">{errors.education}</p>}
                    </div>

                    <div className="mb-3 mt-3">
                      <label className="form-label">Description:</label>
                      <textarea
                        className="form-control"
                        placeholder="Enter some details"
                        value={t_dis}
                        onChange={(e) => setDescription(e.target.value)}
                      ></textarea>
                       {errors.description && <p style={{ color: 'red' }} className="error">{errors.description}</p>}
                    </div>

                    <div className="mb-5 mt-5">
                      <button type="submit" className="debtn w-100">Submit</button>
                    </div>
                  </form>
                  {errors.server && <p style={{ color: 'red' }} className="error">{errors.server}</p>}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  )
}

export default AddTeacher;
