import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import Apiurl from '../Apiurl';
import Navbar from './Navbar'
import Footer from './Footer'

function AlTimeTable() {

    const [Streams, setStreams] = useState([]);


    const gette = async (e) => {
        try {
            const response = await axios.get(`${Apiurl}/teacher`);
            setStreams(response.data);
            console.log(response.data);
        } catch (error) {
            console.log("error in getting data")
        }
    }

    useEffect(() => {
        gette();
    }, [])



  return (
    <div>
        <Navbar />
            <main className="page">
                <section className="clean-block about-us" style={{ color:'#000' }}>
                    <div className="container">
                    <div className="block-heading">
                        <h2 className="text-info">A/L Time Table</h2>
                        <p>Our thoughtfully designed timetable at Susipwin Tuition Class in Anuradhapura provides a structured schedule for students, enabling them to efficiently manage their study time and ensure comprehensive subject coverage.</p>
                    </div>
                    </div>

                    <div className="container d-flex flex-column align-items-center py-4 py-xl-5 text-dark">
                    <div className="row gy-4 row-cols-1 row-cols-md-2 w-100 text-dark" style={{ maxWidth: '800px' }}>
                        
                        <a href="alstreamwisetimetable/arts" className='text-dark'>
                        <div className="col order-md-2">
                        <div className="card">
                            <img className="card-img w-100 d-block" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" />
                            <div className="card-img-overlay text-center d-flex flex-column justify-content-center align-items-center p-4" style={{ background: 'linear-gradient(#3a36f7 0%, #2d16ba 44%, #8b62ff)' }}>
                            <h4 style={{ fontWeight: 'bold', fontSize: '48px' }}>Arts</h4>
                            <p style={{ fontSize: '20px', fontWeight: 'bold' }}>කලා</p>
                            </div>
                        </div>
                        </div>  
                        </a>

                        <a href="alstreamwisetimetable/commerce" className='text-dark'>
                        <div className="col order-md-2">
                        <div className="card">
                            <img className="card-img w-100 d-block" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" />
                            <div className="card-img-overlay text-center d-flex flex-column justify-content-center align-items-center p-4" style={{ background: 'linear-gradient(#3a36f7 0%, #2d16ba 44%, #8b62ff)' }}>
                            <h4 style={{ fontWeight: 'bold', fontSize: '48px' }}>Commerce</h4>
                            <p style={{ fontSize: '20px', fontWeight: 'bold' }}>වාණිජ</p>
                            </div>
                        </div>
                        </div>
                        </a>
                        
                        <a href="alstreamwisetimetable/sciencemaths" className='text-dark'>
                        <div className="col order-md-2">
                        <div className="card">
                            <img className="card-img w-100 d-block" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" />
                            <div className="card-img-overlay text-center d-flex flex-column justify-content-center align-items-center p-4" style={{ background: 'linear-gradient(#3a36f7 0%, #2d16ba 44%, #8b62ff)' }}>
                            <h4 style={{ fontWeight: 'bold', fontSize: '48px' }}>Science/ Maths</h4>
                            <p style={{ fontSize: '20px', fontWeight: 'bold' }}>විද්‍යා / ගණිත</p>
                            </div>
                        </div>
                        </div>
                        </a>

                        <a href="alstreamwisetimetable/technology" className='text-dark'>
                        <div className="col order-md-2">
                        <div className="card">
                            <img className="card-img w-100 d-block" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" />
                            <div className="card-img-overlay text-center d-flex flex-column justify-content-center align-items-center p-4" style={{ background: 'linear-gradient(#3a36f7 0%, #2d16ba 44%, #8b62ff)' }}>
                            <h4 style={{ fontWeight: 'bold', fontSize: '48px' }}>Technology</h4>
                            <p style={{ fontSize: '20px', fontWeight: 'bold' }}>තාක්ෂණවේදය</p>
                            </div>
                        </div>
                        </div>
                        </a>

                        <a href="alstreamwisetimetable/englishmedium" className='text-dark'>
                        <div className="col order-md-2">
                        <div className="card">
                            <img className="card-img w-100 d-block" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" />
                            <div className="card-img-overlay text-center d-flex flex-column justify-content-center align-items-center p-4" style={{ background: 'linear-gradient(#3a36f7 0%, #2d16ba 44%, #8b62ff)' }}>
                            <h4 style={{ fontWeight: 'bold', fontSize: '48px' }}>English Medium</h4>
                            <p style={{ fontSize: '20px', fontWeight: 'bold' }}>ඉංග්‍රීසි මාධ්‍ය</p>
                            </div>
                        </div>
                        </div>
                        </a>

                        <a href="alstreamwisetimetable/languages" className='text-dark'>
                        <div className="col order-md-2">
                        <div className="card">
                            <img className="card-img w-100 d-block" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" />
                            <div className="card-img-overlay text-center d-flex flex-column justify-content-center align-items-center p-4" style={{ background: 'linear-gradient(#3a36f7 0%, #2d16ba 44%, #8b62ff)' }}>
                            <h4 style={{ fontWeight: 'bold', fontSize: '48px' }}>Languages</h4>
                            <p style={{ fontSize: '20px', fontWeight: 'bold' }}>භාෂා</p>
                            </div>
                        </div>
                        </div>
                        </a>

                    </div>
                    </div>
                </section>
            </main>
            <Footer />
    </div>
  )
}

export default AlTimeTable