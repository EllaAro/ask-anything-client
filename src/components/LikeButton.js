import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useIsMount } from "../customHooks";
import { likePost, unlikePost } from "../redux/actions/likeActions";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import { fetchLikedPosts } from "../redux/actions/likeActions";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const LikeButton = ({ postId }) => {
  const classes = useStyles();
  const [isLiked, setIsLiked] = useState(false);
  const isMount = useIsMount();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { likedPostsIds } = useSelector((state) => state.likes);

  useEffect(() => dispatch(fetchLikedPosts(token)), []);

  // const wasLiked =
  useEffect(() => {
    likedPostsIds.filter((id) => id === postId).length > 0
      ? setIsLiked(true)
      : setIsLiked(false);
  }, [likedPostsIds]);

  const handleOnClick = () => (isLiked ? setIsLiked(false) : setIsLiked(true));

  useEffect(() => {
    if (!isMount)
      isLiked
        ? dispatch(likePost({ postId, token }))
        : dispatch(unlikePost({ postId, token }));
  }, [isLiked]);

  return (
    <div className={classes.root}>
      <IconButton aria-label="like" onClick={handleOnClick}>
        {isLiked ? (
          <ThumbUpAltIcon color="primary" />
        ) : (
          <ThumbUpAltOutlinedIcon color="primary" />
        )}
      </IconButton>
    </div>
  );
};

export default LikeButton;
