import { setIsFetching } from '../actions/setIsFetching';
import { setContacts } from '../actions/setContacts';
import { fetchContacts } from '../../api/contactsApi';
import { fetchMessage } from "../../api/messagesApi";
import { addMessage } from "../actions/addMessage";
import { ContactType, MessageType } from '../../types/types';

export const ADD_MESSAGE = 'ADD_MESSAGE';
export const MOVE_TO_ALL_MESSAGES = 'MOVE_TO_ALL_MESSAGES';
export const SET_USERS = 'SET_USERS';
export const ADD_NEW_USER = 'ADD_NEW_USER';
export const SET_SELECTED_CONTACT = 'SET_SELECTED_CONTACT';
export const SET_IS_FETCHING = 'SET_IS_FETCHING';



export const initialState = {
    users: [] as Array<ContactType>,
    selectedContact: null as ContactType | null,
    isFetching: false as boolean
}

export type AddMessageActionType = {
    type: typeof ADD_MESSAGE
    payload: MessageType
}

export type MoveToAllMessagesActionType = {
    type: typeof MOVE_TO_ALL_MESSAGES
    payload: number
}

export type SetUsersActionType = {
    type: typeof SET_USERS
    payload: Array<ContactType>
}

export type AddNewUserActionType = {
    type: typeof ADD_NEW_USER
    payload: ContactType
}

export type SetSelectedCotanctActionType = {
    type: typeof SET_SELECTED_CONTACT
    payload: ContactType
}

export type SetIsFetchingActionType = {
    type: typeof SET_IS_FETCHING
    payload: boolean
}

export const contactsReducer = (state = initialState, action: any): typeof initialState => {
    switch (action.type) {
        case ADD_MESSAGE:
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
        case MOVE_TO_ALL_MESSAGES:
            return {
                ...state, users: state.users.map(user => {
                    if (user.id === action.payload) {
                        user.messages = [...user.messages, ...user.newMessages]
                        user.newMessages = [];
                    }
                    return user;
                })
            }
        case SET_USERS:
            return { ...state, users: [...state.users, ...action.payload] }
        case ADD_NEW_USER: 
            return { ...state, users: [...state.users, action.payload] }
        case SET_SELECTED_CONTACT:
            return { ...state, selectedContact: action.payload }
        case SET_IS_FETCHING:
            return { ...state, isFetching: action.payload }
        default:
            return state;
    }
}

export const getContacts = () => (dispatch: any) => {

    dispatch(setIsFetching(true));

    fetchContacts()
        .then(users => dispatch(setContacts(users)))
        .finally(() => setTimeout(() => { dispatch(setIsFetching(false)) }, 1000))
}

export const getMessageFromApi = (userId: number) => (dispatch: any) => {
    fetchMessage().then(({ id, value }) => {
        const date = new Date(Date.now());
        dispatch(addMessage({
            id,
            text: value,
            date,
            dateString: date.toLocaleString('en-US'),
            userId,
            sender: false,
        }))
    })
}


