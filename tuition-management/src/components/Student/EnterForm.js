import React, { useState } from 'react';


function EnterForm() {
  const [UID, setUID] = useState('');
  const [SID, setSID] = useState('');
  const [ininame, setIName] = useState('');
  const [fullname, setFName] = useState('');
  const [Address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [NIC, setNIC] = useState('');
  const [DOB, setDOB] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ UID,SID,ininame,fullname,Address, email,NIC,DOB});
    // form data, like submit it to a server
  };

  return (

    <form onSubmit={handleSubmit}>

<div class="mb-3 mt-3">
      <label htmlFor="UID" class="form-label">User id:</label>
      <input type="text" id="UID" name="UID" class="form-control" value={UID} onChange={(e) => setUID(e.target.value)} /><br /><br />
    </div>

    <div class="mb-3 mt-3">
      <label htmlFor="SID" class="form-label">Student id:</label>
      <input type="text" id="SID" name="SID" class="form-control" value={UID} onChange={(e) => setSID(e.target.value)} /><br /><br />
    </div>

    <div class="mb-3 mt-3">
      <label htmlFor="ininame" class="form-label">Name with initials:</label>
      <input type="text" id="ininame" name="ininame" class="form-control" value={ininame} onChange={(e) => setIName(e.target.value)} /><br /><br />
    </div>

    <div class="mb-3 mt-3">
      <label htmlFor="fullname" class="form-label">Full Name:</label>
      <input type="text" id="fullname" name="fullname" class="form-control" value={fullname} onChange={(e) => setFName(e.target.value)} /><br /><br />
    </div>

  

    <div class="mb-3 mt-3">
      <label htmlFor="Address" class="form-label">Address:</label>
      <input type="text" id="Address" name="Address" class="form-control" value={Address} onChange={(e) => setAddress(e.target.value)} /><br /><br />
    </div>

    <div class="mb-3 mt-3">
      <label htmlFor="email" class="form-label">Email:</label>
      <input type="email" id="email" name="email" class="form-control" value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />
    </div>

    <div class="mb-3 mt-3">
      <label htmlFor="NIC" class="form-label">NIC:</label>
      <input type="text" id="nic" name="nic" class="form-control" value={NIC} onChange={(e) => setNIC(e.target.value)} /><br /><br />
    </div>

    <div class="mb-3 mt-3">
      <label htmlFor="DOB" class="form-label">Date of birth:</label>
      <input type="date" id="DOB" name="DOB" class="form-control" value={email} onChange={(e) => setDOB(e.target.value)} /><br /><br />
    </div>


      <button type="submit">Submit</button>
    </form>

  );
}



export default EnterForm;
