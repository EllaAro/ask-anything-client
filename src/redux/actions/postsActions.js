import {
  createPostQuery,
  fetchAllPostsQuery,
  fetchAllPostsByUserIdQuery,
  fetchRecommendedUserPostsQuery,
  fetchTendingUserPostsQuery,
} from "../../graphql/postQueries";
import {
  CREATE_POST,
  IS_POST_CREATE_LOADING,
  CREATE_POST_ERROR,
  FETCH_ALL_POSTS,
  FETCH_ALL_POSTS_BY_USER_ID,
  FETCH_RECOMMENDED_POSTS,
  FETCH_TRENDING_POSTS,
  IS_ALL_POSTS_LOADING,
  IS_USER_POSTS_LOADING,
  IS_RECOMMENDED_POSTS_LOADING,
  IS_TRENDING_POSTS_LOADING,
  FETCH_ALL_POSTS_ERROR,
  FETCH_TRENDING_POSTS_ERROR,
  FETCH_RECOMMENDED_POSTS_ERROR,
  FETCH_USER_POSTS_ERROR,
} from "./types";
import { showNotification } from "./notificationActions";
import { SUCCESS, ERROR } from "../../utils/consts/notificationTypes";

export const createPost = (
  postTitle,
  postContent,
  tagsValue,
  postImage,
  token
) => (dispatch) => {
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
        body: createPostQuery(postTitle, postContent, tagsValue, imageUrl),
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
          payload: { post: resData.data.createPost },
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

export const fetchAllPosts = () => (dispatch) => {
  dispatch({ type: IS_ALL_POSTS_LOADING });
  fetch("http://localhost:8080/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: fetchAllPostsQuery,
  })
    .then((res) => res.json())
    .then((resData) => {
      if (resData.errors) dispatch({ type: FETCH_ALL_POSTS_ERROR });
      else
        dispatch({
          type: FETCH_ALL_POSTS,
          payload: { posts: resData.data.fetchAllPosts.posts },
        });
    })
    .catch((err) => {
      dispatch({ type: FETCH_ALL_POSTS_ERROR });
    });
};

export const fetchAllPostsByUserId = (token) => (dispatch) => {
  dispatch({ type: IS_USER_POSTS_LOADING });
  fetch("http://localhost:8080/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: fetchAllPostsByUserIdQuery,
  })
    .then((res) => res.json())
    .then((resData) => {
      if (resData.errors) dispatch({ type: FETCH_USER_POSTS_ERROR });
      else
        dispatch({
          type: FETCH_ALL_POSTS_BY_USER_ID,
          payload: { posts: resData.data.fetchAllUserPosts.posts },
        });
    })
    .catch((err) => {
      dispatch({ type: FETCH_USER_POSTS_ERROR });
    });
};

export const fetchRecommendedPosts = (token) => (dispatch) => {
  dispatch({ type: IS_RECOMMENDED_POSTS_LOADING });
  fetch("http://localhost:8080/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: fetchRecommendedUserPostsQuery,
  })
    .then((res) => res.json())
    .then((resData) => {
      if (resData.errors) dispatch({ type: FETCH_RECOMMENDED_POSTS_ERROR });
      else
        dispatch({
          type: FETCH_RECOMMENDED_POSTS,
          payload: { posts: resData.data.fetchRecommendedUserPosts.posts },
        });
    })
    .catch((err) => {
      dispatch({ type: FETCH_RECOMMENDED_POSTS_ERROR });
    });
};

export const fetchTrendingPosts = (token) => (dispatch) => {
  dispatch({ type: IS_TRENDING_POSTS_LOADING });
  fetch("http://localhost:8080/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: fetchTendingUserPostsQuery,
  })
    .then((res) => res.json())
    .then((resData) => {
      if (resData.errors) dispatch({ type: FETCH_TRENDING_POSTS_ERROR });
      else
        dispatch({
          type: FETCH_TRENDING_POSTS,
          payload: { posts: resData.data.fetchTrendingPosts.posts },
        });
    })
    .catch((err) => {
      dispatch({ type: FETCH_TRENDING_POSTS_ERROR });
    });
};
