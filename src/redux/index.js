import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import privateSettingsReducer from './privateSettings';
import postsReducer from './posts';



const rootReducer = combineReducers({
    privateSettings: privateSettingsReducer,
    posts: postsReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => {
    // console.log(store.getState())
})
export default store