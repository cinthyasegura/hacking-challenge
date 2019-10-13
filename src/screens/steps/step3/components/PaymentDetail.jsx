import React from 'react';
import { DataConsumer } from '../../../../context/Context';
import InsuredsResume from './InsuredsResume';
import Input from '../../../../shared/ui/Input';
import ok from '../../../../assets/ok.svg';

const PaymentDetail = ({
  selectedItem,
  setShowDetails,
  isDetailSelected,
  price,
  values,
  handleChange,
  promCodesData
}) => {
  return (
    <DataConsumer>
      {value => (
        <>
          <p className='subtitle-form-h6 margin-top-48'>pago total</p>
          <div className='insurends-form-container-grid'>
            <p className='subtitle-form-text-grid'>
              {Object.keys(selectedItem).length <= 1
                ? `Por ${value.data.length} asegurado`
                : `Por ${value.data.length} asegurados`}
            </p>
            <p className='link-grid pointer' onClick={setShowDetails}>
              {isDetailSelected ? 'OCULTAR' : 'MOSTRAR'}
            </p>
            <span className='title-form-grid'>
              <span className='subtitle-form-h3-grid'>S/</span>{' '}
              {price(value.data)}
            </span>
          </div>
          <hr className='divider margin-top-24 margin-bottom-0' />
          {isDetailSelected && <InsuredsResume />}
          {promCodesData !== undefined ? (
            <div className='redeem-cupon'>
              <img src={ok} alt='check' />
              <p className='cupon-selected'>{`Genial tienes ${promCodesData.valor}% dscto extra.`}</p>
            </div>
          ) : (
            <div className='border margin-top-16'>
              <Input
                type='text'
                placeholder='Ingresa código de dscto.'
                className=' no-border'
                name='discountCode'
                value={values.discCountCode}
                onChange={handleChange}
              />
              <button
                className='apply-btn'
                // onClick={() => {
                //   handleCouponDiscount();
                // }}
              >
                APLICAR
              </button>
            </div>
          )}
        </>
      )}
    </DataConsumer>
  );
};

export default PaymentDetail;
