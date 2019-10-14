import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../../../../shared/ui/Input';
import RadioButton from '../../../../shared/ui/RadioButton';
import '../HolderInformation.scss';

const HolderFormInsure = ({
  setIsDisabledInput,
  setRadioButtonChange,
  handleSubmit,
  isDisabled,
  handleChange,
  formErrors,
  dniNumber,
  values,
  isChecked
}) => {
  return (
    <form onSubmit={handleSubmit} className='align-left-flex'>
      <div className='input-select-section margin-top-24'>
        <select className={isDisabled && 'select-disable'}>
          <option>DNI</option>
        </select>
        <Input
          type='number'
          placeholder='Nro. de Documento'
          className={isDisabled ? 'input-select-disable' : 'input-select'}
          name='dniNumber'
          value={isDisabled ? dniNumber : values.dniNumber}
          disabled={isDisabled ? true : false}
        />
      </div>
      <Input
        type='email'
        placeholder='Correo'
        className='input-large'
        name='email'
        value={values.email}
        onChange={handleChange}
        errors={formErrors.email && formErrors.email[0]}
      />
      <span className='subtitle-form-h6 margin-top-32 margin-bottom-0'>
        ¿ESTE SEGURO ES PARA TI?
      </span>
      <RadioButton
        value='No'
        className='radiobutton margin-top-16'
        onChange={setRadioButtonChange}
      />
      <RadioButton
        value='Si'
        className='radiobutton margin-top-12'
        onChange={setRadioButtonChange}
      />
      <div className='bottom'>
        <span
          className='link margin-right-16 pointer'
          onClick={setIsDisabledInput}
        >
          Modificar DNI
        </span>
        <Link
          to={{
            pathname: 'step-2',
            state: {
              email: values.email
            }
          }}
        >
          <button
            type='submit'
            className={
              isChecked
                ? 'primary-button margin-left-16'
                : 'disabled-button margin-left-16'
            }
            disabled={isChecked ? false : true}
          >
            Continuar >
          </button>
        </Link>
      </div>
    </form>
  );
};

export default HolderFormInsure;
