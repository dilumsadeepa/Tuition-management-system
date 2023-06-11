import React, { useState } from 'react';
import Navbar from './Navbar'
import Footer from './Footer'

import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactUs() {
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        subject: Yup.string().required('Subject is required'),
        message: Yup.string().required('Message is required'),
      });

      const [formSubmitted, setFormSubmitted] = useState(false);

      const handleSubmit = (values, { setSubmitting }) => {
        validationSchema
          .validate(values)
          .then(() => {
            const { name,subject, email, message } = values;
      
            const mailtoUrl = `mailto:susipwan.edu@gmail.com?subject= ${encodeURIComponent(
              subject
            )} - Susipwan Contact Form - ${encodeURIComponent(name)} &body=${encodeURIComponent(
              message
            )}`;
      
            window.location.href = mailtoUrl;
            setSubmitting(false);
            setFormSubmitted(true);
          })
          .catch((error) => {
            console.log('Form data is invalid:', error);
            setSubmitting(false);
            toast.error('Please fill in all required fields.', {
              position: toast.POSITION.TOP_RIGHT,
            });
          });
      };


  return (
    <div>
        <Navbar />
            <main className="page contact-us-page">
            <section className="clean-block clean-form dark">
                <div className="container">
                <div className="block-heading">
                    <h2 className="text-info">Contact Us</h2>
                    <p>We would love to hear from you! Contact Susipwin Tuition Class in Anuradhapura for any inquiries or to schedule a visit. Our friendly staff is ready to assist you and provide all the necessary information to help you get started on your educational journey with us.</p>
                </div>
                <div>
                      <Formik
                        initialValues={{
                          name: '',
                          email: '',
                          subject: '',
                          message: ''
                        }}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                      >
                        <Form className='bg-white' style={{ padding:'40px 30px' }}>
                          <h3 className="text-center mb-3">Contact us</h3>
                          <div className="mb-3">
                            <Field className="form-control" type="text" name="name" placeholder="Name" />
                            <ErrorMessage className="badge rounded-pill text-bg-danger" name="name" component="div" />
                          </div>
                          <div className="mb-3">
                            <Field className="form-control" type="email" name="email" placeholder="Email" />
                            <ErrorMessage className="badge rounded-pill text-bg-danger" name="email" component="div" />
                          </div>
                          <div className="mb-3">
                            <Field className="form-control" type="text" name="subject" placeholder="Subject" />
                            <ErrorMessage className="badge rounded-pill text-bg-danger" name="subject" component="div" />
                          </div>
                          <div className="mb-3">
                            <Field className="form-control" as="textarea" name="message" placeholder="Message" rows="6" />
                            <ErrorMessage className="badge rounded-pill text-bg-danger" name="message" component="div" />
                          </div>
                          <div className="mb-3">
                            <button className="btn btn-primary" type="submit">Send</button>
                          </div>
                        </Form>
                      </Formik>
                      <ToastContainer />
                    </div>
                </div>
            </section>
        </main>
            <Footer />
    </div>
  )
}

export default ContactUs