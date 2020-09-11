import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

import Core from 'core/Core';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Core} />
    </Switch>
  );
}

export default App;
