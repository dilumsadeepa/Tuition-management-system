import React, {useRef, useEffect, useState} from "react";
import axios from "axios";
import Apiurl from '../Apiurl';



const Sidebar =() =>{

    const [noticesCount, setNoticesCount] = useState(0);

    useEffect(() => {

        const getNoticesCount = async () => {
            try {
              const response = await axios.get(`${Apiurl}/notice/count`);
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
                    
                    
                    {/* <!-- Collapse --> */}
                    <div class="collapse navbar-collapse" id="sidebarCollapse">
                        {/* <!-- Navigation --> */}
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/studashboard">
                                    <i class="bi bi-house"></i> Dashboard
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/Profile">
                                <i class='bx bx-user'></i> Profile
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/classeslist">
                                <i class="bi bi-book-half"></i> Classes
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/attendance">
                                <i class="bi bi-cash-stack"></i> Attendance
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="/mypayments">
                                <i class="bi bi-cash-stack"></i> My payments
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="/notice">
                                    <i class="fa-regular fa-note-sticky"></i> Notices
                                    <span class="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto">{noticesCount}</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/newtimetable">
                                <i class="fa-solid fa-table-cells"></i> Time Table
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