import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import privateSettingsReducer from "./reducers/privateSettings";
import postsReducer from "./reducers/posts";
import authReducer from "./reducers/auth";
import notificationsReducer from "./reducers/notifications";
const rootReducer = combineReducers({
  privateSettings: privateSettingsReducer,
  posts: postsReducer,
  auth: authReducer,
  notifications: notificationsReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
