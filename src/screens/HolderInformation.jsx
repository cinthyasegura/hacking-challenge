import React from 'react';
import illustration from '../assets/illustration.svg';
import logo from '../assets/logo.svg';

import './HolderInformation.css';

const HolderInformation = () => {
  return (
    <div className='wrapper'>
      <aside className='aside'>
        <header className='header'>
          <img src={logo} alt='logo' className='logo' />
          <hr className='line' />
        </header>
        <div className='girl-image'>
          <img src={illustration} alt='niña en patineta' />
        </div>
      </aside>
      <div>
        <p> PASO 1 DE 4 </p>
        <p>Hola Eva, cuéntanos sobre ti</p>
        <p>Podrás protegerlos por solo S/20 al mes por asegurado</p>
        <p>Datos del titular</p>
        <p>¿ESTE SEGURO ES PARA TI?</p>
      </div>
    </div>
  );
};
export default HolderInformation;
