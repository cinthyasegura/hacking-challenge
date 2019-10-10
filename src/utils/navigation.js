import React from 'react';
import { Route } from 'react-router-dom';
import InsureInformation from '../views/InsureInformation';

import HolderInformation from '../views/HolderInformation';

const Navigation = () => (
  <>
    <Route exact path='/' component={InsureInformation} />
    <Route path='/information' component={HolderInformation} />
  </>
);

export default Navigation;
