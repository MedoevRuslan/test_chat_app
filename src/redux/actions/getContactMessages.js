export const getContactMessages = (contactId) => ({
    type: 'GET_CONTACT_MESSAGES',
    payload: contactId
})