import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Apiurl from '../Apiurl';
import Sidebar from './AdminSidebar';
import Dashhead from './Dashhead';
import { useParams } from 'react-router-dom';
import QRCode from "qrcode.react";
import html2canvas from 'html2canvas'



const SingleStudent = () =>{

    const { id } = useParams();

    const [data, setData] = useState([]);
    const [course, setCourse] = useState([]);
    const [courseids, setCourseids] = useState([]);

    const cardRef = useRef(null);

    let count = 0;

    let qrj = {'userid': id, 'courses': courseids}
    let qrtext = JSON.stringify(qrj);


    async function getstu(e) {

        try {
            if (count === 0) {
                const response = await axios.get(`${Apiurl}/student/${id}`);
                setData(response.data);


            }

        } catch (error) {
            console.log("error in getting data");
        }
        count = count + 1;
    }

    const getco = async(e) =>{
       
        try {
            const response = await axios.get(`${Apiurl}/couserbystu/${id}`);
            setCourse(response.data);
            
            
        } catch (error) {
            console.log("error in getting data")
        }
       
    }

    const getcoid = async(e) =>{
       
        try {
            const response = await axios.get(`${Apiurl}/stcoid/${id}`);
            setCourseids(response.data);
            // console.log(courseids);
            
            
        } catch (error) {
            console.log("error in getting data")
        }
       
    }
    

    const downloadImage = () => {
        html2canvas(cardRef.current).then(canvas => {
          const link = document.createElement('a');
          link.download = 'my-card.png';
          link.href = canvas.toDataURL();
          link.click();
        });
      }

   
    useEffect(()=>{
        getco();
        getcoid();
        getstu();
        
   
    })

    return(
        <section> 
            {/* <!-- Dashboard --> */}
                <div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
                        
                <Sidebar />


                {/* <!-- Main content --> */}
                <div class="h-screen flex-grow-1 overflow-y-lg-auto">
                    
                    {/* <!-- Header --> */}
                    <Dashhead />

                    {/* <!-- Main --> */}
                    <main class="py-6 bg-surface-secondary">
                    
                        <div className="container py-5">
                            <div className="row">
                            <div className="col">
                                <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item"><a href="s">Home</a></li>
                                    <li className="breadcrumb-item"><a href="s">User</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">User Profile</li>
                                </ol>
                                </nav>
                            </div>
                            </div>


                        {data.map((s) =>
                        
                            <div className="row">
                               
                                <div className="col-lg-4">
                                    <div className="card mb-4">
                                    <div className="card-body text-center">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                                        className="rounded-circle img-fluid" style={{width: "150px"}}/>
                                        <h5 className="my-3">{s.sfullname}</h5>
                                        <p className="text-muted mb-1">{s.email}</p>
                                        <p className="text-muted mb-4">{s.saddress}</p>
                                        <div className="d-flex justify-content-center mb-2">
                                        <button type="button" className="btn btn-primary">Follow</button>
                                        <button type="button" className="btn btn-outline-primary ms-1">Message</button>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="card mb-4 mb-lg-0">
                                    <div className="card-body p-0">
                                        <QRCode value={qrtext} />
                                        <br />
                                        <button onClick={()=>downloadImage()} className='debtn'>Download my student ID</button>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="card mb-4">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <p className="mb-0">Full Name</p>
                                                </div>
                                                <div className="col-sm-9">
                                                    <p className="text-muted mb-0">{s.sfullname}</p>
                                                </div>
                                            </div>
                                            <hr/>
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <p className="mb-0">Email</p>
                                                </div>
                                                <div className="col-sm-9">
                                                    <p className="text-muted mb-0">{s.email}</p>
                                                </div>
                                            </div>
                                            <hr/>
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <p className="mb-0">Phone</p>
                                                </div>
                                                <div className="col-sm-9">
                                                    <p className="text-muted mb-0">{s.tel}</p>
                                                </div>
                                            </div>
                                            <hr/>
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <p className="mb-0">NIC</p>
                                                </div>
                                                <div className="col-sm-9">
                                                    <p className="text-muted mb-0">{s.snic}</p>
                                                </div>
                                            </div>
                                            <hr/>
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <p className="mb-0">Address</p>
                                                </div>
                                                <div className="col-sm-9">
                                                    <p className="text-muted mb-0">{s.saddress}</p>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <p className="mb-0">DOB</p>
                                                </div>
                                                <div className="col-sm-9">
                                                    <p className="text-muted mb-0">{s.sdob}</p>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <p className="mb-0">Gender</p>
                                                </div>
                                                <div className="col-sm-9">
                                                    <p className="text-muted mb-0">{s.sgender}</p>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <p className="mb-0">User ID</p>
                                                </div>
                                                <div className="col-sm-9">
                                                    <p className="text-muted mb-0">{s.userId}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Course ID</th>
                                                        <th>Course Name</th>
                                                        <th>Banner Image</th>
                                                    </tr>
                                                    {course.map((c)=>
                                                        <tr>
                                                            <td>{c.id}</td>
                                                            <td>{c.courseid}</td>
                                                            <td>{c.coursename}</td>
                                                            <td><img src={c.coursebanner} alt="banner" className='img-fluid stcourseban' /></td>
                                                        </tr>
                                                    )}
                                                </table>
                                            </div>
                                        </div>
                            
                                    </div>

                                    <div className="row mt-5 mb-5">
                                        <div className="col-sm-12">
                                            <div className="card mb-3" ref={cardRef} style={{maxWidth:540}}>
                                                <div className="row g-1 stcard">
                                                    
                                                    <div className="col-md-4">
                                                        <QRCode value={qrtext} className='mt-4 mr-3 card-qr' />
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="card-body c-data">
                                                            <h5 className="card-title">{s.sfullname}</h5>
                                                            <p className=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-at" viewBox="0 0 16 16">
                                                                                <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"/>
                                                                                <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
                                                                                </svg>  {s.email}</p>
                                                            <p className="card-text"><i class="bi bi-person-fill"></i>  {s.userId}</p>
                                                            <p className="card-text"><i class="bi bi-telephone-fill"></i>  {s.tel}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        </div>

                    </main>
                </div>
                
                
            </div>


        </section>
    )
}

export default SingleStudent;