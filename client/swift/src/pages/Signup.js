import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import usercontext from '../Context/usercontext';
import { auth } from '../firebase';

function Signup() {
    const context = useContext(usercontext)
    const {user, setuser} = context;

    const initialState = {
        username: null,
        password: null
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
                var user = userCredential.user;
                //change userstate in context
                setuser(user)
                console.log(user)
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
            });
    }

    return (
        <div>
            <div className="flex flex-col items-center h-screen w-full bg-gray-800 justify-center">
                <form className="h-3/4 w-1/2 flex flex-col items-center justify-center bg-gray-200">
                    <label htmlFor="Eid">Email Id</label>
                    <input type="email" name="Email Id" id="Eid" onChange={handlechange} />

                    <label htmlFor="pid">Password</label>
                    <input type="password" name="Password" id="pid" onChange={handlechange} />

                    <button onClick={signupsubmit}> Signup </button>

                    <Link to="/login" className=" ">Already have an account</Link>
                </form>
            </div>
        </div>
    )
}

export default Signup
