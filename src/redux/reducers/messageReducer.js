import { fetchMessage } from "../../api/messagesApi";
import { addMessage } from "../actions/addMessage";
import { sendMessage } from '../actions/sendMessage'

const initialState = {
    messages: [],
    message: ''
}

export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEND_MESSAGE':
            return { ...state, messages: [...state.messages, action.payload] };
        case 'SET_MESSAGE':
            return { ...state, message: action.payload }
        case 'GET_CONTACT_MESSAGES': 
            return {...state.messages.filter(msg => msg.userId === action.payload)}
        default:
            return state;
    }
}

export const getMessageFromApi = (userId) => (dispatch) => {
    fetchMessage().then(({ id, value }) => {
        const date = new Date(Date.now());
        dispatch(addMessage({
            id,
            text: value,
            date,
            dateString: date.toLocaleString('en-US'),
            userId,
            sender: false,
            new: true
        }))
    })
}