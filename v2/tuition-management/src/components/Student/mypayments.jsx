import React, { useEffect, useState } from "react";
import axios from 'axios';
import Apiurl from '../Apiurl';
import Sidebar from './StudentSidebar';
import Dashhead from "./Dashhead";
import { useCookies } from 'react-cookie';

const MyPaymentPage = () => {
  const [payments, setPayments] = useState([]);
  const [cookies, setCookie] = useCookies(['user']); // Make sure to import useCookies hook if not already done

  const getpay = async () => {
    try {
      const response = await axios.get(`${Apiurl}/getpaymentbyuid/${cookies.id}`);
      setPayments(response.data);
    } catch (error) {
      console.log('Error in getting data:', error);
    }
  }

  useEffect(() => {
    getpay();
  }, []);

  return (
    <div>
      <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
        <Sidebar />

        {/* <!-- Main content --> */}
        <div className="h-screen flex-grow-1 overflow-y-lg-auto">
          {/* <!-- Header --> */}
          <Dashhead />

          {/* <!-- Main --> */}
          <main className="py-6 bg-surface-secondary">
            <div className="container-fluid">
              <div className="row mb-3 mt-3">
                <div className="col-sm-12 mb-5 mt-3">
                  <h1>My Payment Page</h1>
                  <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th>Course Name</th>
                          <th>Month</th>
                        </tr>
                      </thead>
                      <tbody>
                        {payments.map(payment => (
                          <tr key={payment.cid}>
                            <td>{payment.coursename}</td>
                            <td>{payment.month}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default MyPaymentPage;
