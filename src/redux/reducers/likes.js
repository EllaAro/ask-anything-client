import {
  POST_LIKED,
  POST_UNLIKED,
  LIKE_POST_ERROR,
  UNLIKE_POST_ERROR,
} from "../actions/types";
const initialState = {
  likedPostsIds: [],
};

export default function likesReducer(state = initialState, action) {
  switch (action.type) {
    case POST_LIKED:
      return {
        likedPostsIds: state.likedPostsIds,
      };
    case POST_UNLIKED:
      return {
        likedPostsIds: state.likedPostsIds,
      };
    case UNLIKE_POST_ERROR:
    case LIKE_POST_ERROR:
    default:
      return state;
  }
}
