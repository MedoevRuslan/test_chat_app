import { applyMiddleware, combineReducers, compose, legacy_createStore } from 'redux';
import { authReducer, contactsReducer} from './reducers';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    auth: authReducer,
    contacts: contactsReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

window.store = store


