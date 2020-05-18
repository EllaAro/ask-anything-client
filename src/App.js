import React, {useState} from 'react';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import PrivateSettings from './pages/PrivateSettings';
import FullPost from './pages/FullPost';
import Main from './pages/Main';
import NewPost from './pages/NewPost';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { Grid } from "@material-ui/core";

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const router = (
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route exact path='/account/profile'>
          <Profile />
        </Route>
        <Route exact path='/account/private-settings'>
          <PrivateSettings />
        </Route>
        <Route exact path='/posts/add-a-post'>
          <NewPost />
        </Route>
        <Route path='/posts/post/:id' render={({match}) => (
          <FullPost
            id={match.params.id}
            />
        )}/>
      </Switch>
  )

  const loggedUserPages = () => (
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
  )

  const notLoggedInPages = () => (
    <Switch>
      <Route exact path='/'>
        <SignIn />
      </Route>
      <Route exact path='/sign-up'>
        <SignUp />
      </Route>
    </Switch>
    )

  const content = () => {
    if ( isLoggedIn ) return loggedUserPages();
    return notLoggedInPages();
  }


  return (
    <Grid container direction="column">
     {content()}
    </Grid>
  );
}

export default App;
