import React from 'react';
import { chatCanvasDate } from '../utils/formatDate';
import Avatar from './Avatar';

function MessageReceive({ text, date, avatar }) {

    return (
        <div className='message'>
            <Avatar img={avatar} />
            <div className='message__container'>
                <div className='message__body'>
                    <div className='message__text'>{text}</div>
                </div>
                <div className='message__date' >{chatCanvasDate(date)}</div>
            </div>
        </div>
    );
}

export default MessageReceive;