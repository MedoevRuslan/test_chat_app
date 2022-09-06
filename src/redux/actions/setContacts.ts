import { ContactType } from '../../types/types';
import { SetUsersActionType, SET_USERS } from './../reducers/contactsReducer';

export const setContacts = (users: Array<ContactType>): SetUsersActionType => ({
    type: SET_USERS, 
    payload: users
})