import {
  CREATE_USER,
  SIGN_IN,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  LOGIN_FAIL,
  AUTH_ERROR,
} from "./types";
import { signInQuery, signUpQuery } from "../../graphql/authQueries";

export const signIn = ({ password, email }) => async (dispatch) => {
  const res = await fetch("http://localhost:8080/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: signInQuery(password, email),
  });
  const resData = await res.json();
  if (resData.errors && resData.errors[0].status === 422)
    return dispatch({
      type: AUTH_ERROR,
    });
  else if (resData.errors)
    return dispatch({
      type: LOGIN_FAIL,
    });

  return dispatch({
    type: SIGN_IN,
    payload: resData.data.signIn,
  });
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
    if (resData.errors && resData.errors[0].status === 422)
      return dispatch({
        type: AUTH_ERROR,
      });
    else if (resData.errors)
      return dispatch({
        type: REGISTER_FAIL,
      });
    return dispatch({
      type: CREATE_USER,
    });
  };
};

export const logout = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};
