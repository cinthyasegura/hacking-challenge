import React, { useContext } from 'react';
import PriceBox from './PriceBox';
import DataContext, { DataConsumer } from '../../../../context/Context';
import '../Payment.scss';

const PriceGroup = ({
  insuredPeopleCount = 1,
  paymentMethodsData,
  selectedItem,
  setSelectedItem
}) => {
  //   const { data, setData } = useContext(DataContext);
  //   if (data && data.length > 0) {
  return (
    <>
      <DataConsumer>
        {value => (
          <div className='price-group-container margin-top-24'>
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
        {/* {paymentMethodsData === undefined ? (
          <PriceBox
            title='No API data'
            price={0}
            setSelectedItem={setSelectedItem}
          />
        ) : ( */}
        {/* )} */}
      </DataConsumer>
    </>
  );
  //   }
};

export default PriceGroup;
