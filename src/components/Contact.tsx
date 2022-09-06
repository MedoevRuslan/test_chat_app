import React from 'react';
import { contactsSidebarDate } from '../utils/formatDate';
import Avatar from './Avatar';
import { ContactType, MessageType } from '../types/types'

type Props = {
    user: ContactType
    selectedContact: ContactType
    setSelectedContact: (user: ContactType) => void
    lastMessage: MessageType
}

const Contact: React.FC<Props> = ({ user, selectedContact, setSelectedContact, lastMessage }) =>  {

    const handleClick = (user: ContactType) => {
        setSelectedContact(user);
    }

    return (
        <div onClick={() => handleClick(user)} className={`user__container ${user.id === selectedContact?.id ? 'active' : ''}`} >
            <Avatar img={user.avatar} />
            <div className='user__info'>
                <div className='user__nickname-date' >
                    <div className='user__nickname'>{user.first_name}</div>
                    {lastMessage &&
                        <div className='user__last-message-date'>{contactsSidebarDate(lastMessage.date)}</div>
                    }
                </div>
                <div className='message__container'>
                    {lastMessage &&
                        <div className='message-last'>
                            {lastMessage.text.length > 25
                                ? `${lastMessage.text.substr(0, 25)}...`
                                : lastMessage.text}
                        </div>
                    }
                    {user.newMessages.length > 0 && selectedContact.id !== user.id
                        && <span className='newMessage__count' >{`${user.newMessages.length}`}</span>}
                </div>
            </div>
        </div>
    );
}

export default Contact;