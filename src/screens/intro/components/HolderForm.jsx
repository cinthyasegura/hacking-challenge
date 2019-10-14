import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../../../shared/ui/Input';
import CheckBox from '../../../shared/ui/CheckBox';

const HolderForm = ({
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
    <div className='form'>
      <main className='form-inputs margin-left-0'>
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
            className='input-select-intro'
            name='dniNumber'
            value={dniNumber}
            onChange={onChange}
            errors={errors.dniNumber && errors.dniNumber[0]}
          />
        </div>
        <Input
          className='input-large-intro'
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
            // pathname: 'step-1',
            state: {
              dniNumber,
              userName
            }
          }}
        >
          <button onClick={() => goToSteps()} className='primary-button'>
            Comencemos
          </button>
        </Link>
      </main>
    </div>
  );
};
export default HolderForm;
