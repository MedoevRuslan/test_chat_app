import React from 'react';
import MessageReceive from './MessageReceive';
import MessageSend from './MessageSend';

function Message(props) {

    return (
       props.sender 
            ? <MessageSend {...props} />
            : <MessageReceive {...props}/>
    );
}

export default Message;
