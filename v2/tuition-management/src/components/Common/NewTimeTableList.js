import React, {useRef, useEffect, useState} from "react";
import axios from "axios";
import Apiurl from '../Apiurl';
import { useNavigate } from 'react-router-dom'
import DOMPurify from 'dompurify';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import CloudinaryFileList from './CloudinaryFileList';
import CloudBackupFilesList from './CloudBackupFilesList';
import LocalFileList from './LocalFileList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Sidebar from '../Admin/AdminSidebar';
import StudentSidebar from '../Student/StudentSidebar';
import TeacherSidebar from '../Teacher/TeacherSidebar';
import ParentSidebar from '../Parent/Sidebar';
import AdminDashhead from '../Admin/Dashhead';
import StudentDashhead from "../Student/Dashhead";
import TeacherDashhead from "../Teacher/Dashhead";
import ParentDashHead from "../Parent/Dashhead";
import { useCookies } from 'react-cookie';

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
import NoPermission from "./NoPermission";

function NewTimeTableList() {

    const tableRef = useRef(null);

    const [timeTables, setTimeTables] = useState([]);

    const [courses, setCourses] = useState([]);

    const [coursesId, setCoursesId] = useState([]);
    
  
    const [showModal, setShowModal] = useState(false);
    // const handleShowModal = () => setShowModal(true);
    const [timeTableObject, setTimeTableObject] = useState({});

    const MySwal = withReactContent(Swal) // Create a new instance of SweetAlert with React content
    
    let navigate = useNavigate();    //useNavigate is a hook to navigate to another page

    const [cookies] = useCookies(['role']);
  
    // console.log(cookies.id);

    
      // useEffect(() => {
      //   const fetchCourses = async () => {
      //     try {
      //       const response = await axios.get(`${Apiurl}/coursedata`);
      //       setCourses(response.data);
      //       console.log('Courses:', response.data);
      //     } catch (error) {
      //       console.log('Error in getting data:', error);
      //     }
      //   };    
      //   fetchCourses();
      // }, []);

    useEffect(() => {

        axios.get(`${Apiurl}/newtimetable/`)
          .then(res => {
            const timeTabelsData = res.data;
            setTimeTables(timeTabelsData);
          })
          .catch(err => {
            console.log(err);
          })
      }, []);







    useEffect(() => {
      // Fetch your data here, for example:
      const fetchData = async () => {
        let apiUrl;
        if (cookies.role === '4') {
          apiUrl = `${Apiurl}/newstudenttimetable/${cookies.id}`;
        }else if (cookies.role === '1') {
          apiUrl = `${Apiurl}/newtimetable`;
        }else{
          apiUrl = `${Apiurl}/newtimetable/threemonths`;
        }
        const response = await fetch(apiUrl);

        // const response = await fetch(`${Apiurl}/newtimetable`);
        const data = await response.json();
        console.log(data);
    
        // Destroy existing DataTable (if any)
        if ($.fn.DataTable.isDataTable(tableRef.current)) {
          $(tableRef.current).DataTable().destroy();
        }
    
        // Initialize DataTable
        const table = $(tableRef.current).DataTable({
          data: data,
          columns: [
            { title: 'Course Unit', data: 'courseid' },
            { title: 'Course Name', data: 'coursename' },
            { title: 'Teacher', data: 'fullname' },
            { title: 'Date', data: 'cdate' },
            { title: 'Time', data: 'ctime'},
            { title: 'Hall No', data: 'hall'},
            {
              title: 'Action',
              data: 'id',
              render: (id) => {
                let buttons = '';
    
                // Display different buttons based on user role
                if (cookies.role === '5' || cookies.role === '4') {
                  buttons += `<button class="btn btn-sm btn-secondary me-1 view-btn" data-id="${id}"><i class="fa-solid fa-eye"></i></button>`;
                }
    
                if (cookies.role === '1' || cookies.role === '2' || cookies.role === '3') {
                  buttons += `<button class="btn btn-sm btn-secondary me-1 view-btn" data-id="${id}"><i class="fa-solid fa-eye"></i></button>` +
                  `<button class="btn btn-sm btn-secondary me-1 edit-btn" data-id="${id}"><i class="fa-solid fa-pen-to-square"></i></button>` +
                    `<button class="btn btn-sm btn-danger me-1 delete-btn" data-id="${id}"><i class="fa-solid fa-trash"></i></button>`;
                }
    
                return buttons;
              },
  
            }
          ],
          // order: [[7, 'desc']],
          dom: 'Bfrtip', // Add the required buttons
          buttons: [
            'copyHtml5',
            'excelHtml5',
            'csvHtml5',
            'pdfHtml5',
            'print'
          ],
        });
    
        // Event listeners for action buttons
        $(tableRef.current).on('click', '.view-btn', function() {
          const id = $(this).data('id');
          handleShowModal(id);
          fetchCourseId(id);
          // fetchCourses(id);

        });
    
        $(tableRef.current).on('click', '.edit-btn', function() {
          const id = $(this).data('id');
          navigate(`/newtimetable/edit/${id}`);
        });
    
        $(tableRef.current).on('click', '.delete-btn', function() {
          const id = $(this).data('id');
          handleDeleteTimeTable(id);
        });
      };
    
      fetchData();
    }, [ ]);
    
     



      const deleteTimeTable = async(id) =>{
        console.log(`${Apiurl}/newtimetable/${id}`);
        try {
          const deleted = await axios.delete(`${Apiurl}/newtimetable/${id}`);
          console.log(deleted.data);
          // Update the state of the notices array after deleting the notice
          setTimeTables(timeTables.filter(timetable => timetable.id !== id));
        } catch (error) {
          console.log("error on deleting" + error);
        }
      }


    const handleDeleteTimeTable = (noticeId) => {
        MySwal.fire({
          title: 'Are you sure?',
          text: 'You are about to delete this TimeTable.',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#3085d6',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            deleteTimeTable(noticeId)
            MySwal.fire(
              'Deleted!',
              'The TimeTable has been deleted.',
              'success'
            )
          }
        })
      }


      const viewTimeTable = async(id) =>{  
        try {
            const timetable = await axios.get(`${Apiurl}/newtimetable/${id}`);
            console.log("dataaaaaaa",timetable.data);


        } catch (error) {
            console.log("error on viewing" + error);
        }
    }


    const handleShowModal = async(timetableId) => {
      // try{
      //   const response = await axios.get(`${Apiurl}/coursename/${timetableId}`);
      //   setCourses(response.data.courseIdnew);
      //   // console.log("Course name:", response.data.courseIdnew);
      //   // console.log("Coursess name:", courses);
      //   setShowModal(true);
      // } catch (error) {
      //   console.log("error on viewing" + error);
      // }


        try{
          await axios.get(`${Apiurl}/newtimetable/byId/${timetableId}`).then((res) => {
            console.log("dataaaaaaa",res.data.selectedtimetable[0]);
            setTimeTableObject(res.data.selectedtimetable[0]);
            setShowModal(true);  
          });
        }catch(error){
          console.log("error on viewing" + error);
        }

        // const response = await fetch(`${Apiurl}/newtimetable/byId/${timetableId}`);
        // const data = await response.json();
        // console.log(data);
        // setTimeTableObject(data);
        // setShowModal(true); 

      };




      const fetchCourseId = async(timetableId) => {
        try {
          const response = await axios.get(`${Apiurl}/newtimetableid/${timetableId}`);
          setCoursesId(response.data.courseIdnew);
          console.log("fetchCourseId:", response.data.courseIdnew);
          console.log("fetchCourseIdsss: "+ coursesId);
        } catch (error) {
          console.log("Error in getting data:", error);
        }
      };


      // const fetchCourses = async(timetableId) => {
      //   try {
      //     const res = await axios.get(`${Apiurl}/coursename/${timetableId}`);
      //     setCourses(res.data);
      //     console.log("Course:", res.data);
      //     console.log("Coursess:"+ courses);
      //   } catch (error) {
      //     console.log("Error in getting data:", error);
      //   }}


      // console.log(courseName);



  return (
    <div>
        <ToastContainer autoClose={3000}/>

{(cookies.role === '5' || cookies.role === '4' || cookies.role === '3' || cookies.role === '2' || cookies.role === '1') ? (
                      <>
          <section> 
            {/* <!-- Dashboard --> */}
                <div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
                        
                {cookies.role === '5' ? <ParentSidebar/> : cookies.role === '4' ? <StudentSidebar/> : cookies.role === '3' ? <TeacherSidebar /> : <Sidebar />}  


                {/* <!-- Main content --> */}
                <div class="h-screen flex-grow-1 overflow-y-lg-auto">
                    
                    {/* <!-- Header --> */}
                    {cookies.role === '5' ? <ParentDashHead/> : cookies.role === '4' ? <StudentDashhead/> : cookies.role === '3' ? <TeacherDashhead /> : <AdminDashhead />} 

                    {/* <!-- Main --> */}
                     <main>
                    
                        <div class="container">

                            <div className="row">


                            <div class="d-flex mt-3">
                                <div class="p-2 flex-grow-1"><h2>TimeTable</h2></div>
                                {(cookies.role === '1' || cookies.role === '2' || cookies.role === '3') && (
                                  <>
                                  <div class="p-2"><a href="/newtimetabledash" className="btn-grad">Create TimeTable</a></div>
                                  <div class="p-2"><a href="/timetable" className="btn-grad">TimeTable Posts</a></div>
                                  </>

                                )}
                                </div>

                            </div>


                            <div className="row mt-5">
                               
                                <div className="col-sm-12">
                                    <div class="table-responsive">
                                       

                                            <table ref={tableRef} className="table table-striped" style={{ width: "100%" }}>
                                            <thead>
                                                <tr>
                                                <th>Course Unit</th>
                                                <th>Course Name</th>
                                                <th>Teacher</th>
                                                <th>Date</th>
                                                <th>Time</th>
                                                <th>Hall</th>
                                                <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {timeTables.map((newtimeTable) => (
                                                <tr key={newtimeTable.id}>
                                                    <td>{newtimeTable.courseid}</td>
                                                    <td>{newtimeTable.coursename}</td>
                                                    <td>{newtimeTable.fullname}</td>
                                                    <td>{newtimeTable.ctime}</td>
                                                    <td>{newtimeTable.hall}</td>
                                                    <td>{newtimeTable.createdAt.split("T")[0]}</td>
                                                    <td>
                                                    <button className='btn btn-sm btn-secondary me-1 view-btn'>
                                                        <i className="fa-solid fa-eye"></i>
                                                    </button>
                                                    <button className='btn btn-sm btn-secondary me-1 edit-btn'>
                                                        <i className="fa-solid fa-pen-to-square"></i>
                                                    </button>
                                                    <button className='btn btn-sm btn-danger me-1 delete-btn'>
                                                        <i className="fa-solid fa-trash"></i>
                                                    </button>
                                                    </td>
                                                </tr>
                                                ))}
                                            </tbody>
                                            </table>


                                              {/* The modal */}
                                            <div
                                                className={`modal fade ${showModal ? "show" : ""}`}
                                                id="noticeModal"
                                                tabIndex="-1"
                                                aria-labelledby="noticeModalLabel"
                                                aria-hidden={!showModal}
                                                style={{ display: showModal ? "block" : "none" }}
                                            >
                                                <div className="modal-dialog modal-dialog-scrollable modal-lg">
                                                <div className="modal-content">
                                                    <div className="modal-header bg-light bg-gradient">
                                                    <h5 className="modal-title" id="noticeModalLabel">
                                                    <span className="fw-bold">Time Table for:</span> {timeTableObject.coursename}
                                                
                                                    </h5>
                                                    <button
                                                        type="button"
                                                        className="btn-close"
                                                        data-bs-dismiss="modal"
                                                        aria-label="Close"
                                                        onClick={() => setShowModal(false)}
                                                    ></button>
                                                    </div>
                                                    <div className="modal-body">
                                                    <h2 className="text-center mb-5" style={{ fontFamily: 'Merriweather', }}>{timeTableObject.coursename}</h2>
                                                    <p className="my-5">Course code: {timeTableObject.courseid}</p>
                                                    <p className="my-5">Course name: {timeTableObject.coursename}</p>
                                                    <p className="my-5">Teacher: {timeTableObject.fullname}</p>
                                                    <p className="my-5">Date: {timeTableObject.cdate}</p>
                                                    <p className="my-5">Time: {timeTableObject.ctime}</p>
                                                    <p className="my-5">Hall: {timeTableObject.hall}</p>
                                                    


                                                    <div className="row">
                                                    <div>
                                                        {timeTableObject && timeTableObject.localFiles && (
                                                            <>
                                                                {console.log("timeTableObject.files:", timeTableObject.localFiles)}
                                                                {console.log("fileNames:", timeTableObject.localFiles.split(","))}
                                                                <LocalFileList fileNames={timeTableObject.localFiles.split(",")} />
                                                            </>
                                                        )}
                                                      
                                                    </div>
                                                    </div>




                                                    </div>
                                                    <div className="modal-footer">
                                                    <button
                                                        type="button"
                                                        className="btn btn-danger"
                                                        data-bs-dismiss="modal"
                                                        onClick={() => setShowModal(false)}
                                                    >
                                                        Close
                                                    </button>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>


                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </main>
                </div>
                
                
            </div>


        </section>
                      </>
                    ) : <NoPermission/>}

          

    </div>
  )
}

export default NewTimeTableList