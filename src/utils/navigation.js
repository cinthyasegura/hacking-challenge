import React from 'react';
import { Route } from 'react-router-dom';
import Intro from '../screens/intro/Intro';
import HolderInformation from '../screens/steps/step1/HolderInformation';
import Insureds from '../screens/steps/step2/Insureds';
import Payment from '../screens/steps/step3/Payment';
import Congratulations from '../screens/congratulations/Congratulations';

const Navigation = () => (
  <>
    <Route exact path='/' component={Intro} />
    <Route path='/step-1' component={HolderInformation} />
    <Route path='/step-2' component={Insureds} />
    <Route path='/step-3' component={Payment} />
    <Route path='/congratulations' component={Congratulations} />
  </>
);

export default Navigation;
