import { createPostQuery, fetchAllPostsQuery } from "../../graphql/postQueries";
import { CREATE_POST, FETCH_ALL_POSTS } from "./types";

const fromArrToQlArr = (arr) => {
  let returnVal = ``;
  arr.forEach((element) => (returnVal += `"${element.title}", `));
  return returnVal;
};

export const createPost = ({ postTitle, postContent, tagsValue, token }) => {
  return async (dispatch) => {
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
