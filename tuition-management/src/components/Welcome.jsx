import React from "react";



const Welcome = () => {
    return(
        <>

            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                <div class="container-fluid">
                    {/* <a class="navbar-brand" href="#s">Susipwin</a> */}
                    <h2 className="navbar-brand">Susipwin</h2>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul class="navbar-nav we-nav-link">
                            <li class="nav-item">
                                <a class="nav-link" href="login">Login</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#s">Register</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>


            {/* <!-- Carousel --> */}
            <div id="demo" class="carousel slide" data-bs-ride="carousel">

            {/* <!-- Indicators/dots --> */}
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
            </div>

            {/* <!-- The slideshow/carousel --> */}
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg" class="d-block w-100" alt="Los Angeles" />
                    <div class="carousel-caption">
                        <h3>Los Angeles</h3>
                        <p>We had such a great time in LA!</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=" class="d-block w-100" alt="Los Angeles" />
                    <div class="carousel-caption">
                        <h3>Los Angeles</h3>
                        <p>We had such a great time in LA!</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928__480.jpg" class="d-block w-100" alt="Los Angeles" />
                    <div class="carousel-caption">
                        <h3>Los Angeles</h3>
                        <p>We had such a great time in LA!</p>
                    </div>
                </div>
            </div>

            {/* <!-- Left and right controls/icons --> */}
            <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
            </button>
            </div>





        </>
    )
}


export default Welcome;