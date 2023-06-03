import React, {useContext, useEffect, useState} from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";  //use for form handling
import Apiurl from '../Apiurl';
import * as Yup from "yup";   //use for validation purposes
import axios from 'axios';  
import { useNavigate } from 'react-router-dom' ;   // use for navigation handling

function CreateNewTimeTable() {

    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        const fetchCourses = async () => {
          try {
            const response = await axios.get(`${Apiurl}/coursedata`);
            setCourses(response.data);
            console.log("Courses:", response.data);
          } catch (error) {
            console.log("Error in getting data:", error);
          }
        };
      
        fetchCourses();
    },[])

    let navigate = useNavigate();
    const initialValues ={
        cunit: '',
        cname: '',
        cdate: '',
        ctime: '',
        hall: '', 
    };



    const onSubmit = (data) => {
        console.log("onsubmit called");
        console.log(data);
        axios.post(`${Apiurl}/newtimetable/create`, data)
            .then((response) => { 
                console.log("data has been inserted");
            navigate("/newtimetable");   //return to  root page after creating new post
        });
    };

    //validation rules defined here:
    const validationSchema = Yup.object().shape({
        cunit: Yup.string().required('you must provide a course code'),
        cdate: Yup.string().required('you must provide a course date'),
        ctime: Yup.string().required('you must provide a course time'),
        hall: Yup.string().required('you must provide a course time'),
        // username: Yup.string().min(3).max(15).required('Required'),
    });

  return (
    <div>
        <div className="d-flex justify-content-center">
        <div className="col-sm-10 debox px-5">
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
             <Form className='formContainer'>  
                <label className="my-2">Course Id:</label>
                <ErrorMessage name='cunit' className="badge rounded-pill text-bg-danger my-3" component='span'  />
                <Field id="inputCreatePost" className={`form-control`} name='cunit' placeholder='Course Unit' autocomplete="off" />

                <label htmlFor="course" className="my-2">Course Name:</label>
                {console.log(courses)}
                {/* <Field as="select" id="course" name="cname">
                {courses.map((course) => (
                    <option key={course.id} value={course.coursename}>{course.coursename}</option>
                ))}
                </Field>
                <ErrorMessage name="course" component="div" /> */}
       

                <label className="my-2">Date:</label>
                <ErrorMessage name='cdate' className="d-block badge rounded-pill text-bg-danger my-3" component='span' />
                <Field type="date" id="inputCreatePost" className={`form-control`} name='cdate' placeholder='Course Unit' autocomplete="off" />

                <label className="my-2">Time:</label>
                <ErrorMessage name='ctime' className="d-block badge rounded-pill text-bg-danger my-3" component='span' />
                <Field type="time" id="inputCreatePost" className={`form-control`} name='ctime' placeholder='Course Unit' autocomplete="off" />



                <label className="my-2">Hall No:</label>
                <ErrorMessage name='hall' className="d-block badge rounded-pill text-bg-danger my-3" component='span' />
                <Field id="inputCreatePost" className={`form-control`} name='hall' placeholder='Hall No' autocomplete="off" />


                <button type='submit' className="btn btn-primary mt-5">Save</button>
            </Form>
        </Formik>
        </div>
    </div>
    </div>
  )
}

export default CreateNewTimeTable