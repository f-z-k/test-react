
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import App from './../containers/App'
const Routes = () => (
  <Router basename="/project2">
    <Switch>
      <Route path="/test" component={ App }/>
    </Switch>
  </Router>
);

export default Routes;