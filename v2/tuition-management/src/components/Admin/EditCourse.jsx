import React, { useState, useRef, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';
import Apiurl from '../Apiurl';
import Sidebar from './AdminSidebar';
import Dashhead from './Dashhead';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';




const EditCourse = () => {

    const { id } = useParams();

    const [courseid, setCid] = useState("");
    const [coursename, setCname] = useState("");
    const [coursebanner, setCbanner] = useState("");
    const [courseprofile, setCprofile] = useState("");
    const [coursedes, setCdes] = useState("");
    const [courseprice, setCprice] = useState("");
    const [userId, setct] = useState("");
    const [succ, setsucc] = useState("");
    const [err, seterr] = useState("");
    const [edes, setEdes] = useState("");
    const [coursesubject, setCourseSubject] = useState("");
    const [courseStream, setCourseStream] = useState('');



    const editorRef = useRef(null);

    const [courses, setCourses] = useState([]);
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
    const streams = ['Science / Maths', 'Commerce', 'Arts', 'Technology', 'Common', 'Languages', 'English Medium', 'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11'];
    const subjects = {
        'Science / Maths': ['Physics', 'Chemistry', 'Biology', 'Combined Mathematics'],
        'Commerce': ['Accounts', 'Business Studies', 'Economics'],
        'Arts': ['History', 'Geography', 'Political Science', 'Logic', 'Sinhala', 'Tamil', 'English'],
        'Technology': ['Engineering Technology', 'Bio System Technology', 'Science For Technology'],
        'Common': [' ', 'Information Communication Technology'],
        'Languages': ['Sinhala', 'Tamil', 'English', 'French', 'Japanese', 'Chinese'],
        'English Medium': ['Maths', 'Science', 'ICT'],
        'Grade 6': ['Sinhala', 'English', 'Buddhism', 'Maths', 'Science', 'History', 'ICT', 'Tamil'],
        'Grade 7': ['Sinhala', 'English', 'Buddhism', 'Maths', 'Science', 'History', 'ICT', 'Tamil'],
        'Grade 8': ['Sinhala', 'English', 'Buddhism', 'Maths', 'Science', 'History', 'ICT', 'Tamil'],
        'Grade 9': ['Sinhala', 'English', 'Buddhism', 'Maths', 'Science', 'History', 'ICT', 'Tamil'],
        'Grade 10': ['Sinhala', 'English', 'Buddhism', 'Maths', 'Science', 'History', 'ICT', 'Tamil'],
        'Grade 11': ['Sinhala', 'English', 'Buddhism', 'Maths', 'Science', 'History', 'ICT', 'Tamil'],
    }

    const coursedata = async (e) => {
        try {
            const response = await axios.get(`${Apiurl}/editcourse/${id}`);
            setCourses(response.data);
            console.log(response.data);
            courses.forEach((course) => {
                // document.getElementById('courseid').value = course.courseid;
                // document.getElementById('coursename').value = course.coursename;
                // document.getElementById('coursebanner').value = course.coursebanner;
                // document.getElementById('courseprofile').value = course.courseprofile;
                // document.getElementById('price').value = course.courseprice;
                setCid(course.courseid);
                setCname(course.coursename);
                setCbanner(course.coursebanner);
                setCprofile(course.courseprofile);
                setCprice(course.courseprice);

                setEdes(course.coursedes);
            });
            gette();
        } catch (error) {
            console.log("error in getting data")
        }
    }

    useEffect(() => {

        coursedata();

    }, [])


    const create = async () => {

        setCdes(editorRef.current.getContent())

        if (courseid === "" || coursename === "" || coursebanner === "" || courseprofile === "" || coursedes === "" || courseprice === "" || userId === "") {
            seterr("Fill All the Fileds");
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Fill All the Fileds',
            });
            console.log(courseid + ',' + coursename + ',' + coursebanner + ',' + courseprofile + ',' + coursedes + ',' + courseprice + ',' + userId);
        }
        else {

            console.log(courseid + ',' + coursename + ',' + coursebanner + ',' + courseprofile + ',' + coursedes + ',' + courseprice + '' + userId);
            try {
                await axios.patch(`${Apiurl}/updatecourse/${id}`, {
                    courseid,
                    coursename,
                    courseStream: courseStream.replace(/\s/g, '').replace(/\//g, ''),
                    coursesubject,
                    coursebanner,
                    courseprofile,
                    coursedes,
                    courseprice,
                    userId,
                });

                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Course Updated',
                }).then((result) => {
                    //redirect
                });

            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: 'Something went wrong',
                });
                console.log(error);
            }
            setsucc("course Updated");
            seterr("");
            setCid("");
        }
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
                                    <h2>Edit Course</h2>
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
                                                id='courseid'
                                                placeholder="Enter the Course Code"
                                                onChange={(e) => setCid(e.target.value)}
                                                required
                                                value={courseid}
                                            />
                                        </div>

                                        <div class="mb-3 mt-3">
                                            <label className="form-label">Course Name:</label>
                                            <input type="text"
                                                className="form-control"
                                                id='coursename'
                                                placeholder="Enter the Course Name"
                                                onChange={(e) => setCname(e.target.value)}
                                                required
                                                value={coursename}
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

                                        <div class="mb-3 mt-3">
                                            <label className="form-label">Course Banner Image:</label>
                                            <input type="text"
                                                className="form-control"
                                                id='coursebanner'
                                                placeholder="Enter the Course Image URL"
                                                onChange={(e) => setCbanner(e.target.value)}
                                                required
                                                value={coursebanner}
                                            />
                                        </div>

                                        <div class="mb-3 mt-3">
                                            <label className="form-label">Course Profile Image:</label>
                                            <input type="text"
                                                className="form-control"
                                                id='courseprofile'
                                                placeholder="Enter the Course Profile Url"
                                                onChange={(e) => setCprofile(e.target.value)}
                                                required
                                                value={courseprofile}
                                            />
                                        </div>

                                        <div class="mb-3 mt-3">
                                            <label className="form-label">Course Description:</label>
                                            <Editor
                                                onInit={(evt, editor) => editorRef.current = editor}
                                                initialValue={edes}
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
                                                id='price'
                                                placeholder="Enter the Course Price"
                                                onChange={(e) => setCprice(e.target.value)}
                                                required
                                                value={courseprice}
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


export default EditCourse;