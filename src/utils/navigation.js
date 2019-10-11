import React from 'react';
import { Route } from 'react-router-dom';
import InsureInformation from '../screens/intro/InsureInformation';
import HolderInformation from '../screens/steps/step1/HolderInformation';
import Insureds from '../screens/steps/step3/Insureds';

const Navigation = () => (
  <>
    <Route exact path='/' component={InsureInformation} />
    <Route path='/information' component={HolderInformation} />
    <Route path='/step-2' component={Insureds} />
  </>
);

export default Navigation;
