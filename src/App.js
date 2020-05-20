import React, { useState, useEffect } from 'react';
import { Grid } from "@material-ui/core";
import NotLoggedInPages from './pages/NotLoggedInPages';
import LoggedInPages from './pages/LoggedInPages';


// const logoutHandler = () => {
//   localStorage.removeItem('token');
//   localStorage.removeItem('expiryDate');
//   localStorage.removeItem('userId');
// };

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // useEffect(() => {

  //   const token = localStorage.getItem('token');
  //   const expiryDate = localStorage.getItem('expiryDate');
  //   if (!token || !expiryDate) setIsLoggedIn(false)
  //   if (new Date(expiryDate) <= new Date()) {
  //     logoutHandler();
  //     setIsLoggedIn(false);
  //   }
  //   const userId = localStorage.getItem('userId');
  //   const remainingMilliseconds =
  //     new Date(expiryDate).getTime() - new Date().getTime();
  //   // this.setState({ isAuth: true, token: token, userId: userId });
  //   // this.setAutoLogout(remainingMilliseconds);
  // },[])
  
  const content = () => isLoggedIn ? <LoggedInPages /> : <NotLoggedInPages /> ;
  
  return (
    <Grid container direction="column">
     {content()}
    </Grid>
  );
}

export default App;
