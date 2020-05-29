import {
  CREATE_USER,
  SIGN_IN,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  LOGIN_FAIL,
  AUTH_ERROR,
  IS_AUTH_LOADING,
} from "./types";
import {
  expiryDate,
  setLocalStorageAuth,
  emptyLocalStorage,
} from "../../utils/consts/authConsts";
import { signInQuery, signUpQuery } from "../../graphql/authQueries";

export const signIn = ({ password, email }) => async (dispatch) => {
  dispatch({
    type: IS_AUTH_LOADING,
  });
  const res = await fetch("http://localhost:8080/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: signInQuery(password, email),
  });
  const resData = await res.json();
  if (resData.errors)
    dispatch({
      type: AUTH_ERROR,
      errorMessage: "error",
    });
  else {
    setLocalStorageAuth(resData.data.signIn.token, expiryDate);
    dispatch({
      type: SIGN_IN,
      payload: resData.data.signIn,
    });
  }
};

export const createUser = ({ firstName, lastName, email, password }) => {
  return async (dispatch) => {
    const res = await fetch("http://localhost:8080/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: signUpQuery(firstName, lastName, password, email),
    });
    const resData = await res.json();
    if (resData.errors)
      dispatch({
        type: AUTH_ERROR,
        errorMessage: "error",
      });
    else
      dispatch({
        type: CREATE_USER,
      });
  };
};

export const logout = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};
