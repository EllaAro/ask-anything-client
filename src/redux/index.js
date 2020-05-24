import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import privateSettingsReducer from "./reducers/privateSettings";
import postsReducer from "./reducers/posts";
import authReducer from "./reducers/auth";

const rootReducer = combineReducers({
  privateSettings: privateSettingsReducer,
  posts: postsReducer,
  signin: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => {});
export default store;
