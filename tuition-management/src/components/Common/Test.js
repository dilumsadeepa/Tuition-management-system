import React from 'react'

function test() {
  return (
    <>
    
    {/* <section className="h-100">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-lg-9 col-xl-7">
        <div className="card">
          <div className="rounded-top text-white d-flex flex-row" style={{backgroundColor: 's000', height:'200px'}}>
            <div className="ms-4 mt-5 d-flex flex-column" style={{width: '150px'}}>
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                alt="Generic placeholder" className="img-fluid img-thumbnail mt-4 mb-2"
                style={{width: '150px', zIndex: '1'}}/>
              <button type="button" className="btn btn-outline-dark" data-mdb-ripple-color="dark"
                style={{zIndex: '1'}}>
                Edit profile
              </button>
            </div>
            <div className="ms-3" style="margin-top: 130px;">
              <h5>Andy Horwitz</h5>
              <p>New York</p>
            </div>
          </div>
          <div className="p-4 text-black" style="background-color: sf8f9fa;">
            <div className="d-flex justify-content-end text-center py-1">
              <div>
                <p className="mb-1 h5">253</p>
                <p className="small text-muted mb-0">Photos</p>
              </div>
              <div className="px-3">
                <p className="mb-1 h5">1026</p>
                <p className="small text-muted mb-0">Followers</p>
              </div>
              <div>
                <p className="mb-1 h5">478</p>
                <p className="small text-muted mb-0">Following</p>
              </div>
            </div>
          </div>
          <div className="card-body p-4 text-black">
            <div className="mb-5">
              <p className="lead fw-normal mb-1">About</p>
              <div className="p-4" style={{backgroundColor: 'sf8f9fa'}}>
                <p className="font-italic mb-1">Web Developer</p>
                <p className="font-italic mb-1">Lives in New York</p>
                <p className="font-italic mb-0">Photographer</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <p className="lead fw-normal mb-0">Recent photos</p>
              <p className="mb-0"><a href="s!" className="text-muted">Show all</a></p>
            </div>
            <div className="row g-2">
              <div className="col mb-2">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                  alt="5" className="w-100 rounded-3"/>
              </div>
              <div className="col mb-2">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                  alt="4" className="w-100 rounded-3"/>
              </div>
            </div>
            <div className="row g-2">
              <div className="col">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                  alt="1" className="w-100 rounded-3"/>
              </div>
              <div className="col">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                  alt="1" className="w-100 rounded-3"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}




<section style={{backgroundColor: "seee"}}>
  <div className="container py-5">
    <div className="row">
      <div className="col">
        <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item"><a href="s">Home</a></li>
            <li className="breadcrumb-item"><a href="s">User</a></li>
            <li className="breadcrumb-item active" aria-current="page">User Profile</li>
          </ol>
        </nav>
      </div>
    </div>

    <div className="row">
      <div className="col-lg-4">
        <div className="card mb-4">
          <div className="card-body text-center">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
              className="rounded-circle img-fluid" style={{width: "150px"}}/>
            <h5 className="my-3">John Smith</h5>
            <p className="text-muted mb-1">Full Stack Developer</p>
            <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
            <div className="d-flex justify-content-center mb-2">
              <button type="button" className="btn btn-primary">Follow</button>
              <button type="button" className="btn btn-outline-primary ms-1">Message</button>
            </div>
          </div>
        </div>
        <div className="card mb-4 mb-lg-0">
          <div className="card-body p-0">
            gggggggggggggggg
          </div>
        </div>
      </div>
      <div className="col-lg-8">
        <div className="card mb-4">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Full Name</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">Johnatan Smith</p>
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Email</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">example@example.com</p>
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Phone</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">(097) 234-5678</p>
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Mobile</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">(098) 765-4321</p>
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Address</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">Bay Area, San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
          <div className="table-responsive">
            <table className="table">
            <tr>
                <th>#</th>
                <th>First</th>
                <th>Last</th>
                <th>Handle</th>
              </tr>
            </table>
        </div>
          </div>
  


        </div>
      </div>
    </div>
  </div>
</section>
</>

  )
}

export default test