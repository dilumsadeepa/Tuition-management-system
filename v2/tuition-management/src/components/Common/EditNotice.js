import React, {useRef, useEffect, useState} from "react";
import {useParams, useNavigate} from 'react-router-dom';
import * as Yup from "yup";
import axios, { formToJSON } from "axios";
import Switch from 'react-switch';
import Apiurl from '../Apiurl';
import { v4 as uuidv4 } from 'uuid';
import { Image } from 'cloudinary-react';
import CloudinaryFileList from './CloudinaryFileList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Editor } from '@tinymce/tinymce-react';




function EditNotice() {
    let { id } = useParams();
    const [noticeObject, setNoticeObject] = useState({});

    const [audience, setAudience] = useState("");
    const [noticeTitle, setNoticeTitle] = useState("");
    const [noticeDescription, setNoticeDescription] = useState('');
    const [noticeAttachments, setNoticeAttachments] = useState('');
    const [errors, setErrors] = useState({});
  
  



    useEffect(() => {
      axios.get(`${Apiurl}/notice/byId/${id}`).then((response) => {
        setNoticeObject(response.data);
      });
    }, [id]);
    
    useEffect(() => {
      setAudience(noticeObject.notice_to || "");
      setNoticeTitle(noticeObject.notice_title || "");
      setNoticeDescription(noticeObject.notice_desc || "");
      setNoticeAttachments(noticeObject.file_urls || "");
    }, [noticeObject]);

  

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






    const send = async event => {
      if (validateForm()) {
        const data = {
          id: id,
          notice_to: audience,
          notice_title: noticeTitle,
          notice_desc: noticeDescription,
          file_urls: noticeAttachments,
        };


        axios.put(`${Apiurl}/multiple` , data)
        .then(res => {
          console.log(res);

          toast.success("Notice Updated Successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });

        })
        .catch(err => console.log(err));
      };
   
      }





  return (
    <div>
    <ToastContainer autoClose={3000} />
    <div className="row">
      <div className="col-sm-2"></div>

      <div className="col-sm-8 debox">
      <form action="#">
          <div className="mb-3 mt-3">
              <label htmlFor="audience" >Target Audience</label>
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
          <div className="mb-3 mt-3">
              <label htmlFor="title" >Notice Title</label>
              <input type="text" id="title" className={`form-control ${errors.noticeTitle && "is-invalid"}`} name="notice_title" placeholder="Enter Title" value={noticeTitle} onChange={handleNoticeTitleChange} />
              {errors.noticeTitle && (
                  <div className="badge rounded-pill text-bg-danger">{errors.noticeTitle}</div>
                )}
          </div>


    <div className="mb-3 mt-3">
      <label htmlFor="noticeData">Notice Description</label>

      <Editor
        id="noticeData"
        onEditorChange={handleNoticeDescriptionChange}
        initialValue={noticeObject.notice_desc}
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
                <input type="text" id="attach" className={`form-control ${errors.noticeAttachments && "is-invalid"}`} name="notice_attachments" placeholder="Attachment Link" value={noticeAttachments} onChange={handleNoticeAttachmentsChange} />
                {errors.notice_attachments && (
                    <div className="badge rounded-pill text-bg-danger">{errors.notice_attachments}</div>
                  )}
      </div>



      </form>
      

      <div className="mb-3">
              <button onClick={send} className="btn btn-primary">Submit</button>
              <a  className="btn btn-outline-danger ms-2" href='/notice'>
                  Cancel
                </a>
          </div>
      </div>
    </div> 

  </div>
  )
}

export default EditNotice