import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import privateSettingsReducer from "./privateSettings";
import postsReducer from "./posts";
import signinReducer from "./auth";

const rootReducer = combineReducers({
  privateSettings: privateSettingsReducer,
  posts: postsReducer,
  signin: signinReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => {
  // const isAuto = store.getState().signin.isAuth;
  // if (isAuto)
});
export default store;
