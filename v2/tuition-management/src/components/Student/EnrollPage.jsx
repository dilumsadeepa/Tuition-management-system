import React, {useEffect, useState} from 'react';

const EnrollPage = (props) => {
  const { match } = props;
  const courseId = match.params.courseId;

  // Add your logic here for fetching data related to the enrolled course or performing any other actions

  return (
    <div>
      <h1>Enroll Page</h1>
      <p>Enrolling for Course ID: {courseId}</p>
      {/* Add the necessary UI components and logic for the enroll page */}

      <h2>enrolling details</h2>


    </div>
  );
};

export default EnrollPage;
