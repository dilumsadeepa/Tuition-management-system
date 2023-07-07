import React, { useState } from 'react';
import ReactSwitch from 'react-switch';

function VisibilitySwitch() {
  const [isChecked, setIsChecked] = useState(true);

  const handleChange = val => {
    setIsChecked(val);
  };

  return (
    <div className='d-flex align-items-center mt-2 ms-1 ps-0'>
      <ReactSwitch checked={isChecked} onChange={handleChange} />
      <label className="form-check-label ms-2" htmlFor="flexSwitchCheckChecked">
        Visibility
      </label>
    </div>
  );
}

export default VisibilitySwitch;