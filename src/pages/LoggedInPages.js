import React from "react";
import { Switch, Route } from "react-router-dom";
import Profile from "./Profile";
import PrivateSettings from "./PrivateSettings";
import FullPost from "./FullPost";
import Main from "./Main";
import NewPost from "./NewPost";
import Header from "../components/Header";
import { Grid } from "@material-ui/core";

const router = (
  <Switch>
    <Route exact path="/">
      <Main />
    </Route>
    <Route exact path="/account/profile">
      <Profile />
    </Route>
    <Route exact path="/account/private-settings">
      <PrivateSettings />
    </Route>
    <Route exact path="/posts/add-a-post">
      <NewPost />
    </Route>
    <Route
      path="/posts/post/:id"
      render={({ match }) => <FullPost id={match.params.id} />}
    />
  </Switch>
);

const LoggedInPages = () => {
  return (
    <div>
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          {router}
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </div>
  );
};

export default LoggedInPages;
