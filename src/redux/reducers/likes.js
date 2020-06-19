import {
  POST_LIKED,
  POST_UNLIKED,
  FETCH_LIKED_POSTS_BY_USER_ID,
  LIKE_POST_ERROR,
  UNLIKE_POST_ERROR,
  FETCH_LIKED_POST_ERROR,
} from "../actions/types";
const initialState = {
  likedPostsIds: [],
};

export default function likesReducer(state = initialState, action) {
  switch (action.type) {
    case POST_LIKED:
      return {
        likedPostsIds: [...state.likedPostsIds, action.payload.postId],
      };
    case POST_UNLIKED:
      return {
        likedPostsIds: state.likedPostsIds.filter(
          (postId) => postId !== action.payload.postId
        ),
      };
    case FETCH_LIKED_POSTS_BY_USER_ID:
      return {
        likedPostsIds: action.payload.likedPostsIds,
      };
    case FETCH_LIKED_POST_ERROR:
    case UNLIKE_POST_ERROR:
    case LIKE_POST_ERROR:
    default:
      return state;
  }
}
