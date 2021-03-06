import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import PrivateSettings from "./PrivateSettings";
import FullPost from "./FullPost";
import Main from "./Main";
import UserPostsPage from "./UserPostsPage";
import RecommendedUserPostsPage from "./RecommendedUserPostsPage";
import TrendingPostsPage from "./TrendingPostsPage";
import NewPost from "./NewPost";
import Header from "../components/Header";
import NotFoundPage from "./NotFoundPage";
import { Grid } from "@material-ui/core";
import ClippedDrawer from "../components/ClippedDrawer";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  content: {
    position: "center",
  },
});

const router = (isAuth) => (
  <Switch>
    <Route exact path="/">
      <Main />
    </Route>
    <Route exact path="/user-posts">
      <UserPostsPage />
    </Route>
    <Route exact path="/recommended-posts">
      <RecommendedUserPostsPage />
    </Route>
    <Route exact path="/trending-posts">
      <TrendingPostsPage />
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
    <Route render={() => <NotFoundPage />} />
  </Switch>
);

const LoggedInPages = () => {
  const classes = useStyles();
  const { isAuth } = useSelector((state) => state.auth);

  return (
    <React.Fragment>
      <Grid item style={{ display: "flex" }}>
        <Header />
        <ClippedDrawer />
      </Grid>
      <Grid item container className={classes.cotent}>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          {router(isAuth)}
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </React.Fragment>
  );
};

export default LoggedInPages;
