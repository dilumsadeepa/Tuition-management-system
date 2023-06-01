import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Apiurl from '../Apiurl';
import Sidebar from './AdminSidebar';
import Dashhead from './Dashhead';

const AddTeacher = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [password, setPassword] = useState("");
  const role = 3;
  const [errors, setErrors] = useState({});
  const [succ, setSucc] = useState("");
  const navigate = useNavigate();

  // Register user
  const addTeacher = async (e) => {
    e.preventDefault();

    const validationErrors = {};

    // register validation
    if (username.trim() === "") {
      validationErrors.username = "User name is required";
    }
    if (email.trim() === "") {
      validationErrors.email = "Email is required";
    }
    if (tel.trim() === "") {
      validationErrors.tel = "Telephone number is required";
    }
    if (password.trim() === "") {
      validationErrors.password = "Password is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        await axios.post(`${Apiurl}/users/`, {
          username,
          email,
          tel,
          password,
          role
        });

        navigate(`/teacherdetails?email=${email}`);
        setSucc("Teacher added successfully!");
        setErrors({});
        setUsername("");
        setEmail("");
        setTel("");
        setPassword("");
      } catch (error) {
        console.log(error);
      }
    }
  }

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
              {succ.length > 0 && (
                <div className="alert alert-success alert-dismissible fade show">
                  <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                  <strong>Success!</strong> {succ}
                </div>
              )}

              <div className="row mt-5">
                <div className="col-sm-8 debox">
                  <form onSubmit={addTeacher}>
                    <div className="mb-3 mt-3">
                      <label className="form-label">User Name:</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter User name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                      {errors.username && <p style={{ color: 'red' }} className="error">{errors.username}</p>}
                    </div>

                    <div className="mb-3 mt-3">
                      <label className="form-label">Email:</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {errors.email && <p style={{ color: 'red' }} className="error">{errors.email}</p>}
                    </div>

                    <div className="mb-3 mt-3">
                      <label className="form-label">Telephone</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Phone number"
                        value={tel}
                        onChange={(e) => setTel(e.target.value)}
                      />
                      {errors.tel && <p style={{ color: 'red' }} className="error">{errors.tel}</p>}
                    </div>

                    <div className="mb-3 mt-3">
                      <label className="form-label">Password</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      {errors.password && <p style={{ color: 'red' }} className="error">{errors.password}</p>}
                    </div>

                    <div className="mb-5 mt-5">
                      <button type="submit" className="debtn w-100">Next</button>
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
