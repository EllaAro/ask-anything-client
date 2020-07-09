import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecommendedPosts } from "../redux/actions/postsActions";
import Post from "../components/sharedComponents/Post";

const RecommendedUserPostsPage = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchRecommendedPosts(token));
  }, []);

  const fetchedPosts = useSelector((state) => state.posts.recommendedPosts);
  const posts =
    fetchedPosts.length > 0 ? (
      fetchedPosts.map((post) => <Post postData={post} />)
    ) : (
      <div />
    );

  return <div style={{ margin: "5em" }}>{posts}</div>;
};

export default RecommendedUserPostsPage;
