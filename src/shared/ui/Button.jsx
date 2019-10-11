import React from 'react';
import { Link } from 'react-router-dom';

const Button = props => {
  return (
    <Link to={props.route}>
      <button onClick={props.onClick} disabled={props.disabled} {...props}>
        {props.title}
      </button>
    </Link>
  );
};
export default Button;
