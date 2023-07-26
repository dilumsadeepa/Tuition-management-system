import React, { useEffect, useState } from "react";
import axios from "axios";
import Apiurl from '../Apiurl';
import ReactAppUrl from '../ReactAppUrl';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import Logout from "../User/Logout";
import { Link } from 'react-router-dom';



const Sidebar = () => {

    const [noticesCount, setNoticesCount] = useState(0);
    const [cookies] = useCookies(['user']);
    // console.log('role', cookies.role);

    const navigate = useNavigate();

    const getNoticesCount = async () => {
        try {
            let api_url;
            if (cookies.role === '1') {
                api_url = '/notice/count/';
            } else {
                api_url = `/notices/count/${cookies.role}`;
            }
            const response = await axios.get(`${Apiurl}${api_url}`);
            setNoticesCount(response.data.count);
        } catch (error) {
            console.log(error.message);
        }
    };

    const protectrole = () => {
        if (cookies.role !== '1') {
            navigate("/login");
        } else {
            getNoticesCount();
        }
    }

    useEffect(() => {
        protectrole();

    });


    return (
        <>
            {/* <!-- Vertical Navbar --> */}
            <nav class="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-dark bg-dark border-bottom border-bottom-lg-0 border-end-lg" id="navbarVertical">
                <div class="container-fluid">
                    {/* <!-- Toggler --> */}
                    <button class="navbar-toggler ms-n2" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    {/* <!-- Brand --> */}
                    {cookies.role === '5' ? <a class="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0" href="/parent"><img className='alogo' src={`${ReactAppUrl}/img/susipwin logo.jpg`} alt="logo" /></a> : cookies.role === '4' ? <a class="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0" href="/studashboard"><img className='alogo' src={`${ReactAppUrl}/img/susipwin logo.jpg`} alt="logo" /></a> : cookies.role === '3' ? <a class="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0" href="/teacher"><img className='alogo' src={`${ReactAppUrl}/img/susipwin logo.jpg`} alt="logo" /></a> : cookies.role === '2' ? <a class="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0" href="/staff"><img className='alogo' src={`${ReactAppUrl}/img/susipwin logo.jpg`} alt="logo" /></a> : <a class="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0" href="/admin"><img className='alogo' src={`${ReactAppUrl}/img/susipwin logo.jpg`} alt="logo" /></a>}
                    {/* <a class="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0" href="/parent"><img className='alogo' src={`${ReactAppUrl}/img/susipwin logo.jpg`} alt="logo" /></a> */}
                    {/* <!-- User menu (mobile) --> */}
                    <div class="navbar-user d-lg-none">
                        {/* <!-- Dropdown --> */}
                        <div class="dropdown">
                            {/* <!-- Toggle --> */}
                            <a href="#s" id="sidebarAvatar" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <div class="avatar-parent-child">
                                    <img alt="Placeholder"
                                        src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                                        class="avatar avatar- rounded-circle" />
                                    <span class="avatar-child avatar-badge bg-success"></span>
                                </div>
                            </a>
                            {/* <!-- Menu --> */}
                            <div class="dropdown-menu dropdown-menu-end" aria-labelledby="sidebarAvatar">
                                <a href="#s" class="dropdown-item">Profile</a>
                                <a href="#s" class="dropdown-item">Settings</a>
                                <a href="#s" class="dropdown-item">Billing</a>
                                <hr class="dropdown-divider" />
                                <a href="#s" class="dropdown-item">Logout</a>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Collapse --> */}
                    <div class="collapse navbar-collapse" id="sidebarCollapse">
                        {/* <!-- Navigation --> */}
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/admin">
                                    <i class="bi bi-house"></i> Dashboard
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/adminstudent">
                                    <i class='bx bx-user'></i> Students
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/adminteacher">
                                    <i class="fa-solid fa-chalkboard-user"></i>Teachers
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/course">
                                    <i class="bi bi-book-half"></i> Courses
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/salarypresentage">
                                    <i class="bi bi-cash-stack"></i> Salary
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/income">
                                    <i class="bi bi-cash-stack"></i> Income
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/paymentrecords">
                                    <i class="bi bi-cash-stack"></i> Payment Record
                                </a>
                            </li>
                            {/* <li class="nav-item">
                                <a class="nav-link" href="#s">
                                    <i class="bi bi-chat"></i> Messages
                                    <span class="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto">6</span>
                                </a>
                            </li> */}
                            <li class="nav-item">
                                <a class="nav-link" href="/notice">
                                    <i class="fa-regular fa-note-sticky"></i> Notices
                                    <span class="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto">{noticesCount}</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/newtimetable">
                                    <i class="fa-solid fa-table-cells"></i> Timetable
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="/gallery">
                                    <i class="fa-solid fa-table-cells"></i> Gallery
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="/adduser">
                                    <i class="bi bi-bookmarks"></i> Add User
                                </a>
                            </li>

                            {/* <li class="nav-item">
                                <a class="nav-link" href="#s">
                                    <i class="bi bi-people"></i> Users
                                </a>
                            </li> */}
                        </ul>
                        {/* <!-- Divider --> */}
                        <hr class="navbar-divider my-5 opacity-20" />
                        {/* <!-- Navigation --> */}
                        {/* <ul class="navbar-nav mb-md-4">
                            <li>
                                <div class="nav-link text-xs font-semibold text-uppercase text-muted ls-wide" href="#">
                                    Contacts
                                    <span class="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-4">13</span>
                                </div>
                            </li>
                            <li>
                                <a href="#s" class="nav-link d-flex align-items-center">
                                    <div class="me-4">
                                        <div class="position-relative d-inline-block text-white">
                                            <img alt="Placeholder" 
                                                src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" 
                                                class="avatar rounded-circle" />
                                            <span class="position-absolute bottom-2 end-2 transform translate-x-1/2 translate-y-1/2 border-2 border-solid border-current w-3 h-3 bg-success rounded-circle"></span>
                                        </div>
                                    </div>
                                    <div>
                                        <span class="d-block text-sm font-semibold">
                                            Marie Claire
                                        </span>
                                        <span class="d-block text-xs text-muted font-regular">
                                            Paris, FR
                                        </span>
                                    </div>
                                    <div class="ms-auto">
                                        <i class="bi bi-chat"></i>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#s" class="nav-link d-flex align-items-center">
                                    <div class="me-4">
                                        <div class="position-relative d-inline-block text-white">
                                            <span class="avatar bg-soft-warning text-warning rounded-circle">JW</span>
                                            <span class="position-absolute bottom-2 end-2 transform translate-x-1/2 translate-y-1/2 border-2 border-solid border-current w-3 h-3 bg-success rounded-circle"></span>
                                        </div>
                                    </div>
                                    <div>
                                        <span class="d-block text-sm font-semibold">
                                            Michael Jordan
                                        </span>
                                        <span class="d-block text-xs text-muted font-regular">
                                            Bucharest, RO
                                        </span>
                                    </div>
                                    <div class="ms-auto">
                                        <i class="bi bi-chat"></i>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#s" class="nav-link d-flex align-items-center">
                                    <div class="me-4">
                                        <div class="position-relative d-inline-block text-white">
                                            <img alt="..." src="https://images.unsplash.com/photo-1610899922902-c471ae684eff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" 
                                            class="avatar rounded-circle" />
                                            <span class="position-absolute bottom-2 end-2 transform translate-x-1/2 translate-y-1/2 border-2 border-solid border-current w-3 h-3 bg-danger rounded-circle"></span>
                                        </div>
                                    </div>
                                    <div>
                                        <span class="d-block text-sm font-semibold">
                                            Heather Wright
                                        </span>
                                        <span class="d-block text-xs text-muted font-regular">
                                            London, UK
                                        </span>
                                    </div>
                                    <div class="ms-auto">
                                        <i class="bi bi-chat"></i>
                                    </div>
                                </a>
                            </li>
                        </ul> */}
                        {/* <!-- Push content down --> */}
                        <div class="mt-auto"></div>
                        {/* <!-- User (md) --> */}
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to={`/profile/${cookies.id}`} className='nav-link'><i class="bi bi-person-square"></i> Account</Link>

                            </li>
                            <li class="nav-item">
                                <Logout />

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Sidebar;