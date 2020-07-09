import {
  CREATE_USER,
  SIGN_IN,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  AUTH_ERROR,
  IS_AUTH_LOADING,
  REGISTER_LOADING,
} from "./types";
import {
  setLocalStorageAuth,
  emptyLocalStorage,
} from "../../utils/consts/authConsts";
import { SUCCESS, ERROR } from "../../utils/consts/notificationTypes";
import { showNotification } from "./notificationActions";
import { signInQuery, signUpQuery } from "../../graphql/authQueries";

export const signIn = (password, email) => (dispatch) => {
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
        dispatch(showNotification("User authentication has failed!", ERROR));
        dispatch({
          type: AUTH_ERROR,
        });
      } else {
        setLocalStorageAuth(resData.data.signIn.token);
        dispatch({
          type: SIGN_IN,
          payload: resData.data.signIn,
        });
      }
    })
    .catch((err) => {
      dispatch(
        showNotification(
          "User authentication has failed. Please try again later.",
          ERROR
        )
      );
      dispatch({
        type: AUTH_ERROR,
      });
      emptyLocalStorage();
    });
};

export const createUser = (firstName, lastName, email, password) => (
  dispatch
) => {
  dispatch({ type: REGISTER_LOADING });
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
        dispatch(
          showNotification(
            "User registration has failed. The email you have entered is taken.",
            ERROR
          )
        );
        dispatch({ type: REGISTER_FAIL });
      } else {
        dispatch({
          type: CREATE_USER,
        });
        dispatch(showNotification("User registration has succeeded!", SUCCESS));
      }
    })
    .catch((err) => {
      dispatch(
        showNotification(
          "User registration has failed. Please try again later.",
          ERROR
        )
      );
      dispatch({ type: REGISTER_FAIL });
    });
};

export const logout = () => {
  emptyLocalStorage();
  return {
    type: LOGOUT_SUCCESS,
  };
};
