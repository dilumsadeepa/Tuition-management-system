import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Swal from 'sweetalert2';

const Logout = () => {
  const navigate = useNavigate();
  const [cookies, , removeCookie] = useCookies(['user']);

  const logoutUser = () => {
    // Show a confirmation box
    Swal.fire({
      title: 'Logout',
      text: 'Are you sure you want to logout?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Logout',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('====================================');
        console.log("clear these cookies"+cookies);
        console.log('====================================');
        // Clear user cookies here
        removeCookie('id');
        removeCookie('email');
        removeCookie('username');
        removeCookie('role');


        // Redirect to login page
        navigate('/');
      }
    });
  };

  return (
    <button type="button" className="btn" style={{color:'white'}} onClick={logoutUser}>
      <i class="bi bi-box-arrow-left"></i> Logout
    </button>
  );
};

export default Logout;
