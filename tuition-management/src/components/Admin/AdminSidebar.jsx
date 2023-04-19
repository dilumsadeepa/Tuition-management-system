import React, {useRef, useEffect, useState} from "react";
import axios from "axios";
import Apiurl from '../Apiurl';


const Sidebar =() =>{

    const [noticesCount, setNoticesCount] = useState(0);

    useEffect(() => {

        const getNoticesCount = async () => {
            try {
              const response = await axios.get(`${Apiurl}/notice/count`);
              console.log(response.data);
              setNoticesCount(response.data.count);
            } catch (error) {
              console.log(error.message);
            }
          };
      getNoticesCount();
    }, []);


    return(
        <>
            {/* <!-- Vertical Navbar --> */}
            <nav class="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-dark bg-dark border-bottom border-bottom-lg-0 border-end-lg" id="navbarVertical">
                <div class="container-fluid">
                    {/* <!-- Toggler --> */}
                    <button class="navbar-toggler ms-n2" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    {/* <!-- Brand --> */}
                    <a class="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0" href="#s">
                        <img className='alogo' src="https://scontent.fcmb8-1.fna.fbcdn.net/v/t39.30808-6/298373379_584753116627363_5516008892077423700_n.jpg?stp=dst-jpg_s960x960&_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_ohc=4aMTPY6dT4MAX8RQbiG&_nc_ht=scontent.fcmb8-1.fna&oh=00_AfB9lMVUz6dTY_-qwFmNxziT3d26jYnQGq8T-4Wx7YLAsA&oe=642B3B64" alt="..." />
                    </a>
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
                                <a class="nav-link" href="/course">
                                <i class="bi bi-book-half"></i> Courses
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/salary">
                                <i class="bi bi-cash-stack"></i> Salary
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#s">
                                    <i class="bi bi-chat"></i> Messages
                                    <span class="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto">6</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/notice">
                                    <i class="bi bi-chat"></i> Notices
                                    <span class="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto">{noticesCount}</span>
                                </a>
                            </li>
                            {/* <li class="nav-item">
                                <a class="nav-link" href="#s">
                                    <i class="bi bi-bookmarks"></i> Collections
                                </a>
                            </li> */}
                            <li class="nav-item">
                                <a class="nav-link" href="#s">
                                    <i class="bi bi-people"></i> Users
                                </a>
                            </li>
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
                                <a class="nav-link" href="#s">
                                    <i class="bi bi-person-square"></i> Account
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#s">
                                    <i class="bi bi-box-arrow-left"></i> Logout
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    

        </>
    )
}

export default Sidebar;