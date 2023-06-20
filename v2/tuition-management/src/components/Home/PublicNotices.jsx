import React, {useEffect, useState} from "react";
import axios from "axios";
import DOMPurify from 'dompurify';
import Apiurl from '../Apiurl';
import Navbar from './Navbar'
import Footer from './Footer'

function PublicNotices() {
    const [notices, setNotices] = useState([]);
    const [selectedNotice, setSelectedNotice] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        axios.get(`${Apiurl}/pubnotice`)
          .then(res => {
            const noticesData = res.data;
            setNotices(noticesData);
            console.log('noticedata'+res.data);
          })
          .catch(err => {
            console.log(err);
          })
      }, []);

      const viewNotice = async (id) => {
        try {
          const response = await axios.get(`${Apiurl}/notice/byId/${id}`);
          const notice = response.data;
          console.log('selected'+notice.notice_title);
          setSelectedNotice(notice);
        } catch (error) {
          console.log("Error on viewing:", error);
        }
      }


  return (
   
    <div>
    <Navbar />
    <main className="page testimonials">
      <section className="clean-block clean-testimonials dark">
        <div className="container">
          <div className="block-heading">
            <h2 className="text-info">Notices</h2>
            <p>Special Notices</p>
          </div>
          <div className="row">
            {notices.map((notice) => (
              <div className="col-lg-4" key={notice.id}>
                <div className="card clean-testimonial-item border-0 rounded-0 h-100 mb-0">
                  <div className="card-body">
                    <p className="card-text" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(notice.notice_desc.length > 120 ? `${notice.notice_desc.slice(0, 120)}...` : notice.notice_desc) }}></p>
                    <h3>{notice.notice_title}</h3>
                    <h4 className="card-title">{new Date(notice.updatedAt).toLocaleDateString("en-US")}</h4>
                    <p className="text-secondary mb-5">{notice.file_urls ? 'Attachments Available' : ''}</p>
                    <button
                      className="btn btn-outline-info"
                      onClick={() => {
                        viewNotice(notice.id);
                        setShowModal(true);
                      }}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>

    <div className={`modal fade ${showModal ? 'show' : ''}`} id="noticeModal" tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
      <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down modal-dialog-scrollable" role="document">
        <div className="modal-content border border-info">
          {selectedNotice && (
            <>
              <div className="modal-header border border-info">
                <h5 className="modal-title">{selectedNotice.notice_title}</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setShowModal(false)}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body border border-info">
                <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(selectedNotice.notice_desc) }} className="my-5"></p> 
                <p>Date: {new Date(selectedNotice.updatedAt).toLocaleDateString("en-US")}</p>

                {selectedNotice.file_urls && (
                    <div className="row">
                    <div>
                    <div>
                      <ul className="list-group">
                        <li className="list-group-item list-group-item-info"><i class="fa-solid fa-file-video me-2"></i> File <i class="fa-solid fa-arrow-right mx-2"></i> <small>{selectedNotice.file_urls}</small>  <a href={selectedNotice.file_urls} target="_blank" download><i class="fa-solid fa-arrow-up-right-from-square"></i></a>  </li>
                        </ul>
                    </div>
                    </div>
                    </div>
                    )}


              </div>
              <div class="modal-footer border border-info">
              <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setShowModal(false)}
                >Close</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>

    <Footer />
  </div>
  )
}

export default PublicNotices