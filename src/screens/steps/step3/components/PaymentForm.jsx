import React from 'react';
import Input from '../../../../shared/ui/Input';
import { DataConsumer } from '../../../../context/Context';
import visa from '../../../../assets/visa.svg';
import visaBlue from '../../../../assets/visa-blue.svg';
import questionMark from '../../../../assets/questionMark.svg';
import CheckBox from '../../../../shared/ui/CheckBox';

const PaymentForm = ({ handleChange, price, values, setPayCardType }) => {
  return (
    <DataConsumer>
      {value => (
        <>
          <p>Ahora ingresa los datos de tu tarjeta.</p>
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
                type='text'
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
                  name='creditCard'
                  className='no-border grid-input-medium'
                  value={values.creditCard}
                  onChange={handleChange}
                />
                <div className='grid-input-spacer'></div>
                <Input
                  type='text'
                  placeholder='CVV'
                  name='creditCard'
                  className='no-border grid-input-small'
                  value={values.creditCard}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='grid-icon grid-dateCvv-row grid-end-column'>
              <img src={questionMark} alt='questionMark' />
            </div>

            <div className='grid-input-spacer grid-email-row grid-start-column'></div>
            <div className='grid-email-row grid-center-column'>
              <Input
                type='text'
                placeholder='Correo electrónico'
                name='creditCard'
                className='no-border grid-input-large'
                value={values.creditCard}
                onChange={handleChange}
              />
            </div>
          </div>

          <CheckBox
            value='Autorizo el cargo de mi cuota a la tarjeta registrada como cargo recurrente.'
            className='margin-top-24'
          />
          <CheckBox
            value='Acepto las políticas de envío de la póliza electrónica.'
            className='margin-top-24'
          />

          <button onClick={setPayCardType}>
            {`Pagar S/ ${price(value.data)}`}
          </button>
        </>
      )}
    </DataConsumer>
  );
};

export default PaymentForm;
