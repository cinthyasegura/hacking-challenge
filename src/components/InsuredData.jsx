import React from 'react';
import { Link } from 'react-router-dom';
import '../views/step2/InsuredData.scss';
import Input from '../shared/components/Input';
import RadioButton from '../shared/components/RadioButton';

const InsuredData = () => {
  const onFocus = e => {
    e.currentTarget.type = 'date';
  };

  const onBlur = e => {
    e.currentTarget.type = 'text';
    e.currentTarget.placeholder = 'Fecha de nacimiento';
  };

  return (
    <div >
      <hr className='divider margin-top-32 margin-bottom-0' />
      <div className='insured-count-wrapper margin-top-24 margin-bottom-0'>
        <p className='subtitle-form-h6 margin-top-0 margin-bottom-0'>
          ASEGURADOS (XX)
        </p>
        <Link className='link margin-top-0 margin-bottom-0'>VER TODOS</Link>
      </div>
      <hr className='divider margin-top-24 margin-bottom-0' />
      <p className='subtitle-form-h3 margin-top-32 margin-bottom-0'>
        Datos del asegurado NºX
      </p>
      <div /* className='input-select-section margin-top-24' */>
        <select className='select'>
          <option>DNI</option>
        </select>
        <Input
          type='number'
          placeholder='Nro. de Documento'
          className='input-select-large'
          name='dniNumber'
        />
      </div>
      <Input
        type='text'
        placeholder='Nombres'
        className='large-input'
      />
      <Input
        type='text'
        placeholder='Apellidos Paternos'
        className='large-input'
      />
      <Input
        type='text'
        placeholder='Apellidos Maternos'
        className='large-input'
      />
      <Input
        type='text'
        placeholder='Fecha de nacimiento'
        className='large-input'
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <p className='subtitle-form-h6 margin-top-32 margin-bottom-0'>GÉNERO</p>
      <RadioButton value='Masculino' className='radiobutton margin-top-24' />
      <RadioButton value='Femenino' className='radiobutton margin-top-16' />
    </div>
  );
};

export default InsuredData;
