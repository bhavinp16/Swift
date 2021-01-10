import React from 'react'
import Chatmsgothers from './Chatmsgothers'
import Chatmsgours from './Chatmsgours'

function Chatbody() {
    return (
        <div className="bg-bgimage1 h-4/5 overflow-y-auto">
            <Chatmsgothers />
            <Chatmsgours />
            
        </div>
    )
}

export default Chatbody
