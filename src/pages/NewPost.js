import React, { useState } from "react";
import { Paper } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import ImageUpload from "../components/ImageUpload";
import PostButton from "../components/PostButton";
import TagsAutoComplete from "../components/TagsAutoComplete";
import { useStylesPaper } from "../theme";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../redux/actions/postsActions";
import { categories, initPostValues } from "../utils/consts/newPostConsts";
import {
  isTagsLengthValid,
  isPostTitleValid,
  isPostContentValid,
  displayPostTitleError,
  displayPostContentError,
  postTitleTextHelper,
  PostContentTextHelper,
} from "../utils/errorHandlers/inputErrorHandler";

const NewPost = () => {
  const dispatch = useDispatch();

  const fixedOptions = [];

  const [postValues, setPostValues] = useState(initPostValues);
  const { postTitle, postContent, postImage } = postValues;
  const [tagsValue, setTagsValue] = useState([]);
  const [postButton, setPostButton] = useState("Post");
  const [enablePost, setEnablePost] = useState(false);
  const { token } = useSelector((state) => state.auth);

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

  const handleImageChange = (event) => {
    setPostValues((prevPostValues) => {
      return {
        ...prevPostValues,
        postImage: event.target.files[0],
      };
    });
  };

  const handleSubmitPost = () => {
    setPostButton("Sending");
    setEnablePost(true);
    dispatch(
      createPost({ postTitle, postContent, tagsValue, postImage, token })
    )
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
      isPostTitleValid(postTitle) &&
      isPostContentValid(postContent) &&
      isTagsLengthValid(tagsValue) &&
      postImage
    );
  };

  return (
    <Paper className={useStylesPaper().rootPaper} elevation={4}>
      <Container>
        <br />
        <Typography variant="h5">Create A New Post</Typography>
        <TextField
          error={displayPostTitleError(postTitle)}
          helperText={postTitleTextHelper(postTitle)}
          fullWidth
          margin="normal"
          name="postTitle"
          label="Post Title"
          value={postTitle}
          onChange={handlePostValuesChange}
        />
        <TextField
          error={displayPostContentError(postContent)}
          helperText={PostContentTextHelper(postContent)}
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
        <ImageUpload handleImageChange={handleImageChange} />
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
