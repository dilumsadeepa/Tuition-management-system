import React, { useEffect, useState } from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Apiurl from '../Apiurl';
import * as Yup from 'yup';
import axios from 'axios';


function UpdateTimeTable() {
    let { id } = useParams();
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
          setInitialData(response.data);
          console.log('timetable:', response.data);
        } catch (error) {
          console.log('Error in getting time table data:', error);
        }
      };
  
      fetchTimeTableData();
    }, []);
  
    const navigate = useNavigate();
    const initialValues = initialData || {
      cunit: '',
    //   cname: '',
      cdate: '',
      ctime: '',
      hall: '',
    };
  
    const onSubmit = (data) => {
      console.log('onsubmit called'+ id);
      console.log(data);
  
      axios.put(`${Apiurl}/newtimetable/${id}`, data)
        .then((response) => {
          console.log('Data has been updated');
          navigate('/newtimetable');
        });
    };
  
    const validationSchema = Yup.object().shape({
      cunit: Yup.string().required('You must provide a course code'),
      cdate: Yup.string().required('You must provide a course date'),
      ctime: Yup.string().required('You must provide a course time'),
    });





  return (
    <div>
             {initialData ? (
        <div className="d-flex justify-content-center">
          <div className="col-sm-10 debox px-5">
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
              <Form className="formContainer">
                <label className="my-2">Course Id:</label>
                <ErrorMessage name="cunit" className="badge rounded-pill text-bg-danger my-3" component="span" />
                <Field
                  id="inputCreatePost"
                  className={`form-control`}
                  name="cunit"
                  placeholder="Course Unit"
                  autoComplete="off"
                />

                <label className="my-2">Date:</label>
                <ErrorMessage name="cdate" className="d-block badge rounded-pill text-bg-danger my-3" component="span" />
                <Field type="date" id="inputCreatePost" className={`form-control`} name="cdate" placeholder="Course Unit" autoComplete="off" />

                <label className="my-2">Time:</label>
                <ErrorMessage name="ctime" className="d-block badge rounded-pill text-bg-danger my-3" component="span" />
                <Field type="time" id="inputCreatePost" className={`form-control`} name="ctime" placeholder="Course Unit" autoComplete="off" />

                <label className="my-2">Hall No:</label>
                <ErrorMessage name="hall" className="d-block badge rounded-pill text-bg-danger my-3" component="span" />
                <Field id="inputCreatePost" className={`form-control`} name="hall" placeholder="Hall No" autoComplete="off" />

                <button type="submit" className="btn btn-primary mt-5">
                  Update
                </button>
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