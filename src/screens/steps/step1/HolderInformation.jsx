import React, { useState } from 'react';
import './HolderInformation.scss';
import LeftSide from '../../../shared/components/LeftSide';
import Steps from '../../../shared/components/Steps';
import { validation } from '../../../utils/validation/validation';
import { useSubmitFormInput } from '../../../utils/customHooks/customHooks';
import { constraints } from '../../../utils/validation/constraints';
import HolderFormInsure from './components/HolderFormInsure';

const HolderInformation = props => {
  const [isChecked, setIsChecked] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [formErrors, setFormErrors] = useState({ email: '' });

  const { values, handleChange, handleSubmit } = useSubmitFormInput(
    handleOnClick
  );
  const { dniNumber, userName } = props.location.state;

  function handleOnClick() {
    const errors = validation(
      { email: values.email },
      { email: constraints.email },
      formErrors
    );
    if (errors !== undefined) {
      setFormErrors(errors);
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
        <HolderFormInsure
          setIsDisabledInput={setIsDisabledInput}
          setRadioButtonChange={setRadioButtonChange}
          handleSubmit={handleSubmit}
          isDisabled={isDisabled}
          handleChange={handleChange}
          formErrors={formErrors}
          values={values}
          dniNumber={dniNumber}
          isChecked={isChecked}
        />
      </div>
    </div>
  );
};
export default HolderInformation;
