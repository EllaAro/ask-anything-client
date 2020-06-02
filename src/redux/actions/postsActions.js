import { createPostQuery, fetchAllPostsQuery } from "../../graphql/postQueries";
import {
  CREATE_POST,
  FETCH_ALL_POSTS,
  IS_POSTS_LOADING,
  IS_POST_CREATE_LOADING,
  CREATE_POST_ERROR,
} from "./types";
import { showNotification } from "./notificationActions";
import { SUCCESS, ERROR } from "../../utils/consts/notificationTypes";

const fromArrToQlArr = (arr) => {
  let returnVal = ``;
  arr.forEach((element) => (returnVal += `"${element.title}", `));
  return returnVal;
};

export const createPost = ({
  postTitle,
  postContent,
  tagsValue,
  postImage,
  token,
}) => (dispatch) => {
  dispatch({ type: IS_POST_CREATE_LOADING });

  const formData = new FormData();
  formData.append("image", postImage);

  fetch("http://localhost:8080/api/file-upload/image-upload", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  })
    .then((resImg) => resImg.json())
    .then((resImgData) => {
      const imageUrl = resImgData.imageUrl;
      return fetch("http://localhost:8080/graphql", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: createPostQuery(
          postTitle,
          postContent,
          fromArrToQlArr(tagsValue),
          imageUrl
        ),
      });
    })
    .then((res) => res.json())
    .then((resData) => {
      if (resData.errors) {
        dispatch(
          showNotification(
            "Post submitting has failed. Make sure you have entered a valid content.",
            ERROR
          )
        );
        dispatch({ type: CREATE_POST_ERROR });
      } else {
        dispatch({
          type: CREATE_POST,
          post: resData.data.createPost,
        });
        dispatch(showNotification("Post submission has succeeded!", SUCCESS));
      }
    })
    .catch((err) => {
      dispatch({ type: CREATE_POST_ERROR });
      dispatch(
        showNotification(
          "Something went wrong. Please try to submit a post again later.",
          ERROR
        )
      );
    });
};

export const fetchAllPosts = () => {
  return async (dispatch) => {
    try {
      const res = await fetch("http://localhost:8080/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: fetchAllPostsQuery,
      });
      const resData = await res.json();
      dispatch({
        type: FETCH_ALL_POSTS,
        posts: resData.data.fetchAllPosts.posts,
      });
    } catch (err) {
      return console.log(err);
    }
  };
};
