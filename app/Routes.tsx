import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import PendantPage from './containers/PendantPage';
import ProgramPage from './containers/ProgramPage';

export default function Routes() {
  return (
    <App>
      <Switch>
        <Route exact path={routes.COUNTER} component={CounterPage} />
        <Route exact path={routes.HOME} component={HomePage} />
        <Route exact path={routes.PENDANT} component={PendantPage} />
        <Route exact path={routes.PROGRAM} component={ProgramPage} />
      </Switch>
    </App>
  );
}
