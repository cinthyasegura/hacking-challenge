import React, { useState } from 'react';
import '../Payment.scss';
import checkIcon from '../../../../assets/check.svg';
import unCheckIcon from '../../../../assets/circle.svg';

const PriceBox = ({ index, isCheck, title, price, setSelectedItem }) => {
  const subTitleTexts = ['por 12 meses', 'Ahorras S/ 80'];
  const subTitle = subTitleTexts[index];
  return (
    <div
      onClick={() => setSelectedItem({ index, title, price, subTitle })}
      className={
        isCheck ? 'pricebox-container-check' : 'pricebox-container-uncheck'
      }
    >
      {isCheck ? (
        <img src={checkIcon} alt='check-icon' className='check-icon' />
      ) : (
        <img src={unCheckIcon} alt='uncheck-icon' className='check-icon' />
      )}
      <p className='pricebox-title margin-top-32 margin-bottom-0'>{title}</p>
      <p className='pricebox-price margin-top-8 margin-bottom-0'>
        <span className='badge'>S/</span>
        {price}
      </p>
      <p className='pricebox-subtitle margin-top-4 margin-bottom-0'>
        {subTitle}
      </p>
    </div>
  );
};

export default PriceBox;
