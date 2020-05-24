import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPosts } from "../redux/posts";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useStylesPaper } from "../theme";
import Container from "@material-ui/core/Container";
import Post from "./Post";

const Posts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);

  const fetchedPosts = useSelector((state) => state.posts);

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
