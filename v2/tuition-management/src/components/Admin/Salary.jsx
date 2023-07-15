import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Apiurl from '../Apiurl';
import Sidebar from './AdminSidebar';
import Dashhead from './Dashhead';


const Salary = () => {

    //const [salary, setSalary] = useState([]);
    const [users, setUser] = useState([]);
    

    const getsalary = async (e) => {
        try {
            const response = await axios.get(`${Apiurl}/users`);
            setUser(response.data);
            console.log(response.data);

        } catch (error) {
            console.log("error in getting data")
        }
    }

    const search = () =>{

    }

    const reset = () =>{
        
    }



    useEffect(() => {
        getsalary();
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

                        <div class="container">


                            <div className="row mt-3">
                                <div className="col-sm-12">
                                    <h2>Salary</h2>
                                </div>
                            </div>

                            <div className="row">
                                <div class="col-xl-4 col-sm-6 col-12">
                                    <div class="card shadow border-0">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col">
                                                    {/* <span class="h6 font-semibold text-muted text-sm d-block mb-2">Budget</span> */}
                                                    <span class="h4 mb-0"><a href="/salarypresentage" className='debtn'>Salary Prentage</a></span>
                                                </div>
                                                <div class="col-auto">
                                                    <div class="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                                                        <i class="bi bi-bookmark-plus-fill"></i>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div class="col-xl-4 col-sm-6 col-12">
                                    <div class="card shadow border-0">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col">
                                                    {/* <span class="h6 font-semibold text-muted text-sm d-block mb-2">Budget</span> */}
                                                    <span class="h4 mb-0"><a href="/gensalary" className='debtn'>Salary Generate</a></span>
                                                </div>
                                                <div class="col-auto">
                                                    <div class="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                                                        <i class="bi bi-bookmark-plus-fill"></i>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="row mb-3 mt-3">
                                <div className="col-sm-10 mx-auto">

                                <div class=" input-group mb-3 mt-3">
                                    
                                    <input type="email" class="form-control" id="email" placeholder="Enter email" />
                                    <button class="btn btn-primary" onClick={(e) => search()} type="button">Go</button>
                                    <button class="btn btn-danger" onClick={(e) => reset()} type="button">Reset</button>
                                </div>


                                </div>
                            </div>


                            <div className="row mt-5">

                                <div className="col-sm-12">

                                    <div class="table-responsive">
                                        <table class="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>Action</th>
                                                    <th>Full Name</th>
                                                    <th>Email</th>
                                                    <th>Phone Number</th>
                                                    <th>NIC</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {users.map((u) =>
                                                    <tr>
                                                        <td><button type='button' className='btn btn-primary'>Get Salary</button></td>
                                                        <td>{u.fullname}</td>
                                                        <td>{u.email}</td>
                                                        <td>{u.tel}</td>
                                                        <td>{u.nic}</td>

                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
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

export default Salary;