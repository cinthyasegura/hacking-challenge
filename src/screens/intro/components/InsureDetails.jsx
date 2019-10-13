import React from 'react';
import logo from '../../../assets/logo.svg';
import girl from '../../../assets/girl.svg';
import ic_medicine from '../../../assets/ic_medicine.svg';

const InsureDetails = () => {
  return (
    <>
      <aside className='aside'>
        <header className='header'>
          <img src={logo} alt='logo' className='logo' />
          <hr className='line' />
        </header>

        <div className='text'>
          <p className='title'>
            Seguro de accidentes para <b>Niños y Jóvenes</b>
          </p>
          <p className='subtitle'>
            En accidentes <b>los cubrimos al 100%</b> para que se recuperen por
            completo.
          </p>
          <p>
            <img className='icon' src={ic_medicine} alt='maletin' />
            Atención médica y medicinas
          </p>
          <p>
            <img className='icon' src={ic_medicine} alt='maletin' />
            Examenes de laboratorio
          </p>
          <p>
            <img className='icon' src={ic_medicine} alt='maletin' />
            Hospitalización y rehabilitación
          </p>
          <p>
            <img className='icon' src={ic_medicine} alt='maletin' />
            Cirugías y operaciones
          </p>
          <p className='footer'>© 2018 RIMAC Seguros y Reaseguros. </p>
        </div>
      </aside>

      <div className='girl-image-main'>
        <img src={girl} alt='niña' />
      </div>
    </>
  );
};

export default InsureDetails;
