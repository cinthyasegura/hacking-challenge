import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HolderInformation.scss';
import LeftSide from '../../../shared/components/LeftSide';
import Input from '../../../shared/ui/Input';
import RadioButton from '../../../shared/ui/RadioButton';
import Steps from '../../../shared/components/Steps';
import { validation } from '../../../utils/validation/validation';
import { useFormInput } from '../../../shared/customHooks/UseFormInput';
import { constraints } from '../../../utils/validation/constraints';

const HolderInformation = props => {
  const [isChecked, setIsChecked] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [formErrors, setFormErrors] = useState({ email: '' });
  const [route, setRoute] = useState('/information');

  const { values, handleChange, handleSubmit } = useFormInput(handleOnClick);
  const { dniNumber, userName } = props.location.state;

  function handleOnClick() {
    const errors = validation(
      { email: values.email },
      { email: constraints.email },
      formErrors
    );
    if (errors !== undefined) {
      setFormErrors(errors);
    } else {
      setRoute('/step-2');
    }
  }

  const setRadioButtonChange = () => setIsChecked(true);

  const setIsDisabledInput = () => setIsDisabled(!isDisabled);

  return (
    <div className='wrapper'>
      <LeftSide />
      <div className='form-align-left'>
        <Steps actualStep={1} />
        <p className='title-form margin-top-64 margin-bottom-0'>
          Hola{' '}
          <span className='primary-color'>{`${userName
            .charAt(0)
            .toUpperCase()}${userName.slice(1)},`}</span>
        </p>
        <p className='title-form margin-top-0 margin-bottom-0'>
          cuéntanos sobre ti
        </p>
        <p className='subtitle-form-1 margin-top-24 margin-bottom-0'>
          Podrás protegerlos
          <span className='bold h3'> por solo S/20 al mes</span> por asegurado
        </p>
        <p className='subtitle-form-2 margin-top-16 margin-bottom-0'>
          Datos del titular
        </p>

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
              value={dniNumber}
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
              to='step-2'
              // to={{
              //   pathname: route,
              //   state: {
              //     dniNumber,
              //     userName
              //   }
              // }}
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
      </div>
    </div>
  );
};
export default HolderInformation;
