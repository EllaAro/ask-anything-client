import {
  POST_LIKED,
  POST_UNLIKED,
  LIKE_POST_ERROR,
  UNLIKE_POST_ERROR,
} from "../actions/types";
const initialState = {
  isLiked: false,
};

export default function likesReducer(state = initialState, action) {
  switch (action.type) {
    case POST_LIKED:
      return {
        isLiked: true,
      };
    case POST_UNLIKED:
      return {
        isLiked: false,
      };
    case UNLIKE_POST_ERROR:
    case LIKE_POST_ERROR:
    default:
      return state;
  }
}
