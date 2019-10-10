import React from 'react';

import './HolderInformation.scss';
import LeftSide from '../shared/screens/LeftSide';
import Input from '../shared/components/Input';

const HolderInformation = () => {
  return (
    <div className='wrapper'>
      <LeftSide />
      <div className='form'>
        <p> PASO 1 DE 4 </p>
        <p>Hola Eva, cuéntanos sobre ti</p>
        <p>Podrás protegerlos por solo S/20 al mes por asegurado</p>
        <p>Datos del titular</p>
        <Input disabled type='number' />
        <p>¿ESTE SEGURO ES PARA TI?</p>
      </div>
    </div>
  );
};
export default HolderInformation;
