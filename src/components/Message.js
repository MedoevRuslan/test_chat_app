import React from 'react';

function Message({text, date, sender}) {

    return (
        <div className={`message__container ${sender ? 'message__sender' : ''}`}>
            <div className={`message__body ${sender ? 'message__sender' : ''}`} >{text}</div>
            <div className='message__date' >{date}</div>
        </div>
    );
}

export default Message;