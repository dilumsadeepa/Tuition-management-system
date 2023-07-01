import React, {useRef, useEffect, useState} from "react";
import * as Yup from "yup";
import axios from "axios";
import Apiurl from '../Apiurl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Editor } from '@tinymce/tinymce-react';
import { useCookies } from 'react-cookie';



function CreateNotice() {

  const [audience, setAudience] = useState('');
  const [noticeTitle, setNoticeTitle] = useState('');
  const [noticeDescription, setNoticeDescription] = useState('');
  const [noticeAttachments, setNoticeAttachments] = useState('');
  const [errors, setErrors] = useState({});

  
  const [cookies] = useCookies(['role']);
  console.log(cookies.role);

 const handleAudienceChange = (event) => {
    setAudience(event.target.value);
    validateForm();
  };

  const handleNoticeTitleChange = (event) => {
    setNoticeTitle(event.target.value);
    validateForm();
  };

  const handleNoticeDescriptionChange = (content, editor) => {
    setNoticeDescription(content);
    validateForm();
  };

  const handleNoticeAttachmentsChange = (event) => {
    setNoticeAttachments(event.target.value);
  };

  const validationSchema = Yup.object().shape({
    audience: Yup.string().required('Audience is required'),
    noticeTitle: Yup.string().required('Notice title is required'),
    noticeDescription: Yup.string().required('Notice description is required'),
  });

  const validateForm = () => {
    const newErrors = {};

    if (!audience) {
      newErrors.audience = 'Audience is required';
    }

    if (!noticeTitle) {
      newErrors.noticeTitle = 'Notice title is required';
    }

    if (!noticeDescription) {
      newErrors.noticeDescription = 'Notice description is required';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const send = () => {
    if (validateForm()) {
      const data = {
        notice_to: audience,
        notice_from: cookies.role,
        notice_title: noticeTitle,
        notice_desc: noticeDescription,
        file_urls: noticeAttachments,
      };

      axios
        .post(`${Apiurl}/multiple`, data)
        .then((response) => {
          console.log(response.data);
          toast.success('Notice inserted successfully'); // Show success notification
        })
        .catch((error) => {
          console.error(error);
          toast.error('Error inserting notice'); // Show error notification
        });
    }
  };

  return (

    <div>
      <ToastContainer autoClose={3000} />
      <div className="d-flex justify-content-center">
        <div className="col-sm-10 debox px-5">
        <form action="#">
            <div class="row mb-4">
              <div class="col">
                  <div className="mb-3 mt-3">
                    <label htmlFor="audience" className="my-1"><i className="fa-solid fa-users-gear fa-lg mx-2"></i> Target Audience</label>
                    <select className={`form-control ${errors.audience && "is-invalid"}`} id="audience" name="notice_to"  value={audience} onChange={handleAudienceChange} >
                        <option value="" disabled hidden>Select Audience You Want To Cover</option>
                        <option value="6">Public</option>
                        <option value="5">Parent</option>
                        <option value="4">Student</option>
                        <option value="3">Teacher</option>
                        <option value="2">Staff</option>
                        <option value="1">Admin</option>
                    </select>

                    {errors.audience && (
                      <div className="badge rounded-pill text-bg-danger">{errors.audience}</div>
                      )}
                </div>
              </div>
              <div class="col">
              <div className="mb-3 mt-3">
                <label htmlFor="title" className="my-1"><i className="fa-regular fa-note-sticky fa-lg mx-2"></i> Notice Title</label>
                <input type="text" id="title" className={`form-control ${errors.noticeTitle && "is-invalid"}`} name="notice_title" placeholder="Enter Title" value={noticeTitle} onChange={handleNoticeTitleChange} />
                {errors.noticeTitle && (
                    <div className="badge rounded-pill text-bg-danger">{errors.noticeTitle}</div>
                  )}
            </div>
              </div>
            </div>
            
      


      <div className="mb-3 mt-3">
        <label htmlFor="noticeData" className="my-1"><i className="fa-regular fa-note-sticky fa-lg mx-2"></i> Notice Description</label>

        <Editor
          id="noticeData"
          onEditorChange={handleNoticeDescriptionChange}
          initialValue=""
          init={{
          height: 300,
          menubar: false,
          plugins: [
            'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount',
            'imagetools',
            'uploadimage',
            'filemanager'
          ],
          toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat | insertfile image media link | forecolor backcolor | filemanager',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px; direction:ltr; }',
          images_upload_url: 'your-image-upload-url',
          file_picker_types: 'file image media',
          file_picker_callback: function(callback, value, meta) {
            if (meta.filetype == 'file') {
              // Open file picker dialog for file selection
            } else if (meta.filetype == 'image') {
              // Open file picker dialog for image selection
            } else if (meta.filetype == 'media') {
              // Open file picker dialog for media selection
            }
          }
        }}
      />
        {errors.noticeDescription && (
          <div className="badge rounded-pill text-bg-danger">
            {errors.noticeDescription}
          </div>
        )}
      </div>

      <div className="mb-3 mt-3">
                <label htmlFor="attach" className="my-1"><i className="fa-regular fa-note-sticky fa-lg mx-2"></i> Attachments</label>
                <input type="text" id="attach" className={`form-control ${errors.noticeAttachments && "is-invalid"}`} name="notice_attachments" placeholder="Attachment URL" value={noticeAttachments} onChange={handleNoticeAttachmentsChange} />
                {errors.notice_attachments && (
                    <div className="badge rounded-pill text-bg-danger">{errors.notice_attachments}</div>
                  )}
      </div>

          
        </form>
        

        <div className="mb-3">
                <button onClick={send} className="btn-grad-blue">Submit</button>
            </div>
        </div>
      </div> 

    </div>
  );
}

export default CreateNotice



