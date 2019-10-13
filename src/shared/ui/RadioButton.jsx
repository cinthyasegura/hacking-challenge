import React, { useState } from 'react';

const RadioButton = props => {
  // const [checked, setChecked] = useState(propChecked);

  // const handleRadioButtonChange = () => {
  //   setChecked(!checked);
  // };

  return (
    <div className={props.className}>
      <label>
        <input
          type='radio'
          name='radio-button'
          value='radio'
          checked={props.checked}
          disabled={props.disabled}
          className='form-check-input'
          {...props}
        />
        {props.value}
      </label>
    </div>
  );
};
export default RadioButton;
