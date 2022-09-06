import React from 'react';
import ChatCanvas from './ChatCanvas';
import ContactsContainer  from './ContactsContainer';

function Chat() {

    console.log('chat Render');

    return (
        <main>
            <section className='wrapper'>
                <ContactsContainer />
                <ChatCanvas />
            </section>
        </main>
    );
}

export default Chat;