import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPosts } from "../redux/actions/postsActions";
import Post from "./sharedComponents/Post";

const Posts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);

  const { mainPosts } = useSelector((state) => state.posts);

  const posts = mainPosts.map((post) => <Post postData={post} />);

  return <div style={{ margin: "5em" }}>{posts}</div>;
};

export default Posts;
