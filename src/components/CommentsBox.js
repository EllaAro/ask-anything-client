import React from "react";
import { Divider, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Comment from "./Comment";
import AddComment from "./AddComment";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    marginLeft: "50px",
  },
  paper: {
    padding: "40px 20px",
  },
  divider: {
    margin: "30px 0",
  },
}));

const CommentsBox = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>Comments</h1>
      <Paper className={classes.paper}>
        <Comment />
        <Divider variant="fullWidth" className={classes.divider} />
        <Comment />
        <AddComment />
      </Paper>
    </div>
  );
};

export default CommentsBox;
