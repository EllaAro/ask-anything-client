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
  isPostCreated: false,
  mainPosts: [],
  userPosts: [],
  recommendedPosts: [],
  trendingPosts: [],
};

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case IS_POSTS_LOADING:
    case IS_POST_CREATE_LOADING:
      return {
        ...state,
        isPostCreated: false,
      };
    case CREATE_POST:
      return {
        ...state,
        isPostCreated: true,
        mainPosts: [action.payload.post, ...state.mainPosts],
        userPosts: [action.payload.post, ...state.userPosts],
      };
    case FETCH_ALL_POSTS:
      return {
        ...state,
        isPostCreated: false,
        mainPosts: action.payload.posts,
      };
    case FETCH_ALL_POSTS_BY_USER_ID:
      return {
        ...state,
        userPosts: action.payload.posts,
      };
    case FETCH_RECOMMENDED_POSTS:
      return {
        ...state,

        recommendedPosts: action.payload.posts,
      };
    case FETCH_TRENDING_POSTS:
      return {
        ...state,

        trendingPosts: action.payload.posts,
      };
    case FETCH_POSTS_ERROR:
    case CREATE_POST_ERROR:
      return {
        ...state,
        isPostCreated: false,
      };
    default:
      return state;
  }
}
