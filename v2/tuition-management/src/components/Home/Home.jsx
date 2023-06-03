import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Home() {
  return (
    <div>
        <div className="row" style={{ '--bs-body-bg': 'var(--bs-blue)', background: 'var(--bs-info)', marginRight: 0, marginLeft: 0 }}>
  <div className="col d-xxl-flex justify-content-xxl-center" style={{ '--bs-body-bg': 'var(--bs-blue)', background: 'var(--bs-info)' }}>
    <div className="row container" style={{ background: 'var(--bs-info)', '--bs-body-bg': 'var(--bs-blue)' }}>
      <div className="col-lg-6 col-xl-4 col-xxl-6 d-flex justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-center justify-content-xxl-start align-items-xxl-center">
        <img src="../img/susipwin logo.jpg" width="85" height="53" style={{ marginTop: 8, marginBottom: 8, marginRight: 22 }} />
        <img className="topquote" src="../img/nena gunasusadi.png" width="210" height="25" style={{ marginTop: 15 }} />
      </div>
      <div className="col d-lg-flex d-xxl-flex justify-content-lg-center align-items-lg-center justify-content-xxl-center align-items-xxl-center" style={{ marginTop: 18 }}>
        <p className="d-xl-flex justify-content-xl-center align-items-xl-center" style={{ fontSize: 14 }}>
          <i className="icon-map" style={{ marginTop: 26, fontSize: 25, marginRight: 8 }}></i>
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
          <i className="icon-phone" style={{ fontWeight: 'bold' }}></i>&nbsp; 070124567
        </p>
      </div>
    </div>
  </div>
</div>


        <Navbar />
        <main>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae in temporibus iusto laudantium molestiae. Ex, excepturi! Quae tempore optio ullam repudiandae, maiores nemo? Ad laborum perspiciatis maxime porro ab, consectetur cumque dolorum quod odit asperiores neque repudiandae at doloremque dignissimos quas distinctio aliquid rem reprehenderit in, optio laboriosam ipsum eligendi.</p>
            <h1 className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste neque non hic libero. Itaque cumque eius tempore veniam quae voluptatum numquam animi alias, totam velit nemo, beatae est iste corporis illum molestiae, accusantium eveniet quas eligendi facilis? Rerum quod nobis quaerat qui sint similique facilis, quos beatae in velit dolores sit rem eum. Tempore rerum necessitatibus animi nemo molestiae labore voluptatibus dignissimos possimus dolore distinctio architecto, voluptatum quia cupiditate dolorem omnis quisquam adipisci numquam nulla consequuntur magnam. Autem obcaecati asperiores enim reiciendis quod ab unde necessitatibus, a molestias vero nesciunt quo vitae. Eveniet, qui! Ut sequi sint tenetur in provident est quod possimus porro. Distinctio neque sit magnam debitis nostrum aut saepe tenetur minima repellat et amet delectus quo quam aspernatur sint facilis, quia commodi optio eos blanditiis sequi! Veniam maiores, recusandae veritatis voluptate ex ipsam. Ab maiores ipsa ad obcaecati nulla ipsum sequi molestiae cupiditate provident reprehenderit debitis nemo perferendis hic, doloribus ratione quibusdam repellendus veritatis illum assumenda mollitia rem. Quaerat sapiente, voluptate delectus excepturi corrupti officia temporibus saepe consequatur sed, alias magnam ut ratione a veritatis! Aliquid error totam quasi dolorem, provident eius reiciendis dolor veritatis nulla perspiciatis laborum dignissimos placeat unde neque voluptatem voluptates culpa eum eaque.</h1>
            <h1 className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste neque non hic libero. Itaque cumque eius tempore veniam quae voluptatum numquam animi alias, totam velit nemo, beatae est iste corporis illum molestiae, accusantium eveniet quas eligendi facilis? Rerum quod nobis quaerat qui sint similique facilis, quos beatae in velit dolores sit rem eum. Tempore rerum necessitatibus animi nemo molestiae labore voluptatibus dignissimos possimus dolore distinctio architecto, voluptatum quia cupiditate dolorem omnis quisquam adipisci numquam nulla consequuntur magnam. Autem obcaecati asperiores enim reiciendis quod ab unde necessitatibus, a molestias vero nesciunt quo vitae. Eveniet, qui! Ut sequi sint tenetur in provident est quod possimus porro. Distinctio neque sit magnam debitis nostrum aut saepe tenetur minima repellat et amet delectus quo quam aspernatur sint facilis, quia commodi optio eos blanditiis sequi! Veniam maiores, recusandae veritatis voluptate ex ipsam. Ab maiores ipsa ad obcaecati nulla ipsum sequi molestiae cupiditate provident reprehenderit debitis nemo perferendis hic, doloribus ratione quibusdam repellendus veritatis illum assumenda mollitia rem. Quaerat sapiente, voluptate delectus excepturi corrupti officia temporibus saepe consequatur sed, alias magnam ut ratione a veritatis! Aliquid error totam quasi dolorem, provident eius reiciendis dolor veritatis nulla perspiciatis laborum dignissimos placeat unde neque voluptatem voluptates culpa eum eaque.</h1>
        </main>
        <Footer />
    </div>
  )
}

export default Home