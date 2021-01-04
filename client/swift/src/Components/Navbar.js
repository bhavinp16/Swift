import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <header className="fixed flex flex-row bg-gray-800 h-12 w-1/2 px-5 py-2 items-center justify-between">
            <Link to="/" className="mx-4 text-lg text-gray-500" ># </Link>
            <div className="flex w-1/5 justify-around">
                <Link to="/" className="flex text-gray-500 " >Home </Link>
                <Link to="/settings" className="flex text-gray-500">Settings </Link>
            </div>
            
        </header>
    )
}

export default Navbar
