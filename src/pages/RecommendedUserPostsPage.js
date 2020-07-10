// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchRecommendedPosts } from "../redux/actions/postsActions";
// import Post from "../components/sharedComponents/Post";

// const RecommendedUserPostsPage = () => {
//   const dispatch = useDispatch();
//   const { token } = useSelector((state) => state.auth);

//   useEffect(() => {
//     dispatch(fetchRecommendedPosts(token));
//   }, []);

//   const { posts, loading, fetched, error } = useSelector(
//     (state) => state.posts.recommendedPosts
//   );
//   const resPosts =
//     posts.length > 0 ? posts.map((post) => <Post postData={post} />) : <div />;

//   return <div style={{ margin: "5em" }}>{resPosts}</div>;
// };

// export default RecommendedUserPostsPage;

import React from "react";
import { fetchRecommendedPosts } from "../redux/actions/postsActions";
import { Posts } from "../components/sharedComponents/Posts";

const RecommendedUserPostsPage = () => (
  <Posts action={fetchRecommendedPosts} postsType="recommendedPosts" />
);
export default RecommendedUserPostsPage;
