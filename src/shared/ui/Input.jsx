import React from 'react';
import '../../App.scss';

const Input = props => {
  return (
    <span>
      <input pattern={props.pattern} disabled={props.disabled} {...props} />
      <span className='error-messages margin-left-16'>{props.errors}</span>
    </span>
  );
};
export default Input;
