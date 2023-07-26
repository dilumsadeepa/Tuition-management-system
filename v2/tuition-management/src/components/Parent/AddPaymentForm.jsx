import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Apiurl from '../Apiurl';
import Sidebar from './Sidebar';
import Dashhead from './Dashhead';

const AddPaymentForm = () => {
    
    const [refNumber, setRefNumber] = useState('');
    const [payment, setPayment] = useState('');
    const [courseId, setCourseId] = useState('');
    const [month, setMonth] = useState('');
    const [userId, setUserId] = useState('');
    const [users, setUsers] = useState([]);
    const [courses, setCourses] = useState([]);


    // const selectCourse = (course) => {
    //   setCourseId(course);
    // };


    // Fetch users data on component mount
    useEffect(() => {
        getUsersData();
    }, []);

    // Fetch users data from the API
    const getUsersData = async () => {
        try {
            const response = await axios.get(`${Apiurl}/getstudentbyp/16`);
            setUsers(response.data);
        } catch (error) {
            console.error('Failed to fetch users data:', error);
        }
    };

    // Fetch courses data when the userId changes
    useEffect(() => {
        if (userId) {
            getCoursesData(userId);
        }
    }, [userId]);

    // Fetch courses data from the API based on userId
    const getCoursesData = async (userId) => {
        try {
            const response = await axios.get(`${Apiurl}/getunascourses/${userId}`);
            setCourses(response.data);

        } catch (error) {
            console.error('Failed to fetch courses data:', error);
        }
    };

    const selectcourse = (value) =>{
        let jval = JSON.parse(value);
        
        setCourseId(jval.courseId);
        setPayment(jval.courseprice);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${Apiurl}/paymentpaycreate`, {
                refNumber,
                payment,
                courseId,
                userId,
                month,
            });
            console.log('Payment record created:', response.data);
            // Reset form fields after successful submission
            setRefNumber('');
            setPayment('');
            setCourseId('');
            setUserId('');
        } catch (error) {
            console.error('Failed to create payment record:', error);
        }
    };

    return (
      <section>
          {/* <!-- Dashboard --> */}
            <div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
                <Sidebar />

          {/* <!-- Main content --> */}
            <div class="h-screen flex-grow-1 overflow-y-lg-auto">
          {/* <!-- Header --> */}
              <Dashhead />

          <main class="py-6 bg-surface-secondary">
              <div class="container-fluid">
                  <div className="row mb-3 mt-3">
                      <h1>Payment Student Class Fee</h1>
                      <div className="col-sm-12 mb-5 mt-3"></div>
                      <div className="col-sm-12 mb-5 mt-3"></div>

                      <div className="col-sm-8 debox">
                        <form onSubmit={handleSubmit}>
                          <div className="mb-3">
                            <label htmlFor="refNumber" className="form-label">
                              Reference Number:
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="refNumber"
                              value={refNumber}
                              onChange={(e) => setRefNumber(e.target.value)}
                            />
                          </div>

                          <div className="mb-3">
                            <label htmlFor="paydate" className="form-label">
                              Payment Date:
                            </label>
                            <input
                              type="date"
                              className="form-control"
                              id="paydate"
                              value={month}
                              onChange={(e) => setMonth(e.target.value)}
                            />
                          </div>

                          <div className="mb-3">
                            <label htmlFor="userId" className="form-label">
                              User ID:
                            </label>
                            <select
                              className="form-select"
                              id="userId"
                              value={userId}
                              onChange={(e) => setUserId(e.target.value)}
                            >
                              <option value="">Select a User</option>
                              {users.map((user) => (
                                <option key={user.id} value={user.id}>
                                  {user.username}
                                </option>
                              ))}
                            </select>
                          </div>

                          {userId && (
                            <>
                              <div className="mb-3">
                                <label htmlFor="courseId" className="form-label">
                                  Course:
                                </label>
                                <select
                                  className="form-select"
                                  id="courseId"
                                  value={courseId}
                                  onChange={(e) => selectcourse(e.target.value)}
                                >
                                  <option value="">Select a Course</option>
                                  {courses.map((course) => (
                                    <option key={course.id} value={JSON.stringify(course)}>
                                      {course.coursename} Fee: {course.courseFee}
                                    </option>
                                  ))}
                                </select>
                              </div>

                              <div className="mb-3">
                                <label htmlFor="payment" className="form-label">
                                  Payment:
                                </label>
                                <input
                                  type="number"
                                  className="form-control"
                                  id="payment"
                                  value={payment}
                                  onChange={(e) => setPayment(e.target.value)}
                                />
                              </div>
                            </>
                            )}
                                <button type="submit" className="btn btn-primary">
                                      Submit
                                </button>
                        </form>
                      </div>
                   </div>
                </div>
              </main>
           </div>
        </div>
    </section>
    );
};

export default AddPaymentForm;
