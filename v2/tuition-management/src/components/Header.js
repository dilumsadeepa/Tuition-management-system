import React from 'react';

const Header=()=>{
    return(
        <div className='header'>
             <a href="#default" class="logo">CompanyLogo</a>
  {/* <div class="header-right"> */}
    <a class="active" href="#home">Home</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
        </div>
    )
}

export default Header; 