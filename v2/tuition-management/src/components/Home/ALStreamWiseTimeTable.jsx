import React, { useEffect, useState, useRef } from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import Apiurl from '../Apiurl';
import axios from 'axios';
import Navbar from './Navbar'
import Footer from './Footer'


import $ from 'jquery';
import "datatables.net-dt/css/jquery.dataTables.css";
import "datatables.net-dt/js/dataTables.dataTables.js";
import "datatables.net-dt/css/jquery.dataTables.css";
import "datatables.net-buttons-dt/css/buttons.dataTables.css";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "pdfmake/build/pdfmake.js";
import "pdfmake/build/vfs_fonts.js";

function ALStreamWiseTimeTable() {




    let { id } = useParams();
    console.log(id);

    const tableRef = useRef(null);

    const [streamTimetable, setStreamTimetable] = useState([]);
    const [streamSubjects, setStreamSubjects] = useState([]);
    const [subjectTimetable, setSubjectTimetable] = useState([]);
    const [subject, setSubject] = useState('');
    const [stream, setStream] = useState('');

    useEffect(() => {
        if (id === 'technology') {
          setStream('Technology');
        } else if (id === 'sciencemaths') {
          setStream('Science Maths');
        } else if (id === 'commerce') {
          setStream('Commerce');
        } else if (id === 'arts') {
          setStream('Arts');
        } else if (id === 'common') {
          setStream('Common');
        } else if (id === 'languages') {
          setStream('Languages');
        } else if (id === 'englishmedium') {
          setStream('English Medium');
        }
      }, [id]);


    let navigate = useNavigate();



    const getTime = async(e) =>{
        try {
            const response = await axios.get(`${Apiurl}/newtimetable/public/${id}`);
            // console.log(response.data.selectedtimetable);
            setStreamTimetable(response.data.selectedtimetable);
        } catch (error) {
            console.log("error in getting data")
        }
    }

    const getSubjects = async(e) =>{
        try {
            const response = await axios.get(`${Apiurl}/newtimetable/streamsubjects/${id}`);
            console.log(response.data.selectedsubjects);
            setStreamSubjects(response.data.selectedsubjects);
        } catch (error) {
            console.log("error in getting data")
        }
    }

    const getSubjectTimetable = async(subject) =>{
        try {
            const response = await axios.get(`${Apiurl}/newtimetable/public/subject/${subject}`);
            console.log(response.data.selectedtimetable);
            setSubjectTimetable(response.data.selectedtimetable);
        } catch (error) {
            console.log("error in getting data")
        }
    }

    console.log(streamTimetable);

    useEffect(()=>{
        getTime();
        getSubjects();
    },[id])



    useEffect(() => {
        // Fetch your data here, for example:
        const fetchData = async () => {
          const response = await fetch(`${Apiurl}/newtimetable/public/${id}`);
          const data = await response.selectedtimetable;
          console.log(data);
      
          // Destroy existing DataTable (if any)
          if ($.fn.DataTable.isDataTable(tableRef.current)) {
            $(tableRef.current).DataTable().destroy();
          }
      
          // Initialize DataTable
          const table = $(tableRef.current).DataTable({
            data: data,
            columns: [
              { title: 'Course Unit', data: 'cunit' },
              { title: 'Course Name', data: 'coursename' },
              { title: 'Teacher', data: 'fullname' },
              { title: 'Date', data: 'cdate' },
              { title: 'Time', data: 'ctime'},
              { title: 'Hall No', data: 'hall'},
            ],
            dom: 'Bfrtip', // Add the required buttons
            buttons: [
              'copyHtml5',
              'excelHtml5',
              'csvHtml5',
              'pdfHtml5',
              'print'
            ],
          });
      
        };
      
        fetchData();
      }, [ ]);



  return (
    <div>
        <Navbar />
        <main className="page">
            <section className="clean-block about-us">
                <div className="container">
                <div className="block-heading">

                    {id === 'technology' && (
                            <>
                            <h2 className="text-info">Technology</h2>
                            <p>Technology Description</p>
                            </>
                        )}
                        {id === 'sciencemaths' && (
                            <>
                            <h2 className="text-info">Science Maths</h2>
                            <p>Science Maths Description</p>
                            </>
                        )}
                        {id === 'commerce' && (
                            <>
                            <h2 className="text-info">Commerce</h2>
                            <p>Commerce Description</p>
                            </>
                        )}
                        {id === 'arts' && (
                            <>
                            <h2 className="text-info">Arts</h2>
                            <p>Arts Description</p>
                            </>
                        )}
                        {id === 'common' && (
                            <>
                            <h2 className="text-info">Common</h2>
                            <p>Common Description</p>
                            </>
                        )}
                        {id === 'languages' && (
                            <>
                            <h2 className="text-info">Languages</h2>
                            <p>Languages Description</p>
                            </>
                        )}
                        {id === 'englishmedium' && (
                            <>
                            <h2 className="text-info">English Medium</h2>
                            <p>English Medium Description</p>
                            </>
                        )}
               
                
                    <div>
                    <ul className="nav nav-tabs" role="tablist" style={{ marginTop: '50px' }}>
                        <li className="nav-item" role="presentation"><a className="nav-link active" role="tab" data-bs-toggle="tab" href="#tab-1">All</a></li>

                        {streamSubjects.map((value, index) => {
                            return (
                                <li className="nav-item" role="presentation" onClick={() => getSubjectTimetable(value.coursesubject)}>
                                <a className="nav-link" role="tab" data-bs-toggle="tab" href={`#${value.coursesubject}`}>
                                    {value.coursesubject}
                                </a>
                                </li>
                            );
                            })}
                        {/* <li className="nav-item" role="presentation" onClick={() => {navigate(`/subject/`)}}><a className="nav-link" role="tab" data-bs-toggle="tab" href="#tab-2">Economics - ආර්ථික විද්‍යාව</a></li>
                        <li className="nav-item" role="presentation"><a className="nav-link" role="tab" data-bs-toggle="tab" href="#tab-3">Business Studies - ව්‍යාපාර අධ්‍යයනය</a></li>
                        <li className="nav-item" role="presentation"><a className="nav-link" role="tab" data-bs-toggle="tab" href="#tab-4">Accounting - ගිණුම්කරණය</a></li> */}
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane active" role="tabpanel" id="tab-1">
                        <h1 style={{ marginTop: '30px', marginBottom: '25.2px' }}>{stream} All Classes&nbsp;</h1>
                        <div className="table-responsive">
                            <table ref={tableRef} className="table table-success table-striped table-hover">
                            <thead className='text-center'>
                                <tr>
                                <th>Course Name</th>
                                <th>Subject</th>
                                <th>Teacher</th>
                                <th>Hall No</th>
                                <th>Date</th>
                                <th>Time</th>
                                </tr>
                            </thead>
                            <tbody className='table-group-divider'>
                                {streamTimetable.map((streamtime , index) => {
                                    return(
                                        <tr key={index}>
                                        <td>{streamtime.coursename}</td>
                                        <td>{streamtime.coursesubject}</td>
                                        <td>{streamtime.fullname}</td>
                                        <td>{streamtime.hall}</td>
                                        <td>{streamtime.cdate}</td>
                                        <td>{streamtime.ctime}</td>
                                      </tr>
                                    )
                                }
                                )}

                                
                            </tbody>
                            </table>
                        </div>
                        </div>
                        <div className="tab-pane" role="tabpanel" id="tab-2">
                        <p>Content for tab 2.</p>
                        </div>
                        <div className="tab-pane" role="tabpanel" id="tab-3">
                        <p>Content for tab 3.</p>
                        </div>
                        <div className="tab-pane" role="tabpanel" id="tab-4">
                        <p>Tab content.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
    </main>
    <Footer />
    </div>
  )
}

export default ALStreamWiseTimeTable