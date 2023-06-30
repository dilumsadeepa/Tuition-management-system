import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import Apiurl from '../Apiurl';
import Navbar from './Navbar'
import Footer from './Footer'


function Grades() {
  return (
    <div>
          <Navbar />

          <div class="container">
            <div class="text-white headbg border rounded border-0 p-4 p-md-5">
            <div class="five">
              <h1>Up to Ordinary Level
                 <span>සාමාන්‍ය පෙළ දක්වා කාල සටහන</span>
               </h1>
                </div>
            
            </div>
            </div>

          <div className="container py-4 py-xl-5">
            <div className="row gy-4 row-cols-2 row-cols-md-4">

            <a href="streamwisetimetable/grade6" className='text-dark'>
            <div className="col">
                    <div className="text-center d-flex flex-column justify-content-center align-items-center py-3">
                        <div className="bs-icon-xl bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-2 bs-icon lg">
                        <i class="fa-solid fa-6"></i>
                        </div>
                        <div className="px-3">
                            <h2 className="fw-bold mb-0">Grade 6</h2>
                            <p className="mb-0">6 ශ්‍රේණිය</p>
                        </div>
                    </div>
                </div>
            </a>


                <a href="streamwisetimetable/grade7" className='text-dark'>
                <div className="col">
                    <div className="text-center d-flex flex-column justify-content-center align-items-center py-3">
                        <div className="bs-icon-xl bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-2 bs-icon lg">
                        <i class="fa-solid fa-7"></i>
                        </div>
                        <div className="px-3">
                            <h2 className="fw-bold mb-0">Grade 7</h2>
                            <p className="mb-0">7 ශ්‍රේණිය</p>
                        </div>
                    </div>
                </div>
                </a>
                

                <a href="streamwisetimetable/grade8" className='text-dark'>
                <div className="col">
                    <div className="text-center d-flex flex-column justify-content-center align-items-center py-3">
                        <div className="bs-icon-xl bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-2 bs-icon lg">
                        <i class="fa-solid fa-8"></i>
                        </div>
                        <div className="px-3">
                            <h2 className="fw-bold mb-0">Grade 8</h2>
                            <p className="mb-0">8 ශ්‍රේණිය</p>
                        </div>
                    </div>
                </div>
                </a>


                <a href="streamwisetimetable/grade9" className='text-dark'>
                <div className="col">
                    <div className="text-center d-flex flex-column justify-content-center align-items-center py-3">
                        <div className="bs-icon-xl bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-2 bs-icon lg">
                        <i class="fa-solid fa-9"></i>
                        </div>
                        <div className="px-3">
                            <h2 className="fw-bold mb-0">Grade 9</h2>
                            <p className="mb-0">9 ශ්‍රේණිය</p>
                        </div>
                    </div>
                </div>
                </a>

                <a href="streamwisetimetable/grade10" className='text-dark'>
                <div className="col">
                    <div className="text-center d-flex flex-column justify-content-center align-items-center py-3">
                        <div className="bs-icon-xl bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-2 bs-icon lg">
                        <i class="fa-solid fa-1"></i><i class="fa-solid fa-0"></i>
                        </div>
                        <div className="px-3">
                            <h2 className="fw-bold mb-0">Grade 10</h2>
                            <p className="mb-0">10 ශ්‍රේණිය</p>
                        </div>
                    </div>
                </div>
                </a>


                <a href="streamwisetimetable/grade11" className='text-dark'>
                <div className="col">
                    <div className="text-center d-flex flex-column justify-content-center align-items-center py-3">
                        <div className="bs-icon-xl bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-2 bs-icon lg">
                        <i class="fa-solid fa-1"></i><i class="fa-solid fa-1"></i>
                        </div>
                        <div className="px-3">
                            <h2 className="fw-bold mb-0">Grade 11</h2>
                            <p className="mb-0">11 ශ්‍රේණිය</p>
                        </div>
                    </div>
                </div>
                </a>

            </div>
        </div>




        <div class="container">
            <div class="text-white headbg border rounded border-0 p-4 p-md-5">
            <div class="five">
              <h1>AL Time Table
                 <span>උසස් පෙළ කාල සටහන</span>
               </h1>
                </div>
            
            </div>
            </div>


        <div className="container py-4 py-xl-5">
            <div className="row gy-4 row-cols-2 row-cols-md-4">

            <a href="streamwisetimetable/arts" className='text-dark'>
            <div className="col">
                    <div className="text-center d-flex flex-column justify-content-center align-items-center py-3">
                        <div className="bs-icon-xl bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-2 bs-icon lg">
                        <i class="fa-solid fa-palette"></i>
                        </div>
                        <div className="px-3">
                            <h2 className="fw-bold mb-0">Arts</h2>
                            <p className="mb-0">කලා</p>
                        </div>
                    </div>
                </div>
            </a>


                <a href="streamwisetimetable/commerce" className='text-dark'>
                <div className="col">
                    <div className="text-center d-flex flex-column justify-content-center align-items-center py-3">
                        <div className="bs-icon-xl bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-2 bs-icon lg">
                        <i class="fa-solid fa-calculator"></i>
                        </div>
                        <div className="px-3">
                            <h2 className="fw-bold mb-0">Commerce</h2>
                            <p className="mb-0">වාණිජ</p>
                        </div>
                    </div>
                </div>
                </a>


            <a href="streamwisetimetable/sciencemaths" className='text-dark'>
                <div className="col">
                    <div className="text-center d-flex flex-column justify-content-center align-items-center py-3">
                        <div className="bs-icon-xl bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-2 bs-icon lg">
                        <i class="fa-solid fa-flask-vial"></i>
                        </div>
                        <div className="px-3">
                            <h2 className="fw-bold mb-0">Science/ Maths</h2>
                            <p className="mb-0">විද්‍යා / ගණිත</p>
                        </div>
                    </div>
                </div>
            </a>


            <a href="streamwisetimetable/technology" className='text-dark'>
                    <div className="col">
                        <div className="text-center d-flex flex-column justify-content-center align-items-center py-3">
                            <div className="bs-icon-xl bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-2 bs-icon lg">
                            <i class="fa-solid fa-microchip"></i>
                            </div>
                            <div className="px-3">
                                <h2 className="fw-bold mb-0">Technology</h2>
                                <p className="mb-0">තාක්ෂණවේදය</p>
                            </div>
                        </div>
                    </div>
            </a>


            <a href="streamwisetimetable/englishmedium" className='text-dark'>
                <div className="col">
                    <div className="text-center d-flex flex-column justify-content-center align-items-center py-3">
                        <div className="bs-icon-xl bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-2 bs-icon lg">
                        <i class="fa-solid fa-e"></i>
                        </div>
                        <div className="px-3">
                            <h2 className="fw-bold mb-0">English Medium</h2>
                            <p className="mb-0">ඉංග්‍රීසි මාධ්‍ය</p>
                        </div>
                    </div>
                </div>
            </a>


            <a href="streamwisetimetable/languages" className='text-dark'>
                <div className="col">
                    <div className="text-center d-flex flex-column justify-content-center align-items-center py-3">
                        <div className="bs-icon-xl bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-2 bs-icon lg">
                        <i class="fa-solid fa-language"></i>
                        </div>
                        <div className="px-3">
                            <h2 className="fw-bold mb-0">Languages</h2>
                            <p className="mb-0">භාෂා</p>
                        </div>
                    </div>
                </div>
            </a>


            <a href="streamwisetimetable/common" className='text-dark'>
                <div className="col">
                    <div className="text-center d-flex flex-column justify-content-center align-items-center py-3">
                        <div className="bs-icon-xl bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-2 bs-icon lg">
                        <i class="fa-solid fa-c"></i>
                        </div>
                        <div className="px-3">
                            <h2 className="fw-bold mb-0">Common Subjects</h2>
                            <p className="mb-0">පොදු විෂයන්</p>
                        </div>
                    </div>
                </div>
            </a>

            </div>
        </div>



          <Footer />
    </div>
  )
}


export default Grades