import React, { useState, useEffect } from 'react';
import LeftSide from '../../../shared/components/LeftSide';
import PriceGroup from './components/PriceGroup';
import Steps from '../../../shared/components/Steps';
import { getPaymentMethod, getPromCodes } from '../../../api/reads';
import './Payment.scss';
import { useTargetValueFormInput } from '../../../utils/customHooks/customHooks';
import { regexMap } from '../../../utils/validation/regex';
import PaymentForm from './components/PaymentForm';
import PaymentDetail from './components/PaymentDetail';

const Payment = props => {
  const [paymentMethodsData, setPaymentMethodData] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const [isDetailSelected, setIsDetailSelected] = useState(false);
  const [promCodesData, setPromCodesData] = useState([]);
  const [cardType, setCardType] = useState('');

  const { values, handleChange } = useTargetValueFormInput();
  const { email } = props.location.state;

  useEffect(() => {
    async function setPaymentData() {
      try {
        const result = await getPaymentMethod();
        setPaymentMethodData(result.data);
        await setPromCodes(values.discountCode);
      } catch (error) {
        console.warn('error', error);
      }
    }

    setPaymentData();
  }, [values]);

  const setPayCardType = () => {
    if (values && values.creditCard) {
      return regexMap.map((regexs, i, regexMap) => {
        if (values.creditCard.match(regexMap[i].regEx)) {
          console.log(values.creditCard);
          console.log(regexMap[i].regEx);

          return setCardType(regexMap[i].cardType);
        }
      });
    }
    console.log('here');
    console.log(cardType, 'cardtype');
  };

  const setShowDetails = () => setIsDetailSelected(!isDetailSelected);

  const setPromCodes = async code => {
    try {
      const promo = await getPromCodes(code);
      setPromCodesData(promo.data);
    } catch (error) {
      return error;
    }
  };

  const price = data =>
    Object.keys(selectedItem).length === 0
      ? '0'
      : promCodesData !== undefined
      ? `${data.length * selectedItem.price * (1 - promCodesData.valor / 100)} `
      : `${data.length * selectedItem.price}`;

  // const handleCouponDiscount = () => {
  //   if (values.discountCode && promCodesData) {
  //     return `Genial tienes ${promCodesData.valor}% dscto extra.`;
  //   }
  // };

  // console.log(handleCouponDiscount());
  // const value = {};

  // const handleSUbmit = () => {
  //   setPayCardType()
  // }

  return (
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
        <PaymentDetail
          selectedItem={selectedItem}
          setShowDetails={setShowDetails}
          isDetailSelected={isDetailSelected}
          price={price}
          promCodesData={promCodesData}
          values={values}
          handleChange={handleChange}
        />

        <PaymentForm
          handleChange={handleChange}
          price={price}
          values={values}
          setPayCardType={setPayCardType}
          email={email}
        />
      </div>
    </div>
  );
};

export default Payment;
