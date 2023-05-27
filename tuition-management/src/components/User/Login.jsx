import React, {useState, useEffect} from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Apiurl from '../Apiurl';


const Login = () => {

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[err, setErr] = useState("");

    const navigate = useNavigate();

    const [cookies, setCookie] = useCookies(['user']);

    useEffect(() =>{
        if (cookies.user) {
            if (cookies.email !== "") {
                navigate("/admin");
            }
        }
    })

    // login user
    const loginuser = async(e) =>{
        e.preventDefault();
        console.log("clicked");
        console.log(email+','+password);
        try {
            const response = await axios.get(`${Apiurl}/users/${email}`);
            if (response.data.password === password) {
                if (response.data.role === 1) {
                    setCookie('email', response.data.email, { path: '/' });
                    setCookie('username', response.data.username, { path: '/' });
                    setCookie('role', response.data.role, { path: '/' });
                    navigate("/admin");
                }else if(response.data.role===3){
                    navigate("/teacher");
                }
                else{
                    console.log(response.data.role);
                }
            }else{
                setErr("Email or Password is does not match");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div className="auth-page-wrapper pt-5">
            {/* <!-- page bg --> */}
            <div className="auth-one-bg-position auth-one-bg" id="auth-particles">
                {/* <div id="video-container">
                    <video autoplay="" loop="" muted="">
                        <source src="https://vod-progressive.akamaized.net/exp=1680439894~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4926%2F17%2F449630779%2F1975867773.mp4~hmac=122ac6c33f97ee109fcdf00669109117dfc7f8bf88ab0a03e1c4a15b7f889f1e/vimeo-prod-skyfire-std-us/01/4926/17/449630779/1975867773.mp4" type="video/mp4" />
                    </video>
                </div> */}
                {err.length > 0 && 
                    <div className="alert alert-danger alert-dismissible">
                        <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                        <strong>Error</strong> {err}
                    </div>
                }

                <div className="bg-overlay"></div>
                <div className="shape">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1440 120">
                        <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"></path>
                    </svg>
                </div>
                <canvas className="particles-js-canvas-el" width="1349" height="380" style={{width:'100%', height:'100%'}}></canvas>
            </div>

            {/* <!-- page content --> */}
            <div className="auth-page-content">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6 col-xl-5">
                            <div className="card mt-5 login-bg">
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <div className="d-inline-block auth-logo">
                                            <img src="https://document360.com/wp-content/uploads/2022/01/Ultimate-guide-to-writing-instructions-for-a-user-manual-Document360.png" alt="lobac" height={80} />
                                        </div>
                                        <h3 className="text-dark mt-3">Login to Your Account</h3>
                                    </div>

                                    <div className="p-2 mt-3">
                                        <div className="mb-3">
                                            <label className="form-label">Email</label>
                                            <input 
                                                type="email" 
                                                onChange={(e) => setEmail(e.target.value)} 
                                                className="form-control" 
                                                placeholder="Enter username" />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">Password</label>
                                            <div className="position-relative auth-pass-inputgroup mb-3">
                                                <input 
                                                    type="password" 
                                                    onChange={(e) => setPassword(e.target.value)} 
                                                    className="form-control pe-5 password-input" 
                                                    placeholder="Enter password" />

                                                <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button" id="password-addon"><i className="ri-eye-fill align-middle"></i></button>
                                            </div>
                                        </div>

                                       
                                       

                                        <div className="mt-4 mb-3">
                                            <input type="button" onClick={(e)=>loginuser(e)} value="Login" id="btnlogin" className="btn btn-primary w-100" />
                                        </div>
                                        <div className="mt-6">
                                            <label className="form-check-label">Do not have an account</label>
                                            <a href="/register" className="text-muted float-end">Register</a>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- card body --> */}
                            </div>
                            {/* <!-- card --> */}
                        </div>
                    </div>
                    {/* <!-- row --> */}
                </div>
                {/* <!-- container --> */}
            </div>
            {/* <!-- end page content --> */}
        </div>

    )
}



export default Login;