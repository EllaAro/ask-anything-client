import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrendingPosts } from "../redux/actions/postsActions";
import Post from "../components/sharedComponents/Post";

const TrendingPostsPage = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchTrendingPosts(token));
  }, []);

  const { posts, loading, fetched, eror } = useSelector(
    (state) => state.posts.trendingPosts
  );
  const resPosts =
    posts.length > 0 ? posts.map((post) => <Post postData={post} />) : <div />;

  return <div style={{ margin: "5em" }}>{resPosts}</div>;
};

export default TrendingPostsPage;
