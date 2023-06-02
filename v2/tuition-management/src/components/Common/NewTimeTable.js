import React, {useRef, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Apiurl from '../Apiurl';

function NewTimeTable() {

    let {id} = useParams();
    const [newtimetableObject, setNewTimeTableObject] = useState({});
  
  useEffect(() => {
    axios.get(`${Apiurl}/newtimetable/byId/${id}`).then((response) => {
        setNewTimeTableObject(response.data);
    });
  });


  return (
    <div>
    {id}
    <div className="row d-flex justify-content-center">
        <div className="col-md-8 bg-info">
        <h1 className="text-center">{newtimetableObject.time_title}</h1>
        <div className="notice-body">
          {newtimetableObject.grade}
        </div>
        </div>
    </div>
</div>

  )
}

export default NewTimeTable