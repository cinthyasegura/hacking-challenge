import React from 'react';
import { Route } from 'react-router-dom';
import InsureInformation from '../../screens/InsureInformation';

import HolderInformation from '../../screens/HolderInformation';

const Navigation = () => (
  <>
    <Route exact path='/' component={InsureInformation} />
    <Route path='/information' component={HolderInformation} />
  </>
);

export default Navigation;
