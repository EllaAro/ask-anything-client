import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import privateSettingsReducer from "./reducers/privateSettings";
import postsReducer from "./reducers/posts";
import authReducer from "./reducers/auth";
import notificationsReducer from "./reducers/notifications";
import commentReducer from "./reducers/comments";

const rootReducer = combineReducers({
  privateSettings: privateSettingsReducer,
  posts: postsReducer,
  auth: authReducer,
  notifications: notificationsReducer,
  comments: commentReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
