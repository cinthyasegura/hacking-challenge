import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../../../../shared/ui/Input';
import { DataConsumer } from '../../../../context/Context';
import visa from '../../../../assets/visa.svg';
import visaBlue from '../../../../assets/visa-blue.svg';
import questionMark from '../../../../assets/questionMark.svg';
import CheckBox from '../../../../shared/ui/CheckBox';

const PaymentForm = ({ handleChange, price, values }) => {
  const onFocus = e => {
    e.currentTarget.type = 'date';
  };

  const onBlur = e => {
    e.currentTarget.type = 'text';
    e.currentTarget.placeholder = 'Fecha de nacimiento';
  };

  return (
    <DataConsumer>
      {value => (
        <>
          <p className='margin-top-32 ft-20 margin-bottom-0 '>
            Ahora ingresa los datos de tu tarjeta.
          </p>
          <div className='grid-payment-form margin-top-24'>
            <div className='grid-input-spacer grid-title-row grid-start-column'></div>
            <div className='grid-title-row grid-center-column'>
              <Input
                type='text'
                placeholder='Nombre del titular'
                name='titularName'
                className='no-border grid-input-large'
                value={values.titularName}
                onChange={handleChange}
              />
            </div>
            <div className='grid-icon grid-title-row grid-end-column'>
              <img src={visa} alt='visa' />
            </div>

            <div className='grid-input-spacer grid-card-row grid-start-column'></div>
            <div className='grid-card-row grid-center-column'>
              <Input
                type='number'
                placeholder='Número de tarjeta'
                name='creditCard'
                className='no-border grid-input-large'
                value={values.creditCard}
                onChange={handleChange}
              />
            </div>
            <div className='grid-icon grid-card-row grid-end-column'>
              <img src={visaBlue} alt='visaBlue' />
            </div>

            <div className='grid-input-spacer grid-dateCvv-row grid-start-column'></div>
            <div className='grid-dateCvv-row grid-center-column'>
              <div className='display-flex-row'>
                <Input
                  type='text'
                  placeholder='Fecha de nacimiento'
                  name='birthdate'
                  className='no-border grid-input-medium'
                  value={values.birthdate}
                  onChange={handleChange}
                  onFocus={e => onFocus(e)}
                  onBlur={e => onBlur(e)}
                />
                <div className='grid-input-spacer'></div>
                <Input
                  type='number'
                  placeholder='CVV'
                  name='cvv'
                  className='no-border grid-input-small'
                  value={values.cvv}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='grid-icon grid-dateCvv-row grid-end-column'>
              <img
                src={questionMark}
                alt='questionMark'
                className='margin-left-10'
              />
            </div>

            <div className='grid-input-spacer grid-email-row grid-start-column'></div>
            <div className='grid-email-row grid-center-column'>
              <Input
                type='text'
                placeholder='Correo electrónico'
                name='email'
                className='no-border grid-input-large'
                value={values.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className='margin-top-checkbox'>
            <CheckBox
              value='Autorizo el cargo de mi cuota a la tarjeta registrada como cargo recurrente.'
              className='margin-top-12 ft-12'
            />
            <CheckBox
              value='Acepto las políticas de envío de la póliza electrónica.'
              className='margin-top-24 ft-12'
            />
          </div>
          <div className='button-right'>
            <Link
              to={{
                pathname: 'congratulations',
                state: { email: values.email }
              }}
            >
              <button className='primary-button'>
                {`Pagar S/ ${price(value.data)}`}
              </button>
            </Link>
          </div>
        </>
      )}
    </DataConsumer>
  );
};

export default PaymentForm;
