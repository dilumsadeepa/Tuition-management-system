import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import Apiurl from '../Apiurl';
import Sidebar from './AdminSidebar';
import Dashhead from './Dashhead';

const AddTeacherDetails = () => {
  const [t_userid, setTeacherId] = useState("");
  const [t_fullname, setFullName] = useState("");
  const [t_address, setAddress] = useState("");
  const [t_gender, setGender] = useState("");
  const [t_nic, setNic] = useState("");
  const [t_education, setEducation] = useState("");
  const [t_dis, setDescription] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get('email');

  useEffect(() => {
    const fetchTeacherId = async () => {
      try {
        const response = await axios.get(`${Apiurl}/users/${email}`);
        const id = response.data.id;
        console.log(response)
        setTeacherId(id);
      } catch (error) {
        console.log(error);
      }
    };

    if (email) {
      fetchTeacherId();
    }
  }, [email]);

  // Register user
  const addTeacher = async (e) => {
    e.preventDefault();

    // Register validation
    const validationErrors = {};
    if (t_userid === "") {
      validationErrors.t_userid = "Teacher ID is required";
    }
    if (t_fullname === "") {
      validationErrors.t_fullname = "Full Name is required";
    }
    if (t_address === "") {
      validationErrors.t_address = "Address is required";
    }
    if (t_gender === "") {
      validationErrors.t_gender = "Gender is required";
    }
    if (t_nic === "") {
      validationErrors.t_nic = "NIC is required";
    }
    if (t_education === "") {
      validationErrors.t_education = "Education is required";
    }
    if (t_dis === "") {
      validationErrors.t_dis = "Description is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        await axios.post(`${Apiurl}/teacher`, {
          t_userid,  
          t_fullname,
          t_address,
          t_gender,
          t_nic,
          t_education,
          t_dis
        });

        navigate("/addteacher");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <section>
      {/* Dashboard */}
      <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
        <Sidebar />

        {/* Main content */}
        <div className="h-screen flex-grow-1 overflow-y-lg-auto">
          {/* Header */}
          <Dashhead />

          {/* Main */}
          <main className="py-6 bg-surface-secondary">
            <div className="container">
              <h2>Add Teachers</h2>

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
                      {errors.t_userid && <p className="error">{errors.t_userid}</p>}
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
                      {errors.t_fullname && <p style={{ color: 'red' }} className="error">{errors.t_fullname}</p>}
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
                      {errors.t_address && <p style={{ color: 'red' }} className="error">{errors.t_address}</p>}
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
                          onChange={() => setGender("male")}
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
                          onChange={() => setGender("female")}
                        />
                        <label className="form-check-label" htmlFor="female">Female</label>
                      </div>
                      {errors.t_gender && <p style={{ color: 'red' }} className="error">{errors.t_gender}</p>}
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
                      {errors.t_nic && <p style={{ color: 'red' }} className="error">{errors.t_nic}</p>}
                    </div>
                    <div className="mb-3 mt-3">
                      <label className="form-label">Education:</label>
                      <textarea
                        className="form-control"
                        placeholder="Enter education qualifications"
                        value={t_education}
                        onChange={(e) => setEducation(e.target.value)}
                      ></textarea>
                      {errors.t_education && <p style={{ color: 'red' }} className="error">{errors.t_education}</p>}
                    </div>

                    <div className="mb-3 mt-3">
                      <label className="form-label">Description:</label>
                      <textarea
                        className="form-control"
                        placeholder="Enter some details"
                        value={t_dis}
                        onChange={(e) => setDescription(e.target.value)}
                      ></textarea>
                      {errors.t_dis && <p style={{ color: 'red' }} className="error">{errors.t_dis}</p>}
                    </div>

                    <div className="mb-5 mt-5">
                      <button type="submit" className="debtn w-100">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}

export default AddTeacherDetails;
