import React, { useState, useEffect } from 'react';
import {Link,useParams} from 'react-router-dom';
import axios from 'axios';
import Apiurl from '../Apiurl';
import Sidebar from './Sidebar';
import Dashhead from './Dashhead';
import { useCookies } from 'react-cookie';




const Payment = () => {
    const [payment, setStudent] = useState([]);
    const [payments, setPayments] = useState([]);
    const [stdid, setStdid] = useState(0);
    const [users, setUserData] = useState([]);
    const [cookies, setCookie] = useCookies(['user']);

    useEffect(() => {
        getpay();
    }, [stdid]);

    const getpay = async () => {
        try {
          const response = await axios.get(`${Apiurl}/getpayemtsbystdid/${stdid}`);
          setPayments(response.data);
          console.log(response.data);
        } catch (error) {
          console.log('Error in getting data:', error);
        }
      }

      useEffect(() => {
        getStudents();
    }, []);

    const getStudents = async () => {
        try {
            
            const userId = cookies.id;
            console.log(userId);
            const response = await axios.get(`${Apiurl}/getstudentbyp/${userId}`);
            setStudent(response.data);
            console.log(response.data);
        } catch (error) {
            console.log("Error in getting data", error);
        }
    }


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

                                <div className="col-sm-12 mb-5 mt-3"></div>
                                <div className="col-sm-12 mb-5 mt-3"></div>
                                <form>
                                <div>
                                    <a href="/AddPaymentForm" class="btn btn-primary btn-outline">Pay class fee</a>
                                </div>
                                </form>         
                                        {console.log(payment)}
                                            <select name="selectedstudent" id="student" className='mt-5' onChange={(e) => setStdid(e.target.value)}>
                                                <option selected disabled>Select Your Student</option>
                                                {payment.map((pay) =>(
                                                    <option value={pay.id}>{pay.username}</option>
                                                ))
                                                }
                                            </select>

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
                                                    {payments.map((py) => {
          
                                                        const monthNames = [
                                                            "January", "February", "March", "April", "May", "June",
                                                            "July", "August", "September", "October", "November", "December"
                                                        ];
                                                        
                                                        const monthName = monthNames[py.month - 1];

                                                        return (
                                                            <tr key={py.id}>
                                                                <td>{py.id}</td>
                                                                <td>{py.coursename}</td>
                                                                <td>{py.username}</td>
                                                                <td>{monthName}</td>
                                                                <td>{py.createdAt}</td>
                                                            </tr>
                                                        );
                                                    })}


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