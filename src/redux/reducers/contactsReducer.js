import { setIsFetching } from '../actions/setIsFetching';
import { setContacts } from '../actions/setContacts';
import { fetchContacts } from '../../api/contactsApi';

const initialState = {
    users: [],
    selectedContact: {},
    isFetching: false
}

export const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return {
                ...state, users: state.users.map(user => {
                    if (user.id === action.payload.userId) {
                        user.lastUpdate = action.payload.date;
                        if (action.payload.sender) {
                            user.messages = [...user.messages, action.payload]
                        }
                        else {
                            user.newMessages = [...user.newMessages, action.payload]
                        }
                    }
                    return user;
                })
            }
        case 'MOVE_TO_ALL_MESSAGES':
            return {
                ...state, users: state.users.map(user => {
                    if (user.id === action.payload) {
                        user.messages = [...user.messages, ...user.newMessages]
                        user.newMessages = [];
                    }
                    return user;
                })
            }
        case 'SET_USERS':
            return { ...state, users: [...state.users, ...action.payload] }
        case 'SET_SELECTED_CONTACT':
            return { ...state, selectedContact: action.payload }
        case 'SET_IS_FETCHING':
            return { ...state, isFetching: action.payload }
        default:
            return state;
    }
}

// const updateUserById = (users, id, data) => {
//     return users.map(user => {
//         if (user.id === action.payload[id]) {
//             user.cheked = action.payload[data]
//         }
//     })
// }

export const getContacts = () => (dispatch) => {

    dispatch(setIsFetching(true));

    fetchContacts()
        .then(users => dispatch(setContacts(users)))
        .finally(() => setTimeout(() => { dispatch(setIsFetching(false)) }, 1000))
}

