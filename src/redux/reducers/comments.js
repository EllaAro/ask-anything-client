import {
  IS_COMMENT_CREATE_LOADING,
  CREATE_COMMENT,
  FETCH_COMMENTS,
  CREATE_COMMENT_ERROR,
} from "../actions/types";

const initialState = {
  isLoading: false,
  comments: [],
  commentCreated: false,
};

export default function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case IS_COMMENT_CREATE_LOADING:
      return {
        ...state,
        isLoading: true,
        commentCreated: false,
      };
    case CREATE_COMMENT:
      return {
        ...state,
        isLoading: false,
        commentCreated: true,
        comments: [action.payload.comment, ...state.comments],
      };
    case FETCH_COMMENTS:
      return {
        ...state,
        isLoading: false,
        commentCreated: false,
        comments: action.payload.comments,
      };
    case CREATE_COMMENT_ERROR:
      return {
        ...state,
        isLoading: false,
        commentCreated: false,
      };

    default:
      return state;
  }
}
