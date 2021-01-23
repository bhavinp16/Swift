import React from 'react'

function Chatmsgours({ messages }) {
    return (
        messages.map(msg => {
            return (
                <div className="text-sm flex flex-col items-end">
                    <p className="w-fit-content m-6 flex justify-end bg-gray-400 rounded-lg px-4 p-1">
                        <div>
                            {msg.message}
                            <p className=" ml-6 font-semibold text-xs flex justify-end items-end">{new Date(msg.timestamp?.toDate()).toUTCString()}</p>
                        </div>
                    </p>
                </div>
            )
        })
    )
}

export default Chatmsgours
