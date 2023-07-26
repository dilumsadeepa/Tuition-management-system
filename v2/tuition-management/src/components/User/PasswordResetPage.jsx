import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';
import Apiurl from '../Apiurl';
import { useNavigate } from 'react-router-dom';

const PasswordResetPage = () => {
    const { token } = useParams();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            Swal.fire({
                icon: 'error',
                title: 'Password Mismatch',
                text: 'Please make sure both passwords match.',
            });
            return;
        }

        try {
            await axios.post(`${Apiurl}/reset-password/${token}`, { password });
            Swal.fire({
                icon: 'success',
                title: 'Password Reset Successful',
                text: 'Your password has been reset successfully. You can now log in with your new password.',
            });
            navigate("/login");
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Failed to reset password. Please try again later.',
            });
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-4 rpsass">
                    <h2>Reset Password</h2>
                    <form onSubmit={handleFormSubmit}>
                        <div className="mb-3 mt-3">
                            <label className="form-label">New Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Confirm New Password</label>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <button type="submit" style={{width:'100%'}} className="btn btn-primary">Reset Password</button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default PasswordResetPage;
