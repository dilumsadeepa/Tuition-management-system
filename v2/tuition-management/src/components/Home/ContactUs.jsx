import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function ContactUs() {
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
                <form>
                    <div className="mb-3">
                    <label className="form-label" htmlFor="name">Name</label>
                    <input className="form-control" type="text" id="name" name="name" />
                    </div>
                    <div className="mb-3">
                    <label className="form-label" htmlFor="subject">Subject</label>
                    <input className="form-control" type="text" id="subject" name="subject" />
                    </div>
                    <div className="mb-3">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input className="form-control" type="email" id="email" name="email" />
                    </div>
                    <div className="mb-3">
                    <label className="form-label" htmlFor="message">Message</label>
                    <textarea className="form-control" id="message" name="message"></textarea>
                    </div>
                    <div className="mb-3">
                    <button className="btn btn-primary" type="submit">Send</button>
                    </div>
                </form>
                </div>
            </section>
        </main>
            <Footer />
    </div>
  )
}

export default ContactUs