import React from "react";
import { fetchRecommendedPosts } from "../redux/actions/postsActions";
import { Posts } from "../components/sharedComponents/Posts";

const RecommendedUserPostsPage = () => (
  <Posts action={fetchRecommendedPosts} postsType="recommendedPosts" />
);
export default RecommendedUserPostsPage;
