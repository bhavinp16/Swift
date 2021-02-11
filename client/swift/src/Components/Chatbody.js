import React, { useEffect, useState } from 'react'
import db from '../firebase'
import Chatmsgs from './Chatmsgs';

function Chatbody({ chatid }) {
    const [messages, setmessages] = useState([]);

    useEffect(() => {
        db.collection('rooms').doc(chatid).collection('messages').orderBy('timestamp', 'asc')
            .onSnapshot((snapshot) => {
                setmessages(
                    snapshot.docs.map((doc) => doc.data())
                )
            });
    }, [chatid])

    return (
        <div className="bg-bgimage1 h-4/5 overflow-y-auto">
            <Chatmsgs messages={messages} />
        </div>
    )
}

export default Chatbody
