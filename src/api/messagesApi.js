import { $messagesHost } from ".";

export const fetchMessage = () => {
    return $messagesHost.get('random').then(response => response.data).catch((err) => 'can\'t load messages: ' + err);
}
