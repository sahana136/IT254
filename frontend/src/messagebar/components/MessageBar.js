import React from 'react'

import MessageList from './MessageList';

const DUMMY_CONTACTS = [{
    uid: 'u1',
    name: 'Harshitha'
},
{
    uid: 'u2',
    name: 'Sahana'
},
{
    uid: 'u3',
    name: 'Divyanshu'
},
{
    uid: 'u4',
    name: 'Vijay'
},];

const MessagesBar = () => {
    return (
        <MessageList items={DUMMY_CONTACTS} />
    )
}

export default MessagesBar
