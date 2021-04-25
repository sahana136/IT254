import React from 'react'

import './MessageItem.css';

const MessageItem = (props) => {
    return (
        <li className="message-item">
            <p>{props.name}</p>
        </li>
    )
}

export default MessageItem
