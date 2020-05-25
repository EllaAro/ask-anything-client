import { CREATE_POST, FETCH_ALL_POSTS } from "../actions/types";
const initialState = [];

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_POST:
      return [...state, action.post];
    case FETCH_ALL_POSTS:
      return action.posts;
    default:
      return state;
  }
}
