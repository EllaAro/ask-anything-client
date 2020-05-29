import {
  CREATE_POST,
  FETCH_ALL_POSTS,
  IS_POSTS_LOADING,
} from "../actions/types";
const initialState = {
  isLoading: false,
  posts: [],
};

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case IS_POSTS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case CREATE_POST:
      return {
        ...state,
        isLoading: false,
        posts: [...state.posts, action.post],
      };
    case FETCH_ALL_POSTS:
      return {
        ...state,
        isLoading: false,
        posts: action.posts,
      };
    default:
      return state;
  }
}
