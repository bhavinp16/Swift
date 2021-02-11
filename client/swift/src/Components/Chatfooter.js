import React, { useState, useContext } from 'react';
import db from '../firebase';
import { useParams } from 'react-router-dom';
import firebase from 'firebase'
import usercontext from '../Context/usercontext';

function Chatfooter() {

    const context = useContext(usercontext);
    const {user} = context;

    const [input, setinput] = useState("");

    const changeinput = (e) => {
        setinput(e.target.value);
    }

    const { chatid } = useParams();

    const sendf = () => {
        // push input to chat in firestore
        if (input !== '') {
            db.collection('rooms').doc(chatid).collection('messages').add({
                message: input,
                name: user.email,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                // name: username,
            });
        }

        document.getElementById("1625").value = '';
        setinput("");
    }

    return (
        <div className="flex flex-col border-t border-gray-300 h-16 justify-end p-2 px-4 shadow-md">
            <div className="flex w-full justify-center items-center">
                <button className="px-2 pr-3 focus:outline-none">
                    <i className="material-icons  text-gray-400 hover:text-gray-800">sentiment_very_satisfied</i>
                </button>
                <button className="focus:outline-none">
                    <i className="material-icons  text-gray-400 hover:text-gray-800">attach_file</i>
                </button>
            
                <input type="text" id="1625" placeholder="Type the message here " className="h-12 w-full border border-gray-200 rounded-l-full focus:outline-none ml-4 px-8 shadow-lg" onChange={changeinput} />

                <button className="pr-2 focus:outline-none" onClick={sendf}>
                    <i className="material-icons border border-gray-200 px-4 py-3 pl-3 rounded-r-full shadow-md  text-gray-600 hover:text-gray-900 border-l-0">send </i>
                </button>

            </div>
        </div>
    )
}

export default Chatfooter
