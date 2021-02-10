import React, { useState, useContext } from 'react'
import { Link, Redirect } from 'react-router-dom';
import usercontext from '../Context/usercontext';
import { auth } from '../firebase';

function Signup() {
    const context = useContext(usercontext)
    const { user, setuser } = context;

    const initialState = {
        email: "",
        password: ""
    }
    const [formdata, setformdata] = useState(initialState)

    const handlechange = (e) => {
        setformdata({
            ...formdata,
            [e.target.name]: e.target.value.trim(),  //to clear any whitespaces before or after 
        })
    }

    const signupsubmit = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(formdata.email, formdata.password)
            .then((userCredential) => {
                // Signed in 
                var userr = userCredential.user;
                //change userstate in context
                setuser(userr)
                console.log(user);
                <Redirect to="/chat" />
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }

    return (
        <div className="flex flex-col items-center h-screen w-screen bg-gray-800 justify-center text-gray-700">
            <div className="h-3/4 w-1/2 flex flex-col items-center justify-center bg-gray-100 ring-8 shadow-lg ring-yellow-100 border-4 border-gray-800 rounded">
                <h1 className="mb-12 text-3xl font-serif"> Swift </h1>
                <form className="flex flex-col justify-center text-lg w-1/2">
                    <label htmlFor="Eid">Email Id</label>
                    <input className="p-1 pl-4 rounded-lg shadow-md" type="email" name="email" id="Eid" onChange={handlechange} />

                    <label htmlFor="pid" className="mt-3">Password</label>
                    <input className="p-1 pl-4 rounded-lg shadow-md" type="password" name="password" id="pid" onChange={handlechange} />

                    <button className="hover:bg-yellow-200 bg-yellow-100 m-8 mb-4 text-yellow-600 rounded-lg h-10 shadow-lg" onClick={signupsubmit}> Signup </button>

                    <Link to="/login" className="flex justify-center text-gray-500 hover:text-gray-900 font-serif">Already have an account</Link>
                </form>
            </div>
        </div>
    )
}

export default Signup
