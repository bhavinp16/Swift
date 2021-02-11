import React, { useContext } from 'react'
import usercontext from '../Context/usercontext'
import Chatmsgothers from './Chatmsgothers';
import Chatmsgours from './Chatmsgours';

function Chatmsgs({ messages }) {

    const context = useContext(usercontext);
    const { user } = context;

    return (
        messages.map(msg => {
            if (msg.name === user.email) {
                return (<Chatmsgours msg={msg} />)
            }
            else {
                return (<Chatmsgothers msg={msg} />)
            }
        })
    )
}

export default Chatmsgs
