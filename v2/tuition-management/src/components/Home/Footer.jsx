import React from 'react'

function Footer() {
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
              <li><a href="#">Gallery</a></li>
              <li><a href="#">Student</a></li>
              <li><a href="#">Lectures</a></li>
              <li><a href="#">Time Table</a></li>
            </ul>
          </div>
          <div className="col-sm-3">
            <h5>About us</h5>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div className="col-sm-3">
            <h5>Support</h5>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Whatsapp</a></li>
              <li><a href="#">Telegram</a></li>
            </ul>
          </div>
          <div className="col-sm-3">
            <h5>Quick Links</h5>
            <ul>
              <li><a href="#">Dashboard</a></li>
              <li><a href="#">LMS</a></li>
              <li><a href="#">Notices</a></li>
              <li><a href="#">Time Table</a></li>
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