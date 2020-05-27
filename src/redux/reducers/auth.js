import {
  expiryDate,
  setLocalStorageAuth,
  emptyLocalStorage,
} from "../../utils/consts/authConsts";
import {
  SIGN_IN,
  CREATE_USER,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  LOGIN_FAIL,
  AUTH_ERROR,
} from "../actions/types";

const initialState = {
  userId: localStorage.getItem("userId"),
  token: localStorage.getItem("token"),
  isAuth: localStorage.getItem("isAuth"),
  isLoading: false,
  errorMessage: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      setLocalStorageAuth(
        action.payload.token,
        action.payload.userId,
        expiryDate
      );
      return {
        userId: action.payload.userId,
        token: action.payload.token,
        isAuth: true,
        isLoading: false,
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case REGISTER_FAIL:
    case LOGOUT_SUCCESS:
      emptyLocalStorage();
      return {
        userId: null,
        token: null,
        isAuth: false,
        isLoading: false,
        errorMessage: action.errorMessage,
      };
    case CREATE_USER:
    default:
      return state;
  }
}
