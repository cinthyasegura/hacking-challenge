import React from 'react';
import { withRouter } from 'react-router-dom';
import back from '../../assets/back.svg';
import '../../App.scss';

const Steps = props => {
  const goBack = () => {
    props.history.goBack();
  };

  return (
    <div className='form-steps pointer' onClick={goBack}>
      <img src={back} alt='atras' />
      <div>
        <span className='primary-color'>{`PASO ${props.actualStep}`}</span> DE 4
      </div>
    </div>
  );
};

export default withRouter(Steps);
