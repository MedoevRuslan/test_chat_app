import React from 'react';

function Avatar({ img }) {
    return (
        <div className='user__avatar'>
                <img src={img} />
        </div> 
    );
}

export default Avatar;