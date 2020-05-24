import { expiryDate, setLocalStorageAuth } from "../../utils/consts/authConsts";
import { SIGN_IN, CREATE_USER } from "../actions/types";

const initialState = {
  userId: localStorage.getItem("userId"),
  token: localStorage.getItem("token"),
  isAuth: localStorage.getItem("isAuth"),
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      setLocalStorageAuth(
        action.payload.token,
        action.payload.userId,
        expiryDate
      );
      return {
        userId: action.payload.userId,
        token: action.payload.token,
        isAuth: true,
      };
    case CREATE_USER:
    default:
      return state;
  }
}
