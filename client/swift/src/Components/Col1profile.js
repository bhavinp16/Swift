import React, { useContext } from 'react'
import usercontext from '../Context/usercontext'

function Col1profile() {

    const context = useContext(usercontext);
    const { user } = context

    return (
        <div className="flex flex-col justify-center items-center">
            <img src="http://www.myiconfinder.com/uploads/iconsets/256-256-5d8cab7b01ffef290b73909d06d92705.png" className="text-xl h-32 w-32 mt-16  rounded-full border-solid border-8 border-gray-500 ring-4 ring-gray-500" alt="!" />

            <h1 className="mt-3 text-gray-300 font-mono"> {user.displayName} </h1>
            <p className="text-xs text-gray-400 font-mono italic">{user.email}</p>
        </div>
    )
}

export default Col1profile
