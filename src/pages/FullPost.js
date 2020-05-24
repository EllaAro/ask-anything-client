import React from "react";
import { Paper } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { useStylesPaper } from "../theme";

const FullPost = ({ id }) => {
  return (
    <Paper elevation={4} className={useStylesPaper().rootPaper}>
      <Container>
        <br />
        <div>HIHI THIS IS THE ID {id}</div>
        <br />
      </Container>
    </Paper>
  );
};

export default FullPost;
