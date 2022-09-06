import { MessageType } from '../../types/types'
import { AddMessageActionType, ADD_MESSAGE } from '../reducers/contactsReducer'

export const addMessage = (message: MessageType): AddMessageActionType => ({
    type: ADD_MESSAGE,
    payload: message
})
