import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Apiurl from '../Apiurl';
import Sidebar from './Sidebar';
import Dashhead from './Dashhead';
import { useCookies } from 'react-cookie';

const Attendece = () => {
    const [student, setStudent] = useState([]);
    const [studentAtt, setStudentAtt] = useState([]);
    const [stdid, setStdid] = useState(0);
    const [courseid, setcourseid] = useState(0);
    const [cookies, setCookie] = useCookies(['user']);

    useEffect(() => {
        getStudents();
    }, []);

    const getStudents = async () => {
        try {
            
            const userId = cookies.id;
            console.log(userId);
            const response = await axios.get(`${Apiurl}/getstudentbyp/${userId}`);
            setStudent(response.data);
            console.log(response.data);
        } catch (error) {
            console.log("Error in getting data", error);
        }
    }

    const getStudentsAttendance = async () => {
        try {
            
            const userId = cookies.id;
            console.log(stdid);
            const response = await axios.get(`${Apiurl}/getpstudentatt/${stdid}`);
            setStudentAtt(response.data);
            console.log(response.data);
        } catch (error) {
            console.log("Error in getting data", error);
        }
    }

    useEffect(() => {
        getStudentsAttendance();
    }, [stdid]);

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
                        <div className="container-fluid">
                            <div className="row mb-3 mt-3">
                                <h1>Student Attendance</h1>

                                {/* <label htmlFor="student">Select Student</label> */}
                                {console.log(student)}

                  
                                <select name="selectedstudent" id="student" className='mt-5' onChange={(e) => setStdid(e.target.value)}>
                                    <option selected disabled>Select Your Student</option>
                                    {student.map((stu) =>(
                                        <option value={stu.id}>{stu.username}</option>
                                    ))
                                    }
                                </select>

                                <select name="selectedCourse" id="student" className='mt-5' onChange={(e) => setcourseid(e.target.value)}>
                                    <option selected disabled>Select Your Student Course</option>
                                    {student.map((cur) =>(
                                        <option value={cur.id}>{cur.coursesubject}</option>
                                    ))
                                    }
                                </select>
                   

                                
                                <div className="col-sm-12 mb-5 mt-3">
                                <div className="col-sm-12 mb-5 mt-3"></div>
                                <div className="col-sm-12 mb-5 mt-3"></div>
                                    <div className="col-sm-12 mb-5 mt-3"></div>
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Course Name</th>
                                                    <th>Course Subject</th>
                                                    <th>Date</th>
                                                    <th>Time</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {studentAtt.map((att) => (
                                                    <tr>
                                                        <th>{att.id}</th>
                                                        <td>{att.coursename}</td>
                                                        <td>{att.coursesubject}</td>
                                                        <td>{att.aday}</td>
                                                        <td>{att.atime}</td>
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
        </section>
    )
}

export default Attendece;
