import React, { useEffect, useState } from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Apiurl from '../Apiurl';
import * as Yup from 'yup';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function UpdateTimeTable() {
  

    const { id } = useParams();
    const [courses, setCourses] = useState([]);
    const [initialData, setInitialData] = useState(null);
  
    useEffect(() => {
      const fetchCourses = async () => {
        try {
          const response = await axios.get(`${Apiurl}/coursedata`);
          setCourses(response.data);
          console.log('Courses:', response.data);
        } catch (error) {
          console.log('Error in getting data:', error);
        }
      };
  
      fetchCourses();
    }, []);
  
    useEffect(() => {
      const fetchTimeTableData = async () => {
        try {
          const response = await axios.get(`${Apiurl}/newtimetable/byId/${id}`);
          setInitialData(response.data.selectedtimetable[0]);
          console.log('timetable:', response.data);
        } catch (error) {
          console.log('Error in getting time table data:', error);
        }
      };
  
      fetchTimeTableData();
    }, []);

    console.log('initialData:', initialData);
  
    let navigate = useNavigate();
  
    const initialValues = initialData || {
      cunit: '',
      cname: '',
      cdate: '',
      ctime: '',
      hall: '',
    };
  
    const onSubmit = async (data, { setErrors }) => {
      try {
        const response = await axios.get(`${Apiurl}/newtimetable/`);
        const existingData = response.data;
        const isDuplicate = checkForDuplicateData(data, existingData);
  
        if (isDuplicate) {
          setErrors({ cunit: 'Duplicate data exists. Please provide different values.' });
          return;
        }
  
        await axios.put(`${Apiurl}/newtimetable/${id}`, data).then(() => {
          console.log('data has been updated');
          navigate('/newtimetable');

          toast.success("Timetable Updated Successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });

        });
        // console.log('Data has been updated');
        // navigate('/newtimetable');
      } catch (error) {
        console.error('Error updating time table data:', error);
      }
    };
  
    const validationSchema = Yup.object().shape({
      cunit: Yup.string().required('You must provide a course code'),
      cdate: Yup.string().required('You must provide a course date'),
      ctime: Yup.string().required('You must provide a course time'),
      hall: Yup.string().required('You must provide a hall number'),
    });
  
    // Function to check for duplicate data
    const checkForDuplicateData = (data, existingData) => {
      const { cunit, cdate, ctime, hall } = data;
      return existingData.some(
        (item) => item.cunit === cunit && item.cdate === cdate && item.ctime === ctime && item.hall === hall && item.id !== id
      );
    };

  return (
    <div>
       <ToastContainer autoClose={3000}/>
             {initialData ? (
        <div className="d-flex justify-content-center">
          <div className="col-sm-10 debox px-5">
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
              <Form className="formContainer">
                <label className="my-2">Course Id:</label>
                <ErrorMessage name="cunit" className="badge rounded-pill text-bg-danger my-3" component="span" />
                {/* <Field
                  id="inputCreatePost"
                  className={`form-control`}
                  name="cunit"
                  placeholder="Course Unit"
                  autoComplete="off"
                /> */}

                <Field as="select" id="course" name="cunit" className={`form-control`}>
                <option value="" disabled selected>Select Course ID</option>
                {courses.map((course) => (
                    <option key={course.id} value={course.id}>{course.courseid}</option>
                ))}
                </Field>

                <label className="my-2">Date:</label>
                <ErrorMessage name="cdate" className="d-block badge rounded-pill text-bg-danger my-3" component="span" />
                <Field type="date" id="inputCreatePost" className={`form-control`} name="cdate" placeholder="Course Unit" autoComplete="off" />

                <label className="my-2">Time:</label>
                <ErrorMessage name="ctime" className="d-block badge rounded-pill text-bg-danger my-3" component="span" />
                <Field type="time" id="inputCreatePost" className={`form-control`} name="ctime" placeholder="Course Unit" autoComplete="off" />

                <label className="my-2">Hall No:</label>
                <ErrorMessage name="hall" className="d-block badge rounded-pill text-bg-danger my-3" component="span" />
                <Field id="inputCreatePost" className={`form-control`} name="hall" placeholder="Hall No" autoComplete="off" />

                <button type="submit" className="btn btn-primary  mt-5">
                  Update
                </button>
                <a  className="btn btn-outline-danger ms-2 mt-5" href='/newtimetable'>
                  Cancel
                </a>
              </Form>
            </Formik>
          </div>
        </div>
      ) : (
        <div class="d-flex justify-content-center align-content-center align-items-center" style={{ height:'100vh', width:'100vw' }}>
            <div class="d-flex justify-content-center align-content-center align-items-center">
            <span class="spinner-border spinner-border-xxl text-primary" role="status" aria-hidden="true"></span>
            <h3 className='ms-5'>Loading Data...</h3>
            </div>
 

          </div>
            
        
      )}
    </div>
  )
}

export default UpdateTimeTable