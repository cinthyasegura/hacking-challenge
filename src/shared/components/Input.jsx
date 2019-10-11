import React from 'react';
import '../../App.scss';

const Input = props => {
  return (
    <>
      <input
        pattern={props.pattern}
        disabled={props.disabled}
        required
        {...props}
      />
      <span className='error-messages'>{props.errors}</span>
    </>
  );
};
export default Input;
