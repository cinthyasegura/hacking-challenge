import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../../../../shared/ui/Input';
import { DataConsumer } from '../../../../context/Context';

const PaymentForm = ({
  handleChange,
  price,
  values,
  setPayCardType,
  email
}) => {
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
            <Link
              to={{
                pathname: 'congratulations',
                state: {
                  email
                }
              }}
            >
              <button onClick={setPayCardType}>
                {`Pagar S/ ${price(value.data)}`}
              </button>
            </Link>
          </div>

          {/* <CheckBox />
      <CheckBox /> */}
        </>
      )}
    </DataConsumer>
  );
};

export default PaymentForm;
