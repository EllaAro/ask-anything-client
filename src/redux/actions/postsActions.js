import { createPostQuery, fetchAllPostsQuery } from "../../graphql/postQueries";
import {
  CREATE_POST,
  FETCH_ALL_POSTS,
  IS_POSTS_LOADING,
  IS_POST_CREATE_LOADING,
  CREATE_POST_ERROR,
} from "./types";

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
}) => {
  return async (dispatch) => {
    dispatch({ type: IS_POST_CREATE_LOADING });

    const formData = new FormData();
    formData.append("image", postImage);

    const resImg = await fetch(
      "http://localhost:8080/api/file-upload/image-upload",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      }
    );

    const resImgData = await resImg.json();
    const imageUrl = resImgData.filePath;
    console.log(imageUrl);

    // add imageUrl into graphql query

    const res = await fetch("http://localhost:8080/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: createPostQuery(postTitle, postContent, fromArrToQlArr(tagsValue)),
    });
    const resData = await res.json();
    console.log(resData.errors);
    if (resData.errors && resData.errors[0].status === 401)
      throw new Error(`Posting a post has failed, invalid input!`);
    else if (resData.errors) throw new Error(`Post creation has failed`);
    dispatch({
      type: CREATE_POST,
      post: resData.data.createPost,
    });
  };
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
