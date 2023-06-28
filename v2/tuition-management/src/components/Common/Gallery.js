import React, {useRef, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Apiurl from '../Apiurl';

function Gallery() {

    let {id} = useParams();
    const [galleryObject, setGalleryObject] = useState({});
  
  useEffect(() => {
    axios.get(`${Apiurl}/gallery/byId/${id}`).then((response) => {
        setGalleryObject(response.data);
    });
  });


  return (
    <div>
         {id}
        <div className="row d-flex justify-content-center">
            <div className="col-md-8 bg-info">
            <h1 className="text-center">{galleryObject.location}</h1>
            <div className="notice-body">
              {galleryObject.category}
            </div>
            </div>
        </div>
    </div>
  )
}

export default Gallery