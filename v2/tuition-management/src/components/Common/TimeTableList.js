import React, {useRef, useEffect, useState} from "react";
import axios from "axios";
import Apiurl from '../Apiurl';

import { useNavigate } from 'react-router-dom'
import DOMPurify from 'dompurify';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import CloudinaryFileList from './CloudinaryFileList';
import CloudBackupFilesList from './CloudBackupFilesList';
import LocalFileList from './LocalFileListTimeTable';

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

function TimeTableList() {
    const tableRef = useRef(null);

    const [timeTables, setTimeTables] = useState([]);
    const [timeTableDelete, setTimeTableDelete] = useState('');
    const [fileCount, setFileCount] = useState(0);
    const [noticeToText, setNoticeToText] = useState('');
    const [cloudFiles, setCloudFiles] = useState([]);
    const [cloudUrls, setCloudUrls] = useState([]);
    // const [localFiles, setLocalFiles] = useState([]);
    // const [localUrls, setLocalUrls] = useState([]);
    
  
    const [showModal, setShowModal] = useState(false);
    // const handleShowModal = () => setShowModal(true);
    const [timeTableObject, setTimeTableObject] = useState({});

    const MySwal = withReactContent(Swal) // Create a new instance of SweetAlert with React content
    
    let navigate = useNavigate();    //useNavigate is a hook to navigate to another page

    const [cookies] = useCookies(['role']);
    // console.log(cookies.role);



    useEffect(() => {
        axios.get(`${Apiurl}/timetable`)
          .then(res => {
            const timeTabelsData = res.data;
            setTimeTables(timeTabelsData);
            // Extract filenames and noticeTo values from the response data
            const filenames = timeTabelsData.map(notice => notice.files);
            // Get the number of files for each notice
            if (filenames.length>0){
            const fileCounts = filenames.map(files => files.split(',').length);
            // Update the state with the file counts
            setFileCount(fileCounts);
            // Set the noticeTo text based on the notice_to value
            }
          })
          .catch(err => {
            console.log(err);
          })
      }, []);


    //   useEffect(() => {
    //     // Initialize the DataTable
    //     $(tableRef.current).DataTable();
    //   }, []);


    // useEffect(() => {
    //   // Fetch your data here, for example:
    //   const fetchData = async () => {
    //     const response = await fetch(`${Apiurl}/timetable`);
    //     const data = await response.json();
    
    //     // Destroy existing DataTable (if any)
    //     if ($.fn.DataTable.isDataTable(tableRef.current)) {
    //       $(tableRef.current).DataTable().destroy();
    //     }
    
    //     // Initialize DataTable
    //     const table = $(tableRef.current).DataTable({
    //       data: data,
    //       columns: [
    //         { title: 'TimeTable Title', data: 'time_title' },
    //         { title: 'Grade', data: 'grade' },
    //         { title: 'Files', data: 'files', render: (files) => files ? files.split(",").length : 0 },
    //         { title: 'Date', data: 'createdAt', render: (createdAt) => createdAt.split("T")[0] },
    //         {
    //           title: 'Action',
    //           data: 'id',
    //           render: (id) => (
    //             `<button class="btn btn-sm btn-secondary me-1 view-btn"><i class="fa-solid fa-eye"></i></button>` +
    //             `<button class="btn btn-sm btn-secondary me-1 edit-btn"><i class="fa-solid fa-pen-to-square"></i></button>` +
    //             `<button class="btn btn-sm btn-danger me-1 delete-btn"><i class="fa-solid fa-trash"></i></button>`
    //           )
    //         }
    //       ],
    //       dom: 'Bfrtip', // Add the required buttons
    //       buttons: [
    //         'copyHtml5',
    //         'excelHtml5',
    //         'csvHtml5',
    //         'pdfHtml5',
    //         'print'
    //       ],
    //     });
    
    //     // Event listeners for action buttons
    //     $(tableRef.current).on('click', '.view-btn', function() {
    //       const rowData = table.row($(this).closest('tr')).data();
    //       handleShowModal(rowData.id);
    //     });
    
    //     $(tableRef.current).on('click', '.edit-btn', function() {
    //       const rowData = table.row($(this).closest('tr')).data();
    //       navigate(`/timetable/edit/${rowData.id}`);
    //     });
    
    //     $(tableRef.current).on('click', '.delete-btn', function() {
    //       const rowData = table.row($(this).closest('tr')).data();
    //       handleDeleteTimeTable(rowData.id);
    //     });
    //   };
    
    //   fetchData();
    // }, []);





    useEffect(() => {
      // Fetch your data here, for example:
      const fetchData = async () => {
        const response = await fetch(`${Apiurl}/timetable`);
        const data = await response.json();

        // setTimeTable(data);
    
        // Destroy existing DataTable (if any)
        if ($.fn.DataTable.isDataTable(tableRef.current)) {
          $(tableRef.current).DataTable().destroy();
        }
    
        // Initialize DataTable
        const table = $(tableRef.current).DataTable({
          data: data,
          columns: [
            { title: 'TimeTable Title', data: 'time_title' },
            { title: 'Grade', data: 'grade' },
            { title: 'Files', data: 'files', render: (files) => files ? files.split(",").length : 0 },
            { title: 'Date', data: 'updatedAt', render: (updatedAt) => updatedAt.split("T")[0] },
            {
              title: 'Action',
              data: 'id',
              // render: (id) => (
              //   `<button class="btn btn-sm btn-secondary me-1 view-btn" data-id="${id}"><i class="fa-solid fa-eye"></i></button>` +
              //   `<button class="btn btn-sm btn-secondary me-1 edit-btn" data-id="${id}"><i class="fa-solid fa-pen-to-square"></i></button>` +
              //   `<button class="btn btn-sm btn-danger me-1 delete-btn" data-id="${id}"><i class="fa-solid fa-trash"></i></button>`
              // )
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
        });
    
        $(tableRef.current).on('click', '.edit-btn', function() {
          const id = $(this).data('id');
          navigate(`/timetable/edit/${id}`);
        });
    
        $(tableRef.current).on('click', '.delete-btn', function() {
          const id = $(this).data('id');
          handleDeleteTimeTable(id);
        });
      };
    
      fetchData();
    }, [timeTableDelete]);
    
    







    // useEffect(() => {
    //     // Fetch your data here, for example:
    //     const fetchData = async () => {
    //       const response = await fetch('your-data-api-url');
    //       const data = await response.json();
      
    //       // Destroy existing DataTable (if any)
    //       if ($.fn.DataTable.isDataTable(tableRef.current)) {
    //         $(tableRef.current).DataTable().destroy();
    //       }
      
    //       // Initialize DataTable
    //       $(tableRef.current).DataTable({
    //         data: data,
    //         columns: [
    //           { title: 'TimeTable Title', data: 'time_title' },
    //           { title: 'Grade', data: 'grade' },
    //           { title: 'Files', data: 'files', render: (files) => files ? files.split(",").length : 0 },
    //           { title: 'Date', data: 'createdAt', render: (createdAt) => createdAt.split("T")[0] },
    //           {
    //             title: 'Action',
    //             data: 'id',
    //             render: (id) => (
    //               <>
    //                 <button className="btn btn-sm btn-secondary me-1" onClick={() => handleShowModal(id)}><i className="fa-solid fa-eye"></i></button>
    //                 <button className="btn btn-sm btn-secondary me-1" onClick={() => navigate(`/timetable/edit/${id}`)}><i className="fa-solid fa-pen-to-square"></i></button>
    //                 <button className="btn btn-sm btn-danger me-1" onClick={() => handleDeleteTimeTable(id)}><i className="fa-solid fa-trash"></i></button>
    //               </>
    //             )
    //           }
    //         ],
    //         dom: 'Bfrtip', // Add the required buttons
    //         buttons: [
    //           'copyHtml5',
    //           'excelHtml5',
    //           'csvHtml5',
    //           'pdfHtml5',
    //           'print'
    //         ],
    //       });
    //     };
      
    //     fetchData();
    //   }, []);
      
      



      const deleteTimeTable = async(id) =>{
        console.log(`${Apiurl}/timetable/${id}`);
        try {
          const deleted = await axios.delete(`${Apiurl}/timetable/${id}`);
          console.log(deleted.data);
          setTimeTableDelete(id);
      
          // Update the state of the notices array after deleting the notice
          // setTimeTables(timeTables.filter(timetable => timetable.id !== id));
        } catch (error) {
          console.log("error on deleting" + error);
        }
      }


    const handleDeleteTimeTable = (noticeId) => {
        MySwal.fire({
          title: 'Are you sure?',
          text: 'You are about to delete this notice.',
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
              'The notice has been deleted.',
              'success'
            )
          }
        })
      }


      const viewTimeTable = async(id) =>{  
        try {
            const timetable = await axios.get(`${Apiurl}/timetable/${id}`);
            console.log("dataaaaaaa",timetable.data);


        } catch (error) {
            console.log("error on viewing" + error);
        }
    }


    const handleShowModal = (timetableId) => {
        axios.get(`${Apiurl}/timetable/byId/${timetableId}`).then((response) => {
          setTimeTableObject(response.data);
          setShowModal(true);


           if (response.data.cloudFiles) {
            const urls = response.data.cloudFiles.split(',').map(url => url.trim());
            setCloudFiles(urls);
            console.log("urls :",urls);
          }else{
           // Clear the list of cloud files
           setCloudFiles([]);
          }


          if (response.data.cloudOnly) {
            const urls = response.data.cloudOnly.split(',').map(url => url.trim());
            setCloudUrls(urls);
            console.log("urls :",urls);
          }else{
           // Clear the list of cloud files
           setCloudUrls([]);
          }
          

          
            
            
});
      };






  return (
    <div>
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

                            <div className="row mobileflex">
                            <div class="d-flex mt-3 mobileflex">
                            <div class="p-2 flex-grow-1"><h2>TimeTable Post</h2></div>
                            {(cookies.role === '1' || cookies.role === '2' || cookies.role === '3') && (
                                  <div class="p-2"><a href="/timetable/create" className="btn-grad">Create TimeTable</a></div>
                                )}
                            
                              </div>


                                {/* <div class="col-xl-4 col-sm-6 col-12">
                                    <div class="card shadow border-0">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col py-3">
                                                   
                                                    <a href="/timetable/create" className="btn-grad">Create TimeTable</a>
                                                </div>
                                                <div class="col-auto py-5">
                                                    <div class="icon icon-shape text-white text-lg rounded-circle" style={{backgroundColor: "#0C4160"}}>
                                                    <i class="bi bi-book-half"></i>
                                                    </div>
                                                </div>
                                            </div>
                               
                                        </div>
                                    </div>
                                </div> */}
                            </div>


                            <div className="row mt-5">
                               
                                <div className="col-sm-12">
                                    <div class="table-responsive">
                                        {/* <table ref={tableRef} className="table table-striped" style={{ width: "100%" }}>
                                            <thead>
                                                <tr>
                                                    <th>TimeTable Title</th>
                                                    <th>Grade</th>
                                                    <th>Files</th>
                                                    <th>Date</th>
                                                    <th>Action</th> 
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {timeTables.map((timeTable) => (
                                                <tr key={timeTable.id}>
                                                  <td>{timeTable.time_title}</td>
                                                  <td>{timeTable.grade}</td>
                                                  <td>{timeTable.files ? timeTable.files.split(",").length : 0}</td>
                                                  <td>{timeTable.createdAt.split("T")[0]}</td>
                                                  <td>
                                                    <button className='btn btn-sm btn-secondary me-1' onClick={() => handleShowModal(timeTable.id)}>
                                                      <i className="fa-solid fa-eye"></i>
                                                    </button>
                                                    <button className='btn btn-sm btn-secondary me-1' onClick={() => navigate(`/timetable/edit/${timeTable.id}`)}>
                                                      <i className="fa-solid fa-pen-to-square"></i>
                                                    </button>
                                                    <button className='btn btn-sm btn-danger me-1' onClick={() => handleDeleteTimeTable(timeTable.id)}>
                                                      <i className="fa-solid fa-trash"></i>
                                                    </button>
                                                  </td>
                                                </tr>
                                              ))}
       
                                            </tbody>
                                            
                                        </table> */}

                                          <table ref={tableRef} className="table table-striped" style={{ width: "100%" }}>
                                            <thead>
                                              <tr>
                                                <th>TimeTable Title</th>
                                                <th>Grade</th>
                                                <th>Files</th>
                                                <th>Date</th>
                                                <th>Action</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              {timeTables.map((timeTable) => (
                                                <tr key={timeTable.id}>
                                                  <td>{timeTable.time_title}</td>
                                                  <td>{timeTable.grade}</td>
                                                  <td>{timeTable.files ? timeTable.files.split(",").length : timeTable.cloudFiles ? timeTable.cloudFiles.split(",").length : timeTable.cloudOnly ? timeTable.cloudOnly.split(",").length : '0'}</td>
                                                  <td>{timeTable.updatedAt.split("T")[0]}</td>
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
                                                    <span className="fw-bold">Time Table :</span> {timeTableObject.time_title}
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
                                                    <h2 className="text-center mb-5" style={{ fontFamily: 'Merriweather', }}>{timeTableObject.time_title}</h2>
                                                    <p className="my-5">Grade: {timeTableObject.grade}</p>

                                                    <div className="row">
                                                    <div>
                                                    <CloudinaryFileList cloudUrls={cloudUrls} />
                                                    </div>
                                                    </div>

                                                    <div className="row">
                                                    <div>
                                                    {timeTableObject && timeTableObject.cloudFiles && (
                                                            <>
                                                                <CloudBackupFilesList cloudFiles={cloudFiles} />
                                                            </>
                                                        )}
                                                    </div>
                                                    </div>

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
    </div>
  )
}

export default TimeTableList