import {
  IS_COMMENT_CREATE_LOADING,
  CREATE_COMMENT,
  FETCH_COMMENT,
} from "../actions/types";

const initialState = {
  isLoading: false,
  comment: "",
  commentCreated: false,
};

export default function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case IS_COMMENT_CREATE_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case CREATE_COMMENT:
      return {
        ...state,
        isLoading: false,
      };
    case FETCH_COMMENT:
      return {
        ...state,
        isLoading: false,
        comment: action.payload.comment,
      };

    default:
      return state;
  }
}
