import React from "react";
import { fetchTrendingPosts } from "../redux/actions/postsActions";
import { Posts } from "../components/sharedComponents/Posts";

const TrendingPostsPage = () => {
  return <Posts action={fetchTrendingPosts} postsType="trendingPosts" />;
};

export default TrendingPostsPage;
