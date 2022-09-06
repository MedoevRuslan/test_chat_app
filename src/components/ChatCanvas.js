import React from 'react';
import Message from './Message';
import MessagesContainer from './MessagesContainer';

function ChatCanvas() {

  return (
    <MessagesContainer render={(props) => <Message {...props} />} />
  );
}

export default ChatCanvas;