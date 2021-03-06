import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import usercontext from '../Context/usercontext';
import { auth } from '../firebase';

function Col1row1() {
    const context = useContext(usercontext);
    const {user, setuser} = context;

    const signout = () => {
        auth.signOut()
            .then(
                function () { console.log("User signed out") }
            )
        // also change context 
        setuser(null)
    }

    return (
        <div className="flex justify-between m-2">

            <Link to="/settings" >
                <i className="text-xl text-gray-500 material-icons hover:text-gray-200">settings </i>
            </Link>


            <div className="flex flex-col justify-right items-end">
                <button className="focus:outline-none " type="button" onClick={(() => {
                    const elemd = document.querySelector('#dropdownm');
                    if (elemd.classList.contains('hidden')) {
                        elemd.classList.remove('hidden');
                        elemd.classList.add('flex');
                    } else {
                        elemd.classList.remove('flex');
                        elemd.classList.add('hidden');
                    }
                })}>
                    <i className="text-xl text-gray-500 material-icons hover:text-gray-200">subject</i>
                </button>

                <div className=" hidden flex-col mt-8 absolute justify-center bg-gray-800 rounded-lg p-2 " id="dropdownm">
                    <a href="/login" onClick={signout} className="text-gray-200 text-sm rounded hover:text-gray-500 " >Sign out </a>
                    <a href="/settings/user" className="text-gray-200 text-sm rounded hover:text-gray-500">Status</a>
                </div>
            </div>

        </div>
    )
}

export default Col1row1;
