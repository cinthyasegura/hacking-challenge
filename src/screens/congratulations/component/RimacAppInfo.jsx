import React from 'react';
import illustrationApp from '../../../assets/illustrationApp.svg';
import '../../../App.scss';

const RimacAppInfo = () => {
  return (
    <div className='border-outline margin-top-16'>
      <div className='lato-style'>
        <p className='padding-center margin-bottom-0'>
          Usa nuestra <b className='primary-color'>RIMAC APP</b>
        </p>
        <p className='padding-center'>
          Descarga nuestra APP, crea tu usuario y cuenta con todas las
          coberturas.
        </p>
      </div>
      <img
        src={illustrationApp}
        alt='persona con celular'
        className='margin-right-16'
      />
    </div>
  );
};

export default RimacAppInfo;
