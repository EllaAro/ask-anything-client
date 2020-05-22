import React, { useState, useEffect } from 'react';
import { Grid } from "@material-ui/core";
import NotLoggedInPages from './pages/NotLoggedInPages';
import LoggedInPages from './pages/LoggedInPages';


const logoutHandler = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('expiryDate');
  localStorage.removeItem('userId');
};

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const token = localStorage.getItem('token');
  const expiryDate = localStorage.getItem('expiryDate');
  
  useEffect(() => {
    
    if (!token || !expiryDate) setIsLoggedIn(false)
    if (new Date(expiryDate) <= new Date()) {
      logoutHandler();
      setIsLoggedIn(false);
    }
    else setIsLoggedIn(true);
    // const userId = localStorage.getItem('userId');
    // const remainingMilliseconds =
    //   new Date(expiryDate).getTime() - new Date().getTime();
    // this.setState({ isAuth: true, token: token, userId: userId });
    // this.setAutoLogout(remainingMilliseconds);
  },[token,expiryDate]);
  
  const content = () => isLoggedIn ? <LoggedInPages isLoggedIn={isLoggedIn} /> : <NotLoggedInPages isLoggedIn={isLoggedIn} /> ;
  
  return (
    <Grid container direction="column">
     {content()}
    </Grid>
  );
}

export default App;
