import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import NotLoggedInPages from "./pages/NotLoggedInPages";
import LoggedInPages from "./pages/LoggedInPages";
import NotificationToast from "./components/NotificationToast";
import { logout } from "./redux/actions/authActions";

const App = () => {
  const { isAuth } = useSelector((state) => state.auth);

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
