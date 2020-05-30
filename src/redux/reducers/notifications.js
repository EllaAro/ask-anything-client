import { UPDATE_NOTIFICATION } from "../actions/types";

const initialState = {
  isVisible: false,
  message: null,
  type: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_NOTIFICATION:
      return {
        ...state,
        isVisible: action.payload.isVisible,
        message: action.payload.message,
        type: action.payload.notificationType,
      };
    default:
      return state;
  }
}
