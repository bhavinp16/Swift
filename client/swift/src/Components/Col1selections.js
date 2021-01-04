import React from 'react'

function Col1selections() {
    //for the dropboxes
    const maildropb = () => {

    }

    const conversationb = () => {

    }

    return (
        <div className="flex flex-col justify-begin mt-6 bg-gray-800 h-52 w-full">
            <button className="text-gray-400 w-full mt-2 hover:bg-gray-700 text-md mx-2 flex justify-begin px-3" onClick={maildropb}>MailBox</button>

            <button className="text-gray-400 w-full mt-1 hover:bg-gray-700 text-md mx-2 flex justify-begin px-3" onClick={conversationb}>Conversations</button>
        </div>
    )
}

export default Col1selections
