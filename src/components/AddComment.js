import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import PostButton from "./sharedComponents/PostButton";
import { createComment } from "../redux/actions/commentActions";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));
const AddComment = ({ postId }) => {
  const classes = useStyles();
  const { token } = useSelector((state) => state.auth);
  const { isLoading, commentCreated } = useSelector((state) => state.comments);
  const [commentContent, setCommentContent] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setCommentContent("");
  }, [commentCreated]);

  const handleCommentContentChange = (event) => {
    const { value } = event.target;
    setCommentContent(value);
  };

  const handleButtonSubmit = () => {
    dispatch(createComment({ postId, content: commentContent, token }));
  };

  return (
    <div className={classes.margin}>
      <Grid container spacing={1} alignItems="flex-end">
        <TextField
          id="input-with-icon-grid"
          label="Add a comment"
          fullWidth
          margin="normal"
          value={commentContent}
          onChange={handleCommentContentChange}
        />
        <PostButton
          disabled={!commentContent || isLoading}
          buttonName={"comment"}
          handleSubmit={handleButtonSubmit}
        />
      </Grid>
    </div>
  );
};

export default AddComment;
