import React, { useState } from 'react';
import './PriceBox.scss';

const PriceBox = ({
  checked: propChecked,
  title,
  price,
  subTitle,
  onClick
}) => {
  const [checked, setChecked] = useState(propChecked);

  return (
    <div className='pricebox-container-check'>
      <p className='pricebox-title margin-top-32 margin-bottom-0'>{title}</p>
      <p className='pricebox-price margin-top-8 margin-bottom-0'>{price}</p>
      <p className='pricebox-subtitle margin-top-4 margin-bottom-0'>
        {subTitle}
      </p>
    </div>
  );
};

export default PriceBox;
