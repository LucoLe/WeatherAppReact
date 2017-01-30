import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Main from './components/Main';
import Weather from './components/Weather';
import About from './components/About';
import Examples from './components/Examples';

export default (
  <Route path="/" component={Main}>
    <IndexRoute component={Weather} />
    <Route path="about" component={About} />
    <Route path="examples" component={Examples} />
  </Route>
);
