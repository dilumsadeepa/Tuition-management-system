import React, {useRef, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Apiurl from '../Apiurl';



function Notice() {
  let {id} = useParams();
  const [noticeObject, setNoticeObject] = useState({});

useEffect(() => {
  axios.get(`${Apiurl}/notice/byId/${id}`).then((response) => {
    // console.log(response.data)
      setNoticeObject(response.data);
  });
});

  return (

    <div>
      {id}
        <div className="row d-flex justify-content-center">
            <div className="col-md-8 bg-info">
            <h1 className="text-center">{noticeObject.notice_title}</h1>
            <div className="notice-body">
              {noticeObject.notice_desc}
            </div>
            </div>
        </div>
    </div>
  );
}

export default Notice



