import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import privateSettingsReducer from "./reducers/privateSettings";
import postsReducer from "./reducers/posts";
import authReducer from "./reducers/auth";

const rootReducer = combineReducers({
  privateSettings: privateSettingsReducer,
  posts: postsReducer,
  auth: authReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
store.subscribe(() => {});
export default store;
