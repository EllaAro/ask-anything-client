import {
  SIGN_IN,
  CREATE_USER,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  LOGIN_FAIL,
  AUTH_ERROR,
  IS_AUTH_LOADING,
  REGISTER_LOADING,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuth: localStorage.getItem("isAuth"),
  isLoading: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_LOADING:
    case IS_AUTH_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case SIGN_IN:
      return {
        token: action.payload.token,
        isAuth: true,
        isLoading: false,
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case REGISTER_FAIL:
    case LOGOUT_SUCCESS:
      return {
        token: null,
        isAuth: false,
        isLoading: false,
      };
    case CREATE_USER:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}
