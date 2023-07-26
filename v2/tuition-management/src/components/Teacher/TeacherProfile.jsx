import React, { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Apiurl from '../Apiurl';
import TeacherSidebar from "./TeacherSidebar";
import Dashhead from './Dashhead';
import { useCookies } from 'react-cookie';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const TeacherProfile = () => {
  const [username, setUsername] = useState("");
  const [fullname,setFullname]=useState("");
  const [email, setEmail] = useState("");
  const [nic,setNic]=useState("");
  const [tel, setTel] = useState("");
  const [password, setPassword] = useState("");
  const role = 3;
  const [errors, setErrors] = useState({});
  const [succ, setSucc] = useState("");
  const navigate = useNavigate();

  const [cookies] = useCookies(['id']);
  const [profile,setProfile]=useState("");
  const [showPassword, setShowPassword] = useState(false);


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
        await axios.patch(`${Apiurl}/users/${cookies.id}`, {
          username,
          fullname,
          nic,
          email,
          tel,
          password,
          role
        });

        window.location.href = "/teacherprofile";
        setSucc("Profile updated successfully!");
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

  const getProfile = async (teacherId) => {
    try {
        const response = await axios.get(`${Apiurl}/users/${cookies.email}`);
        setProfile(response.data);
        console.log(response.data);
        setUsername(response.data.username || "");
        setEmail(response.data.email || "");
        setTel(response.data.tel || "");
        setFullname(response.data.fullname||"");
        setNic(response.data.nic || "");
        setPassword(response.data.password ||"");
    } catch (error) {
        console.log("Error in getting data:", error.message);
    }
}

  useEffect(()=>{
    getProfile();
 },[])

  return (
    <section>
      {/* Dashboard */}
      <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
        <TeacherSidebar />

        {/* Main content */}
        <div className="h-screen flex-grow-1 overflow-y-lg-auto">
          {/* Header */}
          <Dashhead />

          {/* Main */}
          <main className="py-6 bg-surface-secondary">
            <div className="container">
              <h2>My Profile</h2>
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
                      <label className="form-label">User Name</label>
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
                      <label className="form-label">Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter User name"
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                      />
                      {errors.username && <p style={{ color: 'red' }} className="error">{errors.username}</p>}
                    </div>

                    <div className="mb-3 mt-3">
                      <label className="form-label">Email</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled
                      />
                      {errors.email && <p style={{ color: 'red' }} className="error">{errors.email}</p>}
                    </div>

                    <div className="mb-3 mt-3">
                      <label className="form-label">NIC</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter National Identity Card Number"
                        value={nic}
                        onChange={(e) => setNic(e.target.value)}
                      />
                      {errors.username && <p style={{ color: 'red' }} className="error">{errors.username}</p>}
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
  <div className="input-group">
    <input
      type={showPassword ? "text" : "password"}
      className="form-control"
      placeholder="Enter Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <button
      className="btn btn-outline-secondary"
      type="button"
      onClick={() => setShowPassword(!showPassword)}
    >
      <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} style={{ color: 'black' }}/>
    </button>
  </div>
  {errors.password && <p style={{ color: 'red' }} className="error">{errors.password}</p>}
</div>


                    <div className="mb-5 mt-5">
                      <button type="submit" className="debtn w-100">Update</button>
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

export default TeacherProfile;
