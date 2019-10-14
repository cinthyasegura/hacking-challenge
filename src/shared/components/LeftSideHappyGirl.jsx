import React from 'react';
import logo from '../../assets/logo.svg';
import happygirl from '../../assets/happygirl.svg';

const LeftSideHappyGirl = () => {
  return (
    <aside className='aside'>
      <header className='header'>
        <img src={logo} alt='logo' className='logo' />
        <hr className='line' />
      </header>
      <div className='girl-image'>
        <img src={happygirl} alt='niña en patineta' />
      </div>
    </aside>
  );
};

export default LeftSideHappyGirl;
