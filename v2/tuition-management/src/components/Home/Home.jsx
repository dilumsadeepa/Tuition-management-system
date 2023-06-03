import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Home() {
  return (
    <div>
        <div className="row" style={{ '--bs-body-bg': 'var(--bs-blue)', background: 'var(--bs-info)', marginRight: 0, marginLeft: 0, color:'#000' }}>
  <div className="col d-xxl-flex justify-content-xxl-center" style={{ '--bs-body-bg': 'var(--bs-blue)', background: 'var(--bs-info)' }}>
    <div className="row container" style={{ background: 'var(--bs-info)', '--bs-body-bg': 'var(--bs-blue)' }}>
      <div className="col-lg-6 col-xl-4 col-xxl-6 d-flex justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-center justify-content-xxl-start align-items-xxl-center">
        <img src="../img/susipwin logo.jpg" alt='logo' width="85" height="53" style={{ marginTop: 8, marginBottom: 8, marginRight: 22 }} />
        <img className="topquote" src="../img/nena gunasusadi.png" alt='logo' width="210" height="25" style={{ marginTop: 15 }} />
      </div>
      <div className="col d-lg-flex d-xxl-flex justify-content-lg-center align-items-lg-center justify-content-xxl-center align-items-xxl-center" style={{ marginTop: 0 }}>
        <p className="d-xl-flex justify-content-xl-center align-items-xl-center" style={{ fontSize: 14 }}>
          <i className="fa-regular fa-map" style={{ fontSize: 25, marginRight: 8 }}></i>
          Susipwin Anuradhapura,Town Hall Pl,Anuradhapura
        </p>
      </div>
      <div className="col d-flex d-lg-flex d-xxl-flex flex-column justify-content-lg-center align-items-lg-center align-items-xl-start justify-content-xxl-center align-items-xxl-start">
        <p className="d-xl-flex justify-content-xl-center align-items-xl-center" style={{ fontSize: 17, marginTop: 10 }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor" style={{ marginTop: 0 }}>
          <path d="M0 128C0 92.65 28.65 64 64 64H448C483.3 64 512 92.65 512 128V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V128zM48 128V150.1L220.5 291.7C241.1 308.7 270.9 308.7 291.5 291.7L464 150.1V127.1C464 119.2 456.8 111.1 448 111.1H64C55.16 111.1 48 119.2 48 127.1L48 128zM48 212.2V384C48 392.8 55.16 400 64 400H448C456.8 400 464 392.8 464 384V212.2L322 328.8C283.6 360.3 228.4 360.3 189.1 328.8L48 212.2z"></path>
          </svg>
          &nbsp; susipwinedu@gmail.com
        </p>
        <p className="d-xl-flex justify-content-xl-center align-items-xl-center" style={{ fontSize: 16, marginBottom: 10 }}>
        <i class="fa-solid fa-phone"></i>&nbsp; 070124567
        </p>
      </div>
    </div>
  </div>
</div>


        <Navbar />

        <main>
        <section className="clean-block clean-hero" style={{ color: 'rgba(162,194,241,0.85)', background: 'url("../img/scenery/7.jpg"), var(--bs-red)', borderColor: 'var(--bs-gray-600)' }}>
        <div className="text">
          <h2 style={{ marginBottom: '25px' }}>Susipwin Higher Education Institute&nbsp;</h2>
          <p style={{ margin: '-2px', marginTop: '0px', marginRight: '0px', marginBottom: '15px', marginLeft: '0px' }}> ටියුෂන් කලාවේ පුරෝගාමියා</p>
          <p style={{ marginBottom: '30px' }}> Unlock Your Potential at Susipwin, Anuradhapura's Premier Tuition Class</p>
          <button className="btn btn-outline-light btn-lg" type="button">Learn More</button>
        </div>
      </section>
      <section className="clean-block clean-info dark">
        <div className="container">
          <div className="block-heading">
            <h2 className="text-info">Info</h2>
            <h3 className="text-info">අපි ගැන තොරතුරු</h3>
            <p>Susipwin Tuition Class in Anuradhapura: Grade 6-13 classes, experienced instructors, personalized learning, exam-focused, holistic approach, proven success.</p>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <img className="img-fluid rounded" src="../img/scenery/2.jpg" alt="image" />
            </div>
            <div className="col-md-6">
              <h3>Who We Are?</h3>
              <div className="getting-started-info">
                <p>Susipwin Tuition Class in Anuradhapura is a premier educational institute offering classes for students from Grade 6 to Grade 13. With a focus on comprehensive education, experienced instructors, and personalized learning programs, Susipwin provides the necessary guidance and support to help students succeed academically. The institute places a strong emphasis on exam preparation, equipping students with effective strategies and resources to excel in their examinations. With well-equipped facilities and a proven track record of success, Susipwin Tuition Class is dedicated to empowering students and helping them achieve their full potential.</p>
              </div>
              <button className="btn btn-outline-primary btn-lg" type="button">Read More</button>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <h3>අපි කවුරුන්ද?</h3>
              <div className="getting-started-info">
                <p>පාසල් අධ්‍යාපනය දැවැන්ත ලෙස බිඳවැටී ඇති මෙවන් අවධියක උසස් පෙළ උසස් ලෙස සමත්ව විශ්ව විද්‍යාල වරම් අත් කර ගැනීමට නම්, ඔබට නිවැරදි හා නිරවුල් අධ්‍යාපනයක් ලැබිය යුතුම ය. විෂය කරුණු පමණක් නොව ජීවිතය දිනාගන්නා ආකාරය පිළිබඳව ද එසේ ජීවිතය දිනාගත් අයගෙන් උපදෙස් හා කමටහන් ද ලැබිය යුතුය.<br />මේ සියල්ලම ඔබට ලැබෙන දිවයිනේ ඇති ජනප්‍රියම හා සාර්ථකම අධ්‍යාපන ආයතනය වන්නේ අනුරාධපුර “සිප්වින්“ අධ්‍යාපන ආයතනය බවට අපේ සුවහසක් දූ දරුවන් හා දෙමාපියන් සාක්ෂි දරයි.</p>
              </div>
              <button className="btn btn-outline-primary btn-lg" type="button">Read More</button>
            </div>
            <div className="col-md-6">
              <img className="img-fluid rounded" src="../img/scenery/15.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
        </main>


        <section className="clean-block features">
      <div className="container">
        <div className="block-heading">
          <h2 className="text-info">Our Specialists&nbsp;</h2>
          <h5 className="text-info">අපගේ විශේෂාංග</h5>
          <p>
            We stand out with expert instructors, personalized learning, exam excellence, interactive teaching, holistic development, and a proven track record of success.
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-5 feature-box">
            <i className="icon-user-following icon"></i>
            <h4>
              <strong>Expert Instructors:</strong>
            </h4>
            <p>Highly qualified and experienced instructors who specialize in their respective subjects.</p>
          </div>
          <div className="col-md-5 feature-box">
            <i className="icon-pencil icon"></i>
            <h4>
              <strong>Track Record of Success</strong>
            </h4>
            <p>Demonstrated history of students achieving remarkable academic results and securing admissions to prestigious institutions.</p>
          </div>
          <div className="col-md-5 feature-box">
            <i className="icon-refresh icon"></i>
            <h4>
              <strong>Interactive Teaching Methods</strong>
            </h4>
            <p>Engaging and interactive teaching methods that promote active participation and enhance learning outcomes.</p>
          </div>
          <div className="col-md-5 feature-box">
            <i className="icon-notebook icon"></i>
            <h4>
              <strong>Exam Excellence</strong>
            </h4>
            <p>Focus on exam preparation with proven strategies, practice tests, and resources to achieve outstanding results.</p>
          </div>
        </div>
      </div>
    </section>



    <section className="clean-block slider dark">
      <div className="container">
        <div className="block-heading">
          <h2 className="text-info">Gallery</h2>
          <p>
            Our gallery showcases the vibrant learning environment and engaging activities at Susipwin Tuition Class. Explore the images capturing our students' active participation, collaborative learning, and moments of academic achievement.
          </p>
        </div>
        <div id="carousel-1" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100 d-block" src="../img/scenery/9.jpg" alt="Slide Image" />
            </div>
            <div className="carousel-item">
              <img className="w-100 d-block" src="../img/scenery/15.jpg" alt="Slide Image" />
            </div>
            <div className="carousel-item">
              <img className="w-100 d-block" src="../img/scenery/7.jpg" alt="Slide Image" />
            </div>
          </div>
          <div>
            <a className="carousel-control-prev" href="#carousel-1" role="button" data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
              <span className="visually-hidden">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carousel-1" role="button" data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
              <span className="visually-hidden">Next</span>
            </a>
          </div>
          <ol className="carousel-indicators">
            <li data-bs-target="#carousel-1" data-bs-slide-to="0" className="active"></li>
            <li data-bs-target="#carousel-1" data-bs-slide-to="1"></li>
            <li data-bs-target="#carousel-1" data-bs-slide-to="2"></li>
          </ol>
        </div>
      </div>
    </section>



        <Footer />
    </div>
  )
}

export default Home