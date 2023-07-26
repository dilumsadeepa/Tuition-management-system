import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Apiurl from '../Apiurl';
import Sidebar from './Sidebar';
import Dashhead from './Dashhead';
import { Link } from 'react-router-dom';
import User from '../User';
import { useCookies } from 'react-cookie';




const Payment = () => {
    const [payment, setStudent] = useState([]);
    const [payments, setPayments] = useState([]);
    const [users, setUserData] = useState([]);
    const [cookies, setCookie] = useCookies(['user']);


    const getpay = async () => {
        try {
          const response = await axios.get(`${Apiurl}/getpaymetbyparent/${cookies.id}`);
          setPayments(response.data);
          console.log(response.data);
        } catch (error) {
          console.log('Error in getting data:', error);
        }
      }

useEffect(()=>{
    getpay();
},[])


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
                        <div className="row mb-3 mt-3">
                                <h1>Payment</h1>
                                            
                                        {/* {console.log(payment)}
                                            <select name="selectedstudent" id="student" className='mt-5' onChange={(e) => setStdid(e.target.value)}>
                                                <option selected disabled>Select Your Student</option>
                                                {payment.map((pay) =>(
                                                    <option value={pay.id}>{pay.username}</option>
                                                ))
                                                }
                                            </select> */}

                                        {/* <div className="row">

                                            <div className="col-lg-4">
                                                <div className="card mb-4">
                                                    <div className="card-body text-center">
                                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                                                            className="rounded-circle img-fluid" style={{ width: "150px" }} />
                                                        <h5 className="my-3">{users.username}</h5>
                                                        <p className="text-muted mb-1">{users.email}</p>
                                                        <div className="d-flex justify-content-center mb-2">
                                                            <a href="/editparent" className="btn btn-primary">Pay</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card mb-4 mb-lg-0">

                                                </div>
                                            </div>
                                        </div> */}

                                        <div className="col-sm-12 mb-5 mt-3"></div>
                                        <div className="col-sm-12 mb-5 mt-3"></div>
                                        <div className="table-responsive">
                                                <table className="table table-bordered table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th>ID</th>
                                                            <th>CourseName</th>
                                                            <th>Student name</th>
                                                            <th>Payment On Month</th>
                                                            <th>Payment Date</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {payments.map((py) =>
                                                        <tr>
                                                            <td>{py.id}</td>
                                                            <td>{py.coursename}</td>
                                                            <td>{py.username}</td>
                                                            <td>{py.month}</td>
                                                            <td>{py.createdAt}</td>
                                                        </tr>
                                                        )}
                                                    </tbody>
                                                </table>
                                            </div>                                                                                                             
                                        </div>

                                 </div>
                         </main>
                 </div>
            </div>
    </section>
)
}


export default Payment;