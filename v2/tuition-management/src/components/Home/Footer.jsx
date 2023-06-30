import React from 'react'

function Footer() {
const phoneNumber = "0789843284";
const whatsappUrl = `https://wa.me/${phoneNumber}`;
  return (
    <div>
          <a class="gotopbtn" href="#"> <i class="fas fa-arrow-up"></i> </a>
         <footer className="page-footer dark sticky-bottom">
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <h5>Get started</h5>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="/homegallery">Gallery</a></li>
              <li><a href="#">Student</a></li>
              <li><a href="#">Lectures</a></li>
              <li><a href="/streamwisetimetable">Time Table</a></li>
              <li><a href="/altimetable">AL Time Table</a></li>
            </ul>
          </div>
          <div className="col-sm-3">
            <h5>About us</h5>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
          </div>
          <div className="col-sm-3">
            <h5>Support</h5>
            <ul>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="https://wa.me/+94789843284">Whatsapp</a></li>
              <li><a href="https://t.me/+94789843284">Telegram</a></li>
            </ul>
          </div>
          <div className="col-sm-3">
            <h5>Quick Links</h5>
            <ul>
              <li><a href="#">Dashboard</a></li>
              <li><a href="#">LMS</a></li>
              <li><a href="/publicnotices">Notices</a></li>
              <li><a href="/streamwisetimetable">Time Table</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>© 2023 All Right Reserved.</p>
      </div>
    </footer>
    </div>
  )
}

export default Footer