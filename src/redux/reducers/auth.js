import { initialState } from "../../utils/consts/signInConsts";
import { expiryDate } from "../../utils/consts/signInConsts";
import { SIGN_IN, CREATE_USER } from "../actions/types";

export default function signinReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      return {
        userId: action.signedInUser.userId,
        token: action.signedInUser.token,
        expiryDate: expiryDate,
        isAuth: true,
      };
    case CREATE_USER:
    default:
      return state;
  }
}
