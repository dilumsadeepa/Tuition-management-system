import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Apiurl from '../Apiurl';
import Sidebar from './StudentSidebar';
import Dashhead from './Dashhead';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const EditStudentProfile = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [fullname, setFullname] = useState('');
    const [address, setAddress] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [nic, setNic] = useState('');
    const [edlevel, setEdlevel] = useState('');
    const [grade, setgrade] = useState('');
    const [errors, setErrors] = useState({});
    const [cookies, setCookie] = useCookies(['user']);

    const { id } = useParams();
    
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors = {};

        // Validate username
        if (!username.trim()) {
            newErrors.username = 'Username is required';
        }

        // Validate email
        if (!email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            newErrors.email = 'Invalid email format';
        }

        // Validate telephone
        if (!tel.trim()) {
            newErrors.telephone = 'Telephone is required';
        } else if (!/^[0-9]{10}$/.test(tel)) {
            newErrors.telephone = 'Invalid telephone number';
        }

        // Validate password
        if (!password.trim()) {
            newErrors.password = 'Password is required';
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters long';
        }

        // Validate role
        if (!role) {
            newErrors.role = 'Role is required';
        }

        // Set the validation errors
        setErrors(newErrors);

        // Return true if there are no validation errors
        return Object.keys(newErrors).length === 0;
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                await axios.patch(`${Apiurl}/users/${cookies.id}`, {
                    username,
                    email,
                    tel,
                    password,
                    role,
                    fullname,
                    address,
                    dob,
                    gender,
                    nic,
                    edlevel,
                    grade,
                });
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Profile updated successfully',
                });
                // Clear form fields on successful submission
                setUsername('');
                setEmail('');
                setTel('');
                setPassword('');
                setRole('');
                setFullname('');
                setAddress('');
                setDob('');
                setGender('');
                setNic('');
                setEdlevel('');
                navigate(`/profile`);

            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: 'Something went wrong' + error,
                });
                console.log(error);
            }
        }
    };

    const getstu = async (e) => {

        try {
            const response = await axios.get(`${Apiurl}/profile/${cookies.id}`);
            setUsername(response.data.username);
            setEmail(response.data.email);
            setTel(response.data.tel);
            setPassword(response.data.password);
            setRole(response.data.role);
            setFullname(response.data.fullname);
            setAddress(response.data.address);
            setDob(response.data.dob);
            setGender(response.data.gender);
            setNic(response.data.nic);
            setEdlevel(response.data.edlevel);
            setgrade(response.data.grade);

        } catch (error) {
            console.log("error in getting data");
        }

    }

    useEffect(() => {
        getstu();
    }, [])

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
                            <div className="row mt-5 mb-5">
                                <div className="col-sm-12">
                                    <h2>Edit Profile</h2>
                                </div>
                            </div>

                            {/* User registration form */}
                            <div className="row mt-5 mb-5">
                                <div className="col-sm-2"></div>

                                <div className="col-sm-8 debox">
                                    <form onSubmit={handleSubmit}>
                                        {/* Add form inputs for user details */}
                                        {/* Username */}
                                        <div className="mb-3 mt-3">
                                            <label className="form-label">Username:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter the username"
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                                required
                                            />
                                            {/* Display validation error for username */}
                                            {errors.username && <div className="error">{errors.username}</div>}
                                        </div>

                                        {/* Full Name */}
                                        <div className="mb-3 mt-3">
                                            <label className="form-label">Full Name:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter the full name"
                                                value={fullname}
                                                onChange={(e) => setFullname(e.target.value)}
                                            />
                                            {/* Display validation error for role */}
                                            {errors.fullname && <div className="error">{errors.fullname}</div>}
                                        </div>

                                        {/* Email */}
                                        <div className="mb-3 mt-3">
                                            <label className="form-label">Email:</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Enter the email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                            {/* Display validation error for email */}
                                            {errors.email && <div className="error">{errors.email}</div>}
                                        </div>

                                        {/* Telephone */}
                                        <div className="mb-3 mt-3">
                                            <label className="form-label">Telephone:</label>
                                            <input
                                                type="tel"
                                                className="form-control"
                                                placeholder="Enter the telephone number"
                                                value={tel}
                                                onChange={(e) => setTel(e.target.value)}
                                                required
                                            />
                                            {/* Display validation error for telephone */}
                                            {errors.telephone && <div className="error">{errors.telephone}</div>}
                                        </div>

                                        {/* Password */}
                                        <div className="mb-3 mt-3">
                                            <label className="form-label">Password:</label>
                                            <div className="input-group">
                                                <input
                                                    type={showPassword ? 'text' : 'password'}
                                                    className="form-control"
                                                    placeholder="Enter the password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    required
                                                />
                                                <button
                                                    className="btn btn-outline-secondary"
                                                    type="button"
                                                    style={{color:'black'}}
                                                    onClick={() => setShowPassword((prevShowPassword) => !prevShowPassword)}
                                                >
                                                    {showPassword ? 'Hide' : 'Show'}
                                                </button>
                                            </div>
                                            {/* Display validation error for password */}
                                            {errors.password && <div className="error">{errors.password}</div>}
                                        </div>

                                        {/* Role */}
                                        {/* <div className="mb-3 mt-3">
                                            <label className="form-label">Role:</label>
                                            <select
                                                className="form-control"
                                                value={role}
                                                onChange={(e) => setRole(e.target.value)}
                                                required
                                            >
                                                <option value="">Select a role</option>
                                                <option value="1">Admin</option>
                                                <option value="2">Staff</option>
                                                <option value="3">Teacher</option>
                                                <option value="4">Student</option>
                                                <option value="5">Parent</option>
                                            </select>
                                            {/* Display validation error for role 
                                            {errors.role && <div className="error">{errors.role}</div>}
                                        </div> */}



                                        {/* Address */}
                                        <div className="mb-3 mt-3">
                                            <label className="form-label">Address:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter the address"
                                                value={address}
                                                onChange={(e) => setAddress(e.target.value)}
                                            />
                                            {/* Display validation error for role */}
                                            {errors.address && <div className="error">{errors.address}</div>}
                                        </div>

                                        {/* Date of Birth */}
                                        <div className="mb-3 mt-3">
                                            <label className="form-label">Date of Birth:</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                value={dob}
                                                onChange={(e) => setDob(e.target.value)}
                                            />
                                            {/* Display validation error for role */}
                                            {errors.dob && <div className="error">{errors.dob}</div>}
                                        </div>

                                        {/* Gender */}
                                        <div className="mb-3 mt-3">
                                            <label className="form-label">Gender:</label>
                                            <select
                                                className="form-control"
                                                value={gender}
                                                onChange={(e) => setGender(e.target.value)}
                                            >
                                                <option value="">Select a gender</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>

                                            </select>
                                            {/* Display validation error for role */}
                                            {errors.gender && <div className="error">{errors.gender}</div>}
                                        </div>

                                        {/* NIC */}
                                        <div className="mb-3 mt-3">
                                            <label className="form-label">NIC:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter the NIC"
                                                value={nic}
                                                onChange={(e) => setNic(e.target.value)}
                                            />
                                            {/* Display validation error for role */}
                                            {errors.nic && <div className="error">{errors.nic}</div>}
                                        </div>

                                        {/* Education Level */}
                                        <div className="mb-3 mt-3">
                                            <label className="form-label">Education Level:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter the education level"
                                                value={edlevel}
                                                onChange={(e) => setEdlevel(e.target.value)}
                                            />
                                            {/* Display validation error for role */}
                                            {errors.edlevel && <div className="error">{errors.edlevel}</div>}
                                        </div>

                                        <div className="mb-3 mt-3">
                                            <label className="form-label">grade:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter the grade"
                                                value={grade}
                                                onChange={(e) => setgrade(e.target.value)}
                                                required
                                            />
                                            {/* Display validation error for username */}
                                            {errors.username && <div className="error">{errors.username}</div>}
                                        </div>

                                        


                                        <button type="submit" className="btn btn-primary">
                                            Edit Profile
                                        </button>
                                    </form>
                                </div>

                                <div className="col-sm-2"></div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </section>
    );
};

export default EditStudentProfile;
