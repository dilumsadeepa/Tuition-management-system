import React, { useState } from 'react';
import './classesStyle.css';

function DropdownMenu() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`You submitted option ${selectedOption}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="dropdown-container">

      <h1>Advanced Level</h1>
        <select className="dropdown" value={selectedOption} onChange={handleChange}>
          <option value="option1">Combined Maths</option>
          <option value="option1">Biology</option>
          <option value="option1">Chemistry</option>
          <option value="option1">Physics</option>
          <option value="option2">Commerce</option>
          <option value="option3">Technology</option>
          <option value="option3">Arts</option>
        </select>

        <h1>Ordinary level</h1>
        <select className="dropdown" value={selectedOption} onChange={handleChange}>
          <option value="option1">Science</option>
          <option value="option2">commerce</option>
          <option value="option3">maths</option>
          <option value="option3">english</option>
          <option value="option3">history</option>
          <option value="option3">Arts</option>
          <option value="option3">Dancing</option>
        </select>

        <div className="dropdown-arrow"></div>
      </div>
      <button className="submit-button" type="submit">Apply for class</button>
    </form>
  );
}

export default DropdownMenu;
