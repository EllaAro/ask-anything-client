import { UPDATE_NOTIFICATION } from "./types";

export const showNotification = (
  message,
  notificationType,
  visibilityTime = 2000
) => (dispatch) => {
  dispatch({
    type: UPDATE_NOTIFICATION,
    payload: {
      message: message,
      notificationType: notificationType,
      isVisible: true,
    },
  });

  setTimeout(() => {
    dispatch({
      type: UPDATE_NOTIFICATION,
      payload: { message: null, notificationType: null, isVisible: false },
    });
  }, visibilityTime);
};
