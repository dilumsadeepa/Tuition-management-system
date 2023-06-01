import React, {useRef, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Apiurl from '../Apiurl';

function TimeTable() {

    let {id} = useParams();
    const [timetableObject, setTimeTableObject] = useState({});
  
  useEffect(() => {
    axios.get(`${Apiurl}/timetable/byId/${id}`).then((response) => {
        setTimeTableObject(response.data);
    });
  });

  return (
    <div>
        {id}
        <div className="row d-flex justify-content-center">
            <div className="col-md-8 bg-info">
            <h1 className="text-center">{timetableObject.time_title}</h1>
            <div className="notice-body">
              {timetableObject.grade}
            </div>
            </div>
        </div>
    </div>
  )
}

export default TimeTable