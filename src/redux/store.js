import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import { messageReducer, contactsReducer, contactReducer } from './reducers';
import thunk from 'redux-thunk'


const rootReducer = combineReducers({
    messages: messageReducer,
    contacts: contactsReducer,
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

window.store = store


