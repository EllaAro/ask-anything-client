import { UPDATE_NOTIFICATION } from "./types";

export const showNotification = (message, notificationType) => (dispatch) => {
  dispatch({
    type: UPDATE_NOTIFICATION,
    payload: {
      message: message,
      notificationType: notificationType,
      isVisible: true,
    },
  });
};

export const hideNotification = () => (dispatch) => {
  dispatch({
    type: UPDATE_NOTIFICATION,
    payload: {
      message: null,
      notificationType: null,
      isVisible: false,
    },
  });
};
