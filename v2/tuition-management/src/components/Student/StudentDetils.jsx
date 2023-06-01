import React, {useState, useEffect} from "react";
import "./studentDetailsForm.css";
import Apiurl from '../Apiurl';
import axios from "axios";
// import { useCookies } from 'react-cookie';

import Sidebar from './StudentSidebar';
import Dashhead from './Dashhead';



const StudentDetailsForm = () => {




  // const [cookies, setcookie] = usecookies(['user']);
  const [id, setId] = useState("");
  const [fullname, setfullname] = useState("");
  const [nameini, setnameini] = useState("");
  const [address, setsAddress] = useState("");
  const [dob, setdob] = useState("");
  const [gender, setgender] = useState("");
  const [nic, setnic] = useState("");
  const [createtime, setcreatetime] = useState("");
  const [updatetime, setupdatetime] = useState("");
  const [userid, setuserid] = useState("");


//   useEffect(() =>{
//     console.log(cookies.userId);
//     if (cookies.user) {
//       console.log("user idddddd"+cookies.userid);
//     }
// })

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const formData = {
      id: id,
      sfullname: fullname,
      snamewithini: nameini,
      saddress: address,
      sdob: dob,
      sgender: gender,
      snic:nic,
      createdAt:createtime,
      updatedAt:updatetime,
      userId:userid,
    };

    console.log(formData);
  
    axios.post(`${Apiurl}/studentdata`, formData)
      .then(response => {
        // Handle the response from the backend if needed
        console.log(response.data);
      })
      .catch(error => {
        // Handle any errors that occur during the request
        console.error(error);
      });
  };

  return (
    <section>


      {/* <!-- Dashboard --> */}
      <div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">

        <Sidebar />


        {/* <!-- Main content --> */}
        <div class="h-screen flex-grow-1 overflow-y-lg-auto">

          {/* <!-- Header --> */}
          <Dashhead />



          <div className="Clist-background">
            <form onSubmit={handleSubmit} className="form-container">
              <h2 className="form-title">Student Details </h2>

              <div className="input-container">
                <i class="bi bi-award-fill"></i>
                <input
                  type="id"
                  id="id"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  placeholder="Enter your student id"
                  className="input-field"
                />
              </div>

              <div className="input-container">
                <i class="bi bi-award-fill"></i>
                <input
                  type="text"
                  id="ifullname"
                  value={fullname}
                  onChange={(e) => setfullname(e.target.value)}
                  placeholder="Enter your FULL name"
                  className="input-field"
                />
              </div>
              
              <div className="input-container">
                <i class="fa-solid fa-user"></i>
                <input
                  type="text"
                  id="namewithini"
                  value={nameini}
                  onChange={(e) => setnameini(e.target.value)}
                  placeholder="Enter your name with initials"
                  className="input-field"
                />
              </div>

              <div className="input-container">
                <i class="fa-solid fa-user"></i>
                <input
                  type="text"
                  id="namewithini"
                  value={address}
                  onChange={(e) => setsAddress(e.target.value)}
                  placeholder="Enter your address"
                  className="input-field"
                />
              </div>


              <div className="input-container">
                <i class="fa-solid fa-user"></i>
                <input
                  type="text"
                  id="namewithini"
                  value={dob}
                  onChange={(e) => setdob(e.target.value)}
                  placeholder="Enter your birthday"
                  className="input-field"
                />
              </div>

              <div className="input-container">
                <i class="fa-solid fa-user"></i>
                <input
                  type="text"
                  id="namewithini"
                  value={gender}
                  onChange={(e) => setgender(e.target.value)}
                  placeholder="Enter your gender"
                  className="input-field"
                />
              </div>


              <div className="input-container">
                <i class="fa-solid fa-user"></i>
                <input
                  type="text"
                  id="namewithini"
                  value={nic}
                  onChange={(e) => setnic(e.target.value)}
                  placeholder="Enter your NIC no"
                  className="input-field"
                />
              </div>


              <div className="input-container">
                <i class="fa-solid fa-user"></i>
                <input
                  type="text"
                  id="namewithini"
                  value={createtime}
                  onChange={(e) => setcreatetime(e.target.value)}
                  placeholder="Enter created time"
                  className="input-field"
                />
              </div>

              <div className="input-container">
                <i class="fa-solid fa-user"></i>
                <input
                  type="text"
                  id="namewithini"
                  value={updatetime}
                  onChange={(e) => setupdatetime(e.target.value)}
                  placeholder="Enter updated time"
                  className="input-field"
                />
              </div>


              <div className="input-container">
                <i class="fa-solid fa-user"></i>
                <input
                  type="text"
                  id="namewithini"
                  value={userid}
                  onChange={(e) => setuserid(e.target.value)}
                  placeholder="Enter your user id"
                  className="input-field"
                />
              </div>



              {/* <div className="input-container">
                <i class="fa-solid fa-envelope"></i>
                <input
                  type="id"
                  id="email"
                  value={email}
                  onChange={(e) => setuserid(e.target.value)}
                  placeholder="Enter your email"
                  className="input-field"
                />
              </div> */}
              {/* <div className="input-container">
                <i class="fa-solid fa-phone"></i>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                  className="input-field"
                />
              </div>
              <div className="input-container">
                <i class="fa-solid fa-house"></i>
                <textarea
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter your address"
                  className="input-field"
                />
              </div>

              <div className="input-container">
                <i class="fa-solid fa-user-graduate"></i>
                <textarea
                  id="Level"
                  value={Level}
                  onChange={(e) => setLevel(e.target.value)}
                  placeholder="Enter your educational level"
                  className="input-field"
                />
              </div> */}

              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>


    </section>
  );






};

export default StudentDetailsForm;

