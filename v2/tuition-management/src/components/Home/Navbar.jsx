import React from 'react'
import { useCookies } from 'react-cookie';



function Navbar() {
const [cookies] = useCookies(['cookies.email']);
console.log(cookies.email);
  return (
        <nav className="navbar navbar-light sticky-top navbar-expand-lg bg-white clean-navbar" id="navbartop" style={{ marginTop: '0px', borderBottom: '3px #069dcc' }}>
        <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navcol-1">
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navcol-1" style={{ marginTop: '4px', marginBottom: '4px' }}>
            <div className="d-flex justify-content-center align-items-center">
                <img className="d-flex" src="../img/susipwin logo.jpg" alt='logo' width="110" height="62" style={{ marginTop: '8px', marginBottom: '8px' }} />
            </div>
            <ul className="navbar-nav ms-auto">
                <li className="nav-item d-xl-flex justify-content-xl-center align-items-xl-center">
                <a className="nav-link active" href="/" style={{ textAlign: 'center' }}>Home</a>
                </li>
                <li className="nav-item d-xl-flex justify-content-xl-center align-items-xl-center">
                <a className="nav-link" href="gallery" style={{ textAlign: 'center' }}>Gallery</a>
                </li>
                <li className="nav-item d-xl-flex justify-content-xl-center align-items-xl-center">
                <a className="nav-link" href="blogpostlist" style={{ textAlign: 'center' }}>Blog</a>
                </li>
                <li className="nav-item d-xl-flex justify-content-xl-center align-items-xl-center">
                <a className="nav-link" href="aboutus" style={{ textAlign: 'center' }}>About Us</a>
                </li>
                <li className="nav-item d-xl-flex justify-content-xl-center align-items-xl-center">
                <a className="nav-link" href="contactus" style={{ textAlign: 'center' }}>Contact Us</a>
                </li>
                {cookies.email && (
                    <li className="nav-item d-xl-flex justify-content-xl-center align-items-xl-center">
                    <a className="nav-link" href="logout" style={{ textAlign: 'center', marginBottom: '0px' }}>Log out</a>
                    </li>
                )}

                {!cookies.email && (
                <>
                <li className="nav-item d-xl-flex justify-content-xl-center align-items-xl-center">
                <a className="nav-link" href="login" style={{ textAlign: 'center', marginBottom: '0px' }}>Login</a>
                </li>
                <li className="nav-item d-xl-flex justify-content-xl-center align-items-xl-center">
                <a className="nav-link" href="register" style={{ textAlign: 'center', marginBottom: '0px' }}>Register</a>
                </li>
                </>
                )}
                
                <li className="nav-item d-flex d-xl-flex justify-content-center align-items-center justify-content-xl-center align-items-xl-center mobileprofile" style={{ paddingLeft: '40px' }}>
                <div className="nav-item dropdown" style={{ marginTop: '0px', paddingTop: '0px' }}>
                    <a className="dropdown-toggle border-1 shadow-sm" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" style={{ background: 'url("../img/close-up-oil-paints-brushes-palette.jpg") center / cover no-repeat', width: '44px', height: '44px', padding: '12px', borderRadius: '50%', border: '3.4px outset rgb(16,165,228)', margin: '0px', marginTop: '28px', marginBottom: '7px' }}></a>
                    <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Dashboard</a>
                    <a className="dropdown-item" href="#">Profile</a>
                    <a className="dropdown-item" href="#">Logout</a>
                    </div>
                </div>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar