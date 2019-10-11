import React from 'react';
import { Route } from 'react-router-dom';
import InsureInformation from '../views/intro/InsureInformation';
import HolderInformation from '../views/HolderInformation';
import Insureds from '../views/Insureds';

const Navigation = () => (
  <>
    <Route exact path='/' component={InsureInformation} />
    <Route path='/information' component={HolderInformation} />
    <Route path='/step-2' component={Insureds} />
  </>
);

export default Navigation;
