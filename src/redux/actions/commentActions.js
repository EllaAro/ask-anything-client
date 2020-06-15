import {
  IS_COMMENT_CREATE_LOADING,
  IS_FETCH_COMMENTS_LOADING,
  CREATE_COMMENT,
  FETCH_COMMENTS,
  CREATE_COMMENT_ERROR,
  FETCH_COMMENTS_ERROR,
} from "./types";
import {
  createCommentQuery,
  fetchCommentsQuery,
} from "../../graphql/commentQueries";
import { showNotification } from "./notificationActions";
import { SUCCESS, ERROR } from "../../utils/consts/notificationTypes";

export const createComment = ({ postId, content, token }) => (dispatch) => {
  dispatch({ type: IS_COMMENT_CREATE_LOADING });
  fetch("http://localhost:8080/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: createCommentQuery(postId, content),
  })
    .then((res) => res.json())
    .then((resData) => {
      if (resData.errors) {
        dispatch({ type: CREATE_COMMENT_ERROR });
        dispatch(
          showNotification("Failed, please submit a valid comment.", ERROR)
        );
      } else {
        dispatch({
          type: CREATE_COMMENT,
          payload: { comment: resData.data.createComment },
        });
        dispatch(
          showNotification("Comment submission has succeeded!", SUCCESS)
        );
      }
    })
    .catch((err) => {
      dispatch({ type: CREATE_COMMENT_ERROR });
      dispatch(
        showNotification(
          "Something went wrong. Please try to submit a comment again later.",
          ERROR
        )
      );
    });
};

export const fetchComments = (postId) => (dispatch) => {
  dispatch({ type: IS_FETCH_COMMENTS_LOADING });
  fetch("http://localhost:8080/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: fetchCommentsQuery(postId),
  })
    .then((res) => res.json())
    .then((resData) => {
      if (resData.errors) {
        dispatch({ type: FETCH_COMMENTS_ERROR });
      } else
        dispatch({
          type: FETCH_COMMENTS,
          payload: { comments: resData.data.fetchAllComments.comments },
        });
    })
    .catch((err) => {
      dispatch({ type: CREATE_COMMENT_ERROR });
    });
};
