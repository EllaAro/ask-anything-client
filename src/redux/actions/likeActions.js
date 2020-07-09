import {
  POST_LIKED,
  POST_UNLIKED,
  FETCH_LIKED_POSTS_BY_USER_ID,
  LIKE_POST_ERROR,
  UNLIKE_POST_ERROR,
  FETCH_LIKED_POST_ERROR,
} from "../actions/types";
import {
  likePostQuery,
  unlikePostQuery,
  fetchLikedPostsQuery,
} from "../../graphql/likeQueries";
import { showNotification } from "./notificationActions";
import { ERROR } from "../../utils/consts/notificationTypes";

export const likePost = (postId, token) => (dispatch) => {
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
        console.log(resData.errors);
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
          payload: { postId: postId },
        });
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: LIKE_POST_ERROR });
      dispatch(
        showNotification("Something went wrong, please try again later", ERROR)
      );
    });
};

export const unlikePost = (postId, token) => (dispatch) => {
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
          payload: { postId: postId },
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

export const fetchLikedPosts = (token) => (dispatch) => {
  fetch("http://localhost:8080/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: fetchLikedPostsQuery(),
  })
    .then((res) => res.json())
    .then((resData) => {
      if (resData.errors) dispatch({ type: FETCH_LIKED_POST_ERROR });
      else {
        dispatch({
          type: FETCH_LIKED_POSTS_BY_USER_ID,
          payload: { likedPostsIds: resData.data.fetchLikedPosts.postsId },
        });
      }
    })
    .catch((err) => dispatch({ type: FETCH_LIKED_POST_ERROR }));
};
