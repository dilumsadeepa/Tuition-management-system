import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Gallery() {
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
     
                    <div className="col">
                        <a href="../img/scenery/9.jpg" className=""  data-fancybox="images" data-caption="file name">
                            <img className="img-fluid" src="../img/scenery/9.jpg" alt="file name" /> 
                        </a>
                    </div>
                    <div className="col">
                        <a href="../img/scenery/9.jpg" className=""  data-fancybox="images" data-caption="file name">
                            <img className="img-fluid" src="../img/scenery/9.jpg" alt="file name" /> 
                        </a>
                    </div>
                    <div className="col">
                        <a href="../img/scenery/9.jpg" className=""  data-fancybox="images" data-caption="file name">
                            <img className="img-fluid" src="../img/scenery/9.jpg" alt="file name" /> 
                        </a>
                    </div>
                    <div className="col">
                        <a href="../img/scenery/9.jpg" className=""  data-fancybox="images" data-caption="file name">
                            <img className="img-fluid" src="../img/scenery/9.jpg" alt="file name" /> 
                        </a>
                    </div>
                </div>


                </div>
            </section>
        </main>
        <Footer />
    </div>
  )
}

export default Gallery