import React from 'react';
const Input = props => {
  return <input pattern={props.pattern} required {...props} />;
};
export default Input;
