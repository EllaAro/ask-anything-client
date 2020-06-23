import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPostsByUserId } from "../redux/actions/postsActions";
import Post from "./Post";

const Posts = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchAllPostsByUserId({ token }));
  }, []);

  const fetchedPosts = useSelector((state) => state.posts.userPosts);
  console.log("fetchedPosts" + fetchedPosts);
  const posts =
    fetchedPosts.length > 0 ? (
      fetchedPosts.map((post) => <Post postData={post} />)
    ) : (
      <div />
    );

  return <div style={{ margin: "5em" }}>{posts}</div>;
};

export default Posts;
