import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import Apiurl from '../Apiurl';
import Sidebar from './AdminSidebar';
import Dashhead from './Dashhead';
import { Link } from 'react-router-dom';


const Parent = () => {

    const { id } = useParams();
    const [parent, setParent] = useState([]);
   

    const getPa = async (e) => {
        try {
            const response = await axios.get(`${Apiurl}/getpadata/${id}`);
            setParent(response.data);
            


        } catch (error) {
            console.log("error in getting data")
        }
    }

    //axios call api
    useEffect(() => {
        getPa();
    });



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

                        <div className="container py-5">
                            
                            <div className="row g-6 mb-6">
                                <Link to={`/addparent/${id}`} className="">
                                    <div class="col-xl-3 col-sm-6 col-12">
                                        <div class="card shadow border-0">
                                            <div class="card-body debtn">
                                                <div class="row">
                                                    <div class="col">
                                                        <h3 style={{ color: "white" }}>Add Parent Data</h3>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                           
                            <div className="row mt-3 mb-3">
                                <div className="col-sm-6 mx-auto">
                                    <div class="card shadow border-0">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col">
                                                    <table className="table">
                                                        {parent.map((p) =>
                                                            <tbody className="bg-dark" style={{color:"white"}}>
                                                                <tr>
                                                                    <th>Name</th>
                                                                    <td>{p.username}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Ful Name</th>
                                                                    <td>{p.pfullname}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Email</th>
                                                                    <td>{p.email}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Phone Number</th>
                                                                    <td>{p.tel}</td>
                                                                </tr>
                                                            </tbody>
                                                        )}

                                                    </table>
                                                    
                                                </div>
                                            </div>
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

export default Parent;