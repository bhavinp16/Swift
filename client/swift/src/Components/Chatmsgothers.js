import React from 'react'

function Chatmsgothers({ msg }) {
    return (
        <div>
            <p className="text-sm w-fit-content m-6 flex  flex-col items-start bg-white rounded-lg px-4 p-1">
                <p className="font-semibold text-gray-800 ">{msg.name} ~</p>
                <div>
                    {msg.message}
                    <p className=" ml-6 font-semibold text-xs flex justify-end items-end">{new Date(msg.timestamp?.toDate()).toUTCString()}</p>
                </div>
            </p>
        </div>
    )
}

export default Chatmsgothers
