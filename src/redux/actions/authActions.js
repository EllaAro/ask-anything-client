import {
  CREATE_USER,
  SIGN_IN,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  AUTH_ERROR,
  IS_AUTH_LOADING,
} from "./types";
import {
  expiryDate,
  setLocalStorageAuth,
  emptyLocalStorage,
} from "../../utils/consts/authConsts";
import { showNotification } from "./notificationActions";
import { signInQuery, signUpQuery } from "../../graphql/authQueries";

export const signIn = ({ password, email }) => (dispatch) => {
  dispatch({
    type: IS_AUTH_LOADING,
  });
  fetch("http://localhost:8080/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: signInQuery(password, email),
  })
    .then((res) => res.json())
    .then((resData) => {
      if (resData.errors) {
        dispatch(showNotification("User authentication has failed!"));
        dispatch({
          type: AUTH_ERROR,
        });
      } else {
        setLocalStorageAuth(resData.data.signIn.token, expiryDate);
        dispatch({
          type: SIGN_IN,
          payload: resData.data.signIn,
        });
      }
    })
    .catch((err) => {
      dispatch(showNotification("User authentication has failed!"));
      dispatch({
        type: AUTH_ERROR,
      });
      emptyLocalStorage();
    });
};

export const createUser = ({ firstName, lastName, email, password }) => (
  dispatch
) => {
  fetch("http://localhost:8080/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: signUpQuery(firstName, lastName, password, email),
  })
    .then((res) => res.json())
    .then((resData) => {
      if (resData.errors) {
        dispatch(showNotification("User registration has failed!"));
        dispatch({ type: REGISTER_FAIL });
      } else
        dispatch({
          type: CREATE_USER,
        });
    })
    .catch((err) => {
      dispatch(showNotification("User registration has failed!"));
      dispatch({ type: REGISTER_FAIL });
    });
};

export const logout = () => {
  emptyLocalStorage();
  return {
    type: LOGOUT_SUCCESS,
  };
};
