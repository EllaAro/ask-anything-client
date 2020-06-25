import {
  CREATE_POST,
  FETCH_ALL_POSTS,
  IS_POST_CREATE_LOADING,
  IS_POSTS_LOADING,
  CREATE_POST_ERROR,
  FETCH_ALL_POSTS_BY_USER_ID,
  FETCH_RECOMMENDED_POSTS,
  FETCH_POSTS_ERROR,
  FETCH_TRENDING_POSTS,
} from "../actions/types";

const initialState = {
  isLoading: false,
  posts: [],
  userPosts: [],
  recommendedPosts: [],
  trendingPosts: [],
  isPostCreated: false,
};

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case IS_POSTS_LOADING:
    case IS_POST_CREATE_LOADING:
      return {
        ...state,
        isLoading: true,
        isPostCreated: false,
      };
    case CREATE_POST:
      return {
        ...state,
        isLoading: false,
        isPostCreated: true,
        posts: [action.payload.post, ...state.posts],
        userPosts: [action.payload.post, ...state.userPosts],
      };
    case FETCH_ALL_POSTS:
      return {
        ...state,
        isLoading: false,
        isPostCreated: false,
        posts: action.payload.posts,
      };
    case FETCH_ALL_POSTS_BY_USER_ID:
      return {
        ...state,
        isLoading: false,
        userPosts: action.payload.posts,
      };
    case FETCH_RECOMMENDED_POSTS:
      return {
        ...state,
        isLoading: false,
        recommendedPosts: action.payload.posts,
      };
    case FETCH_TRENDING_POSTS:
      return {
        ...state,
        isLoading: false,
        trendingPosts: action.payload.posts,
      };
    case FETCH_POSTS_ERROR:
    case CREATE_POST_ERROR:
      return {
        ...state,
        isLoading: false,
        isPostCreated: false,
      };
    default:
      return state;
  }
}
