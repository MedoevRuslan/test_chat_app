import React from 'react';
import Avatar from './Avatar';

function Contact({ user, selectedContact, setSelectedContact, lastMessage }) {
    console.log(user.newMessages.length);

    const handleClick = (user) => {
        setSelectedContact(user);
    }

    return (
        <div onClick={() => handleClick(user)} className={ `user__container ${user.id === selectedContact?.id ? 'active' : ''}` } >
            { user.newMessages.length > 0 && selectedContact.id !== user.id && <p>new</p> }
            <Avatar img={user.avatar}/>
            <div className='user__info'>
                <div className='user__nickname'>{user.first_name}</div>
                <div className='user__last-message'>{ lastMessage?.text }</div>
            </div>
            <div className='user__last-message-date'>
                <div>{lastMessage?.dateString}</div>
            </div>
        </div>
    );
}

export default Contact;