import React from "react";
import { Paper } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { useStylesPaper } from "../theme";
import CommentsBox from "../components/CommentsBox";

const FullPost = ({ id }) => {
  return (
    <React.Fragment>
      <Paper elevation={4} className={useStylesPaper().rootPaper}>
        <Container>
          <br />
          <div>HIHI THIS IS THE ID {id}</div>
          <br />
        </Container>
      </Paper>
      <CommentsBox />
    </React.Fragment>
  );
};

export default FullPost;
