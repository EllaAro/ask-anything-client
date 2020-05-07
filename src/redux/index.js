import privateSettingsReducer from './privateSettings';
const redux = require("redux");
const {combineReducers, createStore} = redux;

const rootReducer = combineReducers({
    privateSettings: privateSettingsReducer,
})

const store = createStore(rootReducer)
store.subscribe(() => {
    console.log(store.getState())
})
export default store