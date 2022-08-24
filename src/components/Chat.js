import React from 'react';
import ChatCanvasContainer from './ChatCanvasContainer';
import ContactsContainer  from './ContactsContainer';

function Chat() {

    return (
        <main>
            <section className='wrapper'>
                <ContactsContainer />
                <ChatCanvasContainer />
            </section>
        </main>
    );
}

export default Chat;