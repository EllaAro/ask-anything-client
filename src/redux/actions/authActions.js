import { CREATE_USER, SIGN_IN, LOGOUT_SUCCESS } from "./types";
import { signUpQuery } from "../../graphql/signUpQueries";
import { signInQuery } from "../../graphql/signInQueries";

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
    throw new Error(
      `Validation has failed. Make sure that you've entered the right details!`
    );
  else if (resData.errors) throw new Error(`User validation has failed.`);

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
      throw new Error(
        `Validation has failed. Make sure the email address isn't used yet!`
      );
    if (resData.errors) throw new Error(`User creation has failed`);
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
