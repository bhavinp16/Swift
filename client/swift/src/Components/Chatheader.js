import React from 'react'

function Chatheader() {
    const onlinestate = 'up';
    const onlinestatec = 'green';

    return (
        <header className="flex mb-1 h-24 border border-l-0 border-gray-300 p-6 pr-0 items-center justify-between w-full shadow-md">
            <div className="flex">
                <img src="https://images.megapixl.com/4707/47075253.jpg" alt="#" className="ml-6 h-12 w-12 rounded-full ring-2 ring-gray-400 mr-6 flex items-center " />
                <div >
                    <p className="text-gray-800 font-sans font-semibold text-lg ">  Contact1 </p>
                    <div className="flex justify-center items-center">
                        <p className="text-gray-400 font-sans font-semibold text-sm">  online</p>
                        <i className={`material-icons text-${onlinestatec}-600`}> arrow_drop_{onlinestate} </i>
                    </div>
                </div>
            </div>

            <div className="flex justify-end items-center">
                <button className="focus:outline-none">
                    <i className="material-icons text-gray-400 hover:text-gray-800 m-4 ">call</i>
                </button>
                <button className="focus:outline-none">
                    <i className="material-icons text-gray-400 hover:text-gray-800 m-4">video_call</i>
                </button>
                <button className="focus:outline-none">
                    <i className="material-icons text-gray-400 hover:text-gray-800 m-4">more_vert</i>
                </button>
            </div>
        </header>
    )
}

export default Chatheader
