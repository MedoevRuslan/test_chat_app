import React from 'react';
import { chatCanvasDate } from '../utils/formatDate';

function MessageSend({text, date}) {

    return (
        <div className='message message__sender-position'>
            <div className='message__container'>
                <div className='message__body message__sender-position' >
                    <div className='message__text message__sender-background'>{text}</div>
                </div>
                <div className='message__date' >{chatCanvasDate(date)}</div>
            </div>
        </div>
    );
}

export default MessageSend;