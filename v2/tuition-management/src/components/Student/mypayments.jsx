import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Apiurl from '../Apiurl';
import Sidebar from './StudentSidebar';
import Dashhead from './Dashhead';
import axios from 'axios';

export default function DisableElevation() {
  const [payments, setPayments] = useState([]);

  const getPayments = async () => {
    try {
      const response = await axios.get(`${Apiurl}/paymentdata`);
      setPayments(response.data);
    } catch (error) {
      console.log('Error in getting payment data:', error);
    }
  };

  useEffect(() => {
    getPayments();
  }, []);

  return (
    <section>
      <div className="h-screen flex-grow-1 overflow-y-lg-auto">
        <Dashhead />

        <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
          <Sidebar />

          <main>
            <div className="container">
              <div className="row mb-3 mt-3">
                {payments.map((payment) => (
                  <div className="col-sm-3" key={payment.id}>
                    <div className="card">
                      <img src={payment.courseImage} className="card-img-top" alt="Course" />
                      <div className="card-body">
                        <h5 className="card-title">Course ID: {payment.cid}</h5>
                        <p className="card-text">Student ID: {payment.suid}</p>
                        <p className="card-text">Month: {payment.month}</p>
                        <Link to={`/PaymentDetails/${payment.id}`} className="btn btn-primary">View Details</Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}
