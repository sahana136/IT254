import React from 'react'

import MessageItem from './MessageItem';
import './MessageList.css';

const MessageList = (props) => {

    if(props.items.length === 0) {
        return <div>
            <h2>No Messages.</h2>
        </div>
    }
    return (
    <React.Fragment>
        <div className="message-bar">
            <div className="message-list__header">
                <p>Messages</p>
            </div>
            <ul className="message-list__content">
                {props.items.map((message) => <MessageItem key={message.uid} id={message.uid} name={message.name} />)}
            </ul>
        </div>
        </React.Fragment>
    );
}

export default MessageList
