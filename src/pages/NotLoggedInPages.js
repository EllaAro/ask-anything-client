import React from 'react'
import { Switch, Route } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';

const NotLoggedInPages = () =>  (
    <Switch>
      <Route exact path='/'>
        <SignIn />
      </Route>
      <Route exact path='/sign-up'>
        <SignUp />
      </Route>
    </Switch>
)

export default NotLoggedInPages;