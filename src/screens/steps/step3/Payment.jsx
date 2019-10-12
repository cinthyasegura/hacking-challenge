import React from 'react';
import LeftSide from '../../../shared/components/LeftSide';
import PriceGroup from './components/PriceGroup';
import Steps from '../../../shared/components/Steps';

const Payment = () => {
  return (
    <div>
      <div className='wrapper'>
        <LeftSide />
        <div className='form-align-left'>
          <Steps actualStep={3} />
          <p className='title-form margin-top-64 margin-bottom-0'>
            Elige el <span className='primary-color'>pago ideal</span>
          </p>
          <p className='subtitle-form-text margin-top-16 margin-bottom-0'>
            Decide entre 12 pagos mensuales o sólo una cuota al año.
          </p>
          <hr className='divider margin-top-32 margin-bottom-0' />
          <PriceGroup />
        </div>
      </div>
    </div>
  );
};

export default Payment;
