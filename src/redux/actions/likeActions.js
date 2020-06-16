import {
  POST_LIKED,
  POST_UNLIKED,
  LIKE_POST_ERROR,
  UNLIKE_POST_ERROR,
} from "../actions/types";
import { likePostQuery, unlikePostQuery } from "../../graphql/likeQueries";
import { showNotification } from "./notificationActions";
import { ERROR } from "../../utils/consts/notificationTypes";

export const likePost = ({ postId, token }) => (dispatch) => {
  fetch("http://localhost:8080/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: likePostQuery(postId),
  })
    .then((res) => res.json())
    .then((resData) => {
      if (resData.errors) {
        dispatch({ type: LIKE_POST_ERROR });
        dispatch(
          showNotification(
            "Something went wrong, please try again later",
            ERROR
          )
        );
      } else {
        dispatch({
          type: POST_LIKED,
        });
      }
    })
    .catch((err) => {
      dispatch({ type: LIKE_POST_ERROR });
      dispatch(
        showNotification("Something went wrong, please try again later", ERROR)
      );
    });
};

export const unlikePost = ({ postId, token }) => (dispatch) => {
  fetch("http://localhost:8080/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: unlikePostQuery(postId),
  })
    .then((res) => res.json())
    .then((resData) => {
      if (resData.errors) {
        dispatch({ type: UNLIKE_POST_ERROR });
        dispatch(
          showNotification(
            "Something went wrong, please try again later",
            ERROR
          )
        );
      } else {
        dispatch({
          type: POST_UNLIKED,
        });
      }
    })
    .catch((err) => {
      dispatch({ type: UNLIKE_POST_ERROR });
      dispatch(
        showNotification("Something went wrong, please try again later", ERROR)
      );
    });
};
