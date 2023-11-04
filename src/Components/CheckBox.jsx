import React, { useState } from 'react';

function CheckboxExample() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className='mr-2'>
      <label className="relative cursor-pointer">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="sr-only"
        />
        <div
          className={`w-5 h-5 border rounded-md ${isChecked ? 'bg-black' : 'bg-transparent'}`}
        ></div>
      </label>
    </div>
  );
}

export default CheckboxExample;
