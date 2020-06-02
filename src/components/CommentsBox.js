import React from "react";
import { Divider, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Comment from "./Comment";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    marginLeft: "50px",
  },
}));

const CommentsBox = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>Comments</h1>
      <Paper style={{ padding: "40px 20px" }}>
        <Comment />
        <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
        <Comment />
      </Paper>
    </div>
  );
};

export default CommentsBox;
