import React from 'react'

function Chatfooter() {
    return (
        <div className="flex flex-col border-t border-gray-300 h-16 justify-end p-2 px-4 shadow-md">
            <div className="flex w-full justify-center items-center">
                <button className="px-2 pr-3 focus:outline-none">
                    <i className="material-icons  text-gray-400 hover:text-gray-800">sentiment_very_satisfied</i>
                </button>
                <button className="focus:outline-none">
                    <i className="material-icons  text-gray-400 hover:text-gray-800">attach_file</i>
                </button>

                <input type="text" placeholder="Type the message here " className="h-12 w-full border border-gray-200 rounded-full focus:outline-none mx-4 px-8 shadow-lg" /></div>

        </div>
    )
}

export default Chatfooter
