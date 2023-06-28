import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function AboutUs() {
  return (
    <div>
        <Navbar />
        <main className="page">
            <section className="clean-block about-us">
                <div className="container">
                <div className="block-heading">
                    <h2 className="text-info">About Us</h2>
                    <p>The Susipwin Tuition Class in Anuradhapura is a trusted educational institution dedicated to empowering students in their academic journey. With a team of experienced instructors, personalized learning programs, and a focus on holistic development, we provide a nurturing environment for students to excel academically and grow personally. Our commitment to excellence and a proven track record of success make us the ideal choice for students seeking top-quality education.</p>
                </div>
                </div>
            </section>

      {/* Start: Parallax Background */}
            <div className="d-flex justify-content-center align-items-center" data-bss-parallax-bg="true" style={{ height: '500px', background: 'url("../img/scenery/image1.jpg")' }}>
                <iframe allowfullscreen="" frameborder="0" loading="lazy" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB8fmVmHCZSQB8PBWIWBEU1CR4Lq-BaL2w&amp;q=Susipwin+Anuradhapura%2C+Town+Hall+Pl%2C+Anuradhapura&amp;zoom=11" width="80%" height="450"></iframe>
            </div>
      {/* End: Parallax Background */}
    </main>
    <Footer />
    </div>
  )
}

export default AboutUs