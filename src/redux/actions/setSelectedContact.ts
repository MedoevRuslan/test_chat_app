import { ContactType } from '../../types/types';
import { SetSelectedCotanctActionType, SET_SELECTED_CONTACT } from './../reducers/contactsReducer';

export const setSelectedContact = (user: ContactType): SetSelectedCotanctActionType => ({
    type: SET_SELECTED_CONTACT,
    payload: user
})