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

function TimeTablePosts() {

    // const id = "timetableposts";


    const [gallery, setGallery] = useState([]);
    const [cloudFiles, setCloudFiles] = useState([]);
    const [cloudUrls, setCloudUrls] = useState([]);

   useEffect(() => {
        axios.get(`${Apiurl}/timetable`)
          .then(response => {
            const galleryData = response.data;
            console.log(galleryData);
            setGallery(galleryData);
            
          }).catch
          (error => {
            console.log(error);
          })
      }, [])


    



  return (
     <div>
         <Navbar />
            <main className="page gallery-page">
            <section className="clean-block clean-gallery dark">
                <div className="container">
                <div className="block-heading">
                <div class="one">
                  <h1>Time Table Posters</h1>
                </div>
                    {/* <p>
                    <br />
                    Our gallery showcases the vibrant learning environment and engaging activities at Susipwin Tuition Class. Explore the images capturing our students' active participation, collaborative learning, and moments of academic achievement.
                    <br />
                    <br />
                    </p> */}
                </div>
             
                <div className="row gx-2 gy-2 row-cols-1 row-cols-md-2 row-cols-xl-3" style={{ wordWrap: 'break-word' }} data-bss-baguettebox="">
                {gallery.map((item) => {
                          return (
                            <div className="col" key={item.id}>
                              {/* <p>{item.cloudOnly}</p> */}
                              <a href={item.cloudOnly} className="" data-fancybox="images" data-caption={item.time_title}>
                                <img className="img-fluid h-100" src={item.cloudOnly} alt={item.time_title} />
                              </a>
                            </div>
                          );
                        })}
                </div>


                </div>
            </section>
        </main>
        <Footer />
    </div>
  )
}

export default TimeTablePosts