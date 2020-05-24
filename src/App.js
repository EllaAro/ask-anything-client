import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import NotLoggedInPages from "./pages/NotLoggedInPages";
import LoggedInPages from "./pages/LoggedInPages";

const logoutHandler = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expiryDate");
  localStorage.removeItem("userId");
};

const App = () => {
  const { userId, token, isAuth } = useSelector((state) => state.signin);

  useEffect(() => {
    // if (!token || !expiryDate) setIsLoggedIn(false);
    // if (new Date(expiryDate) <= new Date()) {
    //   logoutHandler();
    //   setIsLoggedIn(false);
    // } else setIsLoggedIn(true);
    // const userId = localStorage.getItem('userId');
    // const remainingMilliseconds =
    //   new Date(expiryDate).getTime() - new Date().getTime();
    // this.setState({ isAuth: true, token: token, userId: userId });
    // this.setAutoLogout(remainingMilliseconds);
  }, [isAuth]);

  return (
    <Grid container direction="column">
      {isAuth ? <LoggedInPages /> : <NotLoggedInPages />}
    </Grid>
  );
};

export default App;
