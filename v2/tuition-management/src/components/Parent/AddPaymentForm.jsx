// AddPaymentForm.js
import React, { useState } from 'react';
import axios from 'axios';
import Apiurl from '../Apiurl';

const AddPaymentForm = () => {
  const [refNumber, setRefNumber] = useState('');
  const [payment, setPayment] = useState('');
  const [courseId, setCourseId] = useState('');
  const [userId, setUserId] = useState('');

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
        <label>Payment:</label>
        <input
          type="number"
          value={payment}
          onChange={(e) => setPayment(e.target.value)}
        />
      </div>
      <div>
        <label>Course ID:</label>
        <input
          type="number"
          value={courseId}
          onChange={(e) => setCourseId(e.target.value)}
        />
      </div>
      <div>
        <label>User ID:</label>
        <input
          type="number"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddPaymentForm;
