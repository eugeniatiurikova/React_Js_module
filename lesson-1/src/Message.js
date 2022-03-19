import React from 'react';
import './message.css';

const Message = ({ messagetext }) => {
    return (
        <div class="messagetext">{messagetext}</div>
    );
};

export default Message;