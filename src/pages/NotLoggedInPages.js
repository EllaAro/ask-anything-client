import React from "react";
import { Switch, Route } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const NotLoggedInPages = () => (
  <React.Fragment>
    <Switch>
      <Route exact path="/">
        <SignIn />
      </Route>
      <Route exact path="/sign-up">
        <SignUp />
      </Route>
      <Route render={() => <SignIn />} />
    </Switch>
  </React.Fragment>
);

export default NotLoggedInPages;
