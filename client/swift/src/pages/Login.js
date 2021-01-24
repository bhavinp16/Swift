import React from 'react'
import { Link, Redirect } from 'react-router-dom'

function Login() {
    const logind = () => {

    }

    return (
        <div className="flex flex-col items-center h-screen w-full bg-gray-800 justify-center">
            <form className="h-3/4 w-1/2 flex flex-col items-center justify-center bg-gray-200">
                <label htmlFor="Eid">Email Id</label>
                <input type="email" name="Email Id" id="Eid"/>
                
                <label htmlFor="pid">Password</label>
                <input type="password" name="Password" id="pid"/>

                <button onClick={logind}> Login </button>

                <Link to = "/signup" className=" ">Create an account</Link>
            </form>
        </div>
    )
}

export default Login
