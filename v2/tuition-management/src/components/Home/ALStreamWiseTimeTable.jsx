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
    const subjectTableRef = useRef(null);
    const subjectTableRefs = useRef([]);

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
            setSubject(subject);
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
              { title: 'Course Name', data: 'coursename' },
              { title: 'Subject', data: 'coursesubject' },
              { title: 'Teacher', data: 'fullname' },
              { title: 'Hall No', data: 'hall'},
              { title: 'Date', data: 'cdate' },
              { title: 'Time', data: 'ctime'},
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


      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`${Apiurl}/newtimetable/public/subject/${subject}`);
            const data = await response.json();
            console.log(data);
      
            if (data.selectedtimetable.length < 0) {
              if ($.fn.DataTable.isDataTable(subjectTableRef.current)) {
                $(subjectTableRef.current).DataTable().destroy();
              }
      
              const table = $(subjectTableRef.current).DataTable({
                data: data.selectedtimetable,
                columns: [
                  { title: 'Course Name', data: 'coursename' },
                  { title: 'Subject', data: 'coursesubject' },
                  { title: 'Teacher', data: 'fullname' },
                  { title: 'Hall No', data: 'hall' },
                  { title: 'Date', data: 'cdate' },
                  { title: 'Time', data: 'ctime' },
                ],
                dom: 'Bfrtip',
                buttons: [
                  'copyHtml5',
                  'excelHtml5',
                  'csvHtml5',
                  'pdfHtml5',
                  'print',
                ],
              });
            } else {
              console.log('No data available in table');
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
      
        fetchData();
      }, [subject, subjectTimetable, subjectTableRef]);




    


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
                                    <a className="nav-link" role="tab" data-bs-toggle="tab" href={`#${value.coursesubject.replace(/\s/g, '').replace(/\//g, '-')}`}>
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
                                        <tr key={index} style={{ textAlign: 'left' }}>
                                        <td style={{ textAlign: 'left' }}>{streamtime.coursename}</td>
                                        <td style={{ textAlign: 'left' }}>{streamtime.coursesubject}</td>
                                        <td style={{ textAlign: 'left' }}>{streamtime.fullname}</td>
                                        <td style={{ textAlign: 'left' }}>{streamtime.hall}</td>
                                        <td style={{ textAlign: 'left' }}>{streamtime.cdate}</td>
                                        <td style={{ textAlign: 'left' }}>{streamtime.ctime}</td>
                                      </tr>
                                    )
                                }
                                )}

                                
                            </tbody>
                            </table>
                        </div>
                        </div>
            

                        {streamSubjects.map((value, index) => {
                            return (
                                <div className="tab-pane" role="tabpanel" id={`${value.coursesubject.replace(/\s/g, '').replace(/\//g, '-')}`}>
                                <h1 style={{ marginTop: '30px', marginBottom: '25.2px' }}>{value.coursesubject} All Classes&nbsp;</h1>
                                <div className="table-responsive">
                                    <table ref={subjectTableRef} className="table table-primary table-striped table-hover">
                                    <thead className='text-center'>
                                        <tr>
                                        <th className='text-center'>Course Name</th>
                                        <th className='text-center'>Subject</th>
                                        <th className='text-center'>Teacher</th>
                                        <th className='text-center'>Hall No</th>
                                        <th className='text-center'>Date</th>
                                        <th className='text-center'>Time</th>
                                        </tr>
                                    </thead>
                                    <tbody className='table-group-divider'>
                                        {subjectTimetable.map((streamtime , index) => {
                                            return(
                                                <tr key={index} style={{ textAlign: 'left' }}>
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
                            );
                            })}
                           

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