import React from 'react';
import PriceBox from './PriceBox';
import { DataConsumer } from '../../../../context/Context';
import '../Payment.scss';

const PriceGroup = ({ paymentMethodsData, selectedItem, setSelectedItem }) => {
  return (
    <DataConsumer>
      {value => (
        <div className='price-group-container margin-top-4'>
          {paymentMethodsData.map((paymentMethod, i) => (
            <PriceBox
              key={i}
              index={i}
              isCheck={i === selectedItem.index}
              title={paymentMethod.tipo}
              price={paymentMethod.costo}
              setSelectedItem={setSelectedItem}
            />
          ))}
        </div>
      )}
    </DataConsumer>
  );
};

export default PriceGroup;
