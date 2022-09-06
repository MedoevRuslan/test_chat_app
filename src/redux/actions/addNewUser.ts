import { ContactType } from "../../types/types";
import { AddNewUserActionType, ADD_NEW_USER } from "../reducers/contactsReducer";

export const addNewUser = (user: ContactType): AddNewUserActionType => ({
    type: ADD_NEW_USER,
    payload: user
})