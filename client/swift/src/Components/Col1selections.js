import React from 'react'

function Col1selections() {

    // to change the second col to mails  
    const maildropb = () => {

    }

    //to trigger the dropdown
    const conversationb = () => {
        const dropbox = document.querySelector("#converdbox");
        if (dropbox.classList.contains('hidden')) {
            dropbox.classList.remove('hidden');
            dropbox.classList.add('flex');
        } else {
            dropbox.classList.remove("flex");
            dropbox.classList.add('hidden');
        }
    }

    return (
        <div className="flex flex-col justify-begin mt-12 bg-gray-800 ">
            <button className="text-gray-200  mt-2 hover:bg-gray-700 text-md mx-2 flex justify-begin px-3 py-2 focus:outline-none focus:bg-gray-700 rounded rounded-lg" onClick={maildropb}><i className="material-icons">mail</i> <p className="ml-2">MailBox</p> </button>

            <button className="text-gray-200 mt-1 mb-2 hover:bg-gray-700 focus:bg-gray-700 text-md mx-2 flex justify-begin px-3 py-2 focus:outline-none flex justify-between rounded rounded-lg" onClick={conversationb}>
                <div className="flex "><i className="material-icons">filter_list</i><p className="ml-2">Conversations</p> </div>
                <i class="material-icons ">arrow_drop_down</i> </button>

            {/* respective onclicks fns to add to filter secondcol  */}
            <div className="hidden flex-col items-begin bg-gray-700 rounded rounded-lg mx-3 mb-2" id="converdbox">
                <button className="text-gray-400 focus:outline-none flex justify-begin mx-2 mt-2 px-3  text-sm py-2 hover:bg-red-200 hover:text-red-800 focus:bg-red-200 focus:text-red-800 rounded rounded-lg" > <p className="ml-2">Important</p> </button>
                <button className="text-gray-400 focus:outline-none flex justify-begin mx-2 px-3 text-sm py-2 hover:bg-green-200 hover:text-green-800 focus:bg-green-200 focus:text-green-800 rounded rounded-lg" > <p className="ml-2">Workgroup</p> </button>
                <button className="text-gray-400 focus:outline-none flex justify-begin mx-2 px-3 text-sm py-2 hover:bg-yellow-200 hover:text-yellow-800 focus:bg-yellow-200 focus:text-yellow-800 rounded rounded-lg" > <p className="ml-2">Friends</p> </button>
                <button className="text-gray-400 focus:outline-none flex justify-begin mx-2 px-3 text-sm py-2 mb-2 hover:bg-indigo-200 hover:text-indigo-800 focus:bg-indigo-200 focus:text-indigo-800  rounded rounded-lg" > <p className="ml-2">Developers</p> </button>
            </div>

        </div>

    )
}

export default Col1selections
