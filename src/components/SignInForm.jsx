import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../shared/components/Input';
import logo from '../assets/logo.svg';
import ic_medicine from '../assets/ic_medicine.svg';
import girl from '../assets/girl.svg';
import CheckBox from '../shared/components/CheckBox';
import { onlyNumbers } from '../utils/regex';

const SignInForm = ({
  requestPermisions,
  dniNumber,
  userName,
  onChange,
  handleCheck,
  goToSteps,
  route,
  errors
}) => {
  return (
    <div className='container'>
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
            <img className='icon' src={ic_medicine} alt='maletin' /> Atención
            médica y medicinas
          </p>
          <p>
            <img className='icon' src={ic_medicine} alt='maletin' /> Examenes de
            laboratorio
          </p>
          <p>
            <img className='icon' src={ic_medicine} alt='maletin' />{' '}
            Hospitalización y rehabilitación
          </p>
          <p>
            <img className='icon' src={ic_medicine} alt='maletin' /> Cirugías y
            operaciones
          </p>
          <p className='footer'>© 2018 RIMAC Seguros y Reaseguros. </p>
        </div>
      </aside>

      <div className='girl-image-main'>
        <img src={girl} alt='niña' />
      </div>

      <div className='form'>
        <main className='form-inputs'>
          <p className='title-form'>
            Protégelos <span className='primary-color'>ahora</span>
          </p>
          <p className='subtitle-form'>Ingresa los datos del titular.</p>

          <div className='input-select-section'>
            <select>
              <option>DNI</option>
            </select>
            <Input
              type='number'
              placeholder='Nro. de Documento'
              pattern={onlyNumbers}
              className='input-select'
              name='dniNumber'
              value={dniNumber}
              onChange={onChange}
              errors={errors.dniNumber && errors.dniNumber[0]}
            />
          </div>
          <Input
            className='input'
            type='text'
            placeholder='Nombre'
            value={userName}
            name='userName'
            onChange={onChange}
            errors={errors.userName && errors.userName[0]}
          />

          <div className='margin-top-checkbox'>
            <CheckBox
              value='Acepto la Política de Protección de Datos Personales y los Términos y Condiciones.'
              checked={requestPermisions}
              onClick={handleCheck}
              disabled={false}
              className='checkbox-cc'
            />
            <CheckBox
              value='Acepto la Política de Envío de Comunicaciones Comerciales.'
              checked={requestPermisions}
              onClick={handleCheck}
              disabled={false}
              className='checkbox-cc'
            />
          </div>

          <Link
            to={{
              pathname: route,
              state: {
                dniNumber,
                userName
              }
            }}
            onClick={() => goToSteps()}
            className='primary-button'
          >
            Comencemos
          </Link>
        </main>
      </div>
    </div>
  );
};
export default SignInForm;
