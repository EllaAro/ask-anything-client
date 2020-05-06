import React from 'react';
import PrimarySearchAppBar from './components/PrimarySearchAppBar/PrimarySearchAppBar';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import Profile from './pages/AccountSettings/Profile/Profile';
import PrivateSettings from './pages/AccountSettings/PrivateSettings/PrivateSettings';
import EditPrivateSettings from './components/EditPrivateSettings/EditPrivateSettings'; 
function App() {
  return (
    <div >
      <Router>
        <PrimarySearchAppBar />

        <Switch>
          <Route exact path='/account/profile'>
                <Profile />
          </Route>
          <Route exact path='/account/private-settings'>
                <PrivateSettings />
          </Route>
          <Route exact path='/account/edit-private-settings'>
              <EditPrivateSettings />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
