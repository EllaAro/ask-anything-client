import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPosts } from "../redux/actions/postsActions";
import { Paper } from "@material-ui/core";
import { useStylesPaper } from "../theme";
import Container from "@material-ui/core/Container";
import Post from "./Post";

const Posts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);

  const fetchedPosts = useSelector((state) => state.posts.posts);

  const posts = fetchedPosts.map((post) => <Post postData={post} />);

  return (
    <Paper className={useStylesPaper().rootPaper} elevation={4}>
      <Container>
        <br />
        {posts}
        <br />
      </Container>
    </Paper>
  );
};

export default Posts;
