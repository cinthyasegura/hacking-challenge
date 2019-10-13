import React, { useState, useEffect } from 'react';
import LeftSide from '../../../shared/components/LeftSide';
import PriceGroup from './components/PriceGroup';
import Steps from '../../../shared/components/Steps';
import { getPaymentMethod } from '../../../api/reads';
import './Payment.scss';
import { DataConsumer } from '../../../context/Context';
import InsuredsResume from './components/InsuredsResume';
import Input from '../../../shared/ui/Input';

const Payment = () => {
  const [paymentMethodsData, setPaymentMethodData] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const [isDetailSelected, setIsDetailSelected] = useState(false);
  // getSelectedData({selectedItem})

  useEffect(() => {
    async function setPaymentData() {
      try {
        const result = await getPaymentMethod();
        setPaymentMethodData(result.data);
      } catch (error) {
        console.warn('error', error);
      }
    }
    setPaymentData();
  }, []);

  const setShowDetails = () => setIsDetailSelected(!isDetailSelected);

  console.log(isDetailSelected);

  return (
    <DataConsumer>
      {value => (
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
            <div className='margin-top-24 margin-bottom-0'>
              <PriceGroup
                paymentMethodsData={paymentMethodsData}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
              />
            </div>
            <p className='subtitle-form-h6 margin-top-48'>pago total</p>
            <div className='insurends-form-container-grid'>
              <p className='subtitle-form-text-grid'>{`Por ${value.data.length} asegurados`}</p>
              <p className='link-grid pointer' onClick={setShowDetails}>
                {isDetailSelected ? 'OCULTAR' : 'MOSTRAR'}
              </p>
              <p className='title-form-grid'>
                <span className='subtitle-form-h3-grid'>S/</span>{' '}
                {`${value.data.length * selectedItem.price}`}
              </p>
            </div>
            <hr className='divider margin-top-24 margin-bottom-0' />
            {isDetailSelected && <InsuredsResume />}
            <Input
              type='text'
              placeholder='Ingresa código de dscto.'
              className='input-large'
              name='discountCode'
            />
            <button>APLICAR</button>
          </div>
        </div>
      )}
    </DataConsumer>
  );
};

export default Payment;
