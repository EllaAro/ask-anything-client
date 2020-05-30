import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import NotLoggedInPages from "./pages/NotLoggedInPages";
import LoggedInPages from "./pages/LoggedInPages";
import NotificationToast from "./components/NotificationToast";

const App = () => {
  const { isAuth } = useSelector((state) => state.auth);

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
    <React.Fragment>
      <NotificationToast />
      <Grid container direction="column">
        {isAuth ? <LoggedInPages /> : <NotLoggedInPages />}
      </Grid>
    </React.Fragment>
  );
};

export default App;
