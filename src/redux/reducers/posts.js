import {
  CREATE_POST,
  FETCH_ALL_POSTS,
  IS_POST_CREATE_LOADING,
  CREATE_POST_ERROR,
} from "../actions/types";

const initialState = {
  isLoading: false,
  posts: [],
  isPostCreated: false,
};

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
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
      };
    case FETCH_ALL_POSTS:
      return {
        ...state,
        isLoading: false,
        isPostCreated: false,
        posts: action.posts,
      };
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
