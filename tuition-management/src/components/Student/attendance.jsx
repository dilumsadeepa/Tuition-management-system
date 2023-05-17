import React, { useState } from 'react';
import Calendar from 'react-calendar';

function AttendanceCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Function to handle date selection
  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Perform any additional actions based on the selected date
    // Fetch attendance data for the selected date, etc.
  };

  return (
    <div>
      <h2>Student Attendance Calendar</h2>
      <Calendar onChange={handleDateChange} value={selectedDate} />
      {/* Add additional components or logic to display attendance information */}
    </div>
  );
}

export default AttendanceCalendar;
