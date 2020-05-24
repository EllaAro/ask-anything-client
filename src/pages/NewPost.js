import React, { useState } from "react";
import { Paper } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import PostButton from "../components/PostButton";
import TagsAutoComplete from "../components/TagsAutoComplete";
import { useStylesPaper } from "../theme";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../redux/reducers/posts";
import {
  MAX_VALID_CONTENT_LENGTH,
  MIN_VALID_TITLE_LENGTH,
  MAX_VALID_TITLE_LENGTH,
  MIN_VALID_CONTENT_LENGTH,
  categories,
  initPostValues,
} from "../utils/consts/newPostConsts";
import {
  isTextLengthValid,
  isTagsLengthValid,
  helpTextMessage,
} from "../utils/errorHandlers/inputErrorHandler";

const NewPost = () => {
  const dispatch = useDispatch();

  const fixedOptions = [];

  const [postValues, setPostValues] = useState(initPostValues);
  const { postTitle, postContent } = postValues;
  const [tagsValue, setTagsValue] = useState([]);
  const [postButton, setPostButton] = useState("Post");
  const [enablePost, setEnablePost] = useState(false);
  const { userId, token } = useSelector((state) => state.signin);

  const handlePostValuesChange = (event) => {
    const { name, value } = event.target;

    setPostValues((prevPostValues) => {
      return {
        ...prevPostValues,
        [name]: value,
      };
    });
  };

  const handleTagsChange = (event, newValue) => {
    setTagsValue([
      ...fixedOptions,
      ...newValue.filter((option) => fixedOptions.indexOf(option) === -1),
    ]);
  };

  const handleSubmitPost = () => {
    setPostButton("Sending");
    setEnablePost(true);
    dispatch(createPost({ postTitle, postContent, tagsValue, userId, token }))
      .then((res) => {
        resetValues();
      })
      .catch((err) => console.log(err));
  };

  const resetValues = () => {
    setPostButton("Post");
    setEnablePost(false);
    setPostValues(initPostValues);
    setTagsValue([]);
  };

  const isSendButtonEnabled = () => {
    return (
      isTextLengthValid(
        MIN_VALID_TITLE_LENGTH,
        MAX_VALID_TITLE_LENGTH,
        postTitle
      ) &&
      isTextLengthValid(
        MIN_VALID_CONTENT_LENGTH,
        MAX_VALID_CONTENT_LENGTH,
        postContent
      ) &&
      isTagsLengthValid(tagsValue)
    );
  };

  return (
    <Paper className={useStylesPaper().rootPaper} elevation={4}>
      <Container>
        <br />
        <Typography variant="h5">Create A New Post</Typography>
        <TextField
          error={
            postTitle &&
            !isTextLengthValid(
              MIN_VALID_TITLE_LENGTH,
              MAX_VALID_TITLE_LENGTH,
              postTitle
            )
          }
          helperText={helpTextMessage(
            MIN_VALID_TITLE_LENGTH,
            MAX_VALID_TITLE_LENGTH,
            postTitle,
            "Title"
          )}
          fullWidth
          margin="normal"
          name="postTitle"
          label="Post Name"
          value={postTitle}
          onChange={handlePostValuesChange}
        />
        <TextField
          error={
            postContent &&
            !isTextLengthValid(
              MIN_VALID_CONTENT_LENGTH,
              MAX_VALID_CONTENT_LENGTH,
              postContent
            )
          }
          helperText={helpTextMessage(
            MIN_VALID_CONTENT_LENGTH,
            MAX_VALID_CONTENT_LENGTH,
            postContent,
            "Content"
          )}
          fullWidth
          margin="normal"
          name="postContent"
          label="post Content"
          multiline
          rows={5}
          defaultValue="Default Value"
          variant="outlined"
          value={postContent}
          onChange={handlePostValuesChange}
        />
        <TagsAutoComplete
          name="tagsValue"
          categories={categories}
          fixedOptions={fixedOptions}
          value={tagsValue}
          setValue={setTagsValue}
          handleChange={handleTagsChange}
        />
        <PostButton
          disabled={!isSendButtonEnabled() || enablePost}
          buttonName={postButton}
          handleSubmit={handleSubmitPost}
        />
      </Container>
    </Paper>
  );
};

export default NewPost;
