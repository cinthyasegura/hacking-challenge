import React from 'react';
import logo from '../../assets/logo.svg';
import illustration from '../../assets/illustration.svg';

const LeftSide = () => {
  return (
    <aside className='aside'>
      <header className='header'>
        <img src={logo} alt='logo' className='logo' />
        <hr className='line' />
      </header>
      <div className='girl-image'>
        <img src={illustration} alt='niña en patineta' />
      </div>
    </aside>
  );
};

export default LeftSide;
