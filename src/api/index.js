import axios from 'axios';

export const $contactsHost = axios.create({ baseURL: 'https://reqres.in/api/'})

export const $messagesHost = axios.create({ baseURL: 'https://api.chucknorris.io/jokes/' })