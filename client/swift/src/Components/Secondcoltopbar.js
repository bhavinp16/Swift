import React from 'react'

function Secondcoltopbar({type, chatnos}) {
    return (
        <div>
            {/*  top bar */}
            <div className="flex mb-1 h-24 border border-r-0 border-gray-200 p-6 items-center">
                <i className="material-icons pl-2 pr-6 text-gray-400">group</i>
                <div >
                    <p className="text-gray-800 font-sans font-semibold text-lg ">{type}</p>
                    <p className="text-gray-400 font-sans font-semibold text-sm"> {chatnos} Conversations</p>
                </div>
            </div>

            {/* search bar */}
            <div className="flex border border-r-0 border-t-0 border-gray-200 justify-center items-center p-4 pt-0 pb-1">
                <i className="material-icons border border-gray-200 p-2 pl-4 pr-1 rounded-l-full">search</i>
                <input type="search" className="rounded rounded-r-full my-2 w-full flex p-2 pl-4 border border-bg-gray-100 focus:outline-none text-gray-600 font-semibold" placeholder="Search " spellCheck="false" />
            </div>
            
        </div>
    )
}

export default Secondcoltopbar