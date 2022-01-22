import React from 'react';
import { Redirect, Switch, Route } from 'react-router';

import LogIn from '@pages/LogIn';
import SignUp from '@pages/SignUp';
import Channel from '@pages/Channel';

function App() {
  return (
    <Switch>
      <Redirect exact path="/" to="/login" />
      <Route path="/login" component={LogIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/workspace/channel" component={Channel} />
    </Switch>
  );
}

export default App;
