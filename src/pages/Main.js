import React from "react";
import { Posts } from "../components/sharedComponents/Posts";
import { fetchAllPosts } from "../redux/actions/postsActions";

const Main = () => <Posts action={fetchAllPosts} postsType="mainPosts" />;

export default Main;
