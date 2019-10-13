import React from 'react';
import Input from '../../../../shared/ui/Input';
import { DataConsumer } from '../../../../context/Context';

const PaymentForm = ({ handleChange, price, values, setPayCardType }) => {
  return (
    <DataConsumer>
      {value => (
        <>
          <p>Ahora ingresa los datos de tu tarjeta.</p>
          <div className='grid-payment-form'>
            {/* <div className=' titular-name'></div> */}
            {/* <div className=' cc'> */}
            <Input
              type='text'
              placeholder='Número de tarjeta'
              // className=' no-border'
              name='creditCard'
              value={values.creditCard}
              onChange={handleChange}
            />
            {/* </div> */}
            {/* <div className=' expire'></div>
          <div className=' cvv'></div>
          <div className=' email'></div> */}
            <button onClick={setPayCardType}>
              {`Pagar S/ ${price(value.data)}`}
            </button>
          </div>

          {/* <CheckBox />
      <CheckBox /> */}
        </>
      )}
    </DataConsumer>
  );
};

export default PaymentForm;
