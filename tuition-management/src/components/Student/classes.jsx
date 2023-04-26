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
        <select className="dropdown" value={selectedOption} onChange={handleChange}>
          <option value="">Choose an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <div className="dropdown-arrow"></div>
      </div>
      <button className="submit-button" type="submit">Submit</button>
    </form>
  );
}

export default DropdownMenu;
