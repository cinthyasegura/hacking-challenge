import React, { useState, useEffect } from 'react';
import { getPaymentMethod } from '../../../../api/reads';
import PriceBox from './PriceBox';
import '../Payment.scss';

const PriceGroup = ({ getSelectedData, insuredPeopleCount = 1 }) => {
  const [paymentMethodsData, setPaymentMethodData] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  // getSelectedData({selectedItem})

  useEffect(() => {
    async function setPaymentData() {
      try {
        const result = await getPaymentMethod();
        setPaymentMethodData(result.data);
      } catch (error) {
        console.warn(error);
      }
    }
    setPaymentData();
  }, []);

  return (
    <div className='price-group-container margin-top-32'>
      {paymentMethodsData.map((paymentMethodData, i) => (
        <PriceBox
          key={i}
          index={i}
          isCheck={i === selectedItem.index}
          title={paymentMethodData.tipo}
          price={paymentMethodData.costo * insuredPeopleCount}
          setSelectedItem={setSelectedItem}
        />
      ))}
    </div>
  );
};

export default PriceGroup;
