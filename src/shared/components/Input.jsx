import React from 'react';
const Input = props => {
  return (
    <input
      pattern={props.pattern}
      disabled={props.disabled}
      required
      {...props}
    />
  );
};
export default Input;
