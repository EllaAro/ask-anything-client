import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import { fetchAllPostsByUserId } from "../redux/actions/postsActions";
import Post from "../components/sharedComponents/Post";
import ErrorPage from "./ErrorPage";

const useStyles = makeStyles({
  root: {
    margin: "5em",
    textAlign: "center",
  },
  loading: {
    margin: "0 auto",
    marginTop: "50px",
  },
});

const UserPostsPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchAllPostsByUserId(token));
  }, []);

  const { posts, loading, fetched, error } = useSelector(
    (state) => state.posts.userPosts
  );

  return (
    <div className={classes.root}>
      {loading && (
        <CircularProgress
          className={classes.loading}
          size="200px"
          thickness="1"
        />
      )}
      {fetched && posts.map((post) => <Post postData={post} />)}
      {error && <ErrorPage />}
    </div>
  );
};

export default UserPostsPage;
