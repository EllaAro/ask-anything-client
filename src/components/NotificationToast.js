import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { hideNotification } from "../redux/actions/notificationActions";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const NotificationToast = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { isVisible, message, type } = useSelector(
    (state) => state.notifications
  );

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(hideNotification());
  };

  const notificationsToast = () => (
    <div className={classes.root}>
      <Snackbar open={isVisible} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={type}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );

  return isVisible ? notificationsToast() : null;
};
export default NotificationToast;
