import React, { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import Apiurl from '../Apiurl';

const ForgotPasswordForm = () => {
    const [email, setEmail] = useState("");

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post(`${Apiurl}/forgot-password`, { email });
            Swal.fire({
                icon: 'success',
                title: 'Password Reset Email Sent',
                text: 'A password reset email has been sent to your email address.',
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Failed to send the password reset email. Please try again later.',
            });
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-4 rpsass">
                    <h2>Forgot Password</h2>
                    <form onSubmit={handleFormSubmit}>
                        <div className="mb-3 mt-5">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary" style={{width:'100%'}}>Send Password Reset Email</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPasswordForm;
