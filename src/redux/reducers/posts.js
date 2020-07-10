import {
  CREATE_POST,
  IS_POST_CREATE_LOADING,
  CREATE_POST_ERROR,
  FETCH_ALL_POSTS,
  FETCH_ALL_POSTS_BY_USER_ID,
  FETCH_RECOMMENDED_POSTS,
  FETCH_TRENDING_POSTS,
  IS_ALL_POSTS_LOADING,
  IS_USER_POSTS_LOADING,
  IS_RECOMMENDED_POSTS_LOADING,
  IS_TRENDING_POSTS_LOADING,
  FETCH_ALL_POSTS_ERROR,
  FETCH_TRENDING_POSTS_ERROR,
  FETCH_RECOMMENDED_POSTS_ERROR,
  FETCH_USER_POSTS_ERROR,
} from "../actions/types";

const initialState = {
  isPostCreated: false,
  mainPosts: {
    posts: [],
    loading: false,
    fetched: false,
    error: false,
  },
  userPosts: {
    posts: [],
    loading: false,
    fetched: false,
    error: false,
  },
  recommendedPosts: {
    posts: [],
    loading: false,
    fetched: false,
    error: false,
  },
  trendingPosts: {
    posts: [],
    loading: false,
    fetched: false,
    error: false,
  },
};

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
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
          loading: false,
          fetched: true,
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
          loading: false,
          posts: action.payload.posts,
        },
      };
    case IS_ALL_POSTS_LOADING:
      return {
        ...state,
        mainPosts: {
          ...state.mainPosts,
          loading: true,
        },
      };
    case IS_USER_POSTS_LOADING:
      return {
        ...state,
        userPosts: {
          ...state.userPosts,
          loading: true,
        },
      };
    case IS_RECOMMENDED_POSTS_LOADING:
      return {
        ...state,
        recommendedPosts: {
          ...state.recommendedPosts,
          loading: true,
        },
      };
    case IS_TRENDING_POSTS_LOADING:
      return {
        ...state,
        trendingPosts: {
          ...state.trendingPosts,
          loading: true,
        },
      };
    case FETCH_USER_POSTS_ERROR:
      return {
        ...state,
        userPosts: {
          ...state.userPosts,
          loading: false,
          error: true,
        },
      };
    case FETCH_ALL_POSTS_ERROR:
      return {
        ...state,
        mainPosts: {
          ...state.mainPosts,
          loading: false,
          error: true,
        },
      };
    case FETCH_RECOMMENDED_POSTS_ERROR:
      return {
        ...state,
        recommendedPosts: {
          ...state.recommendedPosts,
          loading: false,
          error: true,
        },
      };
    case FETCH_TRENDING_POSTS_ERROR:
      return {
        ...state,
        trendingPosts: {
          ...state.trendingPosts,
          loading: false,
          error: true,
        },
      };
    case CREATE_POST_ERROR:
      return {
        ...state,
        isPostCreated: false,
      };
    default:
      return state;
  }
}
