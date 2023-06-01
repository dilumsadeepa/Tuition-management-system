import React, {useRef, useEffect, useState} from "react";
import * as Yup from "yup";
import axios, { formToJSON } from "axios";
import Switch from 'react-switch';
import Apiurl from '../Apiurl';
import { v4 as uuidv4 } from 'uuid';
import { Image } from 'cloudinary-react';
import CloudinaryFileList from './CloudinaryFileList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function CreateTimeTable() {
    const [tableTitle, setTableTitle] = useState("");
    const [grade, setGrade] = useState('');
    const [attachFiles, setAttachFiles] = useState([]);
    const [cloudFiles, setCloudFiles] = useState([]);
    const [cloudUrls, setCloudUrls] = useState([]);
    const [isChecked, setIsChecked] = useState(true);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [filePreviews, setFilePreviews] = useState([]);
  

    const uniqueFileNames = [];
    const cloudUniqueFileNames = [];
    const cloudFileNames = [];



    const handleTableTitleChange = (event) => {
      setTableTitle(event.target.value);
      validateForm();
    };
  
    const handleGradeChange = (event) => {
      setGrade(event.target.value);
    };
  


  const handleFileInputChange = (event) => {
    const files = event.target.files;
    setAttachFiles(Array.from(files));
    validateForm();
  };

  const handleCloudFileInputChange = (event) => {
    const files = event.target.files;
    setCloudFiles(Array.from(files));
    validateForm();
  };








    const fileSchema = Yup.array()
    .nullable()
    .compact()
    .test(
      "fileSize",
      "File size too large",
      (value) => {
        if (!value) {
          return true;
        }
        const size = value.reduce((acc, file) => acc + file.size, 0);
        return size / 1024 / 1024 <= 10;
      }
    )
    .test(
      "fileType",
      "Unsupported file format",
      (value) => {
        if (!value) {
          return true;
        }
        const supportedTypes = [
          "application/zip",
          "application/x-rar-compressed",
          "application/x-7z-compressed",
          "application/xml",
          "application/xhtml+xml",
          "text/plain",
          "image/svg+xml",
          "application/rtf",
          "application/pdf",
          "image/jpeg",
          "image/png",
          "image/jpg",
          "audio/ogg",
          "audio/mpeg",
          "application/json",
          "text/html",
          "image/gif",
          "video/mp4",
          "video/mpeg",
          "video/x-matroska",
          "video/x-flv",
          "video/x-msvideo",
          "text/csv",
          "application/vnd.ms-powerpoint",
          "application/vnd.openxmlformats-officedocument.presentationml.presentation",
          "application/vnd.ms-excel",
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          "application/vnd.ms-word",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        ];
        const types = value.map((file) => file.type);
        return types.every((type) => supportedTypes.includes(type));
      }
    )
    .transform((value, originalValue) => {
      if (originalValue === "") {
        return null;
      }
      return value;
    });


    const validationSchema = Yup.object().shape({
      tableTitle: Yup.string().required("TimeTable Title is required"),
      attachFiles: fileSchema,
      cloudFiles: fileSchema,
    });

    const [errors, setErrors] = useState({});
 


    const validateForm = async () => {
      try {
        await validationSchema.validate({
          tableTitle,
          attachFiles: attachFiles.length > 0 ? attachFiles : null,
          cloudFiles: cloudFiles.length > 0 ? cloudFiles : null,
        }, { abortEarly: false });
        setErrors({});
        return true;
      } catch (err) {
        const newErrors = {};
        err.inner.forEach(error => {
          newErrors[error.path] = error.message;
        });
        setErrors(newErrors);
        return false;
      }
    };






    const send = async event => {
      event.preventDefault();
      const isValid = await validateForm();
      if (isValid) {
        const data = new FormData();
        // const uniqueFileNames = [];
        // const cloudUniqueFileNames = [];
    
        //cloud files
        for (let i = 0; i < cloudFiles.length; i++) {
          const cloudUniqueFileName = `${uuidv4()}_${cloudFiles[i].name}`;
          cloudUniqueFileNames.push(cloudUniqueFileName);
          data.append('myFieldName', cloudFiles[i], cloudUniqueFileName);   
        }

        //local files or both
        for (let i = 0; i < attachFiles.length; i++) {
          const uniqueFileName = `${uuidv4()}_${attachFiles[i].name}`;
          uniqueFileNames.push(uniqueFileName);
          data.append('myFieldName', attachFiles[i], uniqueFileName);
        }
      
        data.append("time_title", tableTitle);
        data.append("grade", grade);
        data.append("files", uniqueFileNames);  //file names csv
        data.append("localFiles", uniqueFileNames);
        data.append("backup", isChecked)
      


        axios.post(`${Apiurl}/timemultiple` , data)
        .then(res => {
          
          setCloudFiles([]);      // Clear the list of cloud files
            
          // Update the list of Cloudinary URLs
          const urls = res.data.cloudFiles.split(',').map(url => url.trim());
          setCloudUrls(urls);

          // Clear the list of cloud files
          setCloudFiles([]);

          console.log("urls :",urls);


          console.log(res);

          console.log(uniqueFileNames);


          
          toast.success("Time Table created successfully", {
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




      const upload = async event => {
        event.preventDefault();
        const isValid = await validateForm();
        if (isValid) {
          const data = new FormData();

      
          //cloud files
          for (let i = 0; i < cloudFiles.length; i++) {
            const cloudUniqueFileName = `${uuidv4()}_${cloudFiles[i].name}`;
            cloudUniqueFileNames.push(cloudUniqueFileName);
            data.append('cloudStorage', cloudFiles[i], cloudUniqueFileName);   
          }
  
          //local files or both
          for (let i = 0; i < attachFiles.length; i++) {
            const uniqueFileName = `${uuidv4()}_${attachFiles[i].name}`;
            uniqueFileNames.push(uniqueFileName);
            data.append('myFieldName', attachFiles[i], uniqueFileName);
          }


        
          data.append("time_title", tableTitle);
          data.append("grade", grade);
          data.append("files", cloudUniqueFileNames);  //file names csv
          data.append("backup", isChecked)


          // Configure axios request
          const config = {
            onUploadProgress: (progressEvent) => {
              const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
              setUploadProgress(progress);
            },
          };
        




          axios.post(`${Apiurl}/timecloud` , data, config)
          .then((res) => {
              setUploadProgress(0);
              setCloudFiles([]);      // Clear the list of cloud files
            
              // Update the list of Cloudinary URLs
              const urls = res.data.cloudOnly.split(',').map(url => url.trim());
              setCloudUrls(urls);

              // Clear the list of cloud files
              setCloudFiles([]);

              console.log("urls :",urls);


              console.log(res);

              console.log(cloudUniqueFileNames);


          toast.success("Timetable created successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });

        }).catch(err => console.log(err));
        };
  }





  return (
    <div>
      <ToastContainer autoClose={3000} />
      <div className="d-flex justify-content-center">
        <div className="col-sm-10 debox px-5">
        <form action="#">
            <div class="row mb-4">
            <div class="col">
              <div className="mb-3 mt-3">
                <label htmlFor="title" className="my-1"><i className="fa-regular fa-note-sticky fa-lg mx-2"></i> Time Table Title</label>
                <input type="text" id="title" className={`form-control ${errors.tableTitle && "is-invalid"}`} name="tableTitle" placeholder="Enter Title" value={tableTitle} onChange={handleTableTitleChange} />
                {errors.tableTitle && (
                    <div className="badge rounded-pill text-bg-danger">{errors.tableTitle}</div>
                  )}
            </div>
              </div>
              
              <div class="col">
                  <div className="mb-3 mt-3">
                    <label htmlFor="tableTitle" className="my-1"><i className="fa-solid fa-users-gear fa-lg mx-2"></i> Grade</label>
                    <select className={`form-control ${errors.grade && "is-invalid"}`} id="tableTitle" name="grade"  value={grade} onChange={handleGradeChange} >
                        <option value="" disabled hidden>Select Grade</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="Revision">Revision</option>
                        <option value="Paper Class">Paper Class</option>
                    </select>

                    {errors.grade && (
                      <div className="badge rounded-pill text-bg-danger">{errors.grade}</div>
                      )}
                </div>
              </div>

            </div>
            
           



          <div className="row mb-3">
            <div className="col">
                  <div className="d-flex align-items-center">
                  <div className="flex-grow-1 align-items-center pe-2">
                  <label htmlFor="cloudFiles" className="my-2"><i class="fa-solid fa-link fa-lg mx-2"></i> Attachments - cloud storage only</label>
                  <input type="file" className={`form-control ${errors.attachFiles && "is-invalid"}`} multiple onChange={handleCloudFileInputChange} />
                  </div>
                <div className="pt-10"><button onClick={upload} className="btn btn-primary">upload</button></div>
                </div>
                {errors.cloudFiles && (
                  <div className="badge rounded-pill text-bg-danger">{errors.cloudFiles}</div>
                )}
            </div>
              <div className="col">
                  <label htmlFor="files" className="my-2"><i class="fa-solid fa-link fa-lg mx-2"></i> Attachments</label>
                    <input type="file" className={`form-control ${errors.attachFiles && "is-invalid"}`} multiple onChange={handleFileInputChange} />
                    <div className="d-flex align-items-center mt-2 ms-1 ps-0">
                    <Switch
                      checked={isChecked}
                      onChange={value => setIsChecked(value)}
                    />
                    <label className="form-check-label ms-2" htmlFor="flexSwitchCheckChecked">Cloud Backup</label>
                    </div>
                    {errors.attachFiles && (
                      <div className="badge rounded-pill text-bg-danger">{errors.attachFiles}</div>
                    )}
              </div>
            </div>
           
              

               

                <div className="formdes">
                  <small>
                  File Supported : "zip","rar","7z","xml","xhtml","txt","svg","rtf","pdf","jpeg","png","jpg","ogg","mp3","json","html","gif","mp4","mpeg","mkv","flv","avi","csv","ppt","pptx","xls","xlsx","doc","docx"
                  </small>
                 
                </div>

                <div className="form-files">
                <small>Max File Size : 10MB</small>
                </div>
          

        </form>
        
        {/* Progress bar */}
      {uploadProgress > 0 && (
        <div>
          <div>Upload Progress: {uploadProgress}%</div>
          <progress value={uploadProgress} max="100" />
        </div>
      )}

      


  <div className="preview container">
  {cloudFiles.map((file) => {
    if (file.type.startsWith("image/")) {
      return (
        <div key={file.name} className="file_gallery my-3 me-1 fancy-gallery d-inline-flex">
          <div>
            <a href={URL.createObjectURL(file)} className=""  data-fancybox="images" data-caption={file.name}>
              <img className="img-thumbnail" src={URL.createObjectURL(file)} alt={file.name} /> 
            </a>
          </div>
        </div>
      );
    } else if (file.type.startsWith("video/")) {
      return (
        <div key={file.name} className="file_gallery my-3 me-1 fancy-gallery d-inline-flex">
          <div className="video-thumbnail">
            <a href={URL.createObjectURL(file)} className=""  data-fancybox="images" data-caption={file.name}>
              <video src={URL.createObjectURL(file)} controls muted />
            </a>
          </div>
        </div>
      );
    } else {
      return (
        <div key={file.name} className="d-flex flex-column">
          <div className="py-2">
            <ul className="list-group">
              <li className="list-group-item list-group-item-info">
                <a href={URL.createObjectURL(file)} download>{file.name}</a>
              </li>
            </ul>
          </div>
        </div>
      );
    }
  })}
</div>




      
      <div className="container mb-5" >

      <div className="row">
      <div>
      <CloudinaryFileList cloudUrls={cloudUrls} />
    </div>
      </div>

      <div className="row">
      {/* {filePreviews} */}
      </div>
      </div>

        <div className="mb-3">
                <button onClick={send} className="btn btn-primary">Submit</button>
            </div>
        </div>
      </div> 
    </div>
  )
}

export default CreateTimeTable