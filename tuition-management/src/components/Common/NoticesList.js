import React, {useRef, useEffect, useState, tableRef} from "react";
import axios from "axios";
import Apiurl from '../Apiurl';
import Sidebar from '../Admin/AdminSidebar';
import Dashhead from '../Admin/Dashhead';
import { useNavigate } from 'react-router-dom'
import DOMPurify from 'dompurify';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import CloudinaryFileList from './CloudinaryFileList';
import CloudBackupFilesList from './CloudBackupFilesList';
import LocalFileList from './LocalFileList';

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


function NoticesList() {

    // const [listOfNotices, setListOfNotices] = useState([]);

    // useEffect(() => {
    //     axios.get(`${Apiurl}/notice`)
    //     .then(res => {
    //         console.log(res.data);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })
    // }, [])

    const tableRef = useRef(null);
    const [notices, setNotices] = useState([]);
    const [fileCount, setFileCount] = useState(0);
    const [noticeToText, setNoticeToText] = useState('');
    const [cloudFiles, setCloudFiles] = useState([]);
    const [cloudUrls, setCloudUrls] = useState([]);
    // const [localFiles, setLocalFiles] = useState([]);
    // const [localUrls, setLocalUrls] = useState([]);
    
  
    const [showModal, setShowModal] = useState(false);
    // const handleShowModal = () => setShowModal(true);
    const [noticeObject, setNoticeObject] = useState({});

    const MySwal = withReactContent(Swal) // Create a new instance of SweetAlert with React content
    
    let navigate = useNavigate();    //useNavigate is a hook to navigate to another page


    // useEffect(() => {
    //     axios.get(`${Apiurl}/notice`)
    //       .then(res => {
    //         const noticesData = res.data;
    //         setNotices(noticesData);
    //         // Extract filenames and noticeTo values from the response data
    //         const filenames = noticesData.map(notice => notice.files);
    //         // Get the number of files for each notice
    //         const fileCounts = filenames.map(files => files.split(',').length);
    //         // Update the state with the file counts
    //         setFileCount(fileCounts);
    //         // Set the noticeTo text based on the notice_to value
    //         const noticeToTexts = noticesData.map(notice => {
    //           let text = '';
              // if (notice.notice_to === '5') {
              //   text = 'All';
              // } else if (notice.notice_to === '2') {
              //   text = 'Staff';
              // } else if (notice.notice_to === '3') {
              //   text = 'Teacher';
              // } else if (notice.notice_to === '4') {
              //   text = 'Student';
              // }
    //           return text;
    //         });
    //         setNoticeToText(noticeToTexts);
    //       })
    //       .catch(err => {
    //         console.log(err);
    //       })
    //   }, []);


        useEffect(() => {
        const fetchData = async () => {
        const response = await fetch(`${Apiurl}/notice`);
        const data = await response.json();

         // Destroy existing DataTable (if any)
        if ($.fn.DataTable.isDataTable(tableRef.current)) {
          $(tableRef.current).DataTable().destroy();
        }
    
        // Initialize DataTable
        const table = $(tableRef.current).DataTable({
          data: data,
          columns: [
            {
              title: 'Notice To',
              data: 'notice_to',
              render: (notice_to) => {
                let text = '';
        
                if (notice_to === '5') {
                  text = 'All';
                } else if (notice_to === '2') {
                  text = 'Staff';
                } else if (notice_to === '3') {
                  text = 'Teacher';
                } else if (notice_to === '4') {
                  text = 'Student';
                }
        
                return text;
              },
            },
            { title: 'Notice Title', data: 'notice_title'},
            { title: 'Attachments', data: 'files', render: (files) => files ? files.split(",").length : 0 },
            { title: 'Date', data: 'createdAt'},
            {
              title: 'Action',
              data: 'id',
              render: (id) => (
                `<button class="btn btn-sm btn-secondary me-1 view-btn" data-id="${id}"><i class="fa-solid fa-eye"></i></button>` +
                `<button class="btn btn-sm btn-secondary me-1 edit-btn" data-id="${id}"><i class="fa-solid fa-pen-to-square"></i></button>` +
                `<button class="btn btn-sm btn-danger me-1 delete-btn" data-id="${id}"><i class="fa-solid fa-trash"></i></button>`
              )
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
          navigate(`/notice/edit/${id}`);
        });
    
        $(tableRef.current).on('click', '.delete-btn', function() {
          const id = $(this).data('id');
          handleDeleteNotice(id);
        });
      };
    
      fetchData();


}, []);


      



      const deleteNotice = async(id) =>{
        console.log(`${Apiurl}/notice/${id}`);
        try {
          const deleted = await axios.delete(`${Apiurl}/notice/${id}`);
          console.log(deleted.data);
          // Update the state of the notices array after deleting the notice
          setNotices(notices.filter(notice => notice.id !== id));
        } catch (error) {
          console.log("error on deleting" + error);
        }
      }


    const handleDeleteNotice = (noticeId) => {
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
            deleteNotice(noticeId)
            MySwal.fire(
              'Deleted!',
              'The notice has been deleted.',
              'success'
            )
          }
        })
      }


      const viewNotice = async(id) =>{  
        try {
            const notice = await axios.get(`${Apiurl}/notice/${id}`);
            console.log("dataaaaaaa",notice.data);


        } catch (error) {
            console.log("error on viewing" + error);
        }
    }


    const handleShowModal = (noticeId) => {
        axios.get(`${Apiurl}/notice/byId/${noticeId}`).then((response) => {
          setNoticeObject(response.data);
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



      function getRecipientText(recipient) {
        switch(recipient) {
          case "2":
            return 'Staff';
          case "3":
            return 'Teacher';
          case "4":
            return 'Student';
          case "5":
            return 'All';
          default:
            return '';
        }
      }

  return (
    <div>
         <section> 
            {/* <!-- Dashboard --> */}
                <div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
                        
                <Sidebar />


                {/* <!-- Main content --> */}
                <div class="h-screen flex-grow-1 overflow-y-lg-auto">
                    
                    {/* <!-- Header --> */}
                    <Dashhead />

                    {/* <!-- Main --> */}
                     <main>
                    
                        <div class="container">

                            <div className="row">
                            <div class="d-flex mt-3">
                                <div class="p-2 flex-grow-1"><h2>Notices</h2></div>
                                <div class="p-2"><a href="notice/create" className="btn-grad">Create Notice</a></div>
                                </div>

                            </div>


                            <div className="row mt-5">
                               
                                <div className="col-sm-12">
                                    <div class="table-responsive">
                                        <table ref={tableRef} id="#example" className="table table-striped" style={{width:"100%"}}>
                                            <thead>
                                                <tr>
                                                    <th>Notice To</th>
                                                    <th>Notice Title</th>
                                                    <th>Attachments</th>
                                                    <th>Date</th>
                                                    <th>Action</th> 
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {notices.map((notice, index) => (
                                                <tr key={notice.id}>
                                                    <td>{noticeToText[index]}</td>
                                                    <td>{notice.notice_title}</td>
                                                    <td>{notice.files ? notice.files.split(",").length : 0}</td>
                                                    <td>{notice.createdAt.split("T")[0]}</td>
                                                    <td>
                                                     
                                                     {/* <button className='btn btn-sm btn-warning' onClick={()=> navigate(`/notice/${notice.id}`)}>View</button> */}
                                                     <button className='btn btn-sm btn-secondary me-1 view-btn' onClick={() => handleShowModal(notice.id)}><i className="fa-solid fa-eye"></i></button>
                                                     <button className='btn btn-sm btn-secondary me-1 view-btn' onClick={() => {navigate(`/notice/edit/${notice.id}`)}}><i className="fa-solid fa-pen-to-square"></i></button>
                                                     <button className='btn btn-sm btn-secondary me-1 delete-btn' onClick={()=> handleDeleteNotice(notice.id)}><i className="fa-solid fa-trash"></i></button>
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
                                                    <span className="fw-bold">{getRecipientText(noticeObject.notice_to)} Notice :</span> {noticeObject.notice_title}
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
                                                    <h2 className="text-center mb-5" style={{ fontFamily: 'Merriweather', }}>{noticeObject.notice_title}</h2>
                                                    <p className="my-5">Notice To: {getRecipientText(noticeObject.notice_to)}</p>
                                                    <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(noticeObject.notice_desc) }} className="my-5"></p> 

                                                    <div className="row">
                                                    <div>
                                                    <CloudinaryFileList cloudUrls={cloudUrls} />
                                                    </div>
                                                    </div>

                                                    <div className="row">
                                                    <div>
                                                    <CloudBackupFilesList cloudFiles={cloudFiles} />
                                                    </div>
                                                    </div>

                                                    <div className="row">
                                                    <div>
                                                        {noticeObject && noticeObject.localFiles && (
                                                            <>
                                                                {console.log("noticeObject.files:", noticeObject.localFiles)}
                                                                {console.log("fileNames:", noticeObject.localFiles.split(","))}
                                                                <LocalFileList fileNames={noticeObject.localFiles.split(",")} />
                                                            </>
                                                        )}
                                                        {/* <LocalFileList localUrls={localUrls} /> */}
                                                        {/* <CloudinaryFileList cloudUrls={noticeObject.files.split(",")} /> */}
                                                        {/* <img src="http://localhost:3000/uploads/notices/e81a46c8-17bf-446b-aa69-17bc303c1cf6_Image 001.png" alt="../../../../backend/uploads/notices/e81a46c8-17bf-446b-aa69-17bc303c1cf6_Image 001"></img> */}

                                                    {/* {noticeObject.localFiles && noticeObject.localFiles.split(",").map((file, index) => (
                                                    <div key={index}>
                                                        <a href={`${Apiurl}/uploads/notices/${file}`} download>{file}</a>
                                                    </div>
                                                    ))} */}
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

export default NoticesList