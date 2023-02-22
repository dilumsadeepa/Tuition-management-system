import React from 'react'

const Register = () =>{

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
                        <form action="/action_page.php">
                            <div class="mb-3 mt-3">
                                <label for="email" class="form-label">Email:</label>
                                <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" />
                            </div>
                            <div class="mb-3">
                                <label for="pwd" class="form-label">Password:</label>
                                <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" />
                            </div>
                            <div class="form-check mb-3">
                                <label class="form-check-label">
                                <input class="form-check-input" type="checkbox" name="remember" /> Remember me
                                </label>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                        <br></br>
                        <div className='auth-btn'>
                            <p>If you do not have a account  </p><button className='btn btn-primary r-btn ml-4' id='r-btn' onClick={changelogin}>Register</button>
                        </div>
                    </div>

                    <div className='register' id='register'>
                        <h2>Register</h2>
                        <form action="/action_page.php">
                            <div class="mb-3 mt-3">
                                <label for="email" class="form-label">Email:</label>
                                <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" />
                            </div>
                            <div class="mb-3">
                                <label for="pwd" class="form-label">Password:</label>
                                <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" />
                            </div>
                            <div class="form-check mb-3">
                                <label class="form-check-label">
                                <input class="form-check-input" type="checkbox" name="remember" /> Remember me
                                </label>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                        <br></br>
                        <div className='auth-btn'>
                            <p>Login to your account </p> <button className='btn btn-primary l-btn' id='l-btn' onClick={changereg}>Login</button>
                        </div>
                    </div>

                </div>

                <div className='col-sm-3'></div>
            </div>
        </div>
	
    )
}


export default Register;