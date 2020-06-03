import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../redux/actions/commentActions";
import { Divider, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Comment from "./Comment";
import AddComment from "./AddComment";
import { Typography } from "@material-ui/core";

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
  title: {
    marginTop: "1em",
  },
}));

const CommentsBox = ({ postId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state.comments);

  useEffect(() => {
    dispatch(fetchComments(postId));
  }, []);

  const fetchedComments = comments.map(
    ({ firstName, lastName, content, createdAt }) => (
      <React.Fragment>
        <Comment userInfo={{ firstName, lastName, content, createdAt }} />
        <Divider variant="fullWidth" className={classes.divider} />
      </React.Fragment>
    )
  );

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        Comments
      </Typography>
      <AddComment postId={postId} />
      <Paper className={classes.paper}>{fetchedComments}</Paper>
    </div>
  );
};

export default CommentsBox;
