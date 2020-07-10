import React from "react";
import { fetchAllPostsByUserId } from "../redux/actions/postsActions";
import { Posts } from "../components/sharedComponents/Posts";

const UserPostsPage = () => (
  <Posts action={fetchAllPostsByUserId} postsType="userPosts" />
);

export default UserPostsPage;
