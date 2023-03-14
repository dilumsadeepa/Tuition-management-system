import React, { useState, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';
import Apiurl from '../Apiurl';
import Sidebar from './AdminSidebar';
import Dashhead from './Dashhead';




const CreateCourse = () => {

    const [cid, setCid] = useState("");
    const [cname, setCname] = useState("");
    const [cbanner, setCbanner] = useState("");
    const [cprofile , setCprofile] = useState("");
    const [cdes, setCdes] = useState("");
    const [cprice, setCprice] = useState("");
    const [succ, setsucc] = useState("");
    const [err, seterr] = useState("");


    const editorRef = useRef(null);
    

    const create = async() =>{

        setCdes(editorRef.current.getContent())

        if (cid === "" || cname === "" || cbanner === "" || cprofile === "" || cdes === "" || cprice === "") {
            seterr("Fill All the Fileds");
        }
        else{
            let courseid = cid;
            let coursename = cname;
            let coursebanner = cbanner;
            let courseprofile = cprofile;
            let coursedes = cdes;
            let courseprice = cprice;
            try {
                await axios.post(`${Apiurl}/crestecourse/`,{
                   courseid,
                   coursename,
                   coursebanner,
                   courseprofile,
                   coursedes,
                   courseprice, 
                });
                
            } catch (error) {
                console.log(error);
            }
            setsucc("course cerated");
            seterr("");
        }
    }

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
                    
                        <div class="container">

                            

                            <div className="row mt-5 mb-5">
                                <div className="col-sm-12">
                                    <h2>Create Course</h2>
                                </div>
                            </div>

                            <div className="row mt-5 mb-5">

                                <div className="col-sm-1"></div>

                                <div className="col-sm-10">
                                    {succ.length > 0 &&
                                        <>
                                            <div class="alert alert-success alert-dismissible fade show">
                                                
                                                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                                                    <strong>Success!</strong> {succ}
                                            </div>
                                        </>
                                    }
                                    {err.length > 0 &&
                                        <>
                                            <div class="alert alert-danger alert-dismissible fade show">
                                                
                                                
                                                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                                                    <strong>Error!</strong> {err}
                                                
                                            </div>
                                        </>
                                    }
                                </div>

                                <div className="col-sm-1"></div>

                            </div>

                            <div className="row">
                                <div className="col-sm-2"></div>

                                <div className="col-sm-8 debox">

                                    <form onSubmit={create}>

                                        <div class="mb-3 mt-3">
                                            <label className="form-label">Course Code:</label>
                                            <input type="text" 
                                                className="form-control" 
                                                placeholder="Enter the Course Code"
                                                onChange={(e) => setCid(e.target.value)}
                                            />
                                        </div>

                                        <div class="mb-3 mt-3">
                                            <label className="form-label">Course Name:</label>
                                            <input type="text" 
                                                className="form-control" 
                                                placeholder="Enter the Course Name"
                                                onChange={(e) => setCname(e.target.value)}
                                            />
                                        </div>

                                        <div class="mb-3 mt-3">
                                            <label className="form-label">Course Banner Image:</label>
                                            <input type="text" 
                                                className="form-control" 
                                                placeholder="Enter the Course Image URL"
                                                onChange={(e) => setCbanner(e.target.value)}
                                            />
                                        </div>

                                        <div class="mb-3 mt-3">
                                            <label className="form-label">Course Profile Image:</label>
                                            <input type="text" 
                                                className="form-control" 
                                                placeholder="Enter the Course Profile Url"
                                                onChange={(e) => setCprofile(e.target.value)}
                                            />
                                        </div>

                                        <div class="mb-3 mt-3">
                                            <label className="form-label">Course Description:</label>
                                            <Editor
                                                onInit={(evt, editor) => editorRef.current = editor}
                                                initialValue="<p>This is the initial content of the editor.</p>"
                                                init={{
                                                height: 500,
                                                menubar: false,
                                                plugins: [
                                                    'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount advlist autolink lists link image charmap print preview anchor',
                                                    'searchreplace visualblocks code fullscreen',
                                                    'insertdatetime media table paste code help wordcount'
                                                ],
                                                toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
                                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                                                
                                                }}
                                            />
                                        </div>

                                        <div class="mb-5 mt-3">
                                            <label className="form-label">Course Price:</label>
                                            <input type="text" 
                                                className="form-control" 
                                                placeholder="Enter the Course Price"
                                                onChange={(e) => setCprice(e.target.value)}
                                            />
                                        </div>

                                        <div class="mb-5 mt-5">
                                            
                                            <button type='button' onClick={create} className='debtn w-100'>Submit</button>
                                        </div>

                                    </form>

                                </div>

                                <div className="col-sm-2"></div>
                            </div>
                            
                        </div>
                    </main>
                </div>
                
                
            </div>


        </section>
    )

}


export default CreateCourse;