import React, { useState, useEffect } from 'react';
import db from '../firebase';

function Secondcoltopbar({ rooms, setrooms }) {
    const [filtertxt, setfiltertxt] = useState("");

    const addroom = () => {
        const roomname = prompt("Enter the name for the room ");
        if (roomname) {
            db.collection("rooms").add({
                name: roomname,
            })
        }
    }

    const filterlist = (text) => {
        setfiltertxt(text.target.value);
    }

    useEffect(() => {
        db.collection('rooms').onSnapshot((snapshot) => (
            snapshot.map()
        ))
    }, [filtertxt]) // logic to filter contacts

    return (
        <div>
            {/*  top bar */}
            <div className="flex mb-1 h-24 border-b border-gray-300 p-6 items-center justify-between shadow-md">
                <div className="flex items-center">
                    <i className="material-icons pl-2 pr-6 text-gray-400">group</i>
                    <div >
                        <p className="text-gray-800 font-sans font-semibold text-lg "> Rooms </p>
                        <p className="text-gray-400 font-sans font-semibold text-sm">  132 Conversations</p>
                    </div>
                </div>
                <div>
                    <button className="focus:outline-none" onClick={addroom}><i className="material-icons text-gray-400 hover:text-gray-800 m-4">add</i></button>
                </div>
            </div>

            {/* search bar */}
            <div className="flex border-b border-gray-300 justify-center items-center p-4 pt-0 pb-1">
                <i className="material-icons border border-gray-200 p-2 pl-4 pr-1 rounded-l-full shadow-md">search</i>
                <input type="search" className="shadow-md rounded rounded-r-full my-2 w-full flex p-2 pl-4 border border-l-0 border-bg-gray-100 focus:outline-none text-gray-600 font-semibold" placeholder="Search " spellCheck="false" onChange={filterlist} />
            </div>

        </div>
    )
}

export default Secondcoltopbar
