import React, { useContext } from 'react';
import PriceBox from './PriceBox';
import DataContext, { DataConsumer } from '../../../../context/Context';
import '../Payment.scss';

const PriceGroup = ({ paymentMethodsData, selectedItem, setSelectedItem }) => {
  return (
    // <p>no data</p>

    <DataConsumer>
      {value => (
        <div className='price-group-container margin-top-4'>
          {paymentMethodsData.map((paymentMethod, i) => (
            <PriceBox
              key={i}
              index={i}
              isCheck={i === selectedItem.index}
              title={paymentMethod.tipo}
              price={paymentMethod.costo * value.data.length}
              setSelectedItem={setSelectedItem}
            />
          ))}
        </div>
      )}
    </DataConsumer>
  );
};

export default PriceGroup;
