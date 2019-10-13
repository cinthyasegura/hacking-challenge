import React, { useState } from 'react';
import '../../App.scss';

const CheckBox = ({
  checked: propChecked,
  className,
  disabled,
  value,
  onClick
}) => {
  const [checked, setChecked] = useState(propChecked);

  const handleCheckboxChange = () => {
    setChecked(!checked);
    if (onClick) onClick();
  };

  return (
    <div className={className}>
      <label>
        <input
          type='checkbox'
          value={value}
          checked={checked}
          disabled={disabled}
          onClick={() => handleCheckboxChange()}
          required
        />
        {value}
      </label>
    </div>
  );
};
export default CheckBox;
