import React from 'react';
import { Redirect, Switch, Route } from 'react-router';

import LogIn from '@pages/LogIn';
import SignUp from '@pages/SignUp';
import Workspace from '@layouts/Workspace';

function App() {
  return (
    <Switch>
      <Redirect exact path="/" to="/login" />
      <Route path="/login" component={LogIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/workspace" component={Workspace} />
    </Switch>
  );
}

export default App;
