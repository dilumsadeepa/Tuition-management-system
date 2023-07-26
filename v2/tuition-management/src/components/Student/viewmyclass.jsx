import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Apiurl from '../Apiurl';
import { useCookies } from 'react-cookie';
import Sidebar from './StudentSidebar';
import Dashhead from './Dashhead';
import Swal from 'sweetalert2';

const ViewMyClass = () => {
    const [enrolledCourses, setEnrolledCourses] = useState([]);
    const [cookies, setCookie] = useCookies(['user']);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEnrolledCourses = async () => {
            try {
                const response = await axios.get(`${Apiurl}/mystucourse/${cookies.id}`);
                setEnrolledCourses(response.data);
                setIsLoading(false);
                console.log(response.data);
            } catch (error) {
                console.log('Error fetching enrolled courses:', error);
                setError('Error fetching enrolled courses. Please try again later.');
                setIsLoading(false);
            }
        };

        fetchEnrolledCourses();
    }, [cookies.id]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    // Function to chunk the array into rows of 4 cards each
    const chunkArray = (arr, size) => {
        const chunkedArr = [];
        for (let i = 0; i < arr.length; i += size) {
            chunkedArr.push(arr.slice(i, i + size));
        }
        return chunkedArr;
    };

    // Chunk the enrolledCourses array into rows of 4 cards each
    const coursesRows = chunkArray(enrolledCourses, 4);

//-------------------------------------------------------------------------------------
    //delete enroll course
    const handleDelete = async (id) => {
        try {
            await axios.delete(`${Apiurl}/enrollcourse/${id}`);
            setEnrolledCourses((prevCourses) => prevCourses.filter((course) => course.id !== id));
            Swal.fire({
                title: "Success!",
                text: "Coursestudent deleted successfully",
                icon: "success",
            });
        } catch (error) {
            console.log("error on deleting Coursestudent", error);
            Swal.fire("Error!", "Failed to delete Coursestudent.", "error");
        }
    };

    return (
        <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
            <Sidebar />
            <div className="h-screen flex-grow-1 overflow-y-lg-auto">
                <Dashhead />
                <h1>Your classes</h1>
                <br></br>
                <div className="container">
                    {coursesRows.map((row, rowIndex) => (
                        <div className="row mt-3" key={rowIndex}>
                            {row.map((course) => (
                                <div className="col-md-3 mb-4" key={course.id}>
                                    <div className="card">
                                        <img
                                            src={course.course.coursebanner}
                                            className="card-img-top"
                                            alt="Course Banner"
                                            style={{ height: '200px' }}
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">{course.course.coursename}</h5>
                                            <p className="card-text">Rs. {course.course.courseprice}</p>



                                            {course.aprovel == 1 && (
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <i
                                                        className="fas fa-check-circle"
                                                        style={{
                                                            fontSize: '2rem',
                                                            border: '2px solid #4caf50',
                                                            borderRadius: '50%',
                                                            padding: '0.2rem',
                                                            marginRight: '0.5rem' // Add some spacing between the icon and the text
                                                        }}
                                                    ></i>
                                                    <span style={{ fontSize: '1rem' }}>Approved</span>
                                                </div>


                                            )}

                                            {course.aprovel == 0 && (
                                                
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <i
                                                        className="fas fa-hourglass-half"
                                                        style={{
                                                            fontSize: '2rem',
                                                            border: '2px solid #f1c40f', // Yellow border color for "Pending"
                                                            borderRadius: '50%', // To make the border circular for a "pending" appearance
                                                            padding: '0.2rem', // Adjust padding as needed
                                                            marginRight: '0.5rem' // Add some spacing between the icon and the text
                                                        }}
                                                    ></i>
                                                    <span style={{ fontSize: '1rem' }}>Pending</span>
                                                </div>


                                            )}
                                            <br></br>

                                            <button type="button" className="btn btn-secondary" onClick={() => handleDelete(course.id)}>
                                                Delete
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ViewMyClass;
