import React, { useState } from 'react';


function EnterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, email, message });
    // do something with the form data, like submit it to a server
  };

  return (

    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />
      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea><br /><br />
      <button type="submit">Submit</button>
    </form>

  );
}



export default EnterForm;
