import React, { Fragment, useEffect, useState } from 'react'
import Chatbody from './Chatbody'
import Chatfooter from './Chatfooter'
import Chatheader from './Chatheader'
import db from '../firebase'
import { useParams } from 'react-router-dom'

function LastCol() {
    const [roomname, setroomname] = useState("");
    const { chatid } = useParams(); // here chatid name must match what we gave in url i.e ../:chatid 

    useEffect(() => {
        if (chatid) {
            db.collection('rooms')
                .doc(chatid)
                .onSnapshot(snapshot => (
                    setroomname(snapshot.data().name)
                ))
        }
    }, [chatid]);

    return (
        <Fragment>
            <div className="flex flex-col w-3/6 h-full justify-begin">
                <Chatheader roomname={roomname} />
                <Chatbody />
                <Chatfooter />
            </div>
        </Fragment>
    )
}

export default LastCol
