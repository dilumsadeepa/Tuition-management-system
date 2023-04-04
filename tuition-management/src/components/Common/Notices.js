import React, {useRef} from "react";
import { Formik, Form, Field, useField, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios, { formToJSON } from "axios";
import Apiurl from '../Apiurl';


function Notices() {
  const initialValues = {
    notice_to: "",
    notice_title: "",
    notice_desc: "",
    files: "",
  };

  const fileRef = useRef(null);

  const validationSchema = Yup.object({
    notice_to: Yup.string().required(),
    notice_title: Yup.string().min(3).max(255).required(),
    notice_desc: Yup.string().required(),
    files: Yup.mixed()
      .test("is-file-too-big", "File exceeds 10MB", () => {
        let valid = true;
        const files = fileRef?.current?.files;
        if (files) {
          const fileArr = Array.from(files);
          fileArr.forEach((file) => {
            const size = file.size / 1024 / 1024;
            if (size > 10) {
              valid = false;
            }
          });
        }
        return valid;
      })
      .test(
        "is-file-of-correct-type",
        "File is not of supported type",
        () => {
          let valid = true;
          const files = fileRef?.current?.files;
          if (files) {
            const fileArr = Array.from(files);
            fileArr.forEach((file) => {
              const type = file.type.split("/")[1];
              const validTypes = [
                "zip",
                "xml",
                "xhtml+xml",
                "plain",
                "svg+xml",
                "rtf",
                "pdf",
                "jpeg",
                "png",
                "jpg",
                "ogg",
                "json",
                "html",
                "gif",
                "csv"
              ];
              if (!validTypes.includes(type)) {
                valid = false;
              }
            });
          }
          return valid;
        }
      )
  });

  const onSubmit=(data) => {
    const files = fileRef?.current?.files;
    if (files) {
        const fileArr = Array.from(files);
        const dbFileArray = [];
        console.log("fileArr : "+fileArr);
        fileArr.forEach((file) => {
            dbFileArray.push(Date.now()+"__"+file.name);
            
            console.log("dbFileArray : "+dbFileArray);
        });
        data.files = dbFileArray;
    }

    // data.files = files;
    console.log("type: " + data.files.type);
    // data.files = formToJSON(
    //     {
    //       files: fileRef.current.files
    //     },
    //     null,
    //    5
    //   )
    axios.post(`${Apiurl}/notice/`, data).then((res) => {
        console.log(res);
        console.log("data inserted successfully");
        }).catch((err) => {
            console.log(err);
            });
            console.log("form values", data);
            console.log("all selected files", fileRef.current.files);
            console.log("all selected files names", fileRef.current.files.name);
    };


  return (
    <div>
      <div className="row">
        <div className="col-sm-2"></div>

        <div className="col-sm-8 debox">

          <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          

            <Form className="formContainer">
              <div class="mb-3 mt-3">
                <label for="inputAudience" className="form-label">
                  Target Audience
                </label>
                <ErrorMessage name="notice_to" component="span" className="badge text-bg-danger" />
                <Field
                as="select"
                  id="inputAudience"
                  className="form-control"
                  name="notice_to"
                  placeholder="Enter Audience"
                  autocomplete="off"
                >
                <option value="" selected disabled hidden>Select Audience You Want To Cover</option>
                <option value="5">All</option>
                <option value="2">Staff</option>
                <option value="3">Teacher</option>
                <option value="4">Student</option>
                 </Field>
              </div>
              <div class="mb-3 mt-3">
                <label for="inputNoticeTitle" className="form-label">
                  Notice Title
                </label>
                <ErrorMessage name="notice_title" component="span" className="badge text-bg-danger" />
                <Field
                  id="inputNoticeTitle"
                  className="form-control"
                  name="notice_title"
                  placeholder="Enter Audience"
                  autocomplete="off"
                />
              </div>
              <div class="mb-3 mt-3">
                <label for="inputNoticeDescription" className="form-label">
                  Notice Description
                </label>
                <ErrorMessage name="notice_desc" component="span" className="badge text-bg-danger" />
                <Field
                  as="textarea"
                  id="inputNoticeDescription"
                  className="form-control"
                  name="notice_desc"
                  placeholder="Enter Notice Description"
                  autocomplete="off"
                />
              </div>
              <div class="mb-3 mt-3">
                <label for="inputAttachments" className="form-label">
                  Attachments
                </label>
                <ErrorMessage name="files" component="span" className="badge text-bg-danger" />
                <FileUpload
                  name="files"
                  fileRef={fileRef}
                />

                <div className="form-files">
                <small>File Supported : zip",
                "xml",
                "xhtml+xml",
                "plain",
                "svg+xml",
                "rtf",
                "pdf",
                "jpeg",
                "png",
                "jpg",
                "ogg",
                "json",
                "html",
                "gif",
                "csv"</small>
                </div>

                <div className="form-files">
                <small>Max File Size : 10MB</small>
                </div>

              </div>
              <button type="submit" className="debtn w-100">
                Submit
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

const FileUpload = ({ fileRef, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <div>
        <label htmlFor="files">Choose files</label>{" "}
        <input ref={fileRef} multiple={true} type="file" {...field} />
        {meta.touched && meta.error ? (
          <div style={{ color: "red" }}>{meta.error}</div>
        ) : null}
      </div>
    );
  };

export default Notices;
