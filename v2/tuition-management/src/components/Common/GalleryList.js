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

function GalleryList() {
    const tableRef = useRef(null);

    const [galleries, setGalleries] = useState([]);
    const [galleryDelete, setGalleryDelete] = useState([]);
    const [fileCount, setFileCount] = useState(0);
    const [cloudFiles, setCloudFiles] = useState([]);
    const [cloudUrls, setCloudUrls] = useState([]);

    
  
    const [showModal, setShowModal] = useState(false);
    // const handleShowModal = () => setShowModal(true);
    const [galleryObject, setGalleryObject] = useState({});

    const MySwal = withReactContent(Swal) // Create a new instance of SweetAlert with React content
    
    let navigate = useNavigate();    //useNavigate is a hook to navigate to another page

    const [cookies] = useCookies(['role']);
    // console.log(cookies.role);


    useEffect(() => {
        axios.get(`${Apiurl}/gallery`)
          .then(res => {
            const galleryData = res.data;
            setGalleries(galleryData);
            // Extract filenames  from the response data
            const filenames = galleryData.map(gallery => gallery.files);
            // Get the number of files for each gallery
            if (filenames.length>0){
            const fileCounts = filenames.map(files => files.split(',').length);
            // Update the state with the file counts
            setFileCount(fileCounts);
            
            }
          })
          .catch(err => {
            console.log(err);
          })
      }, []);






    useEffect(() => {
      // Fetch your data here, for example:
      const fetchData = async () => {
        const response = await fetch(`${Apiurl}/gallery`);
        const data = await response.json();
    
        // Destroy existing DataTable (if any)
        if ($.fn.DataTable.isDataTable(tableRef.current)) {
          $(tableRef.current).DataTable().destroy();
        }
    
        // Initialize DataTable
        const table = $(tableRef.current).DataTable({
          data: data,
          columns: [
            { title: 'Location', data: 'location' },
            { title: 'Category', data: 'category' },
            { title: 'Files', data: 'files', render: (files) => files ? files.split(",").length : 0 },
            
            { title: 'Date', data: 'updatedAt', render: (updatedAt) => updatedAt.split("T")[0] },
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
          navigate(`/gallery/edit/${id}`);
        });
    
        $(tableRef.current).on('click', '.delete-btn', function() {
          const id = $(this).data('id');
          handleDeleteGallery(id);
        });
      };
    
      fetchData();
    }, [galleryDelete]);
    
    

      
      



      const deleteGallery = async(id) =>{
        console.log(`${Apiurl}/gallery/${id}`);
        try {
          const deleted = await axios.delete(`${Apiurl}/gallery/${id}`);
          console.log(deleted.data);
          setGalleryDelete(id);
          // Update the state of the galleries array after deleting the gallery
          // setGalleries(galleries.filter(gallery => gallery.id !== id));
        } catch (error) {
          console.log("error on deleting" + error);
        }
      }


    const handleDeleteGallery = (galleryId) => {
        MySwal.fire({
          title: 'Are you sure?',
          text: 'You are about to delete this Gallery.',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#3085d6',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            deleteGallery(galleryId)
            MySwal.fire(
              'Deleted!',
              'The Gallery has been deleted.',
              'success'
            )
          }
        })
      }


      const viewGallery = async(id) =>{  
        try {
            const gallery = await axios.get(`${Apiurl}/gallery/${id}`);
            console.log("dataaaaaaa",gallery.data);


        } catch (error) {
            console.log("error on viewing" + error);
        }
    }


    const handleShowModal = (galleryId) => {
        axios.get(`${Apiurl}/gallery/byId/${galleryId}`).then((response) => {
          setGalleryObject(response.data);
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
      {(cookies.role === '1' || cookies.role === '2' ) ? (
        <>
          <section> 
            {/* <!-- Dashboard --> */}
                <div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
                        
                <Sidebar /> 


                {/* <!-- Main content --> */}
                <div class="h-screen flex-grow-1 overflow-y-lg-auto">
                    
                    {/* <!-- Header --> */}
                     <AdminDashhead />

                    {/* <!-- Main --> */}
                     <main>
                    
                        <div class="container">

                            <div className="row mobileflex">
                            <div class="d-flex mt-3 mobileflex">
                            <div class="p-2 flex-grow-1"><h2>Gallery</h2></div>
                            {(cookies.role === '1') && (
                                  <div class="p-2"><a href="/gallery/create" className="btn-grad">Create Gallery</a></div>
                                )}
                            
                              </div>


                            </div>


                            <div className="row mt-5">
                               
                                <div className="col-sm-12">
                                    <div class="table-responsive">
                    

                                          <table ref={tableRef} className="table table-striped" style={{ width: "100%" }}>
                                            <thead>
                                              <tr>
                                                <th>Location</th>
                                                <th>Category</th>
                                                <th>Files</th>
                                                <th>Date</th>
                                                <th>Action</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              {galleries.map((gallery) => (
                                                <tr key={gallery.id}>
                                                  <td>{gallery.time_title}</td>
                                                  <td>{gallery.grade}</td>
                                                  <td>{gallery.files ? gallery.files.split(",").length : gallery.cloudFiles ? gallery.cloudFiles.split(",").length : gallery.cloudOnly ? gallery.cloudOnly.split(",").length : '0'}</td>
                                                  <td>{gallery.updatedAt.split("T")[0]}</td>
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
                                                    <span className="fw-bold">Gallery Location :</span> {galleryObject.location}
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
                                                    <h2 className="text-center mb-5" style={{ fontFamily: 'Merriweather', }}>{galleryObject.location} Gallery</h2>
                                                    <p className="my-5">Grade: {galleryObject.category}</p>

                                                    <div className="row">
                                                    <div>
                                                
                                                        <CloudinaryFileList cloudUrls={cloudUrls} />
                                              
                                                    </div>
                                                    </div>

                                                    <div className="row">
                                                    <div>
                                                    {galleryObject && galleryObject.cloudFiles && (
                                                      <>
                                                        <CloudBackupFilesList cloudFiles={cloudFiles} />
                                                      </>
                                                        )}
                                                    </div>
                                                    </div>

                                                    <div className="row">
                                                    <div>
                                                        {galleryObject && galleryObject.localFiles && (
                                                            <>
                                                                {console.log("galleryObject.files:", galleryObject.localFiles)}
                                                                {console.log("fileNames:", galleryObject.localFiles.split(","))}
                                                                <LocalFileList fileNames={galleryObject.localFiles.split(",")} />
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
                    
        ) : <NoPermission />}

    </div>
  )
}

export default GalleryList