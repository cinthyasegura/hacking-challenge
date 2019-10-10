import React from 'react';
import logo from '../../assets/logo.svg';

const Aside = () => {
  return (
    <aside className='aside'>
      <header className='header'>
        <img src={logo} alt='logo' className='logo' />
        <hr className='line' />
      </header>
    </aside>
  );
};

export default Aside;
