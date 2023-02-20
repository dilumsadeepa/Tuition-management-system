import React, { useState } from 'react';


function EnterForm() {
  const [fullname, setFName] = useState('');
  const [ininame, setIName] = useState('');
  const [Address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [NIC, setNIC] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ fullname,ininame,Address, email,NIC});
    // form data, like submit it to a server
  };

  return (

    <form onSubmit={handleSubmit}>

    <div class="mb-3 mt-3">
      <label htmlFor="fullname" class="form-label">Full Name:</label>
      <input type="text" id="fullname" name="fullname" class="form-control" value={fullname} onChange={(e) => setFName(e.target.value)} /><br /><br />
    </div>

    <div class="mb-3 mt-3">
      <label htmlFor="ininame" class="form-label">Name with initials:</label>
      <input type="text" id="ininame" name="ininame" class="form-control" value={ininame} onChange={(e) => setIName(e.target.value)} /><br /><br />
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
      <input type="nic" id="nic" name="nic" class="form-control" value={NIC} onChange={(e) => setNIC(e.target.value)} /><br /><br />
    </div>

      <button type="submit">Submit</button>
    </form>

  );
}



export default EnterForm;
