import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Apiurl from '../Apiurl';
import Sidebar from './AdminSidebar';
import Dashhead from './Dashhead';
import Swal from 'sweetalert2';

const PaymentRecords = () => {
    const [paymentRecords, setPaymentRecords] = useState([]);

    // Fetch payment records on component mount
    useEffect(() => {
        getPaymentRecords();
    }, []);

    // Fetch payment records from the API
    const getPaymentRecords = async () => {
        try {
            const response = await axios.get(`${Apiurl}/getAllPendingPaymentRecords`);
            setPaymentRecords(response.data);
        } catch (error) {
            console.error('Failed to fetch payment records:', error);
        }
    };

    // Update payment status
    const updateStatus = async (paymentId, status) => {
        try {
            const response = await axios.patch(`${Apiurl}/paymentpayupdatestate`, {
                id: paymentId,
                state: status,
            });
            if (response.status === 200) {
                Swal.fire({
                    title: "Success!",
                    text: status,
                    icon: "success",
                  })
                getPaymentRecords();
            } else {
                Swal.fire("Error!", response.data, "error");
                console.error('Failed to update status:', response.data);
            }
        } catch (error) {
            Swal.fire("Error!", error.response.data, "error");
            console.error('Failed to update status:', error);
        }
    };

    return (
        <section>
            {/* <!-- Dashboard --> */}
            <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
                <Sidebar />
                {/* <!-- Main content --> */}
                <div className="h-screen flex-grow-1 overflow-y-lg-auto">
                    {/* <!-- Header --> */}
                    <Dashhead />
                    {/* <!-- Main --> */}
                    <main className="py-6 bg-surface-secondary">
                        <div className="container py-5">
                            <div className='col-sm-12'>
                                <h1>Payment Records</h1>
                                <div class="table-responsive mt-5 mb-3">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th>Reference Number</th>
                                                <th>Payment Amount</th>
                                                <th>Course Name</th>
                                                <th>User Name</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {paymentRecords.map((paymentRecord) => (
                                                <tr key={paymentRecord.id}>
                                                    <td>{paymentRecord.refNumber}</td>
                                                    <td>{paymentRecord.payment}</td>
                                                    <td>{paymentRecord.course.coursename}</td>
                                                    <td>{paymentRecord.user.username}</td>
                                                    <td>{paymentRecord.state}</td>
                                                    <td>
                                                        {paymentRecord.state === 'Pending' && (
                                                            <>
                                                                <button className='btn btn-primary' onClick={() => updateStatus(paymentRecord.id, 'Approved')}>Accept</button>
                                                                <button style={{marginLeft:20}} className='btn btn-danger' onClick={() => updateStatus(paymentRecord.id, 'Rejected')}>Reject</button>
                                                            </>
                                                        )}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </section>
    );
};

export default PaymentRecords;
