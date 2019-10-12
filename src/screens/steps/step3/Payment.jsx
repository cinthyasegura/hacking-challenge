import React from 'react';
import LeftSide from '../../../shared/components/LeftSide';
import PriceBox from './components/PriceBox';

const Payment = () => {
  return (
    <div>
      <div className='wrapper'>
        <LeftSide />
        <div className='form-align-left'>
          <p className='form-steps'>
            <span className='primary-color'>PASO 3</span> DE 4
          </p>
          <p className='title-form margin-top-64 margin-bottom-0'>
            Elige el <span className='primary-color'>pago ideal</span>
          </p>
          <p className='subtitle-form-text margin-top-16 margin-bottom-0'>
            Decide entre 12 pagos mensuales o sólo una cuota al año.
          </p>
          <PriceBox title='pago mensual' price='40' subTitle='por 12 meses' />
        </div>
      </div>
    </div>
  );
};

export default Payment;
