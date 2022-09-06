import { MoveToAllMessagesActionType } from './../reducers/contactsReducer';
import { MOVE_TO_ALL_MESSAGES } from "../reducers/contactsReducer";

export const moveToAllMessages = (userId: number): MoveToAllMessagesActionType => ({
    type: MOVE_TO_ALL_MESSAGES,
    payload: userId
})