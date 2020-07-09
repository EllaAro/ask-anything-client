import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPosts } from "../redux/actions/postsActions";
import Post from "./Post";

const Posts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);

  const fetchedPosts = useSelector((state) => state.posts.posts);

  const posts = fetchedPosts.map((post) => (
    <Post key={post.id} postData={post} />
  ));

  return <div style={{ margin: "5em" }}>{posts}</div>;
};

export default Posts;
