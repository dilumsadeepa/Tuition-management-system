import React, { useEffect, useState } from "react";
import axios from 'axios';
import Apiurl from '../Apiurl';
import Sidebar from './StudentSidebar';
import Dashhead from "./Dashhead";
import { useCookies } from 'react-cookie';

const MyPaymentPage = () => {
  const [payments, setPayments] = useState([]);
  const [cookies, setCookie] = useCookies(['user']); // Make sure to import useCookies hook if not already done

  useEffect(() => {
    // Fetch the data from the server using Axios
    axios.get(`${Apiurl}/mypayments`)
      .then(response => {
        // Filter the payments to show only payments of the logged-in student
        const filteredPayments = response.data.payments.filter(payment => payment.email === cookies.email);
        setPayments(filteredPayments);
      })
      .catch(error => {
        console.error('Error retrieving payment data:', error);
      });
  }, [cookies.email]); // Add cookies.email as a dependency

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
                  <table>
                    <thead>
                      <tr>
                        <th>Customer ID</th>
                        <th>Subscription ID</th>
                        <th>Month</th>
                      </tr>
                    </thead>
                    <tbody>
                      {payments.map(payment => (
                        <tr key={payment.cid}>
                          <td>{payment.cid}</td>
                          <td>{payment.suid}</td>
                          <td>{payment.month}</td>
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
    </div>
  );
};

export default MyPaymentPage;
