import React from 'react'

function Secondcoltopbar() {

    return (
        <div>
            {/*  top bar */}
            <div className="flex mb-1 h-24 border-b border-gray-300 p-6 items-center shadow-md">
                <i className="material-icons pl-2 pr-6 text-gray-400">group</i>
                <div >
                    <p className="text-gray-800 font-sans font-semibold text-lg "> Friends </p>
                    <p className="text-gray-400 font-sans font-semibold text-sm">  132 Conversations</p>
                </div>
            </div>

            {/* search bar */}
            <div className="flex border-b border-gray-300 justify-center items-center p-4 pt-0 pb-1">
                <i className="material-icons border border-gray-200 p-2 pl-4 pr-1 rounded-l-full shadow-md">search</i>
                <input type="search" className="shadow-md rounded rounded-r-full my-2 w-full flex p-2 pl-4 border border-l-0 border-bg-gray-100 focus:outline-none text-gray-600 font-semibold" placeholder="Search " spellCheck="false" />
            </div>
            
        </div>
    )
}

export default Secondcoltopbar
