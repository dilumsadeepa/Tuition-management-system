import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Apiurl from '../Apiurl';

const Auth = () =>{

    const[username, setUsername] = useState("");
    const[email, setEmail] = useState("");
    const[tel, setTel] = useState("");
    const[password, setPassword] = useState("");
    const[cpwd, setcpwd] = useState("");
    const role = 4;
    const[err, setErr] = useState("");
    const[loerr, setLoerr] = useState("");

    const navigate = useNavigate();

    const [cookies, setCookie] = useCookies(['user']);

    useEffect(() =>{
        if (cookies.user) {
            if (cookies.email !== "") {
                navigate("admin");
            }
        }
    })

    // Register user
    const registeruser = async(e) =>{
        e.preventDefault();

        // register validation
        if (username === "" || email === "" || tel === "" || password === "" || cpwd === "") {
            setErr("All Filds is Requierd");
        }else if (password !== cpwd) {
            setErr("Enter the Same passwords");
        }else if(tel.length !== 12 || !tel.includes("+94")){
            setErr("Phone number must have 12 caracters and start with +94");
        }else if(password.length < 8){
            setErr("Password must have at least 8 charectors")
        }else{
            try {
                await axios.post(`${Apiurl}/users/`,{
                   username,
                   email,
                   tel,
                   password,
                   role, 
                });
                loginuser();
            } catch (error) {
                console.log(error);
            }
        }

    }


    // login user
    const loginuser = async(e) =>{
        e.preventDefault();
        try {
            const response = await axios.get(`${Apiurl}/users/${email}`);
            if (response.data.password === password) {
                if (response.data.role === 1) {
                    setCookie('email', response.data.email, { path: '/' });
                    setCookie('username', response.data.username, { path: '/' });
                    setCookie('role', response.data.role, { path: '/' });
                    navigate("admin");
                }else{
                    console.log(response.data.role);
                }
            }else{
                setLoerr("Email or Password is does not match");
            }
        } catch (error) {
            console.log(error);
        }
    }


    // change the form
    const changereg = () =>{
        document.getElementById('register').style.display = "none";
        document.getElementById('login').style.display = "block";
        document.getElementById('l-btn').style.display ="none";
        document.getElementById('r-btn').style.display = "block";
    }

    const changelogin = () =>{
        document.getElementById('register').style.display = "block";
        document.getElementById('login').style.display = "none";
        document.getElementById('l-btn').style.display ="block";
        document.getElementById('r-btn').style.display = "none";
    }

    return(
        <div className='container-fluid auth-main'>
            <div className='row'>
                <div className='col-sm-3'></div>

                <div className='col-sm-6 auth-box'>


                    <div className='login' id='login'>
                        <h2>Login</h2>
                        <br/>
                        <p className='err-text'>{loerr}</p>
                        <form onSubmit={loginuser}>
                            <div className="mb-3 mt-3">
                                <label for="email" className="form-label">Email:</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    id="email" 
                                    placeholder="Enter email" 
                                    name="email"
                                    value={email} 
                                    onChange={(e) =>setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label for="pwd" className="form-label">Password:</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    id="pwd" 
                                    placeholder="Enter password" 
                                    name="pswd" 
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                            </div>
                            <div className="form-check mb-3">
                                <label className="form-check-label">
                                <input 
                                    className="form-check-input" 
                                    type="checkbox" 
                                    name="remember" 
                                /> 
                                Remember me
                                </label>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                        <br></br>
                        <div className='auth-btn'>
                            <p>If you do not have a account  -  <span onClick={changelogin} className="link-btn">Register in the System</span></p>
                        </div>
                    </div>

                    <div className='register' id='register'>
                        <h2>Register</h2>
                        <br/>
                        <p className='err-text'>{err}</p>
                        <form onSubmit={registeruser}>

                            <div className="mb-3 mt-3">
                                <label for="username" className="form-label">UserName:</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="username" 
                                    placeholder="Enter UserName" 
                                    name="username" 
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>

                            <div className="mb-3 mt-3">
                                <label for="email" className="form-label">Email:</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    id="email" 
                                    placeholder="Enter email" 
                                    name="email" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="mb-3 mt-3">
                                <label for="tel" className="form-label">Whatsapp Mobile NUmber:</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="tel" 
                                    placeholder="Enter Whatsapp number" 
                                    name="tel" 
                                    value={tel}
                                    onChange={(e) => setTel(e.target.value)}
                                />
                            </div>

                            <div className="mb-3">
                                <label for="pwd" className="form-label">Password:</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    id="pwd" 
                                    placeholder="Enter password" 
                                    name="pswd" 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <div className="mb-3">
                                <label for="pwd" className="form-label">Conferm Password:</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    id="cpwd" 
                                    placeholder="Enter password" 
                                    name="cpwd" 
                                    value={cpwd}
                                    onChange={(e)=>setcpwd(e.target.value)}
                                />
                            </div>

                            
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                        <br></br>
                        <div className='auth-btn'>
                            <p>If you have an account  -  <span onClick={changereg} className="link-btn">Login to your account</span></p> 
                        </div>
                    </div>

                </div>

                <div className='col-sm-3'></div>
            </div>
            
        </div>
	
    )
}


export default Auth;