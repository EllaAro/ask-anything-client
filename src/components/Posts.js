import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPosts } from "../redux/actions/postsActions";
import Post from "./sharedComponents/Post";

const Posts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);

  const { posts, loading, fetched, error } = useSelector(
    (state) => state.posts.mainPosts
  );

  const resPosts = posts.map((post) => <Post postData={post} />);

  return <div style={{ margin: "5em" }}>{resPosts}</div>;
};

export default Posts;
