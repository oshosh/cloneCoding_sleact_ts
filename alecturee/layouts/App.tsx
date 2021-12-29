import React from 'react';
import { Redirect, Switch, Route } from 'react-router';

import LogIn from '@pages/LogIn';
import SignUp from '@pages/SignUp';

function App() {
  return (
    <Switch>
      <Redirect exact path="/" to="/login" />
      <Route path="/login" component={LogIn} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  );
}

export default App;
