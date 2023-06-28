import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import axios from "axios"
import Apiurl from '../Apiurl'
import * as Yup from 'yup'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



function Gallery() {

    const id = "gallery";


    const [gallery, setGallery] = useState([]);
    const [cloudFiles, setCloudFiles] = useState([]);
    const [cloudUrls, setCloudUrls] = useState([]);

    useEffect(() => {
        axios.get(`${Apiurl}/onegallery/${id}`)
          .then(response => {
            const galleryData = response.data;
            setGallery(galleryData);
      
            const cloudOnlyValues = response.data.cloudOnly ? response.data.cloudOnly.split(',') : [];
            const cloudFilesValues = response.data.cloudFiles ? response.data.cloudFiles.split(',') : [];
      
            if (response.data.cloudFiles && cloudOnlyValues.length === 0) {
              const urls = response.data.cloudFiles.split(',').map(url => url.trim());
              setCloudFiles(urls);
              setCloudUrls(urls);
              console.log("urls :",urls);
            }else{
             // Clear the list of cloud files
             setCloudFiles([]);
             setCloudUrls([]);
            }
      
      
            if (response.data.cloudOnly && cloudFilesValues.length === 0) {
              const urls = response.data.cloudOnly.split(',').map(url => url.trim());
              setCloudUrls(urls);
              setCloudFiles(urls);
              console.log("urls :",urls);
            }else{
             // Clear the list of cloud files
             setCloudUrls([]);
             setCloudFiles([]);
            }
      
      
            if ( cloudFilesValues.length > cloudOnlyValues.length) {
              const urls = response.data.cloudFiles.split(',').map(url => url.trim());
              setCloudFiles(urls);
              console.log("urls :",urls);  
          }else{
            // Clear the list of cloud files
            setCloudFiles([]);
            setCloudUrls([]);
          }
      
          if ( cloudOnlyValues.length > cloudFilesValues.length) {
            const urls = response.data.cloudOnly.split(',').map(url => url.trim());
            setCloudUrls(urls);
            setCloudFiles(urls);
            console.log("urls :",urls);
          }else{
            // Clear the list of cloud files
            setCloudUrls([]);
            setCloudFiles([]);
          }
          
      
        })
          .catch(err => {
            console.log(err);
          })
      }, [id]);




      if (cloudFiles.length === 0) {
        return (null);
      }
      
      const renderFiles = () => {
       console.log("cloudUrls :",cloudUrls);
        return cloudUrls.map((url, index) => {
          // Extract the file name from the URL
          const fileName = url.substring(url.lastIndexOf('/') + 1);
          // Extract the file extension from the file name
          const extension = fileName.split('.').pop();
          // Render the file with the appropriate element based on the file extension
          if (extension.toLowerCase() === 'jpg' || extension.toLowerCase() === 'jpeg' || extension.toLowerCase() === 'png' || extension.toLowerCase() === 'gif') {
            return (
                <div className="col">
                <a href={url} className=""  data-fancybox="images" data-caption={fileName}>
                    <img className="img-fluid" src={url} alt={fileName} /> 
                </a>
                </div>
            );
            } else if (extension.toLowerCase() === 'mp4' || extension.toLowerCase() === 'webm' || extension.toLowerCase() === 'mkv') {
            return (
                <div className="col">
                <a href={url} className=""  data-fancybox="images" data-caption={fileName}>
                <video className="w-100 d-block" src={url} alt={fileName} autoPlay='true' muted ></video>
                </a>
                </div>
            );
          } else if (extension.toLowerCase() === 'mp3' || extension.toLowerCase() === 'wav') {
            return (
                <div key={index}>
                <audio src={url} controls />
                <span>{extension.toUpperCase()} File</span>
              </div>
            );
          } else if (extension.toLowerCase() === 'pdf') {
            return (
              // <div key={index}>
              //    <a href={url} className="">
              //           <p>{extension.toUpperCase()} File</p>
              //    </a>
              //   <iframe src={url} height="400px" width="300"></iframe>
              // </div>
      
              <div key={index}>
                <ul className="list-group">
                <li className="list-group-item list-group-item-info"><i class="fa-regular fa-file-pdf me-2"></i> {extension.toUpperCase()} File <i class="fa-solid fa-arrow-right mx-2"></i> <small>{url}</small>  <a href={url}  data-fancybox="images" data-caption={extension.toUpperCase()} download><i class="fa-solid fa-arrow-up-right-from-square"></i></a>  </li>
                </ul>
                </div>
            );
          } else {
            return (
                <div key={index}>
                <ul className="list-group">
                  <li className="list-group-item list-group-item-info"><i class="fa-solid fa-file-video me-2"></i> {extension.toUpperCase()} File <i class="fa-solid fa-arrow-right mx-2"></i> <small>{url}</small>  <a href={url} download><i class="fa-solid fa-arrow-up-right-from-square"></i></a>  </li>
                  </ul>
                </div>
            );
          }
        });
      };

      


  return (
    <div>
         <Navbar />
            <main className="page gallery-page">
            <section className="clean-block clean-gallery dark">
                <div className="container">
                <div className="block-heading">
                    <h2 className="text-info">Gallery</h2>
                    <p>
                    <br />
                    Our gallery showcases the vibrant learning environment and engaging activities at Susipwin Tuition Class. Explore the images capturing our students' active participation, collaborative learning, and moments of academic achievement.
                    <br />
                    <br />
                    </p>
                </div>
             
                <div className="row gx-2 gy-2 row-cols-1 row-cols-md-2 row-cols-xl-3" data-bss-baguettebox="">
     
                {renderFiles()}
                </div>


                </div>
            </section>
        </main>
        <Footer />
    </div>
  )
}

export default Gallery