import React, { useState, useContext } from 'react'
import { Link, Redirect } from 'react-router-dom'
import usercontext from '../Context/usercontext'
import { auth } from '../firebase'

function Login() {
    const context = useContext(usercontext)
    const { user, setuser } = context

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

    const logind = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(formdata.email, formdata.password)
            .then((userCredential) => {
                // Signed in
                var userr = userCredential.user;
                // change user state in context
                setuser(userr)
                console.log(user);
                <Redirect to="/chat" />;
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }

    return (
        <div className="flex flex-col items-center h-screen w-screen bg-gray-800 justify-center">
            <div className="h-3/4 w-1/2 flex flex-col items-center justify-center bg-gray-200">
                <h1 className="mb-12 text-3xl font-serif "> Swift </h1>
                <form className="flex flex-col justify-center text-lg w-1/2">
                    <label htmlFor="Eid">Email Id</label>
                    <input className="p-1 pl-4 rounded-lg" type="email" name="email" id="Eid" onChange={handlechange} />

                    <label htmlFor="pid" className="mt-3">Password</label>
                    <input className="p-1 pl-4 rounded-lg" type="password" name="password" id="pid" onChange={handlechange} />

                    <button className="hover:bg-yellow-200 bg-yellow-100 m-8 mb-4 text-yellow-700 rounded-lg h-10 " onClick={logind}> Login </button>

                    <Link to="/signup" className="flex justify-center text-gray-500 hover:text-gray-900 font-serif">Create an account</Link>
                </form>
            </div>
        </div>
    )
}

export default Login
