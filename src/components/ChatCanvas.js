import React, { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import Avatar from './Avatar';
import Message from './Message';
import { v4 as uuidv4 } from 'uuid'

function ChatCanvas({newMessages, messages, getMessageFromApi, selectedContact, addMessage, moveToAllMessages }) {

    const [inProgress, setInProgress] = useState(false)
    const [message, setMessage] = React.useState('')

    React.useEffect(() => {
        if (newMessages?.length > 0) {
            if (selectedContact) moveToAllMessages(selectedContact.id);
        }
        // localStorage.setItem('messages', JSON.stringify(messages));
    }, [newMessages])


    function handleInput(e) {
        setMessage(e.target.value)
    }

    function onSendMessage() {
        if (!message) return
        setInProgress(true)
        const date = new Date(Date.now());
        addMessage({
            id: uuidv4(),
            text: message,
            date,
            dateString: date.toLocaleString('en-US'),
            userId: selectedContact.id,
            sender: true,
            new: true
        });
        setMessage('');
        setInProgress(false);
        setTimeout(() => getMessageFromApi(selectedContact.id), 5000);
    }

    return (
        <div className='messages__container'>
            <div className='messages__header'>
                {selectedContact &&
                    <div className='messages__header-info'>
                        <Avatar img={selectedContact.avatar} />
                        <span>{selectedContact.first_name}</span>
                    </div>}
            </div>
            <div className='messages__canvas'>
                {selectedContact &&
                    selectedContact.messages?.map(message => (
                        <Message key={message.id} text={message.text} date={message.dateString} sender={message.sender} avatar={selectedContact.avatar} />
                    ))}
            </div>
            <div className='messages__text-bar'>
                <input onChange={handleInput} value={message} type='text' placeholder='Please type your message here...' />
                <button
                    className='text-bar__send-message'
                    onClick={onSendMessage}
                    style={{ backgroundColor: 'transparent', border: 'none' }}
                    disabled={!selectedContact && !inProgress} 
                >Send</button>
            </div>
        </div>
    );
}

export default ChatCanvas;