import React, { useState, useRef, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';
import Apiurl from '../Apiurl';
import Sidebar from './AdminSidebar';
import Dashhead from './Dashhead';




const CreateCourse = () => {

    const [courseid, setCid] = useState("");
    const [coursename, setCname] = useState("");
    const [coursesubject, setCourseSubject] = useState("");
    const [coursebanner, setCbanner] = useState("");
    const [courseprofile, setCprofile] = useState("");
    const [coursedes, setCdes] = useState("");
    const [courseprice, setCprice] = useState("");
    const [userId, setct] = useState("");
    const [succ, setsucc] = useState("");
    const [errors, setErrors] = useState([]);
    const [courseStream, setCourseStream] = useState('');
    console.log(courseStream);

    const streams = ['Science / Maths', 'Commerce', 'Arts', 'Technology', 'Common', 'Languages', 'English Medium', 'Upto Ordinary Level'];
    const subjects = {
        'Science / Maths': ['Physics', 'Chemistry', 'Biology', 'Combined Mathematics'],
        'Commerce': ['Accounts', 'Business Studies', 'Economics'],
        'Arts': ['History', 'Geography', 'Political Science', 'Logic', 'Sinhala', 'Tamil', 'English'],
        'Technology': ['Engineering Technology', 'Bio System Technology', 'Science For Technology'],
        'Common': ['Information Communication Technology'],
        'Languages': ['Sinhala', 'Tamil', 'English', 'French', 'Japanese', 'Chinese'],
        'English Medium': [ 'Maths', 'Science', 'ICT'],
        'Upto Ordinary Level': ['Sinhala', 'English', 'Buddhism', 'Maths', 'Science', 'History', 'ICT', 'Tamil'],
    }


    const editorRef = useRef(null);

    const [teachers, setTeachers] = useState([]);


    const gette = async (e) => {
        try {
            const response = await axios.get(`${Apiurl}/teacher`);
            setTeachers(response.data);
            console.log(response.data);
        } catch (error) {
            console.log("error in getting data")
        }
    }

    useEffect(() => {
        gette();
    }, [])


    const create = async () => {
        setCdes(editorRef.current.getContent())

        // Form validation
        const errors = [];
        if (courseid.trim() === "") {
            errors.push("Course Code is required");
        }
        if (coursename.trim() === "") {
            errors.push("Course Name is required");
        }
        if (courseStream.trim() === "") {
            errors.push("Course Stream is required");
        }
        if (coursesubject.trim() === "") {
            errors.push("Course Subject is required");
        }
        if (coursebanner.trim() === "") {
            errors.push("Course Banner Image URL is required");
        }
        if (courseprofile.trim() === "") {
            errors.push("Course Profile Image URL is required");
        }
        if (coursedes.trim() === "") {
            errors.push("Course Description is required");
        }
        if (courseprice.trim() === "") {
            errors.push("Course Price is required");
        }
        if (userId.trim() === "") {
            errors.push("Teacher is required");
        }
        // Validate course banner format
        const bannerFileExt = coursebanner.substr(coursebanner.lastIndexOf(".") + 1).toLowerCase();
        if (!["jpg", "jpeg", "png"].includes(bannerFileExt)) {
            errors.push("Course banner should be in JPG or PNG format");
        }

        // Validate course profile format
        const profileFileExt = courseprofile.substr(courseprofile.lastIndexOf(".") + 1).toLowerCase();
        if (!["jpg", "jpeg", "png"].includes(profileFileExt)) {
            errors.push("Course profile should be in JPG or PNG format");
        }

        window.scrollTo({ top: 0, behavior: "smooth" });

        if (errors.length > 0) {
            setErrors(errors);

            return;
        }

        try {
            await axios.post(`${Apiurl}/crestecourse/`, {
                courseid,
                coursename,
                courseStream,
                coursesubject,
                coursebanner,
                courseprofile,
                coursedes,
                courseprice,
                userId,
            });
            setsucc("Course created");
            setCid("");
        } catch (error) {
            console.log(error);
        }
        setsucc("course created");
        setCid("");

    }


    return (
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
                                        <div className="alert alert-success alert-dismissible fade show">
                                            <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                                            <strong>Success!</strong> {succ}
                                        </div>
                                    }
                                    {errors.length > 0 &&
                                        <div className="alert alert-danger alert-dismissible fade show">
                                            <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                                            <strong>Error!</strong>
                                            <ul>
                                                {errors.map((error, index) => <li key={index}>{error}</li>)}
                                            </ul>
                                        </div>
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
                                                required
                                            />
                                        </div>

                                        <div class="mb-3 mt-3">
                                            <label className="form-label">Course Name:</label>
                                            <input type="text"
                                                className="form-control"
                                                placeholder="Enter the Course Name"
                                                onChange={(e) => setCname(e.target.value)}
                                                required
                                            />
                                        </div>

                                        <div class="mb-3 mt-3">
                                            <label className="form-label">Course Stream:</label>
                                            <select className="form-control" onChange={(e) => setCourseStream(e.target.value)}>
                                                {streams.map((stream, index) => 
                                                    <option key={index} value={stream}>{stream}</option>
                                                    )})   
                                                
                                            </select>
                                        </div>

                                        <div class="mb-3 mt-3">
                                            <label className="form-label">Course Subject:</label>
                                            {courseStream && <select className="form-control" onChange={(e) => setCourseSubject(e.target.value)}>
                                                {
                                                subjects[courseStream].map((subject, index) => <option key={index} value={subject}>{subject}</option>
                                                )}
                                            </select>}
                                        </div>

                                        {/* <div class="mb-3 mt-3">
                                            <label className="form-label">Course Subject:</label>
                                            <input type="text"
                                                className="form-control"
                                                placeholder="Enter the Course Subject"
                                                onChange={(e) => setCourseSubject(e.target.value)}
                                                required
                                            />
                                        </div> */}

                                        <div class="mb-3 mt-3">
                                            <label className="form-label">Course Banner Image:</label>
                                            <input type="text"
                                                className="form-control"
                                                placeholder="Enter the Course Image URL"
                                                onChange={(e) => setCbanner(e.target.value)}
                                                required
                                            />
                                        </div>

                                        <div class="mb-3 mt-3">
                                            <label className="form-label">Course Profile Image:</label>
                                            <input type="text"
                                                className="form-control"
                                                placeholder="Enter the Course Profile Url"
                                                onChange={(e) => setCprofile(e.target.value)}
                                                required
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
                                                required
                                            />
                                        </div>

                                        <div className="mb-5 mt-3">
                                            <label className="form-label">Teacher:</label>
                                            <select className='form-control' onChange={(e) => setct(e.target.value)}>
                                                <option value="">Select One</option>
                                                {teachers.map((t) =>
                                                    <option value={t.id}>{t.fullname}</option>
                                                )}
                                            </select>
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