import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';

import Main from './components/Main';

render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}>

    </Route>
  </Router>,
  document.getElementById('app')
);
