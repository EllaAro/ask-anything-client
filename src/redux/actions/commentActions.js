import {
  IS_COMMENT_CREATE_LOADING,
  CREATE_COMMENT,
  FETCH_COMMENT,
  CREATE_COMMENT_ERROR,
} from "./types";
import { createCommentQuery } from "../../graphql/commentQueries";
import { showNotification } from "./notificationActions";
import { SUCCESS, ERROR } from "../../utils/consts/notificationTypes";

export const createComment = ({ postId, content, token }) => (dispatch) => {
  dispatch({ action: IS_COMMENT_CREATE_LOADING });
  fetch("http://localhost:8080/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: createCommentQuery({ postId, content }),
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
