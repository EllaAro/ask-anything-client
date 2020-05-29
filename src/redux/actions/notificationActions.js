import { UPDATE_NOTIFICATION } from "./types";

export const showNotification = (message, visibilityTime = 2000) => (
  dispatch
) => {
  dispatch({
    type: UPDATE_NOTIFICATION,
    payload: { message: message, isVisible: true },
  });

  setTimeout(() => {
    dispatch({
      type: UPDATE_NOTIFICATION,
      payload: { message: null, isVisible: false },
    });
  }, visibilityTime);
};
