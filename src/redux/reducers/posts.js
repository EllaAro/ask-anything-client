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
  mainPosts: {
    posts: [],
    loading: false,
    fetched: false,
    eror: false,
  },
  userPosts: {
    posts: [],
    loading: false,
    fetched: false,
    eror: false,
  },
  recommendedPosts: {
    posts: [],
    loading: false,
    fetched: false,
    eror: false,
  },
  trendingPosts: {
    posts: [],
    loading: false,
    fetched: false,
    eror: false,
  },
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
        mainPosts: {
          ...state.mainPosts,
          posts: [action.payload.post, ...state.mainPosts.posts],
        },
        userPosts: {
          ...state.userPosts,
          posts: [action.payload.post, ...state.userPosts.posts],
        },
      };
    case FETCH_ALL_POSTS:
      return {
        ...state,
        isPostCreated: false,
        mainPosts: {
          ...state.mainPosts,
          posts: action.payload.posts,
        },
      };
    case FETCH_ALL_POSTS_BY_USER_ID:
      return {
        ...state,
        userPosts: {
          ...state.userPosts,
          posts: action.payload.posts,
        },
      };
    case FETCH_RECOMMENDED_POSTS:
      return {
        ...state,

        recommendedPosts: {
          ...state.recommendedPosts,
          posts: action.payload.posts,
        },
      };
    case FETCH_TRENDING_POSTS:
      return {
        ...state,

        trendingPosts: {
          ...state.trendingPosts,
          posts: action.payload.posts,
        },
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
