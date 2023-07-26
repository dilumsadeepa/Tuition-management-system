import { useState, useEffect } from 'react';
import React from 'react';
// import { useCookies } from 'react-cookie';
import axios from 'axios';
import Apiurl from '../Apiurl';
import Sidebar from './AdminSidebar';
import Dashhead from './Dashhead';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const Admin = () => {

    // const [cookies] = useCookies(['user']);
    const [income, setIncome] = useState({});
    // const [students, setStudents] = useState("");
    // const [teachers, setTeachers] = useState("");
    const [admindata, setAdminData] = useState({});
    
    const [courses, setCourses] = useState([]);

    const getad = async (e) => {
        try {
            const response = await axios.get(`${Apiurl}/admin-dashboard-data`);
            console.log('Admin data: ' + response.data.stcount);
            setAdminData(response.data);
        } catch (error) {
            console.log("error in getting data")
        }
    }

    const getincome = async (e) => {
        try {
            const currentDate = new Date();
            const currentMonth = currentDate.getMonth();
            const response = await axios.get(`${Apiurl}/calculate-income/${currentMonth + 1}`);
            console.log('income data: ' + response.data);
            setIncome(response.data);
        } catch (error) {
            console.log("error in getting data")
        }
    }

    

    const getCourseData = async () => {
        try {
            const response = await axios.get(`${Apiurl}/coursedata`);
            setCourses(response.data);
        } catch (error) {
            console.log("error in getting course data", error);
        }
    };

    useEffect(() => {
        getad();
        getincome();
        
        getCourseData();
    }, [])

    return (
        <section>

            {/* <!-- Dashboard --> */}
            <div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">

                <Sidebar />


                {/* <!-- Main content --> */}
                <div class="h-screen flex-grow-1 overflow-y-lg-auto">

                    {/* <!-- Header --> */}
                    <Dashhead />

                    {/* <!-- Main --> */}
                    <main class="py-6 bg-surface-secondary">
                        <div class="container-fluid">
                            {/* <!-- Card stats --> */}
                            <div class="row g-6 mb-6">
                                <div class="col-xl-3 col-sm-6 col-12">
                                    <div class="card shadow border-0">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col">
                                                    <span class="h6 font-semibold text-muted text-sm d-block mb-2">Budget</span>
                                                    <span class="h3 font-bold mb-0">Rs. {income.income} /=</span>
                                                </div>
                                                <div class="col-auto">
                                                    <div class="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                                                        <i class="bi bi-credit-card"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mt-2 mb-0 text-sm">

                                                {/* <span class="text-nowrap text-xs text-muted">Since last month</span> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-sm-6 col-12">
                                    <div class="card shadow border-0">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col">
                                                    <span class="h6 font-semibold text-muted text-sm d-block mb-2">All Students</span>
                                                    <span class="h3 font-bold mb-0">{admindata.stcount}</span>
                                                </div>
                                                <div class="col-auto">
                                                    <div class="icon icon-shape bg-primary text-white text-lg rounded-circle">
                                                        <i class="bi bi-people"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mt-2 mb-0 text-sm">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-sm-6 col-12">
                                    <div class="card shadow border-0">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col">
                                                    <span class="h6 font-semibold text-muted text-sm d-block mb-2">All Teachers</span>
                                                    <span class="h3 font-bold mb-0">{admindata.tecount}</span>
                                                </div>
                                                <div class="col-auto">
                                                    <div class="icon icon-shape bg-info text-white text-lg rounded-circle">
                                                        <i class="bi bi-clock-history"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mt-2 mb-0 text-sm">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-sm-6 col-12">
                                    <div class="card shadow border-0">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col">
                                                    <span class="h6 font-semibold text-muted text-sm d-block mb-2">All Classes</span>
                                                    <span class="h3 font-bold mb-0">{admindata.cocount}</span>
                                                </div>
                                                <div class="col-auto">
                                                    <div class="icon icon-shape bg-warning text-white text-lg rounded-circle">
                                                        <i class="bi bi-minecart-loaded"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mt-2 mb-0 text-sm">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Charts --> */}
                            <div className="row mb-4">
                                
                                <div className="col-md-12">
                                    <div className="card shadow border-0">
                                        <div className="card-body">
                                            <h5 className="card-title">Courses by Price Range</h5>
                                            <ResponsiveContainer width="100%" height={300}>
                                                <BarChart data={courses}>
                                                    <CartesianGrid strokeDasharray="3 3" />
                                                    <XAxis dataKey="courseid" />
                                                    <YAxis />
                                                    <Tooltip />
                                                    <Bar dataKey="courseprice" fill="#219ebc" />
                                                </BarChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            


                        </div>
                    </main>
                </div>


            </div>


        </section>

    )
}

export default Admin;