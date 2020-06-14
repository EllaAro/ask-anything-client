import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPosts } from "..//redux/actions/postsActions";
import { Paper } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { useStylesPaper } from "../theme";
import CommentsBox from "../components/CommentsBox";
import { Typography } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "30%",
  },
  img: {
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
}));

const FullPost = ({ id }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);

  const fetchedPosts = useSelector((state) => state.posts.posts);

  const currentPost = fetchedPosts.find((post) => post._id === id);

  const content = currentPost ? (
    <React.Fragment>
      <Typography variant="h4">{currentPost.title}</Typography>
      <Typography variant="body2">{currentPost.tags}</Typography>
      <div className={classes.root}>
        <Avatar
          variant="square"
          src={currentPost.imageUrl}
          className={classes.img}
        />
      </div>
      <Typography variant="body1">{currentPost.content}</Typography>
    </React.Fragment>
  ) : null;

  return (
    <React.Fragment>
      <Paper elevation={4} className={useStylesPaper().rootPaper}>
        <Container>{content}</Container>
      </Paper>
      <CommentsBox postId={id} />
    </React.Fragment>
  );
};

export default FullPost;
