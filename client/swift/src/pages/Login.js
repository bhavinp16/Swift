import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import usercontext from '../Context/usercontext'
import { auth } from '../firebase'

function Login() {
    const context = useContext(usercontext)
    const {user, setuser} = context

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
                var user = userCredential.user;
                // change user state in context
                setuser(user)
                console.log(user)
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }

    return (
        <div className="flex flex-col items-center h-screen w-full bg-gray-800 justify-center">
            <form className="h-3/4 w-1/2 flex flex-col items-center justify-center bg-gray-200">
                <label htmlFor="Eid">Email Id</label>
                <input type="email" name="email" id="Eid" onChange={handlechange} />

                <label htmlFor="pid">Password</label>
                <input type="password" name="password" id="pid" onChange={handlechange} />

                <button onClick={logind}> Login </button>

                <Link to="/signup" className=" ">Create an account</Link>
            </form>
        </div>
    )
}

export default Login
