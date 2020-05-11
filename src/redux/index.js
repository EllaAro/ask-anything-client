import redux, {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import privateSettingsReducer from './privateSettings';



const rootReducer = combineReducers({
    privateSettings: privateSettingsReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => {
    console.log(store.getState())
})
export default store