import { $contactsHost } from ".";
import { addFieldsToObject } from "../utils/addFieldsToObject";

export const fetchContacts = () => {
    return $contactsHost
        .get('users?page=1')
        .then(response => response.data)
        .then(users => addFieldsToObject(users.data, {
            lastUpdate: null, 
            checked: false, 
            messages: [],
            newMessages: []
        }))
        .catch((err) => 'can\'t load contacts: ' + err);
}

export const fetchContactById = (id) => {
    return $contactsHost
        .get(`users/${id}`)
        .then(response => response.data)
        .catch((err) => 'can\'t load contacts: ' + err);
}