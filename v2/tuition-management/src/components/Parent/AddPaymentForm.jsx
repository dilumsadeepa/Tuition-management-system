import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Apiurl from '../Apiurl';

const AddPaymentForm = () => {
    const [refNumber, setRefNumber] = useState('');
    const [payment, setPayment] = useState('');
    const [courseId, setCourseId] = useState('');
    const [userId, setUserId] = useState('');
    const [users, setUsers] = useState([]);
    const [courses, setCourses] = useState([]);

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
        <form onSubmit={handleSubmit}>
            <div>
                <label>Reference Number:</label>
                <input
                    type="text"
                    value={refNumber}
                    onChange={(e) => setRefNumber(e.target.value)}
                />
            </div>

            <div>
                <label>User ID:</label>
                <select value={userId} onChange={(e) => setUserId(e.target.value)}>
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
                    <div>
                        <label>Course:</label>
                        <select value={courseId} onChange={(e) => selectcourse(e.target.value)}>
                            <option value="">Select a Course</option>
                            {courses.map((course) => (
                                <option key={course.id} value={JSON.stringify(course)}>
                                    {course.coursename} - Fee: {course.courseFee}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label>Payment:</label>
                        <input
                            type="number"
                            value={payment}
                            onChange={(e) => setPayment(e.target.value)}
                        />
                    
                </div>
                </>
            )}

            <button type="submit">Submit</button>
        </form>
    );
};

export default AddPaymentForm;
