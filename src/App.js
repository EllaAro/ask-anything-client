import React from 'react';
import PrimarySearchAppBar from './components/PrimarySearchAppBar/PrimarySearchAppBar';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import Profile from './pages/AccountSettings/Profile/Profile';
import PrivateSettings from './pages/AccountSettings/PrivateSettings/PrivateSettings';
import FullPost from './pages/FullPost/FullPost';
import Main from './pages/Main/Main';
import NewPost from './pages/NewPost/NewPost'

const App = () => {
  return (
    <div >
      <Router>
        <PrimarySearchAppBar />
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
      </Router>
    </div>
  );
}

export default App;
