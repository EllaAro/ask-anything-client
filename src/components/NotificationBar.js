import React from "react";
import { useSelector } from "react-redux";

const NotificationBar = () => {
  const { isVisible, message } = useSelector((state) => state.notifications);
  return isVisible ? <h1>{message}</h1> : null;
};
export default NotificationBar;
