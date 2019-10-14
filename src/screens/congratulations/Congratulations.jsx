import React from 'react';
import { Link } from 'react-router-dom';
import LeftSideHappyGirl from '../../shared/components/LeftSideHappyGirl';
import RimacAppInfo from './component/RimacAppInfo';
import './Congratulations.scss';

const Congratulations = props => {
  const { email } = props.location.state;

  return (
    <div className='wrapper'>
      <LeftSideHappyGirl />
      <div className='form-align-left'>
        <p className='final-title-red margin-top-64 margin-bottom-0'>
          ¡Felicidades!
        </p>
        <p className='final-title margin-top-8 margin-bottom-0'>
          Tus seres queridos ahora se encuentran protegidos
        </p>
        <p className='texto'>
          Descarga tu póliza llegará que en un máximo de 24 horas al correo{' '}
          <b>{email}</b>
        </p>
        <p className='purple-link'>Conoce más sobre tu seguro</p>

        <RimacAppInfo />
        <Link to='/'>
          <button className='primary-button'>IR AL HOME ></button>
        </Link>
      </div>
    </div>
  );
};

export default Congratulations;
